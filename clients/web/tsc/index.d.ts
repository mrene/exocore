import * as protos from '../protos';
import { exocore } from '../protos';
export { protos, exocore, };
export declare class Exocore {
    static defaultInstance: ExocoreInstance;
    static get initialized(): boolean;
    static ensureLoaded(): Promise<void>;
    static initialize(config: object): Promise<ExocoreInstance>;
    static get cell(): Cell;
    static get store(): Store;
    static get registry(): Registry;
}
export declare class ExocoreInstance {
    wasmClient: any;
    cell: Cell;
    store: Store;
    status: string;
    registry: Registry;
    onChange?: () => void;
    constructor(wasmClient: any);
    _triggerStatusChange(status: string): void;
}
export declare class Cell {
    wasmClient: any;
    statusChangeCallback: () => void;
    constructor(inner: any);
    generateAuthToken(expirationDays?: number): Array<string>;
}
export declare class Store {
    wasmClient: any;
    statusChangeCallback: () => void;
    constructor(inner: any);
    mutate(mutation: exocore.store.IMutationRequest): Promise<exocore.store.MutationResult>;
    query(query: exocore.store.IEntityQuery): Promise<exocore.store.EntityResults>;
    watchedQuery(query: exocore.store.IEntityQuery): WatchedQuery;
    generateId(prefix?: string): string;
    httpEndpoints(): Array<string>;
}
export declare class WatchedQuery {
    inner: any;
    constructor(inner: any);
    onChange(cb: (results: exocore.store.EntityResults) => void): WatchedQuery;
    free(): void;
}
export declare class Registry {
    private _registeredMessages;
    registerMessage(message: any, fullName: string): any;
    messageFullName(message: any): string;
    packToAny(message: any): protos.google.protobuf.IAny;
    unpackAny(any: protos.google.protobuf.IAny): any;
    canonicalFullName(name: string): string;
}
export declare class MutationBuilder {
    entityId: string;
    request: exocore.store.MutationRequest;
    constructor(entityId: string);
    static createEntity(entityId?: string): MutationBuilder;
    static updateEntity(entityId: string): MutationBuilder;
    andUpdateEntity(entityId: string): MutationBuilder;
    andCreateEntity(entityId?: string): MutationBuilder;
    putTrait(message: any, traitId?: string): MutationBuilder;
    deleteTrait(traitId: string): MutationBuilder;
    returnEntities(): MutationBuilder;
    build(): exocore.store.MutationRequest;
}
export declare class QueryBuilder {
    query: exocore.store.EntityQuery;
    constructor();
    static withTrait(message: any, traitQuery?: exocore.store.ITraitQuery): QueryBuilder;
    static matches(query: string): QueryBuilder;
    static withIds(ids: string | string[]): QueryBuilder;
    static all(): QueryBuilder;
    count(count: number): QueryBuilder;
    project(...projection: exocore.store.IProjection[]): QueryBuilder;
    orderByField(field: string, ascending: boolean): QueryBuilder;
    orderByOperationIds(ascending: boolean): QueryBuilder;
    includeDeleted(): QueryBuilder;
    build(): exocore.store.IEntityQuery;
}
export declare class TraitQueryBuilder {
    query: exocore.store.TraitQuery;
    constructor();
    static refersTo(field: string, entityId: string, traitId?: string): TraitQueryBuilder;
    static matches(query: string): TraitQueryBuilder;
    build(): exocore.store.ITraitQuery;
}
export declare function toProtoTimestamp(date: Date): protos.google.protobuf.ITimestamp;
export declare function fromProtoTimestamp(ts: protos.google.protobuf.ITimestamp): Date;
export declare function matchTrait<T>(trait: exocore.store.ITrait, matchMap: {
    [fullName: string]: (trait: exocore.store.ITrait, message: any) => T;
}): T | null;
