import * as protos from '../protos';
import { exocore } from '../protos';
export { protos, exocore, };
var _exocore_wasm = null;
export class Exocore {
    static get initialized() {
        return Exocore.defaultInstance != null;
    }
    static async ensureLoaded() {
        if (_exocore_wasm == null) {
            _exocore_wasm = await import('../wasm/exocore_client_web');
        }
        return _exocore_wasm;
    }
    static async initialize(config) {
        const configJson = JSON.stringify(config);
        ``;
        const configBytes = new TextEncoder().encode(configJson);
        await Exocore.ensureLoaded();
        let instance;
        const onStatusChange = (status) => {
            instance._triggerStatusChange(status);
        };
        const innerClient = new _exocore_wasm.ExocoreClient(configBytes, 'json', onStatusChange);
        instance = new ExocoreInstance(innerClient);
        if (!Exocore.defaultInstance) {
            Exocore.defaultInstance = instance;
        }
        return instance;
    }
    static get cell() {
        return Exocore.defaultInstance.cell;
    }
    static get store() {
        return Exocore.defaultInstance.store;
    }
    static get registry() {
        return Exocore.defaultInstance.registry;
    }
}
Exocore.defaultInstance = null;
export class ExocoreInstance {
    constructor(wasmClient) {
        this.wasmClient = wasmClient;
        this.cell = new Cell(wasmClient);
        this.store = new Store(wasmClient);
        this.registry = new Registry();
    }
    _triggerStatusChange(status) {
        this.status = status;
        if (this.onChange) {
            this.onChange();
        }
    }
}
export class Cell {
    constructor(inner) {
        this.wasmClient = inner;
    }
    generateAuthToken(expirationDays) {
        return this.wasmClient.cell_generate_auth_token(expirationDays !== null && expirationDays !== void 0 ? expirationDays : 0);
    }
}
export class Store {
    constructor(inner) {
        this.wasmClient = inner;
    }
    async mutate(mutation) {
        const encoded = exocore.store.MutationRequest.encode(mutation).finish();
        let resultsData = await this.wasmClient.store_mutate(encoded);
        return exocore.store.MutationResult.decode(resultsData);
    }
    async query(query) {
        const encoded = exocore.store.EntityQuery.encode(query).finish();
        const resultsData = await this.wasmClient.store_query(encoded);
        return exocore.store.EntityResults.decode(resultsData);
    }
    watchedQuery(query) {
        const encoded = exocore.store.EntityQuery.encode(query).finish();
        return new WatchedQuery(this.wasmClient.store_watched_query(encoded));
    }
    generateId(prefix) {
        return _exocore_wasm.generate_id(prefix);
    }
    httpEndpoints() {
        return this.wasmClient.store_http_endpoints();
    }
}
export class WatchedQuery {
    constructor(inner) {
        this.inner = inner;
    }
    onChange(cb) {
        this.inner.on_change(() => {
            const resultsData = this.inner.get();
            const res = exocore.store.EntityResults.decode(resultsData);
            cb(res);
        });
        return this;
    }
    free() {
        this.inner.free();
    }
}
export class Registry {
    constructor() {
        this._registeredMessages = {};
    }
    registerMessage(message, fullName) {
        message.prototype._proto_full_name = fullName;
        this._registeredMessages[fullName] = {
            fullName: fullName,
            message: message,
        };
    }
    messageFullName(message) {
        let fullName = message._proto_full_name;
        if (!fullName && message.prototype) {
            fullName = message.prototype._proto_full_name;
        }
        const info = this._registeredMessages[fullName];
        if (!info) {
            console.error('Tried to get full name for an unregistered message', message);
            throw 'Tried to pack an unregistered message';
        }
        return info.fullName;
    }
    packToAny(message) {
        const info = this._registeredMessages[message._proto_full_name];
        if (!info) {
            console.log('Tried to pack an unregistered message', message);
            throw 'Tried to pack an unregistered message';
        }
        return new protos.google.protobuf.Any({
            type_url: 'type.googleapis.com/' + info.fullName,
            value: info.message.encode(message).finish(),
        });
    }
    unpackAny(any) {
        const fullName = this.canonicalFullName(any.type_url);
        const info = this._registeredMessages[fullName];
        if (!info) {
            console.error('Tried to unpack any any with unregistered type', fullName);
            throw 'Tried to pack an unregistered message';
        }
        return info.message.decode(any.value);
    }
    canonicalFullName(name) {
        return name.replace('type.googleapis.com/', '');
    }
}
export class MutationBuilder {
    constructor(entityId) {
        this.entityId = entityId;
        this.request = new exocore.store.MutationRequest();
    }
    static createEntity(entityId) {
        if (!entityId) {
            entityId = _exocore_wasm.generate_id('et');
        }
        return new MutationBuilder(entityId);
    }
    static updateEntity(entityId) {
        return new MutationBuilder(entityId);
    }
    andUpdateEntity(entityId) {
        this.entityId = entityId;
        return this;
    }
    andCreateEntity(entityId = null) {
        if (!entityId) {
            entityId = _exocore_wasm.generate_id('et');
        }
        this.entityId = entityId;
        return this;
    }
    putTrait(message, traitId = null) {
        if (!traitId) {
            traitId = _exocore_wasm.generate_id('trt');
        }
        this.request.mutations.push(new exocore.store.EntityMutation({
            entityId: this.entityId,
            putTrait: new exocore.store.PutTraitMutation({
                trait: new exocore.store.Trait({
                    id: traitId,
                    message: Exocore.registry.packToAny(message),
                })
            })
        }));
        return this;
    }
    deleteTrait(traitId) {
        this.request.mutations.push(new exocore.store.EntityMutation({
            entityId: this.entityId,
            deleteTrait: new exocore.store.DeleteTraitMutation({
                traitId: traitId,
            })
        }));
        return this;
    }
    returnEntities() {
        this.request.returnEntities = true;
        return this;
    }
    build() {
        return this.request;
    }
}
export class QueryBuilder {
    constructor() {
        this.query = new exocore.store.EntityQuery();
    }
    static withTrait(message, traitQuery) {
        let builder = new QueryBuilder();
        builder.query.trait = new exocore.store.TraitPredicate({
            traitName: Exocore.registry.messageFullName(message),
            query: traitQuery,
        });
        return builder;
    }
    static matches(query) {
        let builder = new QueryBuilder();
        builder.query.match = new exocore.store.MatchPredicate({
            query: query
        });
        return builder;
    }
    static withIds(ids) {
        if (!Array.isArray(ids)) {
            ids = [ids];
        }
        let builder = new QueryBuilder();
        builder.query.ids = new exocore.store.IdsPredicate({
            ids: ids,
        });
        return builder;
    }
    static all() {
        let builder = new QueryBuilder();
        builder.query.all = new exocore.store.AllPredicate();
        return builder;
    }
    count(count) {
        this.query.paging = new exocore.store.Paging({
            count: count,
        });
        return this;
    }
    project(...projection) {
        this.query.projections = this.query.projections.concat(projection);
        return this;
    }
    orderByField(field, ascending) {
        this.query.ordering = new exocore.store.Ordering({
            ascending: ascending === true,
            field: field,
        });
        return this;
    }
    orderByOperationIds(ascending) {
        this.query.ordering = new exocore.store.Ordering({
            ascending: ascending === true,
            operationId: true,
        });
        return this;
    }
    includeDeleted() {
        this.query.includeDeleted = true;
        return this;
    }
    build() {
        return this.query;
    }
}
export class TraitQueryBuilder {
    constructor() {
        this.query = new exocore.store.TraitQuery();
    }
    static refersTo(field, entityId, traitId) {
        let builder = new TraitQueryBuilder();
        builder.query.reference = new exocore.store.TraitFieldReferencePredicate({
            field: field,
            reference: new exocore.store.Reference({
                entityId: entityId,
                traitId: traitId,
            })
        });
        return builder;
    }
    static matches(query) {
        let builder = new TraitQueryBuilder();
        builder.query.match = new exocore.store.MatchPredicate({
            query: query,
        });
        return builder;
    }
    build() {
        return this.query;
    }
}
export function toProtoTimestamp(date) {
    const epoch = date.getTime();
    const seconds = Math.floor(epoch / 1000);
    return new protos.google.protobuf.Timestamp({
        seconds: seconds,
        nanos: (epoch - (seconds * 1000)) * 1000000,
    });
}
export function fromProtoTimestamp(ts) {
    return new Date(ts.seconds * 1000 + ts.nanos / 1000000);
}
export function matchTrait(trait, matchMap) {
    const fullName = Exocore.registry.canonicalFullName(trait.message.type_url);
    if (fullName in matchMap) {
        const message = Exocore.registry.unpackAny(trait.message);
        return matchMap[fullName](trait, message);
    }
    else {
        return null;
    }
}
//# sourceMappingURL=index.js.map