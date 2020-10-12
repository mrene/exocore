/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["exocore-root"] || ($protobuf.roots["exocore-root"] = {});

export const exocore = $root.exocore = (() => {

    /**
     * Namespace exocore.
     * @exports exocore
     * @namespace
     */
    const exocore = {};

    exocore.store = (function() {

        /**
         * Namespace store.
         * @memberof exocore
         * @namespace
         */
        const store = {};

        store.Entity = (function() {

            /**
             * Properties of an Entity.
             * @memberof exocore.store
             * @interface IEntity
             * @property {string|null} [id] Entity id
             * @property {Array.<exocore.store.ITrait>|null} [traits] Entity traits
             * @property {google.protobuf.ITimestamp|null} [creationDate] Entity creationDate
             * @property {google.protobuf.ITimestamp|null} [modificationDate] Entity modificationDate
             * @property {google.protobuf.ITimestamp|null} [deletionDate] Entity deletionDate
             * @property {number|Long|null} [lastOperationId] Entity lastOperationId
             */

            /**
             * Constructs a new Entity.
             * @memberof exocore.store
             * @classdesc Represents an Entity.
             * @implements IEntity
             * @constructor
             * @param {exocore.store.IEntity=} [properties] Properties to set
             */
            function Entity(properties) {
                this.traits = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Entity id.
             * @member {string} id
             * @memberof exocore.store.Entity
             * @instance
             */
            Entity.prototype.id = "";

            /**
             * Entity traits.
             * @member {Array.<exocore.store.ITrait>} traits
             * @memberof exocore.store.Entity
             * @instance
             */
            Entity.prototype.traits = $util.emptyArray;

            /**
             * Entity creationDate.
             * @member {google.protobuf.ITimestamp|null|undefined} creationDate
             * @memberof exocore.store.Entity
             * @instance
             */
            Entity.prototype.creationDate = null;

            /**
             * Entity modificationDate.
             * @member {google.protobuf.ITimestamp|null|undefined} modificationDate
             * @memberof exocore.store.Entity
             * @instance
             */
            Entity.prototype.modificationDate = null;

            /**
             * Entity deletionDate.
             * @member {google.protobuf.ITimestamp|null|undefined} deletionDate
             * @memberof exocore.store.Entity
             * @instance
             */
            Entity.prototype.deletionDate = null;

            /**
             * Entity lastOperationId.
             * @member {number|Long} lastOperationId
             * @memberof exocore.store.Entity
             * @instance
             */
            Entity.prototype.lastOperationId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new Entity instance using the specified properties.
             * @function create
             * @memberof exocore.store.Entity
             * @static
             * @param {exocore.store.IEntity=} [properties] Properties to set
             * @returns {exocore.store.Entity} Entity instance
             */
            Entity.create = function create(properties) {
                return new Entity(properties);
            };

            /**
             * Encodes the specified Entity message. Does not implicitly {@link exocore.store.Entity.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.Entity
             * @static
             * @param {exocore.store.IEntity} message Entity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Entity.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.traits != null && message.traits.length)
                    for (let i = 0; i < message.traits.length; ++i)
                        $root.exocore.store.Trait.encode(message.traits[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.creationDate != null && Object.hasOwnProperty.call(message, "creationDate"))
                    $root.google.protobuf.Timestamp.encode(message.creationDate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.modificationDate != null && Object.hasOwnProperty.call(message, "modificationDate"))
                    $root.google.protobuf.Timestamp.encode(message.modificationDate, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.deletionDate != null && Object.hasOwnProperty.call(message, "deletionDate"))
                    $root.google.protobuf.Timestamp.encode(message.deletionDate, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.lastOperationId != null && Object.hasOwnProperty.call(message, "lastOperationId"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.lastOperationId);
                return writer;
            };

            /**
             * Encodes the specified Entity message, length delimited. Does not implicitly {@link exocore.store.Entity.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.Entity
             * @static
             * @param {exocore.store.IEntity} message Entity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Entity.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Entity message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.Entity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.Entity} Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Entity.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.Entity();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 4:
                        if (!(message.traits && message.traits.length))
                            message.traits = [];
                        message.traits.push($root.exocore.store.Trait.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        message.creationDate = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.modificationDate = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.deletionDate = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.lastOperationId = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Entity message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.Entity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.Entity} Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Entity.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Entity message.
             * @function verify
             * @memberof exocore.store.Entity
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Entity.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.traits != null && message.hasOwnProperty("traits")) {
                    if (!Array.isArray(message.traits))
                        return "traits: array expected";
                    for (let i = 0; i < message.traits.length; ++i) {
                        let error = $root.exocore.store.Trait.verify(message.traits[i]);
                        if (error)
                            return "traits." + error;
                    }
                }
                if (message.creationDate != null && message.hasOwnProperty("creationDate")) {
                    let error = $root.google.protobuf.Timestamp.verify(message.creationDate);
                    if (error)
                        return "creationDate." + error;
                }
                if (message.modificationDate != null && message.hasOwnProperty("modificationDate")) {
                    let error = $root.google.protobuf.Timestamp.verify(message.modificationDate);
                    if (error)
                        return "modificationDate." + error;
                }
                if (message.deletionDate != null && message.hasOwnProperty("deletionDate")) {
                    let error = $root.google.protobuf.Timestamp.verify(message.deletionDate);
                    if (error)
                        return "deletionDate." + error;
                }
                if (message.lastOperationId != null && message.hasOwnProperty("lastOperationId"))
                    if (!$util.isInteger(message.lastOperationId) && !(message.lastOperationId && $util.isInteger(message.lastOperationId.low) && $util.isInteger(message.lastOperationId.high)))
                        return "lastOperationId: integer|Long expected";
                return null;
            };

            /**
             * Creates an Entity message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.Entity
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.Entity} Entity
             */
            Entity.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.Entity)
                    return object;
                let message = new $root.exocore.store.Entity();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.traits) {
                    if (!Array.isArray(object.traits))
                        throw TypeError(".exocore.store.Entity.traits: array expected");
                    message.traits = [];
                    for (let i = 0; i < object.traits.length; ++i) {
                        if (typeof object.traits[i] !== "object")
                            throw TypeError(".exocore.store.Entity.traits: object expected");
                        message.traits[i] = $root.exocore.store.Trait.fromObject(object.traits[i]);
                    }
                }
                if (object.creationDate != null) {
                    if (typeof object.creationDate !== "object")
                        throw TypeError(".exocore.store.Entity.creationDate: object expected");
                    message.creationDate = $root.google.protobuf.Timestamp.fromObject(object.creationDate);
                }
                if (object.modificationDate != null) {
                    if (typeof object.modificationDate !== "object")
                        throw TypeError(".exocore.store.Entity.modificationDate: object expected");
                    message.modificationDate = $root.google.protobuf.Timestamp.fromObject(object.modificationDate);
                }
                if (object.deletionDate != null) {
                    if (typeof object.deletionDate !== "object")
                        throw TypeError(".exocore.store.Entity.deletionDate: object expected");
                    message.deletionDate = $root.google.protobuf.Timestamp.fromObject(object.deletionDate);
                }
                if (object.lastOperationId != null)
                    if ($util.Long)
                        (message.lastOperationId = $util.Long.fromValue(object.lastOperationId)).unsigned = true;
                    else if (typeof object.lastOperationId === "string")
                        message.lastOperationId = parseInt(object.lastOperationId, 10);
                    else if (typeof object.lastOperationId === "number")
                        message.lastOperationId = object.lastOperationId;
                    else if (typeof object.lastOperationId === "object")
                        message.lastOperationId = new $util.LongBits(object.lastOperationId.low >>> 0, object.lastOperationId.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from an Entity message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.Entity
             * @static
             * @param {exocore.store.Entity} message Entity
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Entity.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.traits = [];
                if (options.defaults) {
                    object.id = "";
                    object.creationDate = null;
                    object.modificationDate = null;
                    object.deletionDate = null;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.lastOperationId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.lastOperationId = options.longs === String ? "0" : 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.traits && message.traits.length) {
                    object.traits = [];
                    for (let j = 0; j < message.traits.length; ++j)
                        object.traits[j] = $root.exocore.store.Trait.toObject(message.traits[j], options);
                }
                if (message.creationDate != null && message.hasOwnProperty("creationDate"))
                    object.creationDate = $root.google.protobuf.Timestamp.toObject(message.creationDate, options);
                if (message.modificationDate != null && message.hasOwnProperty("modificationDate"))
                    object.modificationDate = $root.google.protobuf.Timestamp.toObject(message.modificationDate, options);
                if (message.deletionDate != null && message.hasOwnProperty("deletionDate"))
                    object.deletionDate = $root.google.protobuf.Timestamp.toObject(message.deletionDate, options);
                if (message.lastOperationId != null && message.hasOwnProperty("lastOperationId"))
                    if (typeof message.lastOperationId === "number")
                        object.lastOperationId = options.longs === String ? String(message.lastOperationId) : message.lastOperationId;
                    else
                        object.lastOperationId = options.longs === String ? $util.Long.prototype.toString.call(message.lastOperationId) : options.longs === Number ? new $util.LongBits(message.lastOperationId.low >>> 0, message.lastOperationId.high >>> 0).toNumber(true) : message.lastOperationId;
                return object;
            };

            /**
             * Converts this Entity to JSON.
             * @function toJSON
             * @memberof exocore.store.Entity
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Entity.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Entity;
        })();

        store.Trait = (function() {

            /**
             * Properties of a Trait.
             * @memberof exocore.store
             * @interface ITrait
             * @property {string|null} [id] Trait id
             * @property {google.protobuf.IAny|null} [message] Trait message
             * @property {google.protobuf.ITimestamp|null} [creationDate] Trait creationDate
             * @property {google.protobuf.ITimestamp|null} [modificationDate] Trait modificationDate
             * @property {google.protobuf.ITimestamp|null} [deletionDate] Trait deletionDate
             * @property {number|Long|null} [lastOperationId] Trait lastOperationId
             * @property {exocore.store.TraitDetails|null} [details] Trait details
             */

            /**
             * Constructs a new Trait.
             * @memberof exocore.store
             * @classdesc Represents a Trait.
             * @implements ITrait
             * @constructor
             * @param {exocore.store.ITrait=} [properties] Properties to set
             */
            function Trait(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Trait id.
             * @member {string} id
             * @memberof exocore.store.Trait
             * @instance
             */
            Trait.prototype.id = "";

            /**
             * Trait message.
             * @member {google.protobuf.IAny|null|undefined} message
             * @memberof exocore.store.Trait
             * @instance
             */
            Trait.prototype.message = null;

            /**
             * Trait creationDate.
             * @member {google.protobuf.ITimestamp|null|undefined} creationDate
             * @memberof exocore.store.Trait
             * @instance
             */
            Trait.prototype.creationDate = null;

            /**
             * Trait modificationDate.
             * @member {google.protobuf.ITimestamp|null|undefined} modificationDate
             * @memberof exocore.store.Trait
             * @instance
             */
            Trait.prototype.modificationDate = null;

            /**
             * Trait deletionDate.
             * @member {google.protobuf.ITimestamp|null|undefined} deletionDate
             * @memberof exocore.store.Trait
             * @instance
             */
            Trait.prototype.deletionDate = null;

            /**
             * Trait lastOperationId.
             * @member {number|Long} lastOperationId
             * @memberof exocore.store.Trait
             * @instance
             */
            Trait.prototype.lastOperationId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Trait details.
             * @member {exocore.store.TraitDetails} details
             * @memberof exocore.store.Trait
             * @instance
             */
            Trait.prototype.details = 0;

            /**
             * Creates a new Trait instance using the specified properties.
             * @function create
             * @memberof exocore.store.Trait
             * @static
             * @param {exocore.store.ITrait=} [properties] Properties to set
             * @returns {exocore.store.Trait} Trait instance
             */
            Trait.create = function create(properties) {
                return new Trait(properties);
            };

            /**
             * Encodes the specified Trait message. Does not implicitly {@link exocore.store.Trait.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.Trait
             * @static
             * @param {exocore.store.ITrait} message Trait message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Trait.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    $root.google.protobuf.Any.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.creationDate != null && Object.hasOwnProperty.call(message, "creationDate"))
                    $root.google.protobuf.Timestamp.encode(message.creationDate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.modificationDate != null && Object.hasOwnProperty.call(message, "modificationDate"))
                    $root.google.protobuf.Timestamp.encode(message.modificationDate, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.details);
                if (message.deletionDate != null && Object.hasOwnProperty.call(message, "deletionDate"))
                    $root.google.protobuf.Timestamp.encode(message.deletionDate, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.lastOperationId != null && Object.hasOwnProperty.call(message, "lastOperationId"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.lastOperationId);
                return writer;
            };

            /**
             * Encodes the specified Trait message, length delimited. Does not implicitly {@link exocore.store.Trait.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.Trait
             * @static
             * @param {exocore.store.ITrait} message Trait message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Trait.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Trait message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.Trait
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.Trait} Trait
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Trait.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.Trait();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.message = $root.google.protobuf.Any.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.creationDate = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.modificationDate = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.deletionDate = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.lastOperationId = reader.uint64();
                        break;
                    case 5:
                        message.details = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Trait message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.Trait
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.Trait} Trait
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Trait.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Trait message.
             * @function verify
             * @memberof exocore.store.Trait
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Trait.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.message != null && message.hasOwnProperty("message")) {
                    let error = $root.google.protobuf.Any.verify(message.message);
                    if (error)
                        return "message." + error;
                }
                if (message.creationDate != null && message.hasOwnProperty("creationDate")) {
                    let error = $root.google.protobuf.Timestamp.verify(message.creationDate);
                    if (error)
                        return "creationDate." + error;
                }
                if (message.modificationDate != null && message.hasOwnProperty("modificationDate")) {
                    let error = $root.google.protobuf.Timestamp.verify(message.modificationDate);
                    if (error)
                        return "modificationDate." + error;
                }
                if (message.deletionDate != null && message.hasOwnProperty("deletionDate")) {
                    let error = $root.google.protobuf.Timestamp.verify(message.deletionDate);
                    if (error)
                        return "deletionDate." + error;
                }
                if (message.lastOperationId != null && message.hasOwnProperty("lastOperationId"))
                    if (!$util.isInteger(message.lastOperationId) && !(message.lastOperationId && $util.isInteger(message.lastOperationId.low) && $util.isInteger(message.lastOperationId.high)))
                        return "lastOperationId: integer|Long expected";
                if (message.details != null && message.hasOwnProperty("details"))
                    switch (message.details) {
                    default:
                        return "details: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                return null;
            };

            /**
             * Creates a Trait message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.Trait
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.Trait} Trait
             */
            Trait.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.Trait)
                    return object;
                let message = new $root.exocore.store.Trait();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.message != null) {
                    if (typeof object.message !== "object")
                        throw TypeError(".exocore.store.Trait.message: object expected");
                    message.message = $root.google.protobuf.Any.fromObject(object.message);
                }
                if (object.creationDate != null) {
                    if (typeof object.creationDate !== "object")
                        throw TypeError(".exocore.store.Trait.creationDate: object expected");
                    message.creationDate = $root.google.protobuf.Timestamp.fromObject(object.creationDate);
                }
                if (object.modificationDate != null) {
                    if (typeof object.modificationDate !== "object")
                        throw TypeError(".exocore.store.Trait.modificationDate: object expected");
                    message.modificationDate = $root.google.protobuf.Timestamp.fromObject(object.modificationDate);
                }
                if (object.deletionDate != null) {
                    if (typeof object.deletionDate !== "object")
                        throw TypeError(".exocore.store.Trait.deletionDate: object expected");
                    message.deletionDate = $root.google.protobuf.Timestamp.fromObject(object.deletionDate);
                }
                if (object.lastOperationId != null)
                    if ($util.Long)
                        (message.lastOperationId = $util.Long.fromValue(object.lastOperationId)).unsigned = true;
                    else if (typeof object.lastOperationId === "string")
                        message.lastOperationId = parseInt(object.lastOperationId, 10);
                    else if (typeof object.lastOperationId === "number")
                        message.lastOperationId = object.lastOperationId;
                    else if (typeof object.lastOperationId === "object")
                        message.lastOperationId = new $util.LongBits(object.lastOperationId.low >>> 0, object.lastOperationId.high >>> 0).toNumber(true);
                switch (object.details) {
                case "TRAIT_DETAILS_FULL":
                case 0:
                    message.details = 0;
                    break;
                case "TRAIT_DETAILS_PARTIAL":
                case 1:
                    message.details = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a Trait message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.Trait
             * @static
             * @param {exocore.store.Trait} message Trait
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Trait.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.message = null;
                    object.creationDate = null;
                    object.modificationDate = null;
                    object.details = options.enums === String ? "TRAIT_DETAILS_FULL" : 0;
                    object.deletionDate = null;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.lastOperationId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.lastOperationId = options.longs === String ? "0" : 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = $root.google.protobuf.Any.toObject(message.message, options);
                if (message.creationDate != null && message.hasOwnProperty("creationDate"))
                    object.creationDate = $root.google.protobuf.Timestamp.toObject(message.creationDate, options);
                if (message.modificationDate != null && message.hasOwnProperty("modificationDate"))
                    object.modificationDate = $root.google.protobuf.Timestamp.toObject(message.modificationDate, options);
                if (message.details != null && message.hasOwnProperty("details"))
                    object.details = options.enums === String ? $root.exocore.store.TraitDetails[message.details] : message.details;
                if (message.deletionDate != null && message.hasOwnProperty("deletionDate"))
                    object.deletionDate = $root.google.protobuf.Timestamp.toObject(message.deletionDate, options);
                if (message.lastOperationId != null && message.hasOwnProperty("lastOperationId"))
                    if (typeof message.lastOperationId === "number")
                        object.lastOperationId = options.longs === String ? String(message.lastOperationId) : message.lastOperationId;
                    else
                        object.lastOperationId = options.longs === String ? $util.Long.prototype.toString.call(message.lastOperationId) : options.longs === Number ? new $util.LongBits(message.lastOperationId.low >>> 0, message.lastOperationId.high >>> 0).toNumber(true) : message.lastOperationId;
                return object;
            };

            /**
             * Converts this Trait to JSON.
             * @function toJSON
             * @memberof exocore.store.Trait
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Trait.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Trait;
        })();

        store.Reference = (function() {

            /**
             * Properties of a Reference.
             * @memberof exocore.store
             * @interface IReference
             * @property {string|null} [entityId] Reference entityId
             * @property {string|null} [traitId] Reference traitId
             */

            /**
             * Constructs a new Reference.
             * @memberof exocore.store
             * @classdesc Represents a Reference.
             * @implements IReference
             * @constructor
             * @param {exocore.store.IReference=} [properties] Properties to set
             */
            function Reference(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Reference entityId.
             * @member {string} entityId
             * @memberof exocore.store.Reference
             * @instance
             */
            Reference.prototype.entityId = "";

            /**
             * Reference traitId.
             * @member {string} traitId
             * @memberof exocore.store.Reference
             * @instance
             */
            Reference.prototype.traitId = "";

            /**
             * Creates a new Reference instance using the specified properties.
             * @function create
             * @memberof exocore.store.Reference
             * @static
             * @param {exocore.store.IReference=} [properties] Properties to set
             * @returns {exocore.store.Reference} Reference instance
             */
            Reference.create = function create(properties) {
                return new Reference(properties);
            };

            /**
             * Encodes the specified Reference message. Does not implicitly {@link exocore.store.Reference.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.Reference
             * @static
             * @param {exocore.store.IReference} message Reference message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Reference.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.entityId != null && Object.hasOwnProperty.call(message, "entityId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.entityId);
                if (message.traitId != null && Object.hasOwnProperty.call(message, "traitId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.traitId);
                return writer;
            };

            /**
             * Encodes the specified Reference message, length delimited. Does not implicitly {@link exocore.store.Reference.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.Reference
             * @static
             * @param {exocore.store.IReference} message Reference message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Reference.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Reference message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.Reference
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.Reference} Reference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Reference.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.Reference();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.entityId = reader.string();
                        break;
                    case 2:
                        message.traitId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Reference message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.Reference
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.Reference} Reference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Reference.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Reference message.
             * @function verify
             * @memberof exocore.store.Reference
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Reference.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.entityId != null && message.hasOwnProperty("entityId"))
                    if (!$util.isString(message.entityId))
                        return "entityId: string expected";
                if (message.traitId != null && message.hasOwnProperty("traitId"))
                    if (!$util.isString(message.traitId))
                        return "traitId: string expected";
                return null;
            };

            /**
             * Creates a Reference message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.Reference
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.Reference} Reference
             */
            Reference.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.Reference)
                    return object;
                let message = new $root.exocore.store.Reference();
                if (object.entityId != null)
                    message.entityId = String(object.entityId);
                if (object.traitId != null)
                    message.traitId = String(object.traitId);
                return message;
            };

            /**
             * Creates a plain object from a Reference message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.Reference
             * @static
             * @param {exocore.store.Reference} message Reference
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Reference.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.entityId = "";
                    object.traitId = "";
                }
                if (message.entityId != null && message.hasOwnProperty("entityId"))
                    object.entityId = message.entityId;
                if (message.traitId != null && message.hasOwnProperty("traitId"))
                    object.traitId = message.traitId;
                return object;
            };

            /**
             * Converts this Reference to JSON.
             * @function toJSON
             * @memberof exocore.store.Reference
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Reference.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Reference;
        })();

        /**
         * TraitDetails enum.
         * @name exocore.store.TraitDetails
         * @enum {number}
         * @property {number} TRAIT_DETAILS_FULL=0 TRAIT_DETAILS_FULL value
         * @property {number} TRAIT_DETAILS_PARTIAL=1 TRAIT_DETAILS_PARTIAL value
         */
        store.TraitDetails = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TRAIT_DETAILS_FULL"] = 0;
            values[valuesById[1] = "TRAIT_DETAILS_PARTIAL"] = 1;
            return values;
        })();

        store.MutationRequest = (function() {

            /**
             * Properties of a MutationRequest.
             * @memberof exocore.store
             * @interface IMutationRequest
             * @property {Array.<exocore.store.IEntityMutation>|null} [mutations] Mutations to apply.
             * @property {boolean|null} [waitIndexed] Waits for mutation to be indexed.
             * @property {boolean|null} [returnEntities] Waits for mutation to be indexed and returns the mutated entities.
             * @property {boolean|null} [commonEntityId] If an entity ID is generated for the mutated entities, reuse the same ID for all mutations.
             */

            /**
             * Constructs a new MutationRequest.
             * @memberof exocore.store
             * @classdesc Represents a MutationRequest.
             * @implements IMutationRequest
             * @constructor
             * @param {exocore.store.IMutationRequest=} [properties] Properties to set
             */
            function MutationRequest(properties) {
                this.mutations = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Mutations to apply.
             * @member {Array.<exocore.store.IEntityMutation>} mutations
             * @memberof exocore.store.MutationRequest
             * @instance
             */
            MutationRequest.prototype.mutations = $util.emptyArray;

            /**
             * Waits for mutation to be indexed.
             * @member {boolean} waitIndexed
             * @memberof exocore.store.MutationRequest
             * @instance
             */
            MutationRequest.prototype.waitIndexed = false;

            /**
             * Waits for mutation to be indexed and returns the mutated entities.
             * @member {boolean} returnEntities
             * @memberof exocore.store.MutationRequest
             * @instance
             */
            MutationRequest.prototype.returnEntities = false;

            /**
             * If an entity ID is generated for the mutated entities, reuse the same ID for all mutations.
             * @member {boolean} commonEntityId
             * @memberof exocore.store.MutationRequest
             * @instance
             */
            MutationRequest.prototype.commonEntityId = false;

            /**
             * Creates a new MutationRequest instance using the specified properties.
             * @function create
             * @memberof exocore.store.MutationRequest
             * @static
             * @param {exocore.store.IMutationRequest=} [properties] Properties to set
             * @returns {exocore.store.MutationRequest} MutationRequest instance
             */
            MutationRequest.create = function create(properties) {
                return new MutationRequest(properties);
            };

            /**
             * Encodes the specified MutationRequest message. Does not implicitly {@link exocore.store.MutationRequest.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.MutationRequest
             * @static
             * @param {exocore.store.IMutationRequest} message MutationRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MutationRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mutations != null && message.mutations.length)
                    for (let i = 0; i < message.mutations.length; ++i)
                        $root.exocore.store.EntityMutation.encode(message.mutations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.waitIndexed != null && Object.hasOwnProperty.call(message, "waitIndexed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.waitIndexed);
                if (message.returnEntities != null && Object.hasOwnProperty.call(message, "returnEntities"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.returnEntities);
                if (message.commonEntityId != null && Object.hasOwnProperty.call(message, "commonEntityId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.commonEntityId);
                return writer;
            };

            /**
             * Encodes the specified MutationRequest message, length delimited. Does not implicitly {@link exocore.store.MutationRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.MutationRequest
             * @static
             * @param {exocore.store.IMutationRequest} message MutationRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MutationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MutationRequest message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.MutationRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.MutationRequest} MutationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MutationRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.MutationRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.mutations && message.mutations.length))
                            message.mutations = [];
                        message.mutations.push($root.exocore.store.EntityMutation.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.waitIndexed = reader.bool();
                        break;
                    case 3:
                        message.returnEntities = reader.bool();
                        break;
                    case 4:
                        message.commonEntityId = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MutationRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.MutationRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.MutationRequest} MutationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MutationRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MutationRequest message.
             * @function verify
             * @memberof exocore.store.MutationRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MutationRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.mutations != null && message.hasOwnProperty("mutations")) {
                    if (!Array.isArray(message.mutations))
                        return "mutations: array expected";
                    for (let i = 0; i < message.mutations.length; ++i) {
                        let error = $root.exocore.store.EntityMutation.verify(message.mutations[i]);
                        if (error)
                            return "mutations." + error;
                    }
                }
                if (message.waitIndexed != null && message.hasOwnProperty("waitIndexed"))
                    if (typeof message.waitIndexed !== "boolean")
                        return "waitIndexed: boolean expected";
                if (message.returnEntities != null && message.hasOwnProperty("returnEntities"))
                    if (typeof message.returnEntities !== "boolean")
                        return "returnEntities: boolean expected";
                if (message.commonEntityId != null && message.hasOwnProperty("commonEntityId"))
                    if (typeof message.commonEntityId !== "boolean")
                        return "commonEntityId: boolean expected";
                return null;
            };

            /**
             * Creates a MutationRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.MutationRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.MutationRequest} MutationRequest
             */
            MutationRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.MutationRequest)
                    return object;
                let message = new $root.exocore.store.MutationRequest();
                if (object.mutations) {
                    if (!Array.isArray(object.mutations))
                        throw TypeError(".exocore.store.MutationRequest.mutations: array expected");
                    message.mutations = [];
                    for (let i = 0; i < object.mutations.length; ++i) {
                        if (typeof object.mutations[i] !== "object")
                            throw TypeError(".exocore.store.MutationRequest.mutations: object expected");
                        message.mutations[i] = $root.exocore.store.EntityMutation.fromObject(object.mutations[i]);
                    }
                }
                if (object.waitIndexed != null)
                    message.waitIndexed = Boolean(object.waitIndexed);
                if (object.returnEntities != null)
                    message.returnEntities = Boolean(object.returnEntities);
                if (object.commonEntityId != null)
                    message.commonEntityId = Boolean(object.commonEntityId);
                return message;
            };

            /**
             * Creates a plain object from a MutationRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.MutationRequest
             * @static
             * @param {exocore.store.MutationRequest} message MutationRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MutationRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.mutations = [];
                if (options.defaults) {
                    object.waitIndexed = false;
                    object.returnEntities = false;
                    object.commonEntityId = false;
                }
                if (message.mutations && message.mutations.length) {
                    object.mutations = [];
                    for (let j = 0; j < message.mutations.length; ++j)
                        object.mutations[j] = $root.exocore.store.EntityMutation.toObject(message.mutations[j], options);
                }
                if (message.waitIndexed != null && message.hasOwnProperty("waitIndexed"))
                    object.waitIndexed = message.waitIndexed;
                if (message.returnEntities != null && message.hasOwnProperty("returnEntities"))
                    object.returnEntities = message.returnEntities;
                if (message.commonEntityId != null && message.hasOwnProperty("commonEntityId"))
                    object.commonEntityId = message.commonEntityId;
                return object;
            };

            /**
             * Converts this MutationRequest to JSON.
             * @function toJSON
             * @memberof exocore.store.MutationRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MutationRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MutationRequest;
        })();

        store.MutationResult = (function() {

            /**
             * Properties of a MutationResult.
             * @memberof exocore.store
             * @interface IMutationResult
             * @property {Array.<number|Long>|null} [operationIds] Unique operation ids for each mutations.
             * @property {Array.<exocore.store.IEntity>|null} [entities] Mutated entities if requested.
             */

            /**
             * Constructs a new MutationResult.
             * @memberof exocore.store
             * @classdesc Represents a MutationResult.
             * @implements IMutationResult
             * @constructor
             * @param {exocore.store.IMutationResult=} [properties] Properties to set
             */
            function MutationResult(properties) {
                this.operationIds = [];
                this.entities = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Unique operation ids for each mutations.
             * @member {Array.<number|Long>} operationIds
             * @memberof exocore.store.MutationResult
             * @instance
             */
            MutationResult.prototype.operationIds = $util.emptyArray;

            /**
             * Mutated entities if requested.
             * @member {Array.<exocore.store.IEntity>} entities
             * @memberof exocore.store.MutationResult
             * @instance
             */
            MutationResult.prototype.entities = $util.emptyArray;

            /**
             * Creates a new MutationResult instance using the specified properties.
             * @function create
             * @memberof exocore.store.MutationResult
             * @static
             * @param {exocore.store.IMutationResult=} [properties] Properties to set
             * @returns {exocore.store.MutationResult} MutationResult instance
             */
            MutationResult.create = function create(properties) {
                return new MutationResult(properties);
            };

            /**
             * Encodes the specified MutationResult message. Does not implicitly {@link exocore.store.MutationResult.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.MutationResult
             * @static
             * @param {exocore.store.IMutationResult} message MutationResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MutationResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.operationIds != null && message.operationIds.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (let i = 0; i < message.operationIds.length; ++i)
                        writer.uint64(message.operationIds[i]);
                    writer.ldelim();
                }
                if (message.entities != null && message.entities.length)
                    for (let i = 0; i < message.entities.length; ++i)
                        $root.exocore.store.Entity.encode(message.entities[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MutationResult message, length delimited. Does not implicitly {@link exocore.store.MutationResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.MutationResult
             * @static
             * @param {exocore.store.IMutationResult} message MutationResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MutationResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MutationResult message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.MutationResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.MutationResult} MutationResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MutationResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.MutationResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.operationIds && message.operationIds.length))
                            message.operationIds = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.operationIds.push(reader.uint64());
                        } else
                            message.operationIds.push(reader.uint64());
                        break;
                    case 2:
                        if (!(message.entities && message.entities.length))
                            message.entities = [];
                        message.entities.push($root.exocore.store.Entity.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MutationResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.MutationResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.MutationResult} MutationResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MutationResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MutationResult message.
             * @function verify
             * @memberof exocore.store.MutationResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MutationResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.operationIds != null && message.hasOwnProperty("operationIds")) {
                    if (!Array.isArray(message.operationIds))
                        return "operationIds: array expected";
                    for (let i = 0; i < message.operationIds.length; ++i)
                        if (!$util.isInteger(message.operationIds[i]) && !(message.operationIds[i] && $util.isInteger(message.operationIds[i].low) && $util.isInteger(message.operationIds[i].high)))
                            return "operationIds: integer|Long[] expected";
                }
                if (message.entities != null && message.hasOwnProperty("entities")) {
                    if (!Array.isArray(message.entities))
                        return "entities: array expected";
                    for (let i = 0; i < message.entities.length; ++i) {
                        let error = $root.exocore.store.Entity.verify(message.entities[i]);
                        if (error)
                            return "entities." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MutationResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.MutationResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.MutationResult} MutationResult
             */
            MutationResult.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.MutationResult)
                    return object;
                let message = new $root.exocore.store.MutationResult();
                if (object.operationIds) {
                    if (!Array.isArray(object.operationIds))
                        throw TypeError(".exocore.store.MutationResult.operationIds: array expected");
                    message.operationIds = [];
                    for (let i = 0; i < object.operationIds.length; ++i)
                        if ($util.Long)
                            (message.operationIds[i] = $util.Long.fromValue(object.operationIds[i])).unsigned = true;
                        else if (typeof object.operationIds[i] === "string")
                            message.operationIds[i] = parseInt(object.operationIds[i], 10);
                        else if (typeof object.operationIds[i] === "number")
                            message.operationIds[i] = object.operationIds[i];
                        else if (typeof object.operationIds[i] === "object")
                            message.operationIds[i] = new $util.LongBits(object.operationIds[i].low >>> 0, object.operationIds[i].high >>> 0).toNumber(true);
                }
                if (object.entities) {
                    if (!Array.isArray(object.entities))
                        throw TypeError(".exocore.store.MutationResult.entities: array expected");
                    message.entities = [];
                    for (let i = 0; i < object.entities.length; ++i) {
                        if (typeof object.entities[i] !== "object")
                            throw TypeError(".exocore.store.MutationResult.entities: object expected");
                        message.entities[i] = $root.exocore.store.Entity.fromObject(object.entities[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MutationResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.MutationResult
             * @static
             * @param {exocore.store.MutationResult} message MutationResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MutationResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.operationIds = [];
                    object.entities = [];
                }
                if (message.operationIds && message.operationIds.length) {
                    object.operationIds = [];
                    for (let j = 0; j < message.operationIds.length; ++j)
                        if (typeof message.operationIds[j] === "number")
                            object.operationIds[j] = options.longs === String ? String(message.operationIds[j]) : message.operationIds[j];
                        else
                            object.operationIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.operationIds[j]) : options.longs === Number ? new $util.LongBits(message.operationIds[j].low >>> 0, message.operationIds[j].high >>> 0).toNumber(true) : message.operationIds[j];
                }
                if (message.entities && message.entities.length) {
                    object.entities = [];
                    for (let j = 0; j < message.entities.length; ++j)
                        object.entities[j] = $root.exocore.store.Entity.toObject(message.entities[j], options);
                }
                return object;
            };

            /**
             * Converts this MutationResult to JSON.
             * @function toJSON
             * @memberof exocore.store.MutationResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MutationResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MutationResult;
        })();

        store.EntityMutation = (function() {

            /**
             * Properties of an EntityMutation.
             * @memberof exocore.store
             * @interface IEntityMutation
             * @property {string|null} [entityId] EntityMutation entityId
             * @property {exocore.store.IPutTraitMutation|null} [putTrait] EntityMutation putTrait
             * @property {exocore.store.IDeleteTraitMutation|null} [deleteTrait] EntityMutation deleteTrait
             * @property {exocore.store.IDeleteEntityMutation|null} [deleteEntity] EntityMutation deleteEntity
             * @property {exocore.store.IUpdateTraitMutation|null} [updateTrait] EntityMutation updateTrait
             * @property {exocore.store.ICompactTraitMutation|null} [compactTrait] EntityMutation compactTrait
             * @property {exocore.store.ITestMutation|null} [test] EntityMutation test
             */

            /**
             * Constructs a new EntityMutation.
             * @memberof exocore.store
             * @classdesc Represents an EntityMutation.
             * @implements IEntityMutation
             * @constructor
             * @param {exocore.store.IEntityMutation=} [properties] Properties to set
             */
            function EntityMutation(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EntityMutation entityId.
             * @member {string} entityId
             * @memberof exocore.store.EntityMutation
             * @instance
             */
            EntityMutation.prototype.entityId = "";

            /**
             * EntityMutation putTrait.
             * @member {exocore.store.IPutTraitMutation|null|undefined} putTrait
             * @memberof exocore.store.EntityMutation
             * @instance
             */
            EntityMutation.prototype.putTrait = null;

            /**
             * EntityMutation deleteTrait.
             * @member {exocore.store.IDeleteTraitMutation|null|undefined} deleteTrait
             * @memberof exocore.store.EntityMutation
             * @instance
             */
            EntityMutation.prototype.deleteTrait = null;

            /**
             * EntityMutation deleteEntity.
             * @member {exocore.store.IDeleteEntityMutation|null|undefined} deleteEntity
             * @memberof exocore.store.EntityMutation
             * @instance
             */
            EntityMutation.prototype.deleteEntity = null;

            /**
             * EntityMutation updateTrait.
             * @member {exocore.store.IUpdateTraitMutation|null|undefined} updateTrait
             * @memberof exocore.store.EntityMutation
             * @instance
             */
            EntityMutation.prototype.updateTrait = null;

            /**
             * EntityMutation compactTrait.
             * @member {exocore.store.ICompactTraitMutation|null|undefined} compactTrait
             * @memberof exocore.store.EntityMutation
             * @instance
             */
            EntityMutation.prototype.compactTrait = null;

            /**
             * EntityMutation test.
             * @member {exocore.store.ITestMutation|null|undefined} test
             * @memberof exocore.store.EntityMutation
             * @instance
             */
            EntityMutation.prototype.test = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * EntityMutation mutation.
             * @member {"putTrait"|"deleteTrait"|"deleteEntity"|"updateTrait"|"compactTrait"|"test"|undefined} mutation
             * @memberof exocore.store.EntityMutation
             * @instance
             */
            Object.defineProperty(EntityMutation.prototype, "mutation", {
                get: $util.oneOfGetter($oneOfFields = ["putTrait", "deleteTrait", "deleteEntity", "updateTrait", "compactTrait", "test"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new EntityMutation instance using the specified properties.
             * @function create
             * @memberof exocore.store.EntityMutation
             * @static
             * @param {exocore.store.IEntityMutation=} [properties] Properties to set
             * @returns {exocore.store.EntityMutation} EntityMutation instance
             */
            EntityMutation.create = function create(properties) {
                return new EntityMutation(properties);
            };

            /**
             * Encodes the specified EntityMutation message. Does not implicitly {@link exocore.store.EntityMutation.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.EntityMutation
             * @static
             * @param {exocore.store.IEntityMutation} message EntityMutation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntityMutation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.entityId != null && Object.hasOwnProperty.call(message, "entityId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.entityId);
                if (message.putTrait != null && Object.hasOwnProperty.call(message, "putTrait"))
                    $root.exocore.store.PutTraitMutation.encode(message.putTrait, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.deleteTrait != null && Object.hasOwnProperty.call(message, "deleteTrait"))
                    $root.exocore.store.DeleteTraitMutation.encode(message.deleteTrait, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.deleteEntity != null && Object.hasOwnProperty.call(message, "deleteEntity"))
                    $root.exocore.store.DeleteEntityMutation.encode(message.deleteEntity, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.updateTrait != null && Object.hasOwnProperty.call(message, "updateTrait"))
                    $root.exocore.store.UpdateTraitMutation.encode(message.updateTrait, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.compactTrait != null && Object.hasOwnProperty.call(message, "compactTrait"))
                    $root.exocore.store.CompactTraitMutation.encode(message.compactTrait, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.test != null && Object.hasOwnProperty.call(message, "test"))
                    $root.exocore.store.TestMutation.encode(message.test, writer.uint32(/* id 99, wireType 2 =*/794).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EntityMutation message, length delimited. Does not implicitly {@link exocore.store.EntityMutation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.EntityMutation
             * @static
             * @param {exocore.store.IEntityMutation} message EntityMutation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntityMutation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EntityMutation message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.EntityMutation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.EntityMutation} EntityMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntityMutation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.EntityMutation();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.entityId = reader.string();
                        break;
                    case 2:
                        message.putTrait = $root.exocore.store.PutTraitMutation.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.deleteTrait = $root.exocore.store.DeleteTraitMutation.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.deleteEntity = $root.exocore.store.DeleteEntityMutation.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.updateTrait = $root.exocore.store.UpdateTraitMutation.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.compactTrait = $root.exocore.store.CompactTraitMutation.decode(reader, reader.uint32());
                        break;
                    case 99:
                        message.test = $root.exocore.store.TestMutation.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EntityMutation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.EntityMutation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.EntityMutation} EntityMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntityMutation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EntityMutation message.
             * @function verify
             * @memberof exocore.store.EntityMutation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EntityMutation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.entityId != null && message.hasOwnProperty("entityId"))
                    if (!$util.isString(message.entityId))
                        return "entityId: string expected";
                if (message.putTrait != null && message.hasOwnProperty("putTrait")) {
                    properties.mutation = 1;
                    {
                        let error = $root.exocore.store.PutTraitMutation.verify(message.putTrait);
                        if (error)
                            return "putTrait." + error;
                    }
                }
                if (message.deleteTrait != null && message.hasOwnProperty("deleteTrait")) {
                    if (properties.mutation === 1)
                        return "mutation: multiple values";
                    properties.mutation = 1;
                    {
                        let error = $root.exocore.store.DeleteTraitMutation.verify(message.deleteTrait);
                        if (error)
                            return "deleteTrait." + error;
                    }
                }
                if (message.deleteEntity != null && message.hasOwnProperty("deleteEntity")) {
                    if (properties.mutation === 1)
                        return "mutation: multiple values";
                    properties.mutation = 1;
                    {
                        let error = $root.exocore.store.DeleteEntityMutation.verify(message.deleteEntity);
                        if (error)
                            return "deleteEntity." + error;
                    }
                }
                if (message.updateTrait != null && message.hasOwnProperty("updateTrait")) {
                    if (properties.mutation === 1)
                        return "mutation: multiple values";
                    properties.mutation = 1;
                    {
                        let error = $root.exocore.store.UpdateTraitMutation.verify(message.updateTrait);
                        if (error)
                            return "updateTrait." + error;
                    }
                }
                if (message.compactTrait != null && message.hasOwnProperty("compactTrait")) {
                    if (properties.mutation === 1)
                        return "mutation: multiple values";
                    properties.mutation = 1;
                    {
                        let error = $root.exocore.store.CompactTraitMutation.verify(message.compactTrait);
                        if (error)
                            return "compactTrait." + error;
                    }
                }
                if (message.test != null && message.hasOwnProperty("test")) {
                    if (properties.mutation === 1)
                        return "mutation: multiple values";
                    properties.mutation = 1;
                    {
                        let error = $root.exocore.store.TestMutation.verify(message.test);
                        if (error)
                            return "test." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EntityMutation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.EntityMutation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.EntityMutation} EntityMutation
             */
            EntityMutation.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.EntityMutation)
                    return object;
                let message = new $root.exocore.store.EntityMutation();
                if (object.entityId != null)
                    message.entityId = String(object.entityId);
                if (object.putTrait != null) {
                    if (typeof object.putTrait !== "object")
                        throw TypeError(".exocore.store.EntityMutation.putTrait: object expected");
                    message.putTrait = $root.exocore.store.PutTraitMutation.fromObject(object.putTrait);
                }
                if (object.deleteTrait != null) {
                    if (typeof object.deleteTrait !== "object")
                        throw TypeError(".exocore.store.EntityMutation.deleteTrait: object expected");
                    message.deleteTrait = $root.exocore.store.DeleteTraitMutation.fromObject(object.deleteTrait);
                }
                if (object.deleteEntity != null) {
                    if (typeof object.deleteEntity !== "object")
                        throw TypeError(".exocore.store.EntityMutation.deleteEntity: object expected");
                    message.deleteEntity = $root.exocore.store.DeleteEntityMutation.fromObject(object.deleteEntity);
                }
                if (object.updateTrait != null) {
                    if (typeof object.updateTrait !== "object")
                        throw TypeError(".exocore.store.EntityMutation.updateTrait: object expected");
                    message.updateTrait = $root.exocore.store.UpdateTraitMutation.fromObject(object.updateTrait);
                }
                if (object.compactTrait != null) {
                    if (typeof object.compactTrait !== "object")
                        throw TypeError(".exocore.store.EntityMutation.compactTrait: object expected");
                    message.compactTrait = $root.exocore.store.CompactTraitMutation.fromObject(object.compactTrait);
                }
                if (object.test != null) {
                    if (typeof object.test !== "object")
                        throw TypeError(".exocore.store.EntityMutation.test: object expected");
                    message.test = $root.exocore.store.TestMutation.fromObject(object.test);
                }
                return message;
            };

            /**
             * Creates a plain object from an EntityMutation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.EntityMutation
             * @static
             * @param {exocore.store.EntityMutation} message EntityMutation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EntityMutation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.entityId = "";
                if (message.entityId != null && message.hasOwnProperty("entityId"))
                    object.entityId = message.entityId;
                if (message.putTrait != null && message.hasOwnProperty("putTrait")) {
                    object.putTrait = $root.exocore.store.PutTraitMutation.toObject(message.putTrait, options);
                    if (options.oneofs)
                        object.mutation = "putTrait";
                }
                if (message.deleteTrait != null && message.hasOwnProperty("deleteTrait")) {
                    object.deleteTrait = $root.exocore.store.DeleteTraitMutation.toObject(message.deleteTrait, options);
                    if (options.oneofs)
                        object.mutation = "deleteTrait";
                }
                if (message.deleteEntity != null && message.hasOwnProperty("deleteEntity")) {
                    object.deleteEntity = $root.exocore.store.DeleteEntityMutation.toObject(message.deleteEntity, options);
                    if (options.oneofs)
                        object.mutation = "deleteEntity";
                }
                if (message.updateTrait != null && message.hasOwnProperty("updateTrait")) {
                    object.updateTrait = $root.exocore.store.UpdateTraitMutation.toObject(message.updateTrait, options);
                    if (options.oneofs)
                        object.mutation = "updateTrait";
                }
                if (message.compactTrait != null && message.hasOwnProperty("compactTrait")) {
                    object.compactTrait = $root.exocore.store.CompactTraitMutation.toObject(message.compactTrait, options);
                    if (options.oneofs)
                        object.mutation = "compactTrait";
                }
                if (message.test != null && message.hasOwnProperty("test")) {
                    object.test = $root.exocore.store.TestMutation.toObject(message.test, options);
                    if (options.oneofs)
                        object.mutation = "test";
                }
                return object;
            };

            /**
             * Converts this EntityMutation to JSON.
             * @function toJSON
             * @memberof exocore.store.EntityMutation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EntityMutation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EntityMutation;
        })();

        store.PutTraitMutation = (function() {

            /**
             * Properties of a PutTraitMutation.
             * @memberof exocore.store
             * @interface IPutTraitMutation
             * @property {exocore.store.ITrait|null} [trait] PutTraitMutation trait
             */

            /**
             * Constructs a new PutTraitMutation.
             * @memberof exocore.store
             * @classdesc Represents a PutTraitMutation.
             * @implements IPutTraitMutation
             * @constructor
             * @param {exocore.store.IPutTraitMutation=} [properties] Properties to set
             */
            function PutTraitMutation(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PutTraitMutation trait.
             * @member {exocore.store.ITrait|null|undefined} trait
             * @memberof exocore.store.PutTraitMutation
             * @instance
             */
            PutTraitMutation.prototype.trait = null;

            /**
             * Creates a new PutTraitMutation instance using the specified properties.
             * @function create
             * @memberof exocore.store.PutTraitMutation
             * @static
             * @param {exocore.store.IPutTraitMutation=} [properties] Properties to set
             * @returns {exocore.store.PutTraitMutation} PutTraitMutation instance
             */
            PutTraitMutation.create = function create(properties) {
                return new PutTraitMutation(properties);
            };

            /**
             * Encodes the specified PutTraitMutation message. Does not implicitly {@link exocore.store.PutTraitMutation.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.PutTraitMutation
             * @static
             * @param {exocore.store.IPutTraitMutation} message PutTraitMutation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PutTraitMutation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.trait != null && Object.hasOwnProperty.call(message, "trait"))
                    $root.exocore.store.Trait.encode(message.trait, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified PutTraitMutation message, length delimited. Does not implicitly {@link exocore.store.PutTraitMutation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.PutTraitMutation
             * @static
             * @param {exocore.store.IPutTraitMutation} message PutTraitMutation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PutTraitMutation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PutTraitMutation message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.PutTraitMutation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.PutTraitMutation} PutTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PutTraitMutation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.PutTraitMutation();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.trait = $root.exocore.store.Trait.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PutTraitMutation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.PutTraitMutation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.PutTraitMutation} PutTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PutTraitMutation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PutTraitMutation message.
             * @function verify
             * @memberof exocore.store.PutTraitMutation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PutTraitMutation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.trait != null && message.hasOwnProperty("trait")) {
                    let error = $root.exocore.store.Trait.verify(message.trait);
                    if (error)
                        return "trait." + error;
                }
                return null;
            };

            /**
             * Creates a PutTraitMutation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.PutTraitMutation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.PutTraitMutation} PutTraitMutation
             */
            PutTraitMutation.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.PutTraitMutation)
                    return object;
                let message = new $root.exocore.store.PutTraitMutation();
                if (object.trait != null) {
                    if (typeof object.trait !== "object")
                        throw TypeError(".exocore.store.PutTraitMutation.trait: object expected");
                    message.trait = $root.exocore.store.Trait.fromObject(object.trait);
                }
                return message;
            };

            /**
             * Creates a plain object from a PutTraitMutation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.PutTraitMutation
             * @static
             * @param {exocore.store.PutTraitMutation} message PutTraitMutation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PutTraitMutation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.trait = null;
                if (message.trait != null && message.hasOwnProperty("trait"))
                    object.trait = $root.exocore.store.Trait.toObject(message.trait, options);
                return object;
            };

            /**
             * Converts this PutTraitMutation to JSON.
             * @function toJSON
             * @memberof exocore.store.PutTraitMutation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PutTraitMutation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PutTraitMutation;
        })();

        store.DeleteTraitMutation = (function() {

            /**
             * Properties of a DeleteTraitMutation.
             * @memberof exocore.store
             * @interface IDeleteTraitMutation
             * @property {string|null} [traitId] DeleteTraitMutation traitId
             */

            /**
             * Constructs a new DeleteTraitMutation.
             * @memberof exocore.store
             * @classdesc Represents a DeleteTraitMutation.
             * @implements IDeleteTraitMutation
             * @constructor
             * @param {exocore.store.IDeleteTraitMutation=} [properties] Properties to set
             */
            function DeleteTraitMutation(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeleteTraitMutation traitId.
             * @member {string} traitId
             * @memberof exocore.store.DeleteTraitMutation
             * @instance
             */
            DeleteTraitMutation.prototype.traitId = "";

            /**
             * Creates a new DeleteTraitMutation instance using the specified properties.
             * @function create
             * @memberof exocore.store.DeleteTraitMutation
             * @static
             * @param {exocore.store.IDeleteTraitMutation=} [properties] Properties to set
             * @returns {exocore.store.DeleteTraitMutation} DeleteTraitMutation instance
             */
            DeleteTraitMutation.create = function create(properties) {
                return new DeleteTraitMutation(properties);
            };

            /**
             * Encodes the specified DeleteTraitMutation message. Does not implicitly {@link exocore.store.DeleteTraitMutation.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.DeleteTraitMutation
             * @static
             * @param {exocore.store.IDeleteTraitMutation} message DeleteTraitMutation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteTraitMutation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.traitId != null && Object.hasOwnProperty.call(message, "traitId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.traitId);
                return writer;
            };

            /**
             * Encodes the specified DeleteTraitMutation message, length delimited. Does not implicitly {@link exocore.store.DeleteTraitMutation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.DeleteTraitMutation
             * @static
             * @param {exocore.store.IDeleteTraitMutation} message DeleteTraitMutation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteTraitMutation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeleteTraitMutation message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.DeleteTraitMutation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.DeleteTraitMutation} DeleteTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteTraitMutation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.DeleteTraitMutation();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.traitId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeleteTraitMutation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.DeleteTraitMutation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.DeleteTraitMutation} DeleteTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteTraitMutation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeleteTraitMutation message.
             * @function verify
             * @memberof exocore.store.DeleteTraitMutation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteTraitMutation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.traitId != null && message.hasOwnProperty("traitId"))
                    if (!$util.isString(message.traitId))
                        return "traitId: string expected";
                return null;
            };

            /**
             * Creates a DeleteTraitMutation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.DeleteTraitMutation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.DeleteTraitMutation} DeleteTraitMutation
             */
            DeleteTraitMutation.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.DeleteTraitMutation)
                    return object;
                let message = new $root.exocore.store.DeleteTraitMutation();
                if (object.traitId != null)
                    message.traitId = String(object.traitId);
                return message;
            };

            /**
             * Creates a plain object from a DeleteTraitMutation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.DeleteTraitMutation
             * @static
             * @param {exocore.store.DeleteTraitMutation} message DeleteTraitMutation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteTraitMutation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.traitId = "";
                if (message.traitId != null && message.hasOwnProperty("traitId"))
                    object.traitId = message.traitId;
                return object;
            };

            /**
             * Converts this DeleteTraitMutation to JSON.
             * @function toJSON
             * @memberof exocore.store.DeleteTraitMutation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteTraitMutation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DeleteTraitMutation;
        })();

        store.DeleteEntityMutation = (function() {

            /**
             * Properties of a DeleteEntityMutation.
             * @memberof exocore.store
             * @interface IDeleteEntityMutation
             */

            /**
             * Constructs a new DeleteEntityMutation.
             * @memberof exocore.store
             * @classdesc Represents a DeleteEntityMutation.
             * @implements IDeleteEntityMutation
             * @constructor
             * @param {exocore.store.IDeleteEntityMutation=} [properties] Properties to set
             */
            function DeleteEntityMutation(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new DeleteEntityMutation instance using the specified properties.
             * @function create
             * @memberof exocore.store.DeleteEntityMutation
             * @static
             * @param {exocore.store.IDeleteEntityMutation=} [properties] Properties to set
             * @returns {exocore.store.DeleteEntityMutation} DeleteEntityMutation instance
             */
            DeleteEntityMutation.create = function create(properties) {
                return new DeleteEntityMutation(properties);
            };

            /**
             * Encodes the specified DeleteEntityMutation message. Does not implicitly {@link exocore.store.DeleteEntityMutation.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.DeleteEntityMutation
             * @static
             * @param {exocore.store.IDeleteEntityMutation} message DeleteEntityMutation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteEntityMutation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified DeleteEntityMutation message, length delimited. Does not implicitly {@link exocore.store.DeleteEntityMutation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.DeleteEntityMutation
             * @static
             * @param {exocore.store.IDeleteEntityMutation} message DeleteEntityMutation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteEntityMutation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeleteEntityMutation message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.DeleteEntityMutation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.DeleteEntityMutation} DeleteEntityMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteEntityMutation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.DeleteEntityMutation();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeleteEntityMutation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.DeleteEntityMutation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.DeleteEntityMutation} DeleteEntityMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteEntityMutation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeleteEntityMutation message.
             * @function verify
             * @memberof exocore.store.DeleteEntityMutation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteEntityMutation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a DeleteEntityMutation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.DeleteEntityMutation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.DeleteEntityMutation} DeleteEntityMutation
             */
            DeleteEntityMutation.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.DeleteEntityMutation)
                    return object;
                return new $root.exocore.store.DeleteEntityMutation();
            };

            /**
             * Creates a plain object from a DeleteEntityMutation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.DeleteEntityMutation
             * @static
             * @param {exocore.store.DeleteEntityMutation} message DeleteEntityMutation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteEntityMutation.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this DeleteEntityMutation to JSON.
             * @function toJSON
             * @memberof exocore.store.DeleteEntityMutation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteEntityMutation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DeleteEntityMutation;
        })();

        store.UpdateTraitMutation = (function() {

            /**
             * Properties of an UpdateTraitMutation.
             * @memberof exocore.store
             * @interface IUpdateTraitMutation
             * @property {string|null} [traitId] UpdateTraitMutation traitId
             * @property {exocore.store.ITrait|null} [trait] UpdateTraitMutation trait
             * @property {google.protobuf.IFieldMask|null} [fieldMask] UpdateTraitMutation fieldMask
             * @property {number|Long|null} [ifLastOperationId] UpdateTraitMutation ifLastOperationId
             */

            /**
             * Constructs a new UpdateTraitMutation.
             * @memberof exocore.store
             * @classdesc Represents an UpdateTraitMutation.
             * @implements IUpdateTraitMutation
             * @constructor
             * @param {exocore.store.IUpdateTraitMutation=} [properties] Properties to set
             */
            function UpdateTraitMutation(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateTraitMutation traitId.
             * @member {string} traitId
             * @memberof exocore.store.UpdateTraitMutation
             * @instance
             */
            UpdateTraitMutation.prototype.traitId = "";

            /**
             * UpdateTraitMutation trait.
             * @member {exocore.store.ITrait|null|undefined} trait
             * @memberof exocore.store.UpdateTraitMutation
             * @instance
             */
            UpdateTraitMutation.prototype.trait = null;

            /**
             * UpdateTraitMutation fieldMask.
             * @member {google.protobuf.IFieldMask|null|undefined} fieldMask
             * @memberof exocore.store.UpdateTraitMutation
             * @instance
             */
            UpdateTraitMutation.prototype.fieldMask = null;

            /**
             * UpdateTraitMutation ifLastOperationId.
             * @member {number|Long} ifLastOperationId
             * @memberof exocore.store.UpdateTraitMutation
             * @instance
             */
            UpdateTraitMutation.prototype.ifLastOperationId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new UpdateTraitMutation instance using the specified properties.
             * @function create
             * @memberof exocore.store.UpdateTraitMutation
             * @static
             * @param {exocore.store.IUpdateTraitMutation=} [properties] Properties to set
             * @returns {exocore.store.UpdateTraitMutation} UpdateTraitMutation instance
             */
            UpdateTraitMutation.create = function create(properties) {
                return new UpdateTraitMutation(properties);
            };

            /**
             * Encodes the specified UpdateTraitMutation message. Does not implicitly {@link exocore.store.UpdateTraitMutation.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.UpdateTraitMutation
             * @static
             * @param {exocore.store.IUpdateTraitMutation} message UpdateTraitMutation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateTraitMutation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.traitId != null && Object.hasOwnProperty.call(message, "traitId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.traitId);
                if (message.trait != null && Object.hasOwnProperty.call(message, "trait"))
                    $root.exocore.store.Trait.encode(message.trait, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.fieldMask != null && Object.hasOwnProperty.call(message, "fieldMask"))
                    $root.google.protobuf.FieldMask.encode(message.fieldMask, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.ifLastOperationId != null && Object.hasOwnProperty.call(message, "ifLastOperationId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.ifLastOperationId);
                return writer;
            };

            /**
             * Encodes the specified UpdateTraitMutation message, length delimited. Does not implicitly {@link exocore.store.UpdateTraitMutation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.UpdateTraitMutation
             * @static
             * @param {exocore.store.IUpdateTraitMutation} message UpdateTraitMutation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateTraitMutation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateTraitMutation message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.UpdateTraitMutation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.UpdateTraitMutation} UpdateTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateTraitMutation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.UpdateTraitMutation();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.traitId = reader.string();
                        break;
                    case 2:
                        message.trait = $root.exocore.store.Trait.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.fieldMask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.ifLastOperationId = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdateTraitMutation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.UpdateTraitMutation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.UpdateTraitMutation} UpdateTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateTraitMutation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateTraitMutation message.
             * @function verify
             * @memberof exocore.store.UpdateTraitMutation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateTraitMutation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.traitId != null && message.hasOwnProperty("traitId"))
                    if (!$util.isString(message.traitId))
                        return "traitId: string expected";
                if (message.trait != null && message.hasOwnProperty("trait")) {
                    let error = $root.exocore.store.Trait.verify(message.trait);
                    if (error)
                        return "trait." + error;
                }
                if (message.fieldMask != null && message.hasOwnProperty("fieldMask")) {
                    let error = $root.google.protobuf.FieldMask.verify(message.fieldMask);
                    if (error)
                        return "fieldMask." + error;
                }
                if (message.ifLastOperationId != null && message.hasOwnProperty("ifLastOperationId"))
                    if (!$util.isInteger(message.ifLastOperationId) && !(message.ifLastOperationId && $util.isInteger(message.ifLastOperationId.low) && $util.isInteger(message.ifLastOperationId.high)))
                        return "ifLastOperationId: integer|Long expected";
                return null;
            };

            /**
             * Creates an UpdateTraitMutation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.UpdateTraitMutation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.UpdateTraitMutation} UpdateTraitMutation
             */
            UpdateTraitMutation.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.UpdateTraitMutation)
                    return object;
                let message = new $root.exocore.store.UpdateTraitMutation();
                if (object.traitId != null)
                    message.traitId = String(object.traitId);
                if (object.trait != null) {
                    if (typeof object.trait !== "object")
                        throw TypeError(".exocore.store.UpdateTraitMutation.trait: object expected");
                    message.trait = $root.exocore.store.Trait.fromObject(object.trait);
                }
                if (object.fieldMask != null) {
                    if (typeof object.fieldMask !== "object")
                        throw TypeError(".exocore.store.UpdateTraitMutation.fieldMask: object expected");
                    message.fieldMask = $root.google.protobuf.FieldMask.fromObject(object.fieldMask);
                }
                if (object.ifLastOperationId != null)
                    if ($util.Long)
                        (message.ifLastOperationId = $util.Long.fromValue(object.ifLastOperationId)).unsigned = true;
                    else if (typeof object.ifLastOperationId === "string")
                        message.ifLastOperationId = parseInt(object.ifLastOperationId, 10);
                    else if (typeof object.ifLastOperationId === "number")
                        message.ifLastOperationId = object.ifLastOperationId;
                    else if (typeof object.ifLastOperationId === "object")
                        message.ifLastOperationId = new $util.LongBits(object.ifLastOperationId.low >>> 0, object.ifLastOperationId.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from an UpdateTraitMutation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.UpdateTraitMutation
             * @static
             * @param {exocore.store.UpdateTraitMutation} message UpdateTraitMutation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateTraitMutation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.traitId = "";
                    object.trait = null;
                    object.fieldMask = null;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.ifLastOperationId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.ifLastOperationId = options.longs === String ? "0" : 0;
                }
                if (message.traitId != null && message.hasOwnProperty("traitId"))
                    object.traitId = message.traitId;
                if (message.trait != null && message.hasOwnProperty("trait"))
                    object.trait = $root.exocore.store.Trait.toObject(message.trait, options);
                if (message.fieldMask != null && message.hasOwnProperty("fieldMask"))
                    object.fieldMask = $root.google.protobuf.FieldMask.toObject(message.fieldMask, options);
                if (message.ifLastOperationId != null && message.hasOwnProperty("ifLastOperationId"))
                    if (typeof message.ifLastOperationId === "number")
                        object.ifLastOperationId = options.longs === String ? String(message.ifLastOperationId) : message.ifLastOperationId;
                    else
                        object.ifLastOperationId = options.longs === String ? $util.Long.prototype.toString.call(message.ifLastOperationId) : options.longs === Number ? new $util.LongBits(message.ifLastOperationId.low >>> 0, message.ifLastOperationId.high >>> 0).toNumber(true) : message.ifLastOperationId;
                return object;
            };

            /**
             * Converts this UpdateTraitMutation to JSON.
             * @function toJSON
             * @memberof exocore.store.UpdateTraitMutation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateTraitMutation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateTraitMutation;
        })();

        store.CompactTraitMutation = (function() {

            /**
             * Properties of a CompactTraitMutation.
             * @memberof exocore.store
             * @interface ICompactTraitMutation
             * @property {Array.<exocore.store.CompactTraitMutation.IOperation>|null} [compactedOperations] CompactTraitMutation compactedOperations
             * @property {exocore.store.ITrait|null} [trait] CompactTraitMutation trait
             */

            /**
             * Constructs a new CompactTraitMutation.
             * @memberof exocore.store
             * @classdesc Represents a CompactTraitMutation.
             * @implements ICompactTraitMutation
             * @constructor
             * @param {exocore.store.ICompactTraitMutation=} [properties] Properties to set
             */
            function CompactTraitMutation(properties) {
                this.compactedOperations = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CompactTraitMutation compactedOperations.
             * @member {Array.<exocore.store.CompactTraitMutation.IOperation>} compactedOperations
             * @memberof exocore.store.CompactTraitMutation
             * @instance
             */
            CompactTraitMutation.prototype.compactedOperations = $util.emptyArray;

            /**
             * CompactTraitMutation trait.
             * @member {exocore.store.ITrait|null|undefined} trait
             * @memberof exocore.store.CompactTraitMutation
             * @instance
             */
            CompactTraitMutation.prototype.trait = null;

            /**
             * Creates a new CompactTraitMutation instance using the specified properties.
             * @function create
             * @memberof exocore.store.CompactTraitMutation
             * @static
             * @param {exocore.store.ICompactTraitMutation=} [properties] Properties to set
             * @returns {exocore.store.CompactTraitMutation} CompactTraitMutation instance
             */
            CompactTraitMutation.create = function create(properties) {
                return new CompactTraitMutation(properties);
            };

            /**
             * Encodes the specified CompactTraitMutation message. Does not implicitly {@link exocore.store.CompactTraitMutation.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.CompactTraitMutation
             * @static
             * @param {exocore.store.ICompactTraitMutation} message CompactTraitMutation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CompactTraitMutation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.compactedOperations != null && message.compactedOperations.length)
                    for (let i = 0; i < message.compactedOperations.length; ++i)
                        $root.exocore.store.CompactTraitMutation.Operation.encode(message.compactedOperations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.trait != null && Object.hasOwnProperty.call(message, "trait"))
                    $root.exocore.store.Trait.encode(message.trait, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified CompactTraitMutation message, length delimited. Does not implicitly {@link exocore.store.CompactTraitMutation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.CompactTraitMutation
             * @static
             * @param {exocore.store.ICompactTraitMutation} message CompactTraitMutation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CompactTraitMutation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CompactTraitMutation message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.CompactTraitMutation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.CompactTraitMutation} CompactTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CompactTraitMutation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.CompactTraitMutation();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.compactedOperations && message.compactedOperations.length))
                            message.compactedOperations = [];
                        message.compactedOperations.push($root.exocore.store.CompactTraitMutation.Operation.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.trait = $root.exocore.store.Trait.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CompactTraitMutation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.CompactTraitMutation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.CompactTraitMutation} CompactTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CompactTraitMutation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CompactTraitMutation message.
             * @function verify
             * @memberof exocore.store.CompactTraitMutation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CompactTraitMutation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.compactedOperations != null && message.hasOwnProperty("compactedOperations")) {
                    if (!Array.isArray(message.compactedOperations))
                        return "compactedOperations: array expected";
                    for (let i = 0; i < message.compactedOperations.length; ++i) {
                        let error = $root.exocore.store.CompactTraitMutation.Operation.verify(message.compactedOperations[i]);
                        if (error)
                            return "compactedOperations." + error;
                    }
                }
                if (message.trait != null && message.hasOwnProperty("trait")) {
                    let error = $root.exocore.store.Trait.verify(message.trait);
                    if (error)
                        return "trait." + error;
                }
                return null;
            };

            /**
             * Creates a CompactTraitMutation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.CompactTraitMutation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.CompactTraitMutation} CompactTraitMutation
             */
            CompactTraitMutation.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.CompactTraitMutation)
                    return object;
                let message = new $root.exocore.store.CompactTraitMutation();
                if (object.compactedOperations) {
                    if (!Array.isArray(object.compactedOperations))
                        throw TypeError(".exocore.store.CompactTraitMutation.compactedOperations: array expected");
                    message.compactedOperations = [];
                    for (let i = 0; i < object.compactedOperations.length; ++i) {
                        if (typeof object.compactedOperations[i] !== "object")
                            throw TypeError(".exocore.store.CompactTraitMutation.compactedOperations: object expected");
                        message.compactedOperations[i] = $root.exocore.store.CompactTraitMutation.Operation.fromObject(object.compactedOperations[i]);
                    }
                }
                if (object.trait != null) {
                    if (typeof object.trait !== "object")
                        throw TypeError(".exocore.store.CompactTraitMutation.trait: object expected");
                    message.trait = $root.exocore.store.Trait.fromObject(object.trait);
                }
                return message;
            };

            /**
             * Creates a plain object from a CompactTraitMutation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.CompactTraitMutation
             * @static
             * @param {exocore.store.CompactTraitMutation} message CompactTraitMutation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CompactTraitMutation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.compactedOperations = [];
                if (options.defaults)
                    object.trait = null;
                if (message.compactedOperations && message.compactedOperations.length) {
                    object.compactedOperations = [];
                    for (let j = 0; j < message.compactedOperations.length; ++j)
                        object.compactedOperations[j] = $root.exocore.store.CompactTraitMutation.Operation.toObject(message.compactedOperations[j], options);
                }
                if (message.trait != null && message.hasOwnProperty("trait"))
                    object.trait = $root.exocore.store.Trait.toObject(message.trait, options);
                return object;
            };

            /**
             * Converts this CompactTraitMutation to JSON.
             * @function toJSON
             * @memberof exocore.store.CompactTraitMutation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CompactTraitMutation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            CompactTraitMutation.Operation = (function() {

                /**
                 * Properties of an Operation.
                 * @memberof exocore.store.CompactTraitMutation
                 * @interface IOperation
                 * @property {number|Long|null} [operationId] Operation operationId
                 */

                /**
                 * Constructs a new Operation.
                 * @memberof exocore.store.CompactTraitMutation
                 * @classdesc Represents an Operation.
                 * @implements IOperation
                 * @constructor
                 * @param {exocore.store.CompactTraitMutation.IOperation=} [properties] Properties to set
                 */
                function Operation(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Operation operationId.
                 * @member {number|Long} operationId
                 * @memberof exocore.store.CompactTraitMutation.Operation
                 * @instance
                 */
                Operation.prototype.operationId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Creates a new Operation instance using the specified properties.
                 * @function create
                 * @memberof exocore.store.CompactTraitMutation.Operation
                 * @static
                 * @param {exocore.store.CompactTraitMutation.IOperation=} [properties] Properties to set
                 * @returns {exocore.store.CompactTraitMutation.Operation} Operation instance
                 */
                Operation.create = function create(properties) {
                    return new Operation(properties);
                };

                /**
                 * Encodes the specified Operation message. Does not implicitly {@link exocore.store.CompactTraitMutation.Operation.verify|verify} messages.
                 * @function encode
                 * @memberof exocore.store.CompactTraitMutation.Operation
                 * @static
                 * @param {exocore.store.CompactTraitMutation.IOperation} message Operation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Operation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.operationId != null && Object.hasOwnProperty.call(message, "operationId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.operationId);
                    return writer;
                };

                /**
                 * Encodes the specified Operation message, length delimited. Does not implicitly {@link exocore.store.CompactTraitMutation.Operation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof exocore.store.CompactTraitMutation.Operation
                 * @static
                 * @param {exocore.store.CompactTraitMutation.IOperation} message Operation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Operation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Operation message from the specified reader or buffer.
                 * @function decode
                 * @memberof exocore.store.CompactTraitMutation.Operation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {exocore.store.CompactTraitMutation.Operation} Operation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Operation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.CompactTraitMutation.Operation();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.operationId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Operation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof exocore.store.CompactTraitMutation.Operation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {exocore.store.CompactTraitMutation.Operation} Operation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Operation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Operation message.
                 * @function verify
                 * @memberof exocore.store.CompactTraitMutation.Operation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Operation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.operationId != null && message.hasOwnProperty("operationId"))
                        if (!$util.isInteger(message.operationId) && !(message.operationId && $util.isInteger(message.operationId.low) && $util.isInteger(message.operationId.high)))
                            return "operationId: integer|Long expected";
                    return null;
                };

                /**
                 * Creates an Operation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof exocore.store.CompactTraitMutation.Operation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {exocore.store.CompactTraitMutation.Operation} Operation
                 */
                Operation.fromObject = function fromObject(object) {
                    if (object instanceof $root.exocore.store.CompactTraitMutation.Operation)
                        return object;
                    let message = new $root.exocore.store.CompactTraitMutation.Operation();
                    if (object.operationId != null)
                        if ($util.Long)
                            (message.operationId = $util.Long.fromValue(object.operationId)).unsigned = true;
                        else if (typeof object.operationId === "string")
                            message.operationId = parseInt(object.operationId, 10);
                        else if (typeof object.operationId === "number")
                            message.operationId = object.operationId;
                        else if (typeof object.operationId === "object")
                            message.operationId = new $util.LongBits(object.operationId.low >>> 0, object.operationId.high >>> 0).toNumber(true);
                    return message;
                };

                /**
                 * Creates a plain object from an Operation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof exocore.store.CompactTraitMutation.Operation
                 * @static
                 * @param {exocore.store.CompactTraitMutation.Operation} message Operation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Operation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.operationId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.operationId = options.longs === String ? "0" : 0;
                    if (message.operationId != null && message.hasOwnProperty("operationId"))
                        if (typeof message.operationId === "number")
                            object.operationId = options.longs === String ? String(message.operationId) : message.operationId;
                        else
                            object.operationId = options.longs === String ? $util.Long.prototype.toString.call(message.operationId) : options.longs === Number ? new $util.LongBits(message.operationId.low >>> 0, message.operationId.high >>> 0).toNumber(true) : message.operationId;
                    return object;
                };

                /**
                 * Converts this Operation to JSON.
                 * @function toJSON
                 * @memberof exocore.store.CompactTraitMutation.Operation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Operation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Operation;
            })();

            return CompactTraitMutation;
        })();

        store.TestMutation = (function() {

            /**
             * Properties of a TestMutation.
             * @memberof exocore.store
             * @interface ITestMutation
             * @property {boolean|null} [success] TestMutation success
             */

            /**
             * Constructs a new TestMutation.
             * @memberof exocore.store
             * @classdesc Represents a TestMutation.
             * @implements ITestMutation
             * @constructor
             * @param {exocore.store.ITestMutation=} [properties] Properties to set
             */
            function TestMutation(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TestMutation success.
             * @member {boolean} success
             * @memberof exocore.store.TestMutation
             * @instance
             */
            TestMutation.prototype.success = false;

            /**
             * Creates a new TestMutation instance using the specified properties.
             * @function create
             * @memberof exocore.store.TestMutation
             * @static
             * @param {exocore.store.ITestMutation=} [properties] Properties to set
             * @returns {exocore.store.TestMutation} TestMutation instance
             */
            TestMutation.create = function create(properties) {
                return new TestMutation(properties);
            };

            /**
             * Encodes the specified TestMutation message. Does not implicitly {@link exocore.store.TestMutation.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.TestMutation
             * @static
             * @param {exocore.store.ITestMutation} message TestMutation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMutation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
                return writer;
            };

            /**
             * Encodes the specified TestMutation message, length delimited. Does not implicitly {@link exocore.store.TestMutation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.TestMutation
             * @static
             * @param {exocore.store.ITestMutation} message TestMutation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMutation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestMutation message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.TestMutation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.TestMutation} TestMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestMutation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.TestMutation();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.success = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TestMutation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.TestMutation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.TestMutation} TestMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestMutation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestMutation message.
             * @function verify
             * @memberof exocore.store.TestMutation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestMutation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.success != null && message.hasOwnProperty("success"))
                    if (typeof message.success !== "boolean")
                        return "success: boolean expected";
                return null;
            };

            /**
             * Creates a TestMutation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.TestMutation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.TestMutation} TestMutation
             */
            TestMutation.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.TestMutation)
                    return object;
                let message = new $root.exocore.store.TestMutation();
                if (object.success != null)
                    message.success = Boolean(object.success);
                return message;
            };

            /**
             * Creates a plain object from a TestMutation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.TestMutation
             * @static
             * @param {exocore.store.TestMutation} message TestMutation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestMutation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.success = false;
                if (message.success != null && message.hasOwnProperty("success"))
                    object.success = message.success;
                return object;
            };

            /**
             * Converts this TestMutation to JSON.
             * @function toJSON
             * @memberof exocore.store.TestMutation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestMutation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TestMutation;
        })();

        store.EntityQuery = (function() {

            /**
             * Properties of an EntityQuery.
             * @memberof exocore.store
             * @interface IEntityQuery
             * @property {exocore.store.IMatchPredicate|null} [match] EntityQuery match
             * @property {exocore.store.ITraitPredicate|null} [trait] EntityQuery trait
             * @property {exocore.store.IIdsPredicate|null} [ids] EntityQuery ids
             * @property {exocore.store.IReferencePredicate|null} [reference] EntityQuery reference
             * @property {exocore.store.IOperationsPredicate|null} [operations] EntityQuery operations
             * @property {exocore.store.IAllPredicate|null} [all] EntityQuery all
             * @property {exocore.store.ITestPredicate|null} [test] EntityQuery test
             * @property {Array.<exocore.store.IProjection>|null} [projections] Optional projections on traits and fields to be returned.
             * @property {exocore.store.IPaging|null} [paging] Query paging requested.
             * @property {exocore.store.IOrdering|null} [ordering] Query ordering.
             * @property {number|Long|null} [watchToken] Optional watch token if this query is to be used for watching.
             * @property {number|Long|null} [resultHash] `skipped_hash` field set to `true`.
             * @property {boolean|null} [includeDeleted] `deletion_date` field with the date of the deletion.
             */

            /**
             * Constructs a new EntityQuery.
             * @memberof exocore.store
             * @classdesc Represents an EntityQuery.
             * @implements IEntityQuery
             * @constructor
             * @param {exocore.store.IEntityQuery=} [properties] Properties to set
             */
            function EntityQuery(properties) {
                this.projections = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EntityQuery match.
             * @member {exocore.store.IMatchPredicate|null|undefined} match
             * @memberof exocore.store.EntityQuery
             * @instance
             */
            EntityQuery.prototype.match = null;

            /**
             * EntityQuery trait.
             * @member {exocore.store.ITraitPredicate|null|undefined} trait
             * @memberof exocore.store.EntityQuery
             * @instance
             */
            EntityQuery.prototype.trait = null;

            /**
             * EntityQuery ids.
             * @member {exocore.store.IIdsPredicate|null|undefined} ids
             * @memberof exocore.store.EntityQuery
             * @instance
             */
            EntityQuery.prototype.ids = null;

            /**
             * EntityQuery reference.
             * @member {exocore.store.IReferencePredicate|null|undefined} reference
             * @memberof exocore.store.EntityQuery
             * @instance
             */
            EntityQuery.prototype.reference = null;

            /**
             * EntityQuery operations.
             * @member {exocore.store.IOperationsPredicate|null|undefined} operations
             * @memberof exocore.store.EntityQuery
             * @instance
             */
            EntityQuery.prototype.operations = null;

            /**
             * EntityQuery all.
             * @member {exocore.store.IAllPredicate|null|undefined} all
             * @memberof exocore.store.EntityQuery
             * @instance
             */
            EntityQuery.prototype.all = null;

            /**
             * EntityQuery test.
             * @member {exocore.store.ITestPredicate|null|undefined} test
             * @memberof exocore.store.EntityQuery
             * @instance
             */
            EntityQuery.prototype.test = null;

            /**
             * Optional projections on traits and fields to be returned.
             * @member {Array.<exocore.store.IProjection>} projections
             * @memberof exocore.store.EntityQuery
             * @instance
             */
            EntityQuery.prototype.projections = $util.emptyArray;

            /**
             * Query paging requested.
             * @member {exocore.store.IPaging|null|undefined} paging
             * @memberof exocore.store.EntityQuery
             * @instance
             */
            EntityQuery.prototype.paging = null;

            /**
             * Query ordering.
             * @member {exocore.store.IOrdering|null|undefined} ordering
             * @memberof exocore.store.EntityQuery
             * @instance
             */
            EntityQuery.prototype.ordering = null;

            /**
             * Optional watch token if this query is to be used for watching.
             * @member {number|Long} watchToken
             * @memberof exocore.store.EntityQuery
             * @instance
             */
            EntityQuery.prototype.watchToken = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * `skipped_hash` field set to `true`.
             * @member {number|Long} resultHash
             * @memberof exocore.store.EntityQuery
             * @instance
             */
            EntityQuery.prototype.resultHash = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * `deletion_date` field with the date of the deletion.
             * @member {boolean} includeDeleted
             * @memberof exocore.store.EntityQuery
             * @instance
             */
            EntityQuery.prototype.includeDeleted = false;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * EntityQuery predicate.
             * @member {"match"|"trait"|"ids"|"reference"|"operations"|"all"|"test"|undefined} predicate
             * @memberof exocore.store.EntityQuery
             * @instance
             */
            Object.defineProperty(EntityQuery.prototype, "predicate", {
                get: $util.oneOfGetter($oneOfFields = ["match", "trait", "ids", "reference", "operations", "all", "test"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new EntityQuery instance using the specified properties.
             * @function create
             * @memberof exocore.store.EntityQuery
             * @static
             * @param {exocore.store.IEntityQuery=} [properties] Properties to set
             * @returns {exocore.store.EntityQuery} EntityQuery instance
             */
            EntityQuery.create = function create(properties) {
                return new EntityQuery(properties);
            };

            /**
             * Encodes the specified EntityQuery message. Does not implicitly {@link exocore.store.EntityQuery.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.EntityQuery
             * @static
             * @param {exocore.store.IEntityQuery} message EntityQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntityQuery.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.match != null && Object.hasOwnProperty.call(message, "match"))
                    $root.exocore.store.MatchPredicate.encode(message.match, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.trait != null && Object.hasOwnProperty.call(message, "trait"))
                    $root.exocore.store.TraitPredicate.encode(message.trait, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.ids != null && Object.hasOwnProperty.call(message, "ids"))
                    $root.exocore.store.IdsPredicate.encode(message.ids, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.reference != null && Object.hasOwnProperty.call(message, "reference"))
                    $root.exocore.store.ReferencePredicate.encode(message.reference, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.paging != null && Object.hasOwnProperty.call(message, "paging"))
                    $root.exocore.store.Paging.encode(message.paging, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.ordering != null && Object.hasOwnProperty.call(message, "ordering"))
                    $root.exocore.store.Ordering.encode(message.ordering, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.projections != null && message.projections.length)
                    for (let i = 0; i < message.projections.length; ++i)
                        $root.exocore.store.Projection.encode(message.projections[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.watchToken != null && Object.hasOwnProperty.call(message, "watchToken"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.watchToken);
                if (message.resultHash != null && Object.hasOwnProperty.call(message, "resultHash"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.resultHash);
                if (message.operations != null && Object.hasOwnProperty.call(message, "operations"))
                    $root.exocore.store.OperationsPredicate.encode(message.operations, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.all != null && Object.hasOwnProperty.call(message, "all"))
                    $root.exocore.store.AllPredicate.encode(message.all, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.includeDeleted != null && Object.hasOwnProperty.call(message, "includeDeleted"))
                    writer.uint32(/* id 12, wireType 0 =*/96).bool(message.includeDeleted);
                if (message.test != null && Object.hasOwnProperty.call(message, "test"))
                    $root.exocore.store.TestPredicate.encode(message.test, writer.uint32(/* id 99, wireType 2 =*/794).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EntityQuery message, length delimited. Does not implicitly {@link exocore.store.EntityQuery.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.EntityQuery
             * @static
             * @param {exocore.store.IEntityQuery} message EntityQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntityQuery.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EntityQuery message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.EntityQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.EntityQuery} EntityQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntityQuery.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.EntityQuery();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.match = $root.exocore.store.MatchPredicate.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.trait = $root.exocore.store.TraitPredicate.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.ids = $root.exocore.store.IdsPredicate.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.reference = $root.exocore.store.ReferencePredicate.decode(reader, reader.uint32());
                        break;
                    case 10:
                        message.operations = $root.exocore.store.OperationsPredicate.decode(reader, reader.uint32());
                        break;
                    case 11:
                        message.all = $root.exocore.store.AllPredicate.decode(reader, reader.uint32());
                        break;
                    case 99:
                        message.test = $root.exocore.store.TestPredicate.decode(reader, reader.uint32());
                        break;
                    case 7:
                        if (!(message.projections && message.projections.length))
                            message.projections = [];
                        message.projections.push($root.exocore.store.Projection.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        message.paging = $root.exocore.store.Paging.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.ordering = $root.exocore.store.Ordering.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.watchToken = reader.uint64();
                        break;
                    case 9:
                        message.resultHash = reader.uint64();
                        break;
                    case 12:
                        message.includeDeleted = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EntityQuery message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.EntityQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.EntityQuery} EntityQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntityQuery.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EntityQuery message.
             * @function verify
             * @memberof exocore.store.EntityQuery
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EntityQuery.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.match != null && message.hasOwnProperty("match")) {
                    properties.predicate = 1;
                    {
                        let error = $root.exocore.store.MatchPredicate.verify(message.match);
                        if (error)
                            return "match." + error;
                    }
                }
                if (message.trait != null && message.hasOwnProperty("trait")) {
                    if (properties.predicate === 1)
                        return "predicate: multiple values";
                    properties.predicate = 1;
                    {
                        let error = $root.exocore.store.TraitPredicate.verify(message.trait);
                        if (error)
                            return "trait." + error;
                    }
                }
                if (message.ids != null && message.hasOwnProperty("ids")) {
                    if (properties.predicate === 1)
                        return "predicate: multiple values";
                    properties.predicate = 1;
                    {
                        let error = $root.exocore.store.IdsPredicate.verify(message.ids);
                        if (error)
                            return "ids." + error;
                    }
                }
                if (message.reference != null && message.hasOwnProperty("reference")) {
                    if (properties.predicate === 1)
                        return "predicate: multiple values";
                    properties.predicate = 1;
                    {
                        let error = $root.exocore.store.ReferencePredicate.verify(message.reference);
                        if (error)
                            return "reference." + error;
                    }
                }
                if (message.operations != null && message.hasOwnProperty("operations")) {
                    if (properties.predicate === 1)
                        return "predicate: multiple values";
                    properties.predicate = 1;
                    {
                        let error = $root.exocore.store.OperationsPredicate.verify(message.operations);
                        if (error)
                            return "operations." + error;
                    }
                }
                if (message.all != null && message.hasOwnProperty("all")) {
                    if (properties.predicate === 1)
                        return "predicate: multiple values";
                    properties.predicate = 1;
                    {
                        let error = $root.exocore.store.AllPredicate.verify(message.all);
                        if (error)
                            return "all." + error;
                    }
                }
                if (message.test != null && message.hasOwnProperty("test")) {
                    if (properties.predicate === 1)
                        return "predicate: multiple values";
                    properties.predicate = 1;
                    {
                        let error = $root.exocore.store.TestPredicate.verify(message.test);
                        if (error)
                            return "test." + error;
                    }
                }
                if (message.projections != null && message.hasOwnProperty("projections")) {
                    if (!Array.isArray(message.projections))
                        return "projections: array expected";
                    for (let i = 0; i < message.projections.length; ++i) {
                        let error = $root.exocore.store.Projection.verify(message.projections[i]);
                        if (error)
                            return "projections." + error;
                    }
                }
                if (message.paging != null && message.hasOwnProperty("paging")) {
                    let error = $root.exocore.store.Paging.verify(message.paging);
                    if (error)
                        return "paging." + error;
                }
                if (message.ordering != null && message.hasOwnProperty("ordering")) {
                    let error = $root.exocore.store.Ordering.verify(message.ordering);
                    if (error)
                        return "ordering." + error;
                }
                if (message.watchToken != null && message.hasOwnProperty("watchToken"))
                    if (!$util.isInteger(message.watchToken) && !(message.watchToken && $util.isInteger(message.watchToken.low) && $util.isInteger(message.watchToken.high)))
                        return "watchToken: integer|Long expected";
                if (message.resultHash != null && message.hasOwnProperty("resultHash"))
                    if (!$util.isInteger(message.resultHash) && !(message.resultHash && $util.isInteger(message.resultHash.low) && $util.isInteger(message.resultHash.high)))
                        return "resultHash: integer|Long expected";
                if (message.includeDeleted != null && message.hasOwnProperty("includeDeleted"))
                    if (typeof message.includeDeleted !== "boolean")
                        return "includeDeleted: boolean expected";
                return null;
            };

            /**
             * Creates an EntityQuery message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.EntityQuery
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.EntityQuery} EntityQuery
             */
            EntityQuery.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.EntityQuery)
                    return object;
                let message = new $root.exocore.store.EntityQuery();
                if (object.match != null) {
                    if (typeof object.match !== "object")
                        throw TypeError(".exocore.store.EntityQuery.match: object expected");
                    message.match = $root.exocore.store.MatchPredicate.fromObject(object.match);
                }
                if (object.trait != null) {
                    if (typeof object.trait !== "object")
                        throw TypeError(".exocore.store.EntityQuery.trait: object expected");
                    message.trait = $root.exocore.store.TraitPredicate.fromObject(object.trait);
                }
                if (object.ids != null) {
                    if (typeof object.ids !== "object")
                        throw TypeError(".exocore.store.EntityQuery.ids: object expected");
                    message.ids = $root.exocore.store.IdsPredicate.fromObject(object.ids);
                }
                if (object.reference != null) {
                    if (typeof object.reference !== "object")
                        throw TypeError(".exocore.store.EntityQuery.reference: object expected");
                    message.reference = $root.exocore.store.ReferencePredicate.fromObject(object.reference);
                }
                if (object.operations != null) {
                    if (typeof object.operations !== "object")
                        throw TypeError(".exocore.store.EntityQuery.operations: object expected");
                    message.operations = $root.exocore.store.OperationsPredicate.fromObject(object.operations);
                }
                if (object.all != null) {
                    if (typeof object.all !== "object")
                        throw TypeError(".exocore.store.EntityQuery.all: object expected");
                    message.all = $root.exocore.store.AllPredicate.fromObject(object.all);
                }
                if (object.test != null) {
                    if (typeof object.test !== "object")
                        throw TypeError(".exocore.store.EntityQuery.test: object expected");
                    message.test = $root.exocore.store.TestPredicate.fromObject(object.test);
                }
                if (object.projections) {
                    if (!Array.isArray(object.projections))
                        throw TypeError(".exocore.store.EntityQuery.projections: array expected");
                    message.projections = [];
                    for (let i = 0; i < object.projections.length; ++i) {
                        if (typeof object.projections[i] !== "object")
                            throw TypeError(".exocore.store.EntityQuery.projections: object expected");
                        message.projections[i] = $root.exocore.store.Projection.fromObject(object.projections[i]);
                    }
                }
                if (object.paging != null) {
                    if (typeof object.paging !== "object")
                        throw TypeError(".exocore.store.EntityQuery.paging: object expected");
                    message.paging = $root.exocore.store.Paging.fromObject(object.paging);
                }
                if (object.ordering != null) {
                    if (typeof object.ordering !== "object")
                        throw TypeError(".exocore.store.EntityQuery.ordering: object expected");
                    message.ordering = $root.exocore.store.Ordering.fromObject(object.ordering);
                }
                if (object.watchToken != null)
                    if ($util.Long)
                        (message.watchToken = $util.Long.fromValue(object.watchToken)).unsigned = true;
                    else if (typeof object.watchToken === "string")
                        message.watchToken = parseInt(object.watchToken, 10);
                    else if (typeof object.watchToken === "number")
                        message.watchToken = object.watchToken;
                    else if (typeof object.watchToken === "object")
                        message.watchToken = new $util.LongBits(object.watchToken.low >>> 0, object.watchToken.high >>> 0).toNumber(true);
                if (object.resultHash != null)
                    if ($util.Long)
                        (message.resultHash = $util.Long.fromValue(object.resultHash)).unsigned = true;
                    else if (typeof object.resultHash === "string")
                        message.resultHash = parseInt(object.resultHash, 10);
                    else if (typeof object.resultHash === "number")
                        message.resultHash = object.resultHash;
                    else if (typeof object.resultHash === "object")
                        message.resultHash = new $util.LongBits(object.resultHash.low >>> 0, object.resultHash.high >>> 0).toNumber(true);
                if (object.includeDeleted != null)
                    message.includeDeleted = Boolean(object.includeDeleted);
                return message;
            };

            /**
             * Creates a plain object from an EntityQuery message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.EntityQuery
             * @static
             * @param {exocore.store.EntityQuery} message EntityQuery
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EntityQuery.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.projections = [];
                if (options.defaults) {
                    object.paging = null;
                    object.ordering = null;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.watchToken = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.watchToken = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.resultHash = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.resultHash = options.longs === String ? "0" : 0;
                    object.includeDeleted = false;
                }
                if (message.match != null && message.hasOwnProperty("match")) {
                    object.match = $root.exocore.store.MatchPredicate.toObject(message.match, options);
                    if (options.oneofs)
                        object.predicate = "match";
                }
                if (message.trait != null && message.hasOwnProperty("trait")) {
                    object.trait = $root.exocore.store.TraitPredicate.toObject(message.trait, options);
                    if (options.oneofs)
                        object.predicate = "trait";
                }
                if (message.ids != null && message.hasOwnProperty("ids")) {
                    object.ids = $root.exocore.store.IdsPredicate.toObject(message.ids, options);
                    if (options.oneofs)
                        object.predicate = "ids";
                }
                if (message.reference != null && message.hasOwnProperty("reference")) {
                    object.reference = $root.exocore.store.ReferencePredicate.toObject(message.reference, options);
                    if (options.oneofs)
                        object.predicate = "reference";
                }
                if (message.paging != null && message.hasOwnProperty("paging"))
                    object.paging = $root.exocore.store.Paging.toObject(message.paging, options);
                if (message.ordering != null && message.hasOwnProperty("ordering"))
                    object.ordering = $root.exocore.store.Ordering.toObject(message.ordering, options);
                if (message.projections && message.projections.length) {
                    object.projections = [];
                    for (let j = 0; j < message.projections.length; ++j)
                        object.projections[j] = $root.exocore.store.Projection.toObject(message.projections[j], options);
                }
                if (message.watchToken != null && message.hasOwnProperty("watchToken"))
                    if (typeof message.watchToken === "number")
                        object.watchToken = options.longs === String ? String(message.watchToken) : message.watchToken;
                    else
                        object.watchToken = options.longs === String ? $util.Long.prototype.toString.call(message.watchToken) : options.longs === Number ? new $util.LongBits(message.watchToken.low >>> 0, message.watchToken.high >>> 0).toNumber(true) : message.watchToken;
                if (message.resultHash != null && message.hasOwnProperty("resultHash"))
                    if (typeof message.resultHash === "number")
                        object.resultHash = options.longs === String ? String(message.resultHash) : message.resultHash;
                    else
                        object.resultHash = options.longs === String ? $util.Long.prototype.toString.call(message.resultHash) : options.longs === Number ? new $util.LongBits(message.resultHash.low >>> 0, message.resultHash.high >>> 0).toNumber(true) : message.resultHash;
                if (message.operations != null && message.hasOwnProperty("operations")) {
                    object.operations = $root.exocore.store.OperationsPredicate.toObject(message.operations, options);
                    if (options.oneofs)
                        object.predicate = "operations";
                }
                if (message.all != null && message.hasOwnProperty("all")) {
                    object.all = $root.exocore.store.AllPredicate.toObject(message.all, options);
                    if (options.oneofs)
                        object.predicate = "all";
                }
                if (message.includeDeleted != null && message.hasOwnProperty("includeDeleted"))
                    object.includeDeleted = message.includeDeleted;
                if (message.test != null && message.hasOwnProperty("test")) {
                    object.test = $root.exocore.store.TestPredicate.toObject(message.test, options);
                    if (options.oneofs)
                        object.predicate = "test";
                }
                return object;
            };

            /**
             * Converts this EntityQuery to JSON.
             * @function toJSON
             * @memberof exocore.store.EntityQuery
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EntityQuery.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EntityQuery;
        })();

        store.Projection = (function() {

            /**
             * Properties of a Projection.
             * @memberof exocore.store
             * @interface IProjection
             * @property {Array.<string>|null} ["package"] If ends with a dollar sign "$", an exact match is required (ex: `some.package.Name$` will only match this message)
             * @property {boolean|null} [skip] Skips the trait if the projection matches.
             * @property {Array.<number>|null} [fieldIds] If specified, only return these fields.
             * @property {Array.<number>|null} [fieldGroupIds] If specified, only return fields annotated with `options.proto`.`field_group_id` matching ids.
             */

            /**
             * Constructs a new Projection.
             * @memberof exocore.store
             * @classdesc Represents a Projection.
             * @implements IProjection
             * @constructor
             * @param {exocore.store.IProjection=} [properties] Properties to set
             */
            function Projection(properties) {
                this["package"] = [];
                this.fieldIds = [];
                this.fieldGroupIds = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * If ends with a dollar sign "$", an exact match is required (ex: `some.package.Name$` will only match this message)
             * @member {Array.<string>} package
             * @memberof exocore.store.Projection
             * @instance
             */
            Projection.prototype["package"] = $util.emptyArray;

            /**
             * Skips the trait if the projection matches.
             * @member {boolean} skip
             * @memberof exocore.store.Projection
             * @instance
             */
            Projection.prototype.skip = false;

            /**
             * If specified, only return these fields.
             * @member {Array.<number>} fieldIds
             * @memberof exocore.store.Projection
             * @instance
             */
            Projection.prototype.fieldIds = $util.emptyArray;

            /**
             * If specified, only return fields annotated with `options.proto`.`field_group_id` matching ids.
             * @member {Array.<number>} fieldGroupIds
             * @memberof exocore.store.Projection
             * @instance
             */
            Projection.prototype.fieldGroupIds = $util.emptyArray;

            /**
             * Creates a new Projection instance using the specified properties.
             * @function create
             * @memberof exocore.store.Projection
             * @static
             * @param {exocore.store.IProjection=} [properties] Properties to set
             * @returns {exocore.store.Projection} Projection instance
             */
            Projection.create = function create(properties) {
                return new Projection(properties);
            };

            /**
             * Encodes the specified Projection message. Does not implicitly {@link exocore.store.Projection.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.Projection
             * @static
             * @param {exocore.store.IProjection} message Projection message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Projection.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message["package"] != null && message["package"].length)
                    for (let i = 0; i < message["package"].length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message["package"][i]);
                if (message.skip != null && Object.hasOwnProperty.call(message, "skip"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.skip);
                if (message.fieldIds != null && message.fieldIds.length) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork();
                    for (let i = 0; i < message.fieldIds.length; ++i)
                        writer.uint32(message.fieldIds[i]);
                    writer.ldelim();
                }
                if (message.fieldGroupIds != null && message.fieldGroupIds.length) {
                    writer.uint32(/* id 5, wireType 2 =*/42).fork();
                    for (let i = 0; i < message.fieldGroupIds.length; ++i)
                        writer.uint32(message.fieldGroupIds[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified Projection message, length delimited. Does not implicitly {@link exocore.store.Projection.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.Projection
             * @static
             * @param {exocore.store.IProjection} message Projection message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Projection.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Projection message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.Projection
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.Projection} Projection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Projection.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.Projection();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message["package"] && message["package"].length))
                            message["package"] = [];
                        message["package"].push(reader.string());
                        break;
                    case 2:
                        message.skip = reader.bool();
                        break;
                    case 4:
                        if (!(message.fieldIds && message.fieldIds.length))
                            message.fieldIds = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.fieldIds.push(reader.uint32());
                        } else
                            message.fieldIds.push(reader.uint32());
                        break;
                    case 5:
                        if (!(message.fieldGroupIds && message.fieldGroupIds.length))
                            message.fieldGroupIds = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.fieldGroupIds.push(reader.uint32());
                        } else
                            message.fieldGroupIds.push(reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Projection message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.Projection
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.Projection} Projection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Projection.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Projection message.
             * @function verify
             * @memberof exocore.store.Projection
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Projection.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message["package"] != null && message.hasOwnProperty("package")) {
                    if (!Array.isArray(message["package"]))
                        return "package: array expected";
                    for (let i = 0; i < message["package"].length; ++i)
                        if (!$util.isString(message["package"][i]))
                            return "package: string[] expected";
                }
                if (message.skip != null && message.hasOwnProperty("skip"))
                    if (typeof message.skip !== "boolean")
                        return "skip: boolean expected";
                if (message.fieldIds != null && message.hasOwnProperty("fieldIds")) {
                    if (!Array.isArray(message.fieldIds))
                        return "fieldIds: array expected";
                    for (let i = 0; i < message.fieldIds.length; ++i)
                        if (!$util.isInteger(message.fieldIds[i]))
                            return "fieldIds: integer[] expected";
                }
                if (message.fieldGroupIds != null && message.hasOwnProperty("fieldGroupIds")) {
                    if (!Array.isArray(message.fieldGroupIds))
                        return "fieldGroupIds: array expected";
                    for (let i = 0; i < message.fieldGroupIds.length; ++i)
                        if (!$util.isInteger(message.fieldGroupIds[i]))
                            return "fieldGroupIds: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a Projection message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.Projection
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.Projection} Projection
             */
            Projection.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.Projection)
                    return object;
                let message = new $root.exocore.store.Projection();
                if (object["package"]) {
                    if (!Array.isArray(object["package"]))
                        throw TypeError(".exocore.store.Projection.package: array expected");
                    message["package"] = [];
                    for (let i = 0; i < object["package"].length; ++i)
                        message["package"][i] = String(object["package"][i]);
                }
                if (object.skip != null)
                    message.skip = Boolean(object.skip);
                if (object.fieldIds) {
                    if (!Array.isArray(object.fieldIds))
                        throw TypeError(".exocore.store.Projection.fieldIds: array expected");
                    message.fieldIds = [];
                    for (let i = 0; i < object.fieldIds.length; ++i)
                        message.fieldIds[i] = object.fieldIds[i] >>> 0;
                }
                if (object.fieldGroupIds) {
                    if (!Array.isArray(object.fieldGroupIds))
                        throw TypeError(".exocore.store.Projection.fieldGroupIds: array expected");
                    message.fieldGroupIds = [];
                    for (let i = 0; i < object.fieldGroupIds.length; ++i)
                        message.fieldGroupIds[i] = object.fieldGroupIds[i] >>> 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a Projection message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.Projection
             * @static
             * @param {exocore.store.Projection} message Projection
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Projection.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object["package"] = [];
                    object.fieldIds = [];
                    object.fieldGroupIds = [];
                }
                if (options.defaults)
                    object.skip = false;
                if (message["package"] && message["package"].length) {
                    object["package"] = [];
                    for (let j = 0; j < message["package"].length; ++j)
                        object["package"][j] = message["package"][j];
                }
                if (message.skip != null && message.hasOwnProperty("skip"))
                    object.skip = message.skip;
                if (message.fieldIds && message.fieldIds.length) {
                    object.fieldIds = [];
                    for (let j = 0; j < message.fieldIds.length; ++j)
                        object.fieldIds[j] = message.fieldIds[j];
                }
                if (message.fieldGroupIds && message.fieldGroupIds.length) {
                    object.fieldGroupIds = [];
                    for (let j = 0; j < message.fieldGroupIds.length; ++j)
                        object.fieldGroupIds[j] = message.fieldGroupIds[j];
                }
                return object;
            };

            /**
             * Converts this Projection to JSON.
             * @function toJSON
             * @memberof exocore.store.Projection
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Projection.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Projection;
        })();

        store.MatchPredicate = (function() {

            /**
             * Properties of a MatchPredicate.
             * @memberof exocore.store
             * @interface IMatchPredicate
             * @property {string|null} [query] MatchPredicate query
             */

            /**
             * Constructs a new MatchPredicate.
             * @memberof exocore.store
             * @classdesc Query entities by text match on all indexed fields across all traits.
             * @implements IMatchPredicate
             * @constructor
             * @param {exocore.store.IMatchPredicate=} [properties] Properties to set
             */
            function MatchPredicate(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MatchPredicate query.
             * @member {string} query
             * @memberof exocore.store.MatchPredicate
             * @instance
             */
            MatchPredicate.prototype.query = "";

            /**
             * Creates a new MatchPredicate instance using the specified properties.
             * @function create
             * @memberof exocore.store.MatchPredicate
             * @static
             * @param {exocore.store.IMatchPredicate=} [properties] Properties to set
             * @returns {exocore.store.MatchPredicate} MatchPredicate instance
             */
            MatchPredicate.create = function create(properties) {
                return new MatchPredicate(properties);
            };

            /**
             * Encodes the specified MatchPredicate message. Does not implicitly {@link exocore.store.MatchPredicate.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.MatchPredicate
             * @static
             * @param {exocore.store.IMatchPredicate} message MatchPredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MatchPredicate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.query);
                return writer;
            };

            /**
             * Encodes the specified MatchPredicate message, length delimited. Does not implicitly {@link exocore.store.MatchPredicate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.MatchPredicate
             * @static
             * @param {exocore.store.IMatchPredicate} message MatchPredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MatchPredicate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MatchPredicate message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.MatchPredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.MatchPredicate} MatchPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MatchPredicate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.MatchPredicate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.query = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MatchPredicate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.MatchPredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.MatchPredicate} MatchPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MatchPredicate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MatchPredicate message.
             * @function verify
             * @memberof exocore.store.MatchPredicate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MatchPredicate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.query != null && message.hasOwnProperty("query"))
                    if (!$util.isString(message.query))
                        return "query: string expected";
                return null;
            };

            /**
             * Creates a MatchPredicate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.MatchPredicate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.MatchPredicate} MatchPredicate
             */
            MatchPredicate.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.MatchPredicate)
                    return object;
                let message = new $root.exocore.store.MatchPredicate();
                if (object.query != null)
                    message.query = String(object.query);
                return message;
            };

            /**
             * Creates a plain object from a MatchPredicate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.MatchPredicate
             * @static
             * @param {exocore.store.MatchPredicate} message MatchPredicate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MatchPredicate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.query = "";
                if (message.query != null && message.hasOwnProperty("query"))
                    object.query = message.query;
                return object;
            };

            /**
             * Converts this MatchPredicate to JSON.
             * @function toJSON
             * @memberof exocore.store.MatchPredicate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MatchPredicate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MatchPredicate;
        })();

        store.IdsPredicate = (function() {

            /**
             * Properties of an IdsPredicate.
             * @memberof exocore.store
             * @interface IIdsPredicate
             * @property {Array.<string>|null} [ids] IdsPredicate ids
             */

            /**
             * Constructs a new IdsPredicate.
             * @memberof exocore.store
             * @classdesc Query entities by IDs.
             * @implements IIdsPredicate
             * @constructor
             * @param {exocore.store.IIdsPredicate=} [properties] Properties to set
             */
            function IdsPredicate(properties) {
                this.ids = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IdsPredicate ids.
             * @member {Array.<string>} ids
             * @memberof exocore.store.IdsPredicate
             * @instance
             */
            IdsPredicate.prototype.ids = $util.emptyArray;

            /**
             * Creates a new IdsPredicate instance using the specified properties.
             * @function create
             * @memberof exocore.store.IdsPredicate
             * @static
             * @param {exocore.store.IIdsPredicate=} [properties] Properties to set
             * @returns {exocore.store.IdsPredicate} IdsPredicate instance
             */
            IdsPredicate.create = function create(properties) {
                return new IdsPredicate(properties);
            };

            /**
             * Encodes the specified IdsPredicate message. Does not implicitly {@link exocore.store.IdsPredicate.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.IdsPredicate
             * @static
             * @param {exocore.store.IIdsPredicate} message IdsPredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IdsPredicate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ids != null && message.ids.length)
                    for (let i = 0; i < message.ids.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.ids[i]);
                return writer;
            };

            /**
             * Encodes the specified IdsPredicate message, length delimited. Does not implicitly {@link exocore.store.IdsPredicate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.IdsPredicate
             * @static
             * @param {exocore.store.IIdsPredicate} message IdsPredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IdsPredicate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an IdsPredicate message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.IdsPredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.IdsPredicate} IdsPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IdsPredicate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.IdsPredicate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.ids && message.ids.length))
                            message.ids = [];
                        message.ids.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an IdsPredicate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.IdsPredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.IdsPredicate} IdsPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IdsPredicate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an IdsPredicate message.
             * @function verify
             * @memberof exocore.store.IdsPredicate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IdsPredicate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ids != null && message.hasOwnProperty("ids")) {
                    if (!Array.isArray(message.ids))
                        return "ids: array expected";
                    for (let i = 0; i < message.ids.length; ++i)
                        if (!$util.isString(message.ids[i]))
                            return "ids: string[] expected";
                }
                return null;
            };

            /**
             * Creates an IdsPredicate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.IdsPredicate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.IdsPredicate} IdsPredicate
             */
            IdsPredicate.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.IdsPredicate)
                    return object;
                let message = new $root.exocore.store.IdsPredicate();
                if (object.ids) {
                    if (!Array.isArray(object.ids))
                        throw TypeError(".exocore.store.IdsPredicate.ids: array expected");
                    message.ids = [];
                    for (let i = 0; i < object.ids.length; ++i)
                        message.ids[i] = String(object.ids[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from an IdsPredicate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.IdsPredicate
             * @static
             * @param {exocore.store.IdsPredicate} message IdsPredicate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IdsPredicate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.ids = [];
                if (message.ids && message.ids.length) {
                    object.ids = [];
                    for (let j = 0; j < message.ids.length; ++j)
                        object.ids[j] = message.ids[j];
                }
                return object;
            };

            /**
             * Converts this IdsPredicate to JSON.
             * @function toJSON
             * @memberof exocore.store.IdsPredicate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IdsPredicate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return IdsPredicate;
        })();

        store.OperationsPredicate = (function() {

            /**
             * Properties of an OperationsPredicate.
             * @memberof exocore.store
             * @interface IOperationsPredicate
             * @property {Array.<number|Long>|null} [operationIds] OperationsPredicate operationIds
             */

            /**
             * Constructs a new OperationsPredicate.
             * @memberof exocore.store
             * @classdesc Used to return entities on which mutations with these operation ids were applied and indexed.
             * @implements IOperationsPredicate
             * @constructor
             * @param {exocore.store.IOperationsPredicate=} [properties] Properties to set
             */
            function OperationsPredicate(properties) {
                this.operationIds = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OperationsPredicate operationIds.
             * @member {Array.<number|Long>} operationIds
             * @memberof exocore.store.OperationsPredicate
             * @instance
             */
            OperationsPredicate.prototype.operationIds = $util.emptyArray;

            /**
             * Creates a new OperationsPredicate instance using the specified properties.
             * @function create
             * @memberof exocore.store.OperationsPredicate
             * @static
             * @param {exocore.store.IOperationsPredicate=} [properties] Properties to set
             * @returns {exocore.store.OperationsPredicate} OperationsPredicate instance
             */
            OperationsPredicate.create = function create(properties) {
                return new OperationsPredicate(properties);
            };

            /**
             * Encodes the specified OperationsPredicate message. Does not implicitly {@link exocore.store.OperationsPredicate.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.OperationsPredicate
             * @static
             * @param {exocore.store.IOperationsPredicate} message OperationsPredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperationsPredicate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.operationIds != null && message.operationIds.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (let i = 0; i < message.operationIds.length; ++i)
                        writer.uint64(message.operationIds[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified OperationsPredicate message, length delimited. Does not implicitly {@link exocore.store.OperationsPredicate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.OperationsPredicate
             * @static
             * @param {exocore.store.IOperationsPredicate} message OperationsPredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperationsPredicate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OperationsPredicate message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.OperationsPredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.OperationsPredicate} OperationsPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperationsPredicate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.OperationsPredicate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.operationIds && message.operationIds.length))
                            message.operationIds = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.operationIds.push(reader.uint64());
                        } else
                            message.operationIds.push(reader.uint64());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OperationsPredicate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.OperationsPredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.OperationsPredicate} OperationsPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperationsPredicate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OperationsPredicate message.
             * @function verify
             * @memberof exocore.store.OperationsPredicate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OperationsPredicate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.operationIds != null && message.hasOwnProperty("operationIds")) {
                    if (!Array.isArray(message.operationIds))
                        return "operationIds: array expected";
                    for (let i = 0; i < message.operationIds.length; ++i)
                        if (!$util.isInteger(message.operationIds[i]) && !(message.operationIds[i] && $util.isInteger(message.operationIds[i].low) && $util.isInteger(message.operationIds[i].high)))
                            return "operationIds: integer|Long[] expected";
                }
                return null;
            };

            /**
             * Creates an OperationsPredicate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.OperationsPredicate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.OperationsPredicate} OperationsPredicate
             */
            OperationsPredicate.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.OperationsPredicate)
                    return object;
                let message = new $root.exocore.store.OperationsPredicate();
                if (object.operationIds) {
                    if (!Array.isArray(object.operationIds))
                        throw TypeError(".exocore.store.OperationsPredicate.operationIds: array expected");
                    message.operationIds = [];
                    for (let i = 0; i < object.operationIds.length; ++i)
                        if ($util.Long)
                            (message.operationIds[i] = $util.Long.fromValue(object.operationIds[i])).unsigned = true;
                        else if (typeof object.operationIds[i] === "string")
                            message.operationIds[i] = parseInt(object.operationIds[i], 10);
                        else if (typeof object.operationIds[i] === "number")
                            message.operationIds[i] = object.operationIds[i];
                        else if (typeof object.operationIds[i] === "object")
                            message.operationIds[i] = new $util.LongBits(object.operationIds[i].low >>> 0, object.operationIds[i].high >>> 0).toNumber(true);
                }
                return message;
            };

            /**
             * Creates a plain object from an OperationsPredicate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.OperationsPredicate
             * @static
             * @param {exocore.store.OperationsPredicate} message OperationsPredicate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OperationsPredicate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.operationIds = [];
                if (message.operationIds && message.operationIds.length) {
                    object.operationIds = [];
                    for (let j = 0; j < message.operationIds.length; ++j)
                        if (typeof message.operationIds[j] === "number")
                            object.operationIds[j] = options.longs === String ? String(message.operationIds[j]) : message.operationIds[j];
                        else
                            object.operationIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.operationIds[j]) : options.longs === Number ? new $util.LongBits(message.operationIds[j].low >>> 0, message.operationIds[j].high >>> 0).toNumber(true) : message.operationIds[j];
                }
                return object;
            };

            /**
             * Converts this OperationsPredicate to JSON.
             * @function toJSON
             * @memberof exocore.store.OperationsPredicate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OperationsPredicate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OperationsPredicate;
        })();

        store.AllPredicate = (function() {

            /**
             * Properties of an AllPredicate.
             * @memberof exocore.store
             * @interface IAllPredicate
             */

            /**
             * Constructs a new AllPredicate.
             * @memberof exocore.store
             * @classdesc Query all entities.
             * @implements IAllPredicate
             * @constructor
             * @param {exocore.store.IAllPredicate=} [properties] Properties to set
             */
            function AllPredicate(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new AllPredicate instance using the specified properties.
             * @function create
             * @memberof exocore.store.AllPredicate
             * @static
             * @param {exocore.store.IAllPredicate=} [properties] Properties to set
             * @returns {exocore.store.AllPredicate} AllPredicate instance
             */
            AllPredicate.create = function create(properties) {
                return new AllPredicate(properties);
            };

            /**
             * Encodes the specified AllPredicate message. Does not implicitly {@link exocore.store.AllPredicate.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.AllPredicate
             * @static
             * @param {exocore.store.IAllPredicate} message AllPredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllPredicate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified AllPredicate message, length delimited. Does not implicitly {@link exocore.store.AllPredicate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.AllPredicate
             * @static
             * @param {exocore.store.IAllPredicate} message AllPredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllPredicate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AllPredicate message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.AllPredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.AllPredicate} AllPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllPredicate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.AllPredicate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AllPredicate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.AllPredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.AllPredicate} AllPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllPredicate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AllPredicate message.
             * @function verify
             * @memberof exocore.store.AllPredicate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AllPredicate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an AllPredicate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.AllPredicate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.AllPredicate} AllPredicate
             */
            AllPredicate.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.AllPredicate)
                    return object;
                return new $root.exocore.store.AllPredicate();
            };

            /**
             * Creates a plain object from an AllPredicate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.AllPredicate
             * @static
             * @param {exocore.store.AllPredicate} message AllPredicate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AllPredicate.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this AllPredicate to JSON.
             * @function toJSON
             * @memberof exocore.store.AllPredicate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AllPredicate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AllPredicate;
        })();

        store.TestPredicate = (function() {

            /**
             * Properties of a TestPredicate.
             * @memberof exocore.store
             * @interface ITestPredicate
             * @property {boolean|null} [success] TestPredicate success
             */

            /**
             * Constructs a new TestPredicate.
             * @memberof exocore.store
             * @classdesc Used for tests.
             * @implements ITestPredicate
             * @constructor
             * @param {exocore.store.ITestPredicate=} [properties] Properties to set
             */
            function TestPredicate(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TestPredicate success.
             * @member {boolean} success
             * @memberof exocore.store.TestPredicate
             * @instance
             */
            TestPredicate.prototype.success = false;

            /**
             * Creates a new TestPredicate instance using the specified properties.
             * @function create
             * @memberof exocore.store.TestPredicate
             * @static
             * @param {exocore.store.ITestPredicate=} [properties] Properties to set
             * @returns {exocore.store.TestPredicate} TestPredicate instance
             */
            TestPredicate.create = function create(properties) {
                return new TestPredicate(properties);
            };

            /**
             * Encodes the specified TestPredicate message. Does not implicitly {@link exocore.store.TestPredicate.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.TestPredicate
             * @static
             * @param {exocore.store.ITestPredicate} message TestPredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestPredicate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
                return writer;
            };

            /**
             * Encodes the specified TestPredicate message, length delimited. Does not implicitly {@link exocore.store.TestPredicate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.TestPredicate
             * @static
             * @param {exocore.store.ITestPredicate} message TestPredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestPredicate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestPredicate message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.TestPredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.TestPredicate} TestPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestPredicate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.TestPredicate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.success = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TestPredicate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.TestPredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.TestPredicate} TestPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestPredicate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestPredicate message.
             * @function verify
             * @memberof exocore.store.TestPredicate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestPredicate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.success != null && message.hasOwnProperty("success"))
                    if (typeof message.success !== "boolean")
                        return "success: boolean expected";
                return null;
            };

            /**
             * Creates a TestPredicate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.TestPredicate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.TestPredicate} TestPredicate
             */
            TestPredicate.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.TestPredicate)
                    return object;
                let message = new $root.exocore.store.TestPredicate();
                if (object.success != null)
                    message.success = Boolean(object.success);
                return message;
            };

            /**
             * Creates a plain object from a TestPredicate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.TestPredicate
             * @static
             * @param {exocore.store.TestPredicate} message TestPredicate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestPredicate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.success = false;
                if (message.success != null && message.hasOwnProperty("success"))
                    object.success = message.success;
                return object;
            };

            /**
             * Converts this TestPredicate to JSON.
             * @function toJSON
             * @memberof exocore.store.TestPredicate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestPredicate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TestPredicate;
        })();

        store.TraitPredicate = (function() {

            /**
             * Properties of a TraitPredicate.
             * @memberof exocore.store
             * @interface ITraitPredicate
             * @property {string|null} [traitName] TraitPredicate traitName
             * @property {exocore.store.ITraitQuery|null} [query] TraitPredicate query
             */

            /**
             * Constructs a new TraitPredicate.
             * @memberof exocore.store
             * @classdesc Query entities that have a specified trait and optionally matching a trait query.
             * @implements ITraitPredicate
             * @constructor
             * @param {exocore.store.ITraitPredicate=} [properties] Properties to set
             */
            function TraitPredicate(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TraitPredicate traitName.
             * @member {string} traitName
             * @memberof exocore.store.TraitPredicate
             * @instance
             */
            TraitPredicate.prototype.traitName = "";

            /**
             * TraitPredicate query.
             * @member {exocore.store.ITraitQuery|null|undefined} query
             * @memberof exocore.store.TraitPredicate
             * @instance
             */
            TraitPredicate.prototype.query = null;

            /**
             * Creates a new TraitPredicate instance using the specified properties.
             * @function create
             * @memberof exocore.store.TraitPredicate
             * @static
             * @param {exocore.store.ITraitPredicate=} [properties] Properties to set
             * @returns {exocore.store.TraitPredicate} TraitPredicate instance
             */
            TraitPredicate.create = function create(properties) {
                return new TraitPredicate(properties);
            };

            /**
             * Encodes the specified TraitPredicate message. Does not implicitly {@link exocore.store.TraitPredicate.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.TraitPredicate
             * @static
             * @param {exocore.store.ITraitPredicate} message TraitPredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TraitPredicate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.traitName != null && Object.hasOwnProperty.call(message, "traitName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.traitName);
                if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                    $root.exocore.store.TraitQuery.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TraitPredicate message, length delimited. Does not implicitly {@link exocore.store.TraitPredicate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.TraitPredicate
             * @static
             * @param {exocore.store.ITraitPredicate} message TraitPredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TraitPredicate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TraitPredicate message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.TraitPredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.TraitPredicate} TraitPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TraitPredicate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.TraitPredicate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.traitName = reader.string();
                        break;
                    case 2:
                        message.query = $root.exocore.store.TraitQuery.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TraitPredicate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.TraitPredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.TraitPredicate} TraitPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TraitPredicate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TraitPredicate message.
             * @function verify
             * @memberof exocore.store.TraitPredicate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TraitPredicate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.traitName != null && message.hasOwnProperty("traitName"))
                    if (!$util.isString(message.traitName))
                        return "traitName: string expected";
                if (message.query != null && message.hasOwnProperty("query")) {
                    let error = $root.exocore.store.TraitQuery.verify(message.query);
                    if (error)
                        return "query." + error;
                }
                return null;
            };

            /**
             * Creates a TraitPredicate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.TraitPredicate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.TraitPredicate} TraitPredicate
             */
            TraitPredicate.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.TraitPredicate)
                    return object;
                let message = new $root.exocore.store.TraitPredicate();
                if (object.traitName != null)
                    message.traitName = String(object.traitName);
                if (object.query != null) {
                    if (typeof object.query !== "object")
                        throw TypeError(".exocore.store.TraitPredicate.query: object expected");
                    message.query = $root.exocore.store.TraitQuery.fromObject(object.query);
                }
                return message;
            };

            /**
             * Creates a plain object from a TraitPredicate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.TraitPredicate
             * @static
             * @param {exocore.store.TraitPredicate} message TraitPredicate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TraitPredicate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.traitName = "";
                    object.query = null;
                }
                if (message.traitName != null && message.hasOwnProperty("traitName"))
                    object.traitName = message.traitName;
                if (message.query != null && message.hasOwnProperty("query"))
                    object.query = $root.exocore.store.TraitQuery.toObject(message.query, options);
                return object;
            };

            /**
             * Converts this TraitPredicate to JSON.
             * @function toJSON
             * @memberof exocore.store.TraitPredicate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TraitPredicate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TraitPredicate;
        })();

        store.TraitQuery = (function() {

            /**
             * Properties of a TraitQuery.
             * @memberof exocore.store
             * @interface ITraitQuery
             * @property {exocore.store.IMatchPredicate|null} [match] TraitQuery match
             * @property {exocore.store.ITraitFieldPredicate|null} [field] TraitQuery field
             * @property {exocore.store.ITraitFieldReferencePredicate|null} [reference] TraitQuery reference
             */

            /**
             * Constructs a new TraitQuery.
             * @memberof exocore.store
             * @classdesc Represents a TraitQuery.
             * @implements ITraitQuery
             * @constructor
             * @param {exocore.store.ITraitQuery=} [properties] Properties to set
             */
            function TraitQuery(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TraitQuery match.
             * @member {exocore.store.IMatchPredicate|null|undefined} match
             * @memberof exocore.store.TraitQuery
             * @instance
             */
            TraitQuery.prototype.match = null;

            /**
             * TraitQuery field.
             * @member {exocore.store.ITraitFieldPredicate|null|undefined} field
             * @memberof exocore.store.TraitQuery
             * @instance
             */
            TraitQuery.prototype.field = null;

            /**
             * TraitQuery reference.
             * @member {exocore.store.ITraitFieldReferencePredicate|null|undefined} reference
             * @memberof exocore.store.TraitQuery
             * @instance
             */
            TraitQuery.prototype.reference = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * TraitQuery predicate.
             * @member {"match"|"field"|"reference"|undefined} predicate
             * @memberof exocore.store.TraitQuery
             * @instance
             */
            Object.defineProperty(TraitQuery.prototype, "predicate", {
                get: $util.oneOfGetter($oneOfFields = ["match", "field", "reference"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TraitQuery instance using the specified properties.
             * @function create
             * @memberof exocore.store.TraitQuery
             * @static
             * @param {exocore.store.ITraitQuery=} [properties] Properties to set
             * @returns {exocore.store.TraitQuery} TraitQuery instance
             */
            TraitQuery.create = function create(properties) {
                return new TraitQuery(properties);
            };

            /**
             * Encodes the specified TraitQuery message. Does not implicitly {@link exocore.store.TraitQuery.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.TraitQuery
             * @static
             * @param {exocore.store.ITraitQuery} message TraitQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TraitQuery.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.match != null && Object.hasOwnProperty.call(message, "match"))
                    $root.exocore.store.MatchPredicate.encode(message.match, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.field != null && Object.hasOwnProperty.call(message, "field"))
                    $root.exocore.store.TraitFieldPredicate.encode(message.field, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.reference != null && Object.hasOwnProperty.call(message, "reference"))
                    $root.exocore.store.TraitFieldReferencePredicate.encode(message.reference, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TraitQuery message, length delimited. Does not implicitly {@link exocore.store.TraitQuery.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.TraitQuery
             * @static
             * @param {exocore.store.ITraitQuery} message TraitQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TraitQuery.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TraitQuery message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.TraitQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.TraitQuery} TraitQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TraitQuery.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.TraitQuery();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.match = $root.exocore.store.MatchPredicate.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.field = $root.exocore.store.TraitFieldPredicate.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.reference = $root.exocore.store.TraitFieldReferencePredicate.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TraitQuery message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.TraitQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.TraitQuery} TraitQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TraitQuery.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TraitQuery message.
             * @function verify
             * @memberof exocore.store.TraitQuery
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TraitQuery.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.match != null && message.hasOwnProperty("match")) {
                    properties.predicate = 1;
                    {
                        let error = $root.exocore.store.MatchPredicate.verify(message.match);
                        if (error)
                            return "match." + error;
                    }
                }
                if (message.field != null && message.hasOwnProperty("field")) {
                    if (properties.predicate === 1)
                        return "predicate: multiple values";
                    properties.predicate = 1;
                    {
                        let error = $root.exocore.store.TraitFieldPredicate.verify(message.field);
                        if (error)
                            return "field." + error;
                    }
                }
                if (message.reference != null && message.hasOwnProperty("reference")) {
                    if (properties.predicate === 1)
                        return "predicate: multiple values";
                    properties.predicate = 1;
                    {
                        let error = $root.exocore.store.TraitFieldReferencePredicate.verify(message.reference);
                        if (error)
                            return "reference." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TraitQuery message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.TraitQuery
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.TraitQuery} TraitQuery
             */
            TraitQuery.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.TraitQuery)
                    return object;
                let message = new $root.exocore.store.TraitQuery();
                if (object.match != null) {
                    if (typeof object.match !== "object")
                        throw TypeError(".exocore.store.TraitQuery.match: object expected");
                    message.match = $root.exocore.store.MatchPredicate.fromObject(object.match);
                }
                if (object.field != null) {
                    if (typeof object.field !== "object")
                        throw TypeError(".exocore.store.TraitQuery.field: object expected");
                    message.field = $root.exocore.store.TraitFieldPredicate.fromObject(object.field);
                }
                if (object.reference != null) {
                    if (typeof object.reference !== "object")
                        throw TypeError(".exocore.store.TraitQuery.reference: object expected");
                    message.reference = $root.exocore.store.TraitFieldReferencePredicate.fromObject(object.reference);
                }
                return message;
            };

            /**
             * Creates a plain object from a TraitQuery message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.TraitQuery
             * @static
             * @param {exocore.store.TraitQuery} message TraitQuery
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TraitQuery.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (message.match != null && message.hasOwnProperty("match")) {
                    object.match = $root.exocore.store.MatchPredicate.toObject(message.match, options);
                    if (options.oneofs)
                        object.predicate = "match";
                }
                if (message.field != null && message.hasOwnProperty("field")) {
                    object.field = $root.exocore.store.TraitFieldPredicate.toObject(message.field, options);
                    if (options.oneofs)
                        object.predicate = "field";
                }
                if (message.reference != null && message.hasOwnProperty("reference")) {
                    object.reference = $root.exocore.store.TraitFieldReferencePredicate.toObject(message.reference, options);
                    if (options.oneofs)
                        object.predicate = "reference";
                }
                return object;
            };

            /**
             * Converts this TraitQuery to JSON.
             * @function toJSON
             * @memberof exocore.store.TraitQuery
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TraitQuery.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TraitQuery;
        })();

        store.TraitFieldPredicate = (function() {

            /**
             * Properties of a TraitFieldPredicate.
             * @memberof exocore.store
             * @interface ITraitFieldPredicate
             * @property {string|null} [field] TraitFieldPredicate field
             * @property {string|null} [string] TraitFieldPredicate string
             * @property {number|Long|null} [int64] TraitFieldPredicate int64
             * @property {number|Long|null} [uint64] TraitFieldPredicate uint64
             * @property {google.protobuf.ITimestamp|null} [date] TraitFieldPredicate date
             * @property {exocore.store.TraitFieldPredicate.Operator|null} [operator] TraitFieldPredicate operator
             */

            /**
             * Constructs a new TraitFieldPredicate.
             * @memberof exocore.store
             * @classdesc Represents a TraitFieldPredicate.
             * @implements ITraitFieldPredicate
             * @constructor
             * @param {exocore.store.ITraitFieldPredicate=} [properties] Properties to set
             */
            function TraitFieldPredicate(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TraitFieldPredicate field.
             * @member {string} field
             * @memberof exocore.store.TraitFieldPredicate
             * @instance
             */
            TraitFieldPredicate.prototype.field = "";

            /**
             * TraitFieldPredicate string.
             * @member {string} string
             * @memberof exocore.store.TraitFieldPredicate
             * @instance
             */
            TraitFieldPredicate.prototype.string = "";

            /**
             * TraitFieldPredicate int64.
             * @member {number|Long} int64
             * @memberof exocore.store.TraitFieldPredicate
             * @instance
             */
            TraitFieldPredicate.prototype.int64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TraitFieldPredicate uint64.
             * @member {number|Long} uint64
             * @memberof exocore.store.TraitFieldPredicate
             * @instance
             */
            TraitFieldPredicate.prototype.uint64 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * TraitFieldPredicate date.
             * @member {google.protobuf.ITimestamp|null|undefined} date
             * @memberof exocore.store.TraitFieldPredicate
             * @instance
             */
            TraitFieldPredicate.prototype.date = null;

            /**
             * TraitFieldPredicate operator.
             * @member {exocore.store.TraitFieldPredicate.Operator} operator
             * @memberof exocore.store.TraitFieldPredicate
             * @instance
             */
            TraitFieldPredicate.prototype.operator = 0;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * TraitFieldPredicate value.
             * @member {"string"|"int64"|"uint64"|"date"|undefined} value
             * @memberof exocore.store.TraitFieldPredicate
             * @instance
             */
            Object.defineProperty(TraitFieldPredicate.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["string", "int64", "uint64", "date"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TraitFieldPredicate instance using the specified properties.
             * @function create
             * @memberof exocore.store.TraitFieldPredicate
             * @static
             * @param {exocore.store.ITraitFieldPredicate=} [properties] Properties to set
             * @returns {exocore.store.TraitFieldPredicate} TraitFieldPredicate instance
             */
            TraitFieldPredicate.create = function create(properties) {
                return new TraitFieldPredicate(properties);
            };

            /**
             * Encodes the specified TraitFieldPredicate message. Does not implicitly {@link exocore.store.TraitFieldPredicate.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.TraitFieldPredicate
             * @static
             * @param {exocore.store.ITraitFieldPredicate} message TraitFieldPredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TraitFieldPredicate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.field != null && Object.hasOwnProperty.call(message, "field"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.field);
                if (message.string != null && Object.hasOwnProperty.call(message, "string"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.string);
                if (message.int64 != null && Object.hasOwnProperty.call(message, "int64"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.int64);
                if (message.uint64 != null && Object.hasOwnProperty.call(message, "uint64"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.uint64);
                if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                    $root.google.protobuf.Timestamp.encode(message.date, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.operator != null && Object.hasOwnProperty.call(message, "operator"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.operator);
                return writer;
            };

            /**
             * Encodes the specified TraitFieldPredicate message, length delimited. Does not implicitly {@link exocore.store.TraitFieldPredicate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.TraitFieldPredicate
             * @static
             * @param {exocore.store.ITraitFieldPredicate} message TraitFieldPredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TraitFieldPredicate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TraitFieldPredicate message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.TraitFieldPredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.TraitFieldPredicate} TraitFieldPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TraitFieldPredicate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.TraitFieldPredicate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.field = reader.string();
                        break;
                    case 2:
                        message.string = reader.string();
                        break;
                    case 3:
                        message.int64 = reader.int64();
                        break;
                    case 4:
                        message.uint64 = reader.uint64();
                        break;
                    case 5:
                        message.date = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.operator = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TraitFieldPredicate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.TraitFieldPredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.TraitFieldPredicate} TraitFieldPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TraitFieldPredicate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TraitFieldPredicate message.
             * @function verify
             * @memberof exocore.store.TraitFieldPredicate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TraitFieldPredicate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.field != null && message.hasOwnProperty("field"))
                    if (!$util.isString(message.field))
                        return "field: string expected";
                if (message.string != null && message.hasOwnProperty("string")) {
                    properties.value = 1;
                    if (!$util.isString(message.string))
                        return "string: string expected";
                }
                if (message.int64 != null && message.hasOwnProperty("int64")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isInteger(message.int64) && !(message.int64 && $util.isInteger(message.int64.low) && $util.isInteger(message.int64.high)))
                        return "int64: integer|Long expected";
                }
                if (message.uint64 != null && message.hasOwnProperty("uint64")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isInteger(message.uint64) && !(message.uint64 && $util.isInteger(message.uint64.low) && $util.isInteger(message.uint64.high)))
                        return "uint64: integer|Long expected";
                }
                if (message.date != null && message.hasOwnProperty("date")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.google.protobuf.Timestamp.verify(message.date);
                        if (error)
                            return "date." + error;
                    }
                }
                if (message.operator != null && message.hasOwnProperty("operator"))
                    switch (message.operator) {
                    default:
                        return "operator: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                return null;
            };

            /**
             * Creates a TraitFieldPredicate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.TraitFieldPredicate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.TraitFieldPredicate} TraitFieldPredicate
             */
            TraitFieldPredicate.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.TraitFieldPredicate)
                    return object;
                let message = new $root.exocore.store.TraitFieldPredicate();
                if (object.field != null)
                    message.field = String(object.field);
                if (object.string != null)
                    message.string = String(object.string);
                if (object.int64 != null)
                    if ($util.Long)
                        (message.int64 = $util.Long.fromValue(object.int64)).unsigned = false;
                    else if (typeof object.int64 === "string")
                        message.int64 = parseInt(object.int64, 10);
                    else if (typeof object.int64 === "number")
                        message.int64 = object.int64;
                    else if (typeof object.int64 === "object")
                        message.int64 = new $util.LongBits(object.int64.low >>> 0, object.int64.high >>> 0).toNumber();
                if (object.uint64 != null)
                    if ($util.Long)
                        (message.uint64 = $util.Long.fromValue(object.uint64)).unsigned = true;
                    else if (typeof object.uint64 === "string")
                        message.uint64 = parseInt(object.uint64, 10);
                    else if (typeof object.uint64 === "number")
                        message.uint64 = object.uint64;
                    else if (typeof object.uint64 === "object")
                        message.uint64 = new $util.LongBits(object.uint64.low >>> 0, object.uint64.high >>> 0).toNumber(true);
                if (object.date != null) {
                    if (typeof object.date !== "object")
                        throw TypeError(".exocore.store.TraitFieldPredicate.date: object expected");
                    message.date = $root.google.protobuf.Timestamp.fromObject(object.date);
                }
                switch (object.operator) {
                case "EQUAL":
                case 0:
                    message.operator = 0;
                    break;
                case "GT":
                case 1:
                    message.operator = 1;
                    break;
                case "GTE":
                case 2:
                    message.operator = 2;
                    break;
                case "LT":
                case 3:
                    message.operator = 3;
                    break;
                case "LTE":
                case 4:
                    message.operator = 4;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a TraitFieldPredicate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.TraitFieldPredicate
             * @static
             * @param {exocore.store.TraitFieldPredicate} message TraitFieldPredicate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TraitFieldPredicate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.field = "";
                    object.operator = options.enums === String ? "EQUAL" : 0;
                }
                if (message.field != null && message.hasOwnProperty("field"))
                    object.field = message.field;
                if (message.string != null && message.hasOwnProperty("string")) {
                    object.string = message.string;
                    if (options.oneofs)
                        object.value = "string";
                }
                if (message.int64 != null && message.hasOwnProperty("int64")) {
                    if (typeof message.int64 === "number")
                        object.int64 = options.longs === String ? String(message.int64) : message.int64;
                    else
                        object.int64 = options.longs === String ? $util.Long.prototype.toString.call(message.int64) : options.longs === Number ? new $util.LongBits(message.int64.low >>> 0, message.int64.high >>> 0).toNumber() : message.int64;
                    if (options.oneofs)
                        object.value = "int64";
                }
                if (message.uint64 != null && message.hasOwnProperty("uint64")) {
                    if (typeof message.uint64 === "number")
                        object.uint64 = options.longs === String ? String(message.uint64) : message.uint64;
                    else
                        object.uint64 = options.longs === String ? $util.Long.prototype.toString.call(message.uint64) : options.longs === Number ? new $util.LongBits(message.uint64.low >>> 0, message.uint64.high >>> 0).toNumber(true) : message.uint64;
                    if (options.oneofs)
                        object.value = "uint64";
                }
                if (message.date != null && message.hasOwnProperty("date")) {
                    object.date = $root.google.protobuf.Timestamp.toObject(message.date, options);
                    if (options.oneofs)
                        object.value = "date";
                }
                if (message.operator != null && message.hasOwnProperty("operator"))
                    object.operator = options.enums === String ? $root.exocore.store.TraitFieldPredicate.Operator[message.operator] : message.operator;
                return object;
            };

            /**
             * Converts this TraitFieldPredicate to JSON.
             * @function toJSON
             * @memberof exocore.store.TraitFieldPredicate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TraitFieldPredicate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Operator enum.
             * @name exocore.store.TraitFieldPredicate.Operator
             * @enum {number}
             * @property {number} EQUAL=0 EQUAL value
             * @property {number} GT=1 GT value
             * @property {number} GTE=2 GTE value
             * @property {number} LT=3 LT value
             * @property {number} LTE=4 LTE value
             */
            TraitFieldPredicate.Operator = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "EQUAL"] = 0;
                values[valuesById[1] = "GT"] = 1;
                values[valuesById[2] = "GTE"] = 2;
                values[valuesById[3] = "LT"] = 3;
                values[valuesById[4] = "LTE"] = 4;
                return values;
            })();

            return TraitFieldPredicate;
        })();

        store.TraitFieldReferencePredicate = (function() {

            /**
             * Properties of a TraitFieldReferencePredicate.
             * @memberof exocore.store
             * @interface ITraitFieldReferencePredicate
             * @property {string|null} [field] TraitFieldReferencePredicate field
             * @property {exocore.store.IReferencePredicate|null} [reference] TraitFieldReferencePredicate reference
             */

            /**
             * Constructs a new TraitFieldReferencePredicate.
             * @memberof exocore.store
             * @classdesc Represents a TraitFieldReferencePredicate.
             * @implements ITraitFieldReferencePredicate
             * @constructor
             * @param {exocore.store.ITraitFieldReferencePredicate=} [properties] Properties to set
             */
            function TraitFieldReferencePredicate(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TraitFieldReferencePredicate field.
             * @member {string} field
             * @memberof exocore.store.TraitFieldReferencePredicate
             * @instance
             */
            TraitFieldReferencePredicate.prototype.field = "";

            /**
             * TraitFieldReferencePredicate reference.
             * @member {exocore.store.IReferencePredicate|null|undefined} reference
             * @memberof exocore.store.TraitFieldReferencePredicate
             * @instance
             */
            TraitFieldReferencePredicate.prototype.reference = null;

            /**
             * Creates a new TraitFieldReferencePredicate instance using the specified properties.
             * @function create
             * @memberof exocore.store.TraitFieldReferencePredicate
             * @static
             * @param {exocore.store.ITraitFieldReferencePredicate=} [properties] Properties to set
             * @returns {exocore.store.TraitFieldReferencePredicate} TraitFieldReferencePredicate instance
             */
            TraitFieldReferencePredicate.create = function create(properties) {
                return new TraitFieldReferencePredicate(properties);
            };

            /**
             * Encodes the specified TraitFieldReferencePredicate message. Does not implicitly {@link exocore.store.TraitFieldReferencePredicate.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.TraitFieldReferencePredicate
             * @static
             * @param {exocore.store.ITraitFieldReferencePredicate} message TraitFieldReferencePredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TraitFieldReferencePredicate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.field != null && Object.hasOwnProperty.call(message, "field"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.field);
                if (message.reference != null && Object.hasOwnProperty.call(message, "reference"))
                    $root.exocore.store.ReferencePredicate.encode(message.reference, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TraitFieldReferencePredicate message, length delimited. Does not implicitly {@link exocore.store.TraitFieldReferencePredicate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.TraitFieldReferencePredicate
             * @static
             * @param {exocore.store.ITraitFieldReferencePredicate} message TraitFieldReferencePredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TraitFieldReferencePredicate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TraitFieldReferencePredicate message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.TraitFieldReferencePredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.TraitFieldReferencePredicate} TraitFieldReferencePredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TraitFieldReferencePredicate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.TraitFieldReferencePredicate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.field = reader.string();
                        break;
                    case 2:
                        message.reference = $root.exocore.store.ReferencePredicate.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TraitFieldReferencePredicate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.TraitFieldReferencePredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.TraitFieldReferencePredicate} TraitFieldReferencePredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TraitFieldReferencePredicate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TraitFieldReferencePredicate message.
             * @function verify
             * @memberof exocore.store.TraitFieldReferencePredicate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TraitFieldReferencePredicate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.field != null && message.hasOwnProperty("field"))
                    if (!$util.isString(message.field))
                        return "field: string expected";
                if (message.reference != null && message.hasOwnProperty("reference")) {
                    let error = $root.exocore.store.ReferencePredicate.verify(message.reference);
                    if (error)
                        return "reference." + error;
                }
                return null;
            };

            /**
             * Creates a TraitFieldReferencePredicate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.TraitFieldReferencePredicate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.TraitFieldReferencePredicate} TraitFieldReferencePredicate
             */
            TraitFieldReferencePredicate.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.TraitFieldReferencePredicate)
                    return object;
                let message = new $root.exocore.store.TraitFieldReferencePredicate();
                if (object.field != null)
                    message.field = String(object.field);
                if (object.reference != null) {
                    if (typeof object.reference !== "object")
                        throw TypeError(".exocore.store.TraitFieldReferencePredicate.reference: object expected");
                    message.reference = $root.exocore.store.ReferencePredicate.fromObject(object.reference);
                }
                return message;
            };

            /**
             * Creates a plain object from a TraitFieldReferencePredicate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.TraitFieldReferencePredicate
             * @static
             * @param {exocore.store.TraitFieldReferencePredicate} message TraitFieldReferencePredicate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TraitFieldReferencePredicate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.field = "";
                    object.reference = null;
                }
                if (message.field != null && message.hasOwnProperty("field"))
                    object.field = message.field;
                if (message.reference != null && message.hasOwnProperty("reference"))
                    object.reference = $root.exocore.store.ReferencePredicate.toObject(message.reference, options);
                return object;
            };

            /**
             * Converts this TraitFieldReferencePredicate to JSON.
             * @function toJSON
             * @memberof exocore.store.TraitFieldReferencePredicate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TraitFieldReferencePredicate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TraitFieldReferencePredicate;
        })();

        store.ReferencePredicate = (function() {

            /**
             * Properties of a ReferencePredicate.
             * @memberof exocore.store
             * @interface IReferencePredicate
             * @property {string|null} [entityId] ReferencePredicate entityId
             * @property {string|null} [traitId] ReferencePredicate traitId
             */

            /**
             * Constructs a new ReferencePredicate.
             * @memberof exocore.store
             * @classdesc Represents a ReferencePredicate.
             * @implements IReferencePredicate
             * @constructor
             * @param {exocore.store.IReferencePredicate=} [properties] Properties to set
             */
            function ReferencePredicate(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReferencePredicate entityId.
             * @member {string} entityId
             * @memberof exocore.store.ReferencePredicate
             * @instance
             */
            ReferencePredicate.prototype.entityId = "";

            /**
             * ReferencePredicate traitId.
             * @member {string} traitId
             * @memberof exocore.store.ReferencePredicate
             * @instance
             */
            ReferencePredicate.prototype.traitId = "";

            /**
             * Creates a new ReferencePredicate instance using the specified properties.
             * @function create
             * @memberof exocore.store.ReferencePredicate
             * @static
             * @param {exocore.store.IReferencePredicate=} [properties] Properties to set
             * @returns {exocore.store.ReferencePredicate} ReferencePredicate instance
             */
            ReferencePredicate.create = function create(properties) {
                return new ReferencePredicate(properties);
            };

            /**
             * Encodes the specified ReferencePredicate message. Does not implicitly {@link exocore.store.ReferencePredicate.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.ReferencePredicate
             * @static
             * @param {exocore.store.IReferencePredicate} message ReferencePredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReferencePredicate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.entityId != null && Object.hasOwnProperty.call(message, "entityId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.entityId);
                if (message.traitId != null && Object.hasOwnProperty.call(message, "traitId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.traitId);
                return writer;
            };

            /**
             * Encodes the specified ReferencePredicate message, length delimited. Does not implicitly {@link exocore.store.ReferencePredicate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.ReferencePredicate
             * @static
             * @param {exocore.store.IReferencePredicate} message ReferencePredicate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReferencePredicate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReferencePredicate message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.ReferencePredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.ReferencePredicate} ReferencePredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReferencePredicate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.ReferencePredicate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.entityId = reader.string();
                        break;
                    case 2:
                        message.traitId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReferencePredicate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.ReferencePredicate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.ReferencePredicate} ReferencePredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReferencePredicate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReferencePredicate message.
             * @function verify
             * @memberof exocore.store.ReferencePredicate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReferencePredicate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.entityId != null && message.hasOwnProperty("entityId"))
                    if (!$util.isString(message.entityId))
                        return "entityId: string expected";
                if (message.traitId != null && message.hasOwnProperty("traitId"))
                    if (!$util.isString(message.traitId))
                        return "traitId: string expected";
                return null;
            };

            /**
             * Creates a ReferencePredicate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.ReferencePredicate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.ReferencePredicate} ReferencePredicate
             */
            ReferencePredicate.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.ReferencePredicate)
                    return object;
                let message = new $root.exocore.store.ReferencePredicate();
                if (object.entityId != null)
                    message.entityId = String(object.entityId);
                if (object.traitId != null)
                    message.traitId = String(object.traitId);
                return message;
            };

            /**
             * Creates a plain object from a ReferencePredicate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.ReferencePredicate
             * @static
             * @param {exocore.store.ReferencePredicate} message ReferencePredicate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReferencePredicate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.entityId = "";
                    object.traitId = "";
                }
                if (message.entityId != null && message.hasOwnProperty("entityId"))
                    object.entityId = message.entityId;
                if (message.traitId != null && message.hasOwnProperty("traitId"))
                    object.traitId = message.traitId;
                return object;
            };

            /**
             * Converts this ReferencePredicate to JSON.
             * @function toJSON
             * @memberof exocore.store.ReferencePredicate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReferencePredicate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReferencePredicate;
        })();

        store.Paging = (function() {

            /**
             * Properties of a Paging.
             * @memberof exocore.store
             * @interface IPaging
             * @property {exocore.store.IOrderingValue|null} [afterOrderingValue] Returns results after this given ordering value.
             * @property {exocore.store.IOrderingValue|null} [beforeOrderingValue] Returns results before this given ordering value.
             * @property {number|null} [count] Desired results count. Default if 0.
             */

            /**
             * Constructs a new Paging.
             * @memberof exocore.store
             * @classdesc Represents a Paging.
             * @implements IPaging
             * @constructor
             * @param {exocore.store.IPaging=} [properties] Properties to set
             */
            function Paging(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Returns results after this given ordering value.
             * @member {exocore.store.IOrderingValue|null|undefined} afterOrderingValue
             * @memberof exocore.store.Paging
             * @instance
             */
            Paging.prototype.afterOrderingValue = null;

            /**
             * Returns results before this given ordering value.
             * @member {exocore.store.IOrderingValue|null|undefined} beforeOrderingValue
             * @memberof exocore.store.Paging
             * @instance
             */
            Paging.prototype.beforeOrderingValue = null;

            /**
             * Desired results count. Default if 0.
             * @member {number} count
             * @memberof exocore.store.Paging
             * @instance
             */
            Paging.prototype.count = 0;

            /**
             * Creates a new Paging instance using the specified properties.
             * @function create
             * @memberof exocore.store.Paging
             * @static
             * @param {exocore.store.IPaging=} [properties] Properties to set
             * @returns {exocore.store.Paging} Paging instance
             */
            Paging.create = function create(properties) {
                return new Paging(properties);
            };

            /**
             * Encodes the specified Paging message. Does not implicitly {@link exocore.store.Paging.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.Paging
             * @static
             * @param {exocore.store.IPaging} message Paging message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Paging.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.afterOrderingValue != null && Object.hasOwnProperty.call(message, "afterOrderingValue"))
                    $root.exocore.store.OrderingValue.encode(message.afterOrderingValue, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.beforeOrderingValue != null && Object.hasOwnProperty.call(message, "beforeOrderingValue"))
                    $root.exocore.store.OrderingValue.encode(message.beforeOrderingValue, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.count);
                return writer;
            };

            /**
             * Encodes the specified Paging message, length delimited. Does not implicitly {@link exocore.store.Paging.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.Paging
             * @static
             * @param {exocore.store.IPaging} message Paging message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Paging.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Paging message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.Paging
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.Paging} Paging
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Paging.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.Paging();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.afterOrderingValue = $root.exocore.store.OrderingValue.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.beforeOrderingValue = $root.exocore.store.OrderingValue.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.count = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Paging message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.Paging
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.Paging} Paging
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Paging.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Paging message.
             * @function verify
             * @memberof exocore.store.Paging
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Paging.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.afterOrderingValue != null && message.hasOwnProperty("afterOrderingValue")) {
                    let error = $root.exocore.store.OrderingValue.verify(message.afterOrderingValue);
                    if (error)
                        return "afterOrderingValue." + error;
                }
                if (message.beforeOrderingValue != null && message.hasOwnProperty("beforeOrderingValue")) {
                    let error = $root.exocore.store.OrderingValue.verify(message.beforeOrderingValue);
                    if (error)
                        return "beforeOrderingValue." + error;
                }
                if (message.count != null && message.hasOwnProperty("count"))
                    if (!$util.isInteger(message.count))
                        return "count: integer expected";
                return null;
            };

            /**
             * Creates a Paging message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.Paging
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.Paging} Paging
             */
            Paging.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.Paging)
                    return object;
                let message = new $root.exocore.store.Paging();
                if (object.afterOrderingValue != null) {
                    if (typeof object.afterOrderingValue !== "object")
                        throw TypeError(".exocore.store.Paging.afterOrderingValue: object expected");
                    message.afterOrderingValue = $root.exocore.store.OrderingValue.fromObject(object.afterOrderingValue);
                }
                if (object.beforeOrderingValue != null) {
                    if (typeof object.beforeOrderingValue !== "object")
                        throw TypeError(".exocore.store.Paging.beforeOrderingValue: object expected");
                    message.beforeOrderingValue = $root.exocore.store.OrderingValue.fromObject(object.beforeOrderingValue);
                }
                if (object.count != null)
                    message.count = object.count >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a Paging message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.Paging
             * @static
             * @param {exocore.store.Paging} message Paging
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Paging.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.afterOrderingValue = null;
                    object.beforeOrderingValue = null;
                    object.count = 0;
                }
                if (message.afterOrderingValue != null && message.hasOwnProperty("afterOrderingValue"))
                    object.afterOrderingValue = $root.exocore.store.OrderingValue.toObject(message.afterOrderingValue, options);
                if (message.beforeOrderingValue != null && message.hasOwnProperty("beforeOrderingValue"))
                    object.beforeOrderingValue = $root.exocore.store.OrderingValue.toObject(message.beforeOrderingValue, options);
                if (message.count != null && message.hasOwnProperty("count"))
                    object.count = message.count;
                return object;
            };

            /**
             * Converts this Paging to JSON.
             * @function toJSON
             * @memberof exocore.store.Paging
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Paging.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Paging;
        })();

        store.Ordering = (function() {

            /**
             * Properties of an Ordering.
             * @memberof exocore.store
             * @interface IOrdering
             * @property {boolean|null} [score] Ordering score
             * @property {boolean|null} [operationId] Ordering operationId
             * @property {string|null} [field] Ordering field
             * @property {boolean|null} [ascending] Direction of ordering.
             */

            /**
             * Constructs a new Ordering.
             * @memberof exocore.store
             * @classdesc Represents an Ordering.
             * @implements IOrdering
             * @constructor
             * @param {exocore.store.IOrdering=} [properties] Properties to set
             */
            function Ordering(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Ordering score.
             * @member {boolean} score
             * @memberof exocore.store.Ordering
             * @instance
             */
            Ordering.prototype.score = false;

            /**
             * Ordering operationId.
             * @member {boolean} operationId
             * @memberof exocore.store.Ordering
             * @instance
             */
            Ordering.prototype.operationId = false;

            /**
             * Ordering field.
             * @member {string} field
             * @memberof exocore.store.Ordering
             * @instance
             */
            Ordering.prototype.field = "";

            /**
             * Direction of ordering.
             * @member {boolean} ascending
             * @memberof exocore.store.Ordering
             * @instance
             */
            Ordering.prototype.ascending = false;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Value by which we want results to be ordered.
             * @member {"score"|"operationId"|"field"|undefined} value
             * @memberof exocore.store.Ordering
             * @instance
             */
            Object.defineProperty(Ordering.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["score", "operationId", "field"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Ordering instance using the specified properties.
             * @function create
             * @memberof exocore.store.Ordering
             * @static
             * @param {exocore.store.IOrdering=} [properties] Properties to set
             * @returns {exocore.store.Ordering} Ordering instance
             */
            Ordering.create = function create(properties) {
                return new Ordering(properties);
            };

            /**
             * Encodes the specified Ordering message. Does not implicitly {@link exocore.store.Ordering.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.Ordering
             * @static
             * @param {exocore.store.IOrdering} message Ordering message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ordering.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.score);
                if (message.operationId != null && Object.hasOwnProperty.call(message, "operationId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.operationId);
                if (message.field != null && Object.hasOwnProperty.call(message, "field"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.field);
                if (message.ascending != null && Object.hasOwnProperty.call(message, "ascending"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.ascending);
                return writer;
            };

            /**
             * Encodes the specified Ordering message, length delimited. Does not implicitly {@link exocore.store.Ordering.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.Ordering
             * @static
             * @param {exocore.store.IOrdering} message Ordering message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ordering.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Ordering message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.Ordering
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.Ordering} Ordering
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ordering.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.Ordering();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.score = reader.bool();
                        break;
                    case 2:
                        message.operationId = reader.bool();
                        break;
                    case 3:
                        message.field = reader.string();
                        break;
                    case 4:
                        message.ascending = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Ordering message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.Ordering
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.Ordering} Ordering
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ordering.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Ordering message.
             * @function verify
             * @memberof exocore.store.Ordering
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Ordering.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.score != null && message.hasOwnProperty("score")) {
                    properties.value = 1;
                    if (typeof message.score !== "boolean")
                        return "score: boolean expected";
                }
                if (message.operationId != null && message.hasOwnProperty("operationId")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (typeof message.operationId !== "boolean")
                        return "operationId: boolean expected";
                }
                if (message.field != null && message.hasOwnProperty("field")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isString(message.field))
                        return "field: string expected";
                }
                if (message.ascending != null && message.hasOwnProperty("ascending"))
                    if (typeof message.ascending !== "boolean")
                        return "ascending: boolean expected";
                return null;
            };

            /**
             * Creates an Ordering message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.Ordering
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.Ordering} Ordering
             */
            Ordering.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.Ordering)
                    return object;
                let message = new $root.exocore.store.Ordering();
                if (object.score != null)
                    message.score = Boolean(object.score);
                if (object.operationId != null)
                    message.operationId = Boolean(object.operationId);
                if (object.field != null)
                    message.field = String(object.field);
                if (object.ascending != null)
                    message.ascending = Boolean(object.ascending);
                return message;
            };

            /**
             * Creates a plain object from an Ordering message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.Ordering
             * @static
             * @param {exocore.store.Ordering} message Ordering
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Ordering.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.ascending = false;
                if (message.score != null && message.hasOwnProperty("score")) {
                    object.score = message.score;
                    if (options.oneofs)
                        object.value = "score";
                }
                if (message.operationId != null && message.hasOwnProperty("operationId")) {
                    object.operationId = message.operationId;
                    if (options.oneofs)
                        object.value = "operationId";
                }
                if (message.field != null && message.hasOwnProperty("field")) {
                    object.field = message.field;
                    if (options.oneofs)
                        object.value = "field";
                }
                if (message.ascending != null && message.hasOwnProperty("ascending"))
                    object.ascending = message.ascending;
                return object;
            };

            /**
             * Converts this Ordering to JSON.
             * @function toJSON
             * @memberof exocore.store.Ordering
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Ordering.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Ordering;
        })();

        store.OrderingValue = (function() {

            /**
             * Properties of an OrderingValue.
             * @memberof exocore.store
             * @interface IOrderingValue
             * @property {number|null} [float] OrderingValue float
             * @property {number|Long|null} [uint64] OrderingValue uint64
             * @property {google.protobuf.ITimestamp|null} [date] OrderingValue date
             * @property {boolean|null} [min] OrderingValue min
             * @property {boolean|null} [max] OrderingValue max
             * @property {number|Long|null} [operationId] the last operation id that mutated the entity is used.
             */

            /**
             * Constructs a new OrderingValue.
             * @memberof exocore.store
             * @classdesc Represents an OrderingValue.
             * @implements IOrderingValue
             * @constructor
             * @param {exocore.store.IOrderingValue=} [properties] Properties to set
             */
            function OrderingValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OrderingValue float.
             * @member {number} float
             * @memberof exocore.store.OrderingValue
             * @instance
             */
            OrderingValue.prototype.float = 0;

            /**
             * OrderingValue uint64.
             * @member {number|Long} uint64
             * @memberof exocore.store.OrderingValue
             * @instance
             */
            OrderingValue.prototype.uint64 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * OrderingValue date.
             * @member {google.protobuf.ITimestamp|null|undefined} date
             * @memberof exocore.store.OrderingValue
             * @instance
             */
            OrderingValue.prototype.date = null;

            /**
             * OrderingValue min.
             * @member {boolean} min
             * @memberof exocore.store.OrderingValue
             * @instance
             */
            OrderingValue.prototype.min = false;

            /**
             * OrderingValue max.
             * @member {boolean} max
             * @memberof exocore.store.OrderingValue
             * @instance
             */
            OrderingValue.prototype.max = false;

            /**
             * the last operation id that mutated the entity is used.
             * @member {number|Long} operationId
             * @memberof exocore.store.OrderingValue
             * @instance
             */
            OrderingValue.prototype.operationId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Primary comparison
             * @member {"float"|"uint64"|"date"|"min"|"max"|undefined} value
             * @memberof exocore.store.OrderingValue
             * @instance
             */
            Object.defineProperty(OrderingValue.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["float", "uint64", "date", "min", "max"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new OrderingValue instance using the specified properties.
             * @function create
             * @memberof exocore.store.OrderingValue
             * @static
             * @param {exocore.store.IOrderingValue=} [properties] Properties to set
             * @returns {exocore.store.OrderingValue} OrderingValue instance
             */
            OrderingValue.create = function create(properties) {
                return new OrderingValue(properties);
            };

            /**
             * Encodes the specified OrderingValue message. Does not implicitly {@link exocore.store.OrderingValue.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.OrderingValue
             * @static
             * @param {exocore.store.IOrderingValue} message OrderingValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OrderingValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.float != null && Object.hasOwnProperty.call(message, "float"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.float);
                if (message.uint64 != null && Object.hasOwnProperty.call(message, "uint64"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.uint64);
                if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                    $root.google.protobuf.Timestamp.encode(message.date, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.min != null && Object.hasOwnProperty.call(message, "min"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.min);
                if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.max);
                if (message.operationId != null && Object.hasOwnProperty.call(message, "operationId"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.operationId);
                return writer;
            };

            /**
             * Encodes the specified OrderingValue message, length delimited. Does not implicitly {@link exocore.store.OrderingValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.OrderingValue
             * @static
             * @param {exocore.store.IOrderingValue} message OrderingValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OrderingValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OrderingValue message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.OrderingValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.OrderingValue} OrderingValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OrderingValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.OrderingValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.float = reader.float();
                        break;
                    case 2:
                        message.uint64 = reader.uint64();
                        break;
                    case 3:
                        message.date = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.min = reader.bool();
                        break;
                    case 5:
                        message.max = reader.bool();
                        break;
                    case 6:
                        message.operationId = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OrderingValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.OrderingValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.OrderingValue} OrderingValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OrderingValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OrderingValue message.
             * @function verify
             * @memberof exocore.store.OrderingValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OrderingValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.float != null && message.hasOwnProperty("float")) {
                    properties.value = 1;
                    if (typeof message.float !== "number")
                        return "float: number expected";
                }
                if (message.uint64 != null && message.hasOwnProperty("uint64")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isInteger(message.uint64) && !(message.uint64 && $util.isInteger(message.uint64.low) && $util.isInteger(message.uint64.high)))
                        return "uint64: integer|Long expected";
                }
                if (message.date != null && message.hasOwnProperty("date")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        let error = $root.google.protobuf.Timestamp.verify(message.date);
                        if (error)
                            return "date." + error;
                    }
                }
                if (message.min != null && message.hasOwnProperty("min")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (typeof message.min !== "boolean")
                        return "min: boolean expected";
                }
                if (message.max != null && message.hasOwnProperty("max")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (typeof message.max !== "boolean")
                        return "max: boolean expected";
                }
                if (message.operationId != null && message.hasOwnProperty("operationId"))
                    if (!$util.isInteger(message.operationId) && !(message.operationId && $util.isInteger(message.operationId.low) && $util.isInteger(message.operationId.high)))
                        return "operationId: integer|Long expected";
                return null;
            };

            /**
             * Creates an OrderingValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.OrderingValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.OrderingValue} OrderingValue
             */
            OrderingValue.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.OrderingValue)
                    return object;
                let message = new $root.exocore.store.OrderingValue();
                if (object.float != null)
                    message.float = Number(object.float);
                if (object.uint64 != null)
                    if ($util.Long)
                        (message.uint64 = $util.Long.fromValue(object.uint64)).unsigned = true;
                    else if (typeof object.uint64 === "string")
                        message.uint64 = parseInt(object.uint64, 10);
                    else if (typeof object.uint64 === "number")
                        message.uint64 = object.uint64;
                    else if (typeof object.uint64 === "object")
                        message.uint64 = new $util.LongBits(object.uint64.low >>> 0, object.uint64.high >>> 0).toNumber(true);
                if (object.date != null) {
                    if (typeof object.date !== "object")
                        throw TypeError(".exocore.store.OrderingValue.date: object expected");
                    message.date = $root.google.protobuf.Timestamp.fromObject(object.date);
                }
                if (object.min != null)
                    message.min = Boolean(object.min);
                if (object.max != null)
                    message.max = Boolean(object.max);
                if (object.operationId != null)
                    if ($util.Long)
                        (message.operationId = $util.Long.fromValue(object.operationId)).unsigned = true;
                    else if (typeof object.operationId === "string")
                        message.operationId = parseInt(object.operationId, 10);
                    else if (typeof object.operationId === "number")
                        message.operationId = object.operationId;
                    else if (typeof object.operationId === "object")
                        message.operationId = new $util.LongBits(object.operationId.low >>> 0, object.operationId.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from an OrderingValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.OrderingValue
             * @static
             * @param {exocore.store.OrderingValue} message OrderingValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OrderingValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.operationId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.operationId = options.longs === String ? "0" : 0;
                if (message.float != null && message.hasOwnProperty("float")) {
                    object.float = options.json && !isFinite(message.float) ? String(message.float) : message.float;
                    if (options.oneofs)
                        object.value = "float";
                }
                if (message.uint64 != null && message.hasOwnProperty("uint64")) {
                    if (typeof message.uint64 === "number")
                        object.uint64 = options.longs === String ? String(message.uint64) : message.uint64;
                    else
                        object.uint64 = options.longs === String ? $util.Long.prototype.toString.call(message.uint64) : options.longs === Number ? new $util.LongBits(message.uint64.low >>> 0, message.uint64.high >>> 0).toNumber(true) : message.uint64;
                    if (options.oneofs)
                        object.value = "uint64";
                }
                if (message.date != null && message.hasOwnProperty("date")) {
                    object.date = $root.google.protobuf.Timestamp.toObject(message.date, options);
                    if (options.oneofs)
                        object.value = "date";
                }
                if (message.min != null && message.hasOwnProperty("min")) {
                    object.min = message.min;
                    if (options.oneofs)
                        object.value = "min";
                }
                if (message.max != null && message.hasOwnProperty("max")) {
                    object.max = message.max;
                    if (options.oneofs)
                        object.value = "max";
                }
                if (message.operationId != null && message.hasOwnProperty("operationId"))
                    if (typeof message.operationId === "number")
                        object.operationId = options.longs === String ? String(message.operationId) : message.operationId;
                    else
                        object.operationId = options.longs === String ? $util.Long.prototype.toString.call(message.operationId) : options.longs === Number ? new $util.LongBits(message.operationId.low >>> 0, message.operationId.high >>> 0).toNumber(true) : message.operationId;
                return object;
            };

            /**
             * Converts this OrderingValue to JSON.
             * @function toJSON
             * @memberof exocore.store.OrderingValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OrderingValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OrderingValue;
        })();

        store.EntityResults = (function() {

            /**
             * Properties of an EntityResults.
             * @memberof exocore.store
             * @interface IEntityResults
             * @property {Array.<exocore.store.IEntityResult>|null} [entities] Entities matching query.
             * @property {boolean|null} [skippedHash] had the same hash has the specified and that `entities` were set to empty.
             * @property {number|null} [estimatedCount] Estimated number of entities matching, based on number of matching mutations.
             * @property {exocore.store.IPaging|null} [currentPage] Paging token of the current results.
             * @property {exocore.store.IPaging|null} [nextPage] Paging token of the next page of results.
             * @property {number|Long|null} [hash] changed by using the `result_hash` field on the query.
             */

            /**
             * Constructs a new EntityResults.
             * @memberof exocore.store
             * @classdesc Represents an EntityResults.
             * @implements IEntityResults
             * @constructor
             * @param {exocore.store.IEntityResults=} [properties] Properties to set
             */
            function EntityResults(properties) {
                this.entities = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Entities matching query.
             * @member {Array.<exocore.store.IEntityResult>} entities
             * @memberof exocore.store.EntityResults
             * @instance
             */
            EntityResults.prototype.entities = $util.emptyArray;

            /**
             * had the same hash has the specified and that `entities` were set to empty.
             * @member {boolean} skippedHash
             * @memberof exocore.store.EntityResults
             * @instance
             */
            EntityResults.prototype.skippedHash = false;

            /**
             * Estimated number of entities matching, based on number of matching mutations.
             * @member {number} estimatedCount
             * @memberof exocore.store.EntityResults
             * @instance
             */
            EntityResults.prototype.estimatedCount = 0;

            /**
             * Paging token of the current results.
             * @member {exocore.store.IPaging|null|undefined} currentPage
             * @memberof exocore.store.EntityResults
             * @instance
             */
            EntityResults.prototype.currentPage = null;

            /**
             * Paging token of the next page of results.
             * @member {exocore.store.IPaging|null|undefined} nextPage
             * @memberof exocore.store.EntityResults
             * @instance
             */
            EntityResults.prototype.nextPage = null;

            /**
             * changed by using the `result_hash` field on the query.
             * @member {number|Long} hash
             * @memberof exocore.store.EntityResults
             * @instance
             */
            EntityResults.prototype.hash = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new EntityResults instance using the specified properties.
             * @function create
             * @memberof exocore.store.EntityResults
             * @static
             * @param {exocore.store.IEntityResults=} [properties] Properties to set
             * @returns {exocore.store.EntityResults} EntityResults instance
             */
            EntityResults.create = function create(properties) {
                return new EntityResults(properties);
            };

            /**
             * Encodes the specified EntityResults message. Does not implicitly {@link exocore.store.EntityResults.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.EntityResults
             * @static
             * @param {exocore.store.IEntityResults} message EntityResults message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntityResults.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.entities != null && message.entities.length)
                    for (let i = 0; i < message.entities.length; ++i)
                        $root.exocore.store.EntityResult.encode(message.entities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.skippedHash != null && Object.hasOwnProperty.call(message, "skippedHash"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.skippedHash);
                if (message.estimatedCount != null && Object.hasOwnProperty.call(message, "estimatedCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.estimatedCount);
                if (message.currentPage != null && Object.hasOwnProperty.call(message, "currentPage"))
                    $root.exocore.store.Paging.encode(message.currentPage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.nextPage != null && Object.hasOwnProperty.call(message, "nextPage"))
                    $root.exocore.store.Paging.encode(message.nextPage, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.hash);
                return writer;
            };

            /**
             * Encodes the specified EntityResults message, length delimited. Does not implicitly {@link exocore.store.EntityResults.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.EntityResults
             * @static
             * @param {exocore.store.IEntityResults} message EntityResults message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntityResults.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EntityResults message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.EntityResults
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.EntityResults} EntityResults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntityResults.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.EntityResults();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.entities && message.entities.length))
                            message.entities = [];
                        message.entities.push($root.exocore.store.EntityResult.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.skippedHash = reader.bool();
                        break;
                    case 3:
                        message.estimatedCount = reader.uint32();
                        break;
                    case 4:
                        message.currentPage = $root.exocore.store.Paging.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.nextPage = $root.exocore.store.Paging.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.hash = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EntityResults message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.EntityResults
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.EntityResults} EntityResults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntityResults.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EntityResults message.
             * @function verify
             * @memberof exocore.store.EntityResults
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EntityResults.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.entities != null && message.hasOwnProperty("entities")) {
                    if (!Array.isArray(message.entities))
                        return "entities: array expected";
                    for (let i = 0; i < message.entities.length; ++i) {
                        let error = $root.exocore.store.EntityResult.verify(message.entities[i]);
                        if (error)
                            return "entities." + error;
                    }
                }
                if (message.skippedHash != null && message.hasOwnProperty("skippedHash"))
                    if (typeof message.skippedHash !== "boolean")
                        return "skippedHash: boolean expected";
                if (message.estimatedCount != null && message.hasOwnProperty("estimatedCount"))
                    if (!$util.isInteger(message.estimatedCount))
                        return "estimatedCount: integer expected";
                if (message.currentPage != null && message.hasOwnProperty("currentPage")) {
                    let error = $root.exocore.store.Paging.verify(message.currentPage);
                    if (error)
                        return "currentPage." + error;
                }
                if (message.nextPage != null && message.hasOwnProperty("nextPage")) {
                    let error = $root.exocore.store.Paging.verify(message.nextPage);
                    if (error)
                        return "nextPage." + error;
                }
                if (message.hash != null && message.hasOwnProperty("hash"))
                    if (!$util.isInteger(message.hash) && !(message.hash && $util.isInteger(message.hash.low) && $util.isInteger(message.hash.high)))
                        return "hash: integer|Long expected";
                return null;
            };

            /**
             * Creates an EntityResults message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.EntityResults
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.EntityResults} EntityResults
             */
            EntityResults.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.EntityResults)
                    return object;
                let message = new $root.exocore.store.EntityResults();
                if (object.entities) {
                    if (!Array.isArray(object.entities))
                        throw TypeError(".exocore.store.EntityResults.entities: array expected");
                    message.entities = [];
                    for (let i = 0; i < object.entities.length; ++i) {
                        if (typeof object.entities[i] !== "object")
                            throw TypeError(".exocore.store.EntityResults.entities: object expected");
                        message.entities[i] = $root.exocore.store.EntityResult.fromObject(object.entities[i]);
                    }
                }
                if (object.skippedHash != null)
                    message.skippedHash = Boolean(object.skippedHash);
                if (object.estimatedCount != null)
                    message.estimatedCount = object.estimatedCount >>> 0;
                if (object.currentPage != null) {
                    if (typeof object.currentPage !== "object")
                        throw TypeError(".exocore.store.EntityResults.currentPage: object expected");
                    message.currentPage = $root.exocore.store.Paging.fromObject(object.currentPage);
                }
                if (object.nextPage != null) {
                    if (typeof object.nextPage !== "object")
                        throw TypeError(".exocore.store.EntityResults.nextPage: object expected");
                    message.nextPage = $root.exocore.store.Paging.fromObject(object.nextPage);
                }
                if (object.hash != null)
                    if ($util.Long)
                        (message.hash = $util.Long.fromValue(object.hash)).unsigned = true;
                    else if (typeof object.hash === "string")
                        message.hash = parseInt(object.hash, 10);
                    else if (typeof object.hash === "number")
                        message.hash = object.hash;
                    else if (typeof object.hash === "object")
                        message.hash = new $util.LongBits(object.hash.low >>> 0, object.hash.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from an EntityResults message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.EntityResults
             * @static
             * @param {exocore.store.EntityResults} message EntityResults
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EntityResults.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.entities = [];
                if (options.defaults) {
                    object.skippedHash = false;
                    object.estimatedCount = 0;
                    object.currentPage = null;
                    object.nextPage = null;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.hash = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.hash = options.longs === String ? "0" : 0;
                }
                if (message.entities && message.entities.length) {
                    object.entities = [];
                    for (let j = 0; j < message.entities.length; ++j)
                        object.entities[j] = $root.exocore.store.EntityResult.toObject(message.entities[j], options);
                }
                if (message.skippedHash != null && message.hasOwnProperty("skippedHash"))
                    object.skippedHash = message.skippedHash;
                if (message.estimatedCount != null && message.hasOwnProperty("estimatedCount"))
                    object.estimatedCount = message.estimatedCount;
                if (message.currentPage != null && message.hasOwnProperty("currentPage"))
                    object.currentPage = $root.exocore.store.Paging.toObject(message.currentPage, options);
                if (message.nextPage != null && message.hasOwnProperty("nextPage"))
                    object.nextPage = $root.exocore.store.Paging.toObject(message.nextPage, options);
                if (message.hash != null && message.hasOwnProperty("hash"))
                    if (typeof message.hash === "number")
                        object.hash = options.longs === String ? String(message.hash) : message.hash;
                    else
                        object.hash = options.longs === String ? $util.Long.prototype.toString.call(message.hash) : options.longs === Number ? new $util.LongBits(message.hash.low >>> 0, message.hash.high >>> 0).toNumber(true) : message.hash;
                return object;
            };

            /**
             * Converts this EntityResults to JSON.
             * @function toJSON
             * @memberof exocore.store.EntityResults
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EntityResults.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EntityResults;
        })();

        store.EntityResult = (function() {

            /**
             * Properties of an EntityResult.
             * @memberof exocore.store
             * @interface IEntityResult
             * @property {exocore.store.IEntity|null} [entity] be indicated in its traits' details field.
             * @property {exocore.store.EntityResultSource|null} [source] before the latest consistent timestamp.
             * @property {exocore.store.IOrderingValue|null} [orderingValue] but it may be useful to compare ordering queries (ex.: to merge different pages)
             * @property {number|Long|null} [hash] Hash of the tntiy result. Can be used to compare if the entity has changed since last results.
             */

            /**
             * Constructs a new EntityResult.
             * @memberof exocore.store
             * @classdesc Represents an EntityResult.
             * @implements IEntityResult
             * @constructor
             * @param {exocore.store.IEntityResult=} [properties] Properties to set
             */
            function EntityResult(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * be indicated in its traits' details field.
             * @member {exocore.store.IEntity|null|undefined} entity
             * @memberof exocore.store.EntityResult
             * @instance
             */
            EntityResult.prototype.entity = null;

            /**
             * before the latest consistent timestamp.
             * @member {exocore.store.EntityResultSource} source
             * @memberof exocore.store.EntityResult
             * @instance
             */
            EntityResult.prototype.source = 0;

            /**
             * but it may be useful to compare ordering queries (ex.: to merge different pages)
             * @member {exocore.store.IOrderingValue|null|undefined} orderingValue
             * @memberof exocore.store.EntityResult
             * @instance
             */
            EntityResult.prototype.orderingValue = null;

            /**
             * Hash of the tntiy result. Can be used to compare if the entity has changed since last results.
             * @member {number|Long} hash
             * @memberof exocore.store.EntityResult
             * @instance
             */
            EntityResult.prototype.hash = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new EntityResult instance using the specified properties.
             * @function create
             * @memberof exocore.store.EntityResult
             * @static
             * @param {exocore.store.IEntityResult=} [properties] Properties to set
             * @returns {exocore.store.EntityResult} EntityResult instance
             */
            EntityResult.create = function create(properties) {
                return new EntityResult(properties);
            };

            /**
             * Encodes the specified EntityResult message. Does not implicitly {@link exocore.store.EntityResult.verify|verify} messages.
             * @function encode
             * @memberof exocore.store.EntityResult
             * @static
             * @param {exocore.store.IEntityResult} message EntityResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntityResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.entity != null && Object.hasOwnProperty.call(message, "entity"))
                    $root.exocore.store.Entity.encode(message.entity, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.source);
                if (message.orderingValue != null && Object.hasOwnProperty.call(message, "orderingValue"))
                    $root.exocore.store.OrderingValue.encode(message.orderingValue, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.hash);
                return writer;
            };

            /**
             * Encodes the specified EntityResult message, length delimited. Does not implicitly {@link exocore.store.EntityResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.store.EntityResult
             * @static
             * @param {exocore.store.IEntityResult} message EntityResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntityResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EntityResult message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.store.EntityResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.store.EntityResult} EntityResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntityResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.store.EntityResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.entity = $root.exocore.store.Entity.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.source = reader.int32();
                        break;
                    case 3:
                        message.orderingValue = $root.exocore.store.OrderingValue.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.hash = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EntityResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.store.EntityResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.store.EntityResult} EntityResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntityResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EntityResult message.
             * @function verify
             * @memberof exocore.store.EntityResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EntityResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.entity != null && message.hasOwnProperty("entity")) {
                    let error = $root.exocore.store.Entity.verify(message.entity);
                    if (error)
                        return "entity." + error;
                }
                if (message.source != null && message.hasOwnProperty("source"))
                    switch (message.source) {
                    default:
                        return "source: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.orderingValue != null && message.hasOwnProperty("orderingValue")) {
                    let error = $root.exocore.store.OrderingValue.verify(message.orderingValue);
                    if (error)
                        return "orderingValue." + error;
                }
                if (message.hash != null && message.hasOwnProperty("hash"))
                    if (!$util.isInteger(message.hash) && !(message.hash && $util.isInteger(message.hash.low) && $util.isInteger(message.hash.high)))
                        return "hash: integer|Long expected";
                return null;
            };

            /**
             * Creates an EntityResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.store.EntityResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.store.EntityResult} EntityResult
             */
            EntityResult.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.store.EntityResult)
                    return object;
                let message = new $root.exocore.store.EntityResult();
                if (object.entity != null) {
                    if (typeof object.entity !== "object")
                        throw TypeError(".exocore.store.EntityResult.entity: object expected");
                    message.entity = $root.exocore.store.Entity.fromObject(object.entity);
                }
                switch (object.source) {
                case "UNKNOWN":
                case 0:
                    message.source = 0;
                    break;
                case "PENDING":
                case 1:
                    message.source = 1;
                    break;
                case "CHAIN":
                case 2:
                    message.source = 2;
                    break;
                }
                if (object.orderingValue != null) {
                    if (typeof object.orderingValue !== "object")
                        throw TypeError(".exocore.store.EntityResult.orderingValue: object expected");
                    message.orderingValue = $root.exocore.store.OrderingValue.fromObject(object.orderingValue);
                }
                if (object.hash != null)
                    if ($util.Long)
                        (message.hash = $util.Long.fromValue(object.hash)).unsigned = true;
                    else if (typeof object.hash === "string")
                        message.hash = parseInt(object.hash, 10);
                    else if (typeof object.hash === "number")
                        message.hash = object.hash;
                    else if (typeof object.hash === "object")
                        message.hash = new $util.LongBits(object.hash.low >>> 0, object.hash.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from an EntityResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.store.EntityResult
             * @static
             * @param {exocore.store.EntityResult} message EntityResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EntityResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.entity = null;
                    object.source = options.enums === String ? "UNKNOWN" : 0;
                    object.orderingValue = null;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.hash = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.hash = options.longs === String ? "0" : 0;
                }
                if (message.entity != null && message.hasOwnProperty("entity"))
                    object.entity = $root.exocore.store.Entity.toObject(message.entity, options);
                if (message.source != null && message.hasOwnProperty("source"))
                    object.source = options.enums === String ? $root.exocore.store.EntityResultSource[message.source] : message.source;
                if (message.orderingValue != null && message.hasOwnProperty("orderingValue"))
                    object.orderingValue = $root.exocore.store.OrderingValue.toObject(message.orderingValue, options);
                if (message.hash != null && message.hasOwnProperty("hash"))
                    if (typeof message.hash === "number")
                        object.hash = options.longs === String ? String(message.hash) : message.hash;
                    else
                        object.hash = options.longs === String ? $util.Long.prototype.toString.call(message.hash) : options.longs === Number ? new $util.LongBits(message.hash.low >>> 0, message.hash.high >>> 0).toNumber(true) : message.hash;
                return object;
            };

            /**
             * Converts this EntityResult to JSON.
             * @function toJSON
             * @memberof exocore.store.EntityResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EntityResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EntityResult;
        })();

        /**
         * EntityResultSource enum.
         * @name exocore.store.EntityResultSource
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} PENDING=1 PENDING value
         * @property {number} CHAIN=2 CHAIN value
         */
        store.EntityResultSource = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "PENDING"] = 1;
            values[valuesById[2] = "CHAIN"] = 2;
            return values;
        })();

        return store;
    })();

    exocore.test = (function() {

        /**
         * Namespace test.
         * @memberof exocore
         * @namespace
         */
        const test = {};

        test.TestMessage = (function() {

            /**
             * Properties of a TestMessage.
             * @memberof exocore.test
             * @interface ITestMessage
             * @property {string|null} [string1] TestMessage string1
             * @property {string|null} [string2] TestMessage string2
             * @property {string|null} [string3] TestMessage string3
             * @property {exocore.test.ITestStruct|null} [struct1] TestMessage struct1
             * @property {string|null} [oneofString1] TestMessage oneofString1
             * @property {number|null} [oneofInt1] TestMessage oneofInt1
             * @property {google.protobuf.ITimestamp|null} [date1] TestMessage date1
             * @property {google.protobuf.ITimestamp|null} [date2] TestMessage date2
             * @property {google.protobuf.ITimestamp|null} [date3] TestMessage date3
             * @property {number|null} [uint1] TestMessage uint1
             * @property {number|null} [uint2] TestMessage uint2
             * @property {number|null} [uint3] TestMessage uint3
             * @property {number|null} [int1] TestMessage int1
             * @property {number|null} [int2] TestMessage int2
             * @property {number|null} [int3] TestMessage int3
             * @property {exocore.store.IReference|null} [ref1] TestMessage ref1
             * @property {exocore.store.IReference|null} [ref2] TestMessage ref2
             * @property {string|null} [grouped1] TestMessage grouped1
             * @property {string|null} [grouped2] TestMessage grouped2
             */

            /**
             * Constructs a new TestMessage.
             * @memberof exocore.test
             * @classdesc Represents a TestMessage.
             * @implements ITestMessage
             * @constructor
             * @param {exocore.test.ITestMessage=} [properties] Properties to set
             */
            function TestMessage(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TestMessage string1.
             * @member {string} string1
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.string1 = "";

            /**
             * TestMessage string2.
             * @member {string} string2
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.string2 = "";

            /**
             * TestMessage string3.
             * @member {string} string3
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.string3 = "";

            /**
             * TestMessage struct1.
             * @member {exocore.test.ITestStruct|null|undefined} struct1
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.struct1 = null;

            /**
             * TestMessage oneofString1.
             * @member {string} oneofString1
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.oneofString1 = "";

            /**
             * TestMessage oneofInt1.
             * @member {number} oneofInt1
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.oneofInt1 = 0;

            /**
             * TestMessage date1.
             * @member {google.protobuf.ITimestamp|null|undefined} date1
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.date1 = null;

            /**
             * TestMessage date2.
             * @member {google.protobuf.ITimestamp|null|undefined} date2
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.date2 = null;

            /**
             * TestMessage date3.
             * @member {google.protobuf.ITimestamp|null|undefined} date3
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.date3 = null;

            /**
             * TestMessage uint1.
             * @member {number} uint1
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.uint1 = 0;

            /**
             * TestMessage uint2.
             * @member {number} uint2
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.uint2 = 0;

            /**
             * TestMessage uint3.
             * @member {number} uint3
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.uint3 = 0;

            /**
             * TestMessage int1.
             * @member {number} int1
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.int1 = 0;

            /**
             * TestMessage int2.
             * @member {number} int2
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.int2 = 0;

            /**
             * TestMessage int3.
             * @member {number} int3
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.int3 = 0;

            /**
             * TestMessage ref1.
             * @member {exocore.store.IReference|null|undefined} ref1
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.ref1 = null;

            /**
             * TestMessage ref2.
             * @member {exocore.store.IReference|null|undefined} ref2
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.ref2 = null;

            /**
             * TestMessage grouped1.
             * @member {string} grouped1
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.grouped1 = "";

            /**
             * TestMessage grouped2.
             * @member {string} grouped2
             * @memberof exocore.test.TestMessage
             * @instance
             */
            TestMessage.prototype.grouped2 = "";

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * TestMessage fields.
             * @member {"oneofString1"|"oneofInt1"|undefined} fields
             * @memberof exocore.test.TestMessage
             * @instance
             */
            Object.defineProperty(TestMessage.prototype, "fields", {
                get: $util.oneOfGetter($oneOfFields = ["oneofString1", "oneofInt1"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TestMessage instance using the specified properties.
             * @function create
             * @memberof exocore.test.TestMessage
             * @static
             * @param {exocore.test.ITestMessage=} [properties] Properties to set
             * @returns {exocore.test.TestMessage} TestMessage instance
             */
            TestMessage.create = function create(properties) {
                return new TestMessage(properties);
            };

            /**
             * Encodes the specified TestMessage message. Does not implicitly {@link exocore.test.TestMessage.verify|verify} messages.
             * @function encode
             * @memberof exocore.test.TestMessage
             * @static
             * @param {exocore.test.ITestMessage} message TestMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.string1 != null && Object.hasOwnProperty.call(message, "string1"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.string1);
                if (message.string2 != null && Object.hasOwnProperty.call(message, "string2"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.string2);
                if (message.struct1 != null && Object.hasOwnProperty.call(message, "struct1"))
                    $root.exocore.test.TestStruct.encode(message.struct1, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.oneofString1 != null && Object.hasOwnProperty.call(message, "oneofString1"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.oneofString1);
                if (message.oneofInt1 != null && Object.hasOwnProperty.call(message, "oneofInt1"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.oneofInt1);
                if (message.date1 != null && Object.hasOwnProperty.call(message, "date1"))
                    $root.google.protobuf.Timestamp.encode(message.date1, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.date2 != null && Object.hasOwnProperty.call(message, "date2"))
                    $root.google.protobuf.Timestamp.encode(message.date2, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.uint1 != null && Object.hasOwnProperty.call(message, "uint1"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.uint1);
                if (message.uint2 != null && Object.hasOwnProperty.call(message, "uint2"))
                    writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.uint2);
                if (message.string3 != null && Object.hasOwnProperty.call(message, "string3"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.string3);
                if (message.ref1 != null && Object.hasOwnProperty.call(message, "ref1"))
                    $root.exocore.store.Reference.encode(message.ref1, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                if (message.ref2 != null && Object.hasOwnProperty.call(message, "ref2"))
                    $root.exocore.store.Reference.encode(message.ref2, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                if (message.int1 != null && Object.hasOwnProperty.call(message, "int1"))
                    writer.uint32(/* id 15, wireType 0 =*/120).int32(message.int1);
                if (message.int2 != null && Object.hasOwnProperty.call(message, "int2"))
                    writer.uint32(/* id 16, wireType 0 =*/128).int32(message.int2);
                if (message.date3 != null && Object.hasOwnProperty.call(message, "date3"))
                    $root.google.protobuf.Timestamp.encode(message.date3, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                if (message.uint3 != null && Object.hasOwnProperty.call(message, "uint3"))
                    writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.uint3);
                if (message.int3 != null && Object.hasOwnProperty.call(message, "int3"))
                    writer.uint32(/* id 19, wireType 0 =*/152).int32(message.int3);
                if (message.grouped1 != null && Object.hasOwnProperty.call(message, "grouped1"))
                    writer.uint32(/* id 20, wireType 2 =*/162).string(message.grouped1);
                if (message.grouped2 != null && Object.hasOwnProperty.call(message, "grouped2"))
                    writer.uint32(/* id 21, wireType 2 =*/170).string(message.grouped2);
                return writer;
            };

            /**
             * Encodes the specified TestMessage message, length delimited. Does not implicitly {@link exocore.test.TestMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.test.TestMessage
             * @static
             * @param {exocore.test.ITestMessage} message TestMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestMessage message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.test.TestMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.test.TestMessage} TestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.test.TestMessage();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.string1 = reader.string();
                        break;
                    case 2:
                        message.string2 = reader.string();
                        break;
                    case 12:
                        message.string3 = reader.string();
                        break;
                    case 3:
                        message.struct1 = $root.exocore.test.TestStruct.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.oneofString1 = reader.string();
                        break;
                    case 5:
                        message.oneofInt1 = reader.uint32();
                        break;
                    case 8:
                        message.date1 = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.date2 = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 17:
                        message.date3 = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 10:
                        message.uint1 = reader.uint32();
                        break;
                    case 11:
                        message.uint2 = reader.uint32();
                        break;
                    case 18:
                        message.uint3 = reader.uint32();
                        break;
                    case 15:
                        message.int1 = reader.int32();
                        break;
                    case 16:
                        message.int2 = reader.int32();
                        break;
                    case 19:
                        message.int3 = reader.int32();
                        break;
                    case 13:
                        message.ref1 = $root.exocore.store.Reference.decode(reader, reader.uint32());
                        break;
                    case 14:
                        message.ref2 = $root.exocore.store.Reference.decode(reader, reader.uint32());
                        break;
                    case 20:
                        message.grouped1 = reader.string();
                        break;
                    case 21:
                        message.grouped2 = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TestMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.test.TestMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.test.TestMessage} TestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestMessage message.
             * @function verify
             * @memberof exocore.test.TestMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.string1 != null && message.hasOwnProperty("string1"))
                    if (!$util.isString(message.string1))
                        return "string1: string expected";
                if (message.string2 != null && message.hasOwnProperty("string2"))
                    if (!$util.isString(message.string2))
                        return "string2: string expected";
                if (message.string3 != null && message.hasOwnProperty("string3"))
                    if (!$util.isString(message.string3))
                        return "string3: string expected";
                if (message.struct1 != null && message.hasOwnProperty("struct1")) {
                    let error = $root.exocore.test.TestStruct.verify(message.struct1);
                    if (error)
                        return "struct1." + error;
                }
                if (message.oneofString1 != null && message.hasOwnProperty("oneofString1")) {
                    properties.fields = 1;
                    if (!$util.isString(message.oneofString1))
                        return "oneofString1: string expected";
                }
                if (message.oneofInt1 != null && message.hasOwnProperty("oneofInt1")) {
                    if (properties.fields === 1)
                        return "fields: multiple values";
                    properties.fields = 1;
                    if (!$util.isInteger(message.oneofInt1))
                        return "oneofInt1: integer expected";
                }
                if (message.date1 != null && message.hasOwnProperty("date1")) {
                    let error = $root.google.protobuf.Timestamp.verify(message.date1);
                    if (error)
                        return "date1." + error;
                }
                if (message.date2 != null && message.hasOwnProperty("date2")) {
                    let error = $root.google.protobuf.Timestamp.verify(message.date2);
                    if (error)
                        return "date2." + error;
                }
                if (message.date3 != null && message.hasOwnProperty("date3")) {
                    let error = $root.google.protobuf.Timestamp.verify(message.date3);
                    if (error)
                        return "date3." + error;
                }
                if (message.uint1 != null && message.hasOwnProperty("uint1"))
                    if (!$util.isInteger(message.uint1))
                        return "uint1: integer expected";
                if (message.uint2 != null && message.hasOwnProperty("uint2"))
                    if (!$util.isInteger(message.uint2))
                        return "uint2: integer expected";
                if (message.uint3 != null && message.hasOwnProperty("uint3"))
                    if (!$util.isInteger(message.uint3))
                        return "uint3: integer expected";
                if (message.int1 != null && message.hasOwnProperty("int1"))
                    if (!$util.isInteger(message.int1))
                        return "int1: integer expected";
                if (message.int2 != null && message.hasOwnProperty("int2"))
                    if (!$util.isInteger(message.int2))
                        return "int2: integer expected";
                if (message.int3 != null && message.hasOwnProperty("int3"))
                    if (!$util.isInteger(message.int3))
                        return "int3: integer expected";
                if (message.ref1 != null && message.hasOwnProperty("ref1")) {
                    let error = $root.exocore.store.Reference.verify(message.ref1);
                    if (error)
                        return "ref1." + error;
                }
                if (message.ref2 != null && message.hasOwnProperty("ref2")) {
                    let error = $root.exocore.store.Reference.verify(message.ref2);
                    if (error)
                        return "ref2." + error;
                }
                if (message.grouped1 != null && message.hasOwnProperty("grouped1"))
                    if (!$util.isString(message.grouped1))
                        return "grouped1: string expected";
                if (message.grouped2 != null && message.hasOwnProperty("grouped2"))
                    if (!$util.isString(message.grouped2))
                        return "grouped2: string expected";
                return null;
            };

            /**
             * Creates a TestMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.test.TestMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.test.TestMessage} TestMessage
             */
            TestMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.test.TestMessage)
                    return object;
                let message = new $root.exocore.test.TestMessage();
                if (object.string1 != null)
                    message.string1 = String(object.string1);
                if (object.string2 != null)
                    message.string2 = String(object.string2);
                if (object.string3 != null)
                    message.string3 = String(object.string3);
                if (object.struct1 != null) {
                    if (typeof object.struct1 !== "object")
                        throw TypeError(".exocore.test.TestMessage.struct1: object expected");
                    message.struct1 = $root.exocore.test.TestStruct.fromObject(object.struct1);
                }
                if (object.oneofString1 != null)
                    message.oneofString1 = String(object.oneofString1);
                if (object.oneofInt1 != null)
                    message.oneofInt1 = object.oneofInt1 >>> 0;
                if (object.date1 != null) {
                    if (typeof object.date1 !== "object")
                        throw TypeError(".exocore.test.TestMessage.date1: object expected");
                    message.date1 = $root.google.protobuf.Timestamp.fromObject(object.date1);
                }
                if (object.date2 != null) {
                    if (typeof object.date2 !== "object")
                        throw TypeError(".exocore.test.TestMessage.date2: object expected");
                    message.date2 = $root.google.protobuf.Timestamp.fromObject(object.date2);
                }
                if (object.date3 != null) {
                    if (typeof object.date3 !== "object")
                        throw TypeError(".exocore.test.TestMessage.date3: object expected");
                    message.date3 = $root.google.protobuf.Timestamp.fromObject(object.date3);
                }
                if (object.uint1 != null)
                    message.uint1 = object.uint1 >>> 0;
                if (object.uint2 != null)
                    message.uint2 = object.uint2 >>> 0;
                if (object.uint3 != null)
                    message.uint3 = object.uint3 >>> 0;
                if (object.int1 != null)
                    message.int1 = object.int1 | 0;
                if (object.int2 != null)
                    message.int2 = object.int2 | 0;
                if (object.int3 != null)
                    message.int3 = object.int3 | 0;
                if (object.ref1 != null) {
                    if (typeof object.ref1 !== "object")
                        throw TypeError(".exocore.test.TestMessage.ref1: object expected");
                    message.ref1 = $root.exocore.store.Reference.fromObject(object.ref1);
                }
                if (object.ref2 != null) {
                    if (typeof object.ref2 !== "object")
                        throw TypeError(".exocore.test.TestMessage.ref2: object expected");
                    message.ref2 = $root.exocore.store.Reference.fromObject(object.ref2);
                }
                if (object.grouped1 != null)
                    message.grouped1 = String(object.grouped1);
                if (object.grouped2 != null)
                    message.grouped2 = String(object.grouped2);
                return message;
            };

            /**
             * Creates a plain object from a TestMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.test.TestMessage
             * @static
             * @param {exocore.test.TestMessage} message TestMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.string1 = "";
                    object.string2 = "";
                    object.struct1 = null;
                    object.date1 = null;
                    object.date2 = null;
                    object.uint1 = 0;
                    object.uint2 = 0;
                    object.string3 = "";
                    object.ref1 = null;
                    object.ref2 = null;
                    object.int1 = 0;
                    object.int2 = 0;
                    object.date3 = null;
                    object.uint3 = 0;
                    object.int3 = 0;
                    object.grouped1 = "";
                    object.grouped2 = "";
                }
                if (message.string1 != null && message.hasOwnProperty("string1"))
                    object.string1 = message.string1;
                if (message.string2 != null && message.hasOwnProperty("string2"))
                    object.string2 = message.string2;
                if (message.struct1 != null && message.hasOwnProperty("struct1"))
                    object.struct1 = $root.exocore.test.TestStruct.toObject(message.struct1, options);
                if (message.oneofString1 != null && message.hasOwnProperty("oneofString1")) {
                    object.oneofString1 = message.oneofString1;
                    if (options.oneofs)
                        object.fields = "oneofString1";
                }
                if (message.oneofInt1 != null && message.hasOwnProperty("oneofInt1")) {
                    object.oneofInt1 = message.oneofInt1;
                    if (options.oneofs)
                        object.fields = "oneofInt1";
                }
                if (message.date1 != null && message.hasOwnProperty("date1"))
                    object.date1 = $root.google.protobuf.Timestamp.toObject(message.date1, options);
                if (message.date2 != null && message.hasOwnProperty("date2"))
                    object.date2 = $root.google.protobuf.Timestamp.toObject(message.date2, options);
                if (message.uint1 != null && message.hasOwnProperty("uint1"))
                    object.uint1 = message.uint1;
                if (message.uint2 != null && message.hasOwnProperty("uint2"))
                    object.uint2 = message.uint2;
                if (message.string3 != null && message.hasOwnProperty("string3"))
                    object.string3 = message.string3;
                if (message.ref1 != null && message.hasOwnProperty("ref1"))
                    object.ref1 = $root.exocore.store.Reference.toObject(message.ref1, options);
                if (message.ref2 != null && message.hasOwnProperty("ref2"))
                    object.ref2 = $root.exocore.store.Reference.toObject(message.ref2, options);
                if (message.int1 != null && message.hasOwnProperty("int1"))
                    object.int1 = message.int1;
                if (message.int2 != null && message.hasOwnProperty("int2"))
                    object.int2 = message.int2;
                if (message.date3 != null && message.hasOwnProperty("date3"))
                    object.date3 = $root.google.protobuf.Timestamp.toObject(message.date3, options);
                if (message.uint3 != null && message.hasOwnProperty("uint3"))
                    object.uint3 = message.uint3;
                if (message.int3 != null && message.hasOwnProperty("int3"))
                    object.int3 = message.int3;
                if (message.grouped1 != null && message.hasOwnProperty("grouped1"))
                    object.grouped1 = message.grouped1;
                if (message.grouped2 != null && message.hasOwnProperty("grouped2"))
                    object.grouped2 = message.grouped2;
                return object;
            };

            /**
             * Converts this TestMessage to JSON.
             * @function toJSON
             * @memberof exocore.test.TestMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TestMessage;
        })();

        test.TestStruct = (function() {

            /**
             * Properties of a TestStruct.
             * @memberof exocore.test
             * @interface ITestStruct
             * @property {string|null} [string1] TestStruct string1
             */

            /**
             * Constructs a new TestStruct.
             * @memberof exocore.test
             * @classdesc Represents a TestStruct.
             * @implements ITestStruct
             * @constructor
             * @param {exocore.test.ITestStruct=} [properties] Properties to set
             */
            function TestStruct(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TestStruct string1.
             * @member {string} string1
             * @memberof exocore.test.TestStruct
             * @instance
             */
            TestStruct.prototype.string1 = "";

            /**
             * Creates a new TestStruct instance using the specified properties.
             * @function create
             * @memberof exocore.test.TestStruct
             * @static
             * @param {exocore.test.ITestStruct=} [properties] Properties to set
             * @returns {exocore.test.TestStruct} TestStruct instance
             */
            TestStruct.create = function create(properties) {
                return new TestStruct(properties);
            };

            /**
             * Encodes the specified TestStruct message. Does not implicitly {@link exocore.test.TestStruct.verify|verify} messages.
             * @function encode
             * @memberof exocore.test.TestStruct
             * @static
             * @param {exocore.test.ITestStruct} message TestStruct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestStruct.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.string1 != null && Object.hasOwnProperty.call(message, "string1"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.string1);
                return writer;
            };

            /**
             * Encodes the specified TestStruct message, length delimited. Does not implicitly {@link exocore.test.TestStruct.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.test.TestStruct
             * @static
             * @param {exocore.test.ITestStruct} message TestStruct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestStruct.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestStruct message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.test.TestStruct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.test.TestStruct} TestStruct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestStruct.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.test.TestStruct();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.string1 = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TestStruct message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.test.TestStruct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.test.TestStruct} TestStruct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestStruct.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestStruct message.
             * @function verify
             * @memberof exocore.test.TestStruct
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestStruct.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.string1 != null && message.hasOwnProperty("string1"))
                    if (!$util.isString(message.string1))
                        return "string1: string expected";
                return null;
            };

            /**
             * Creates a TestStruct message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.test.TestStruct
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.test.TestStruct} TestStruct
             */
            TestStruct.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.test.TestStruct)
                    return object;
                let message = new $root.exocore.test.TestStruct();
                if (object.string1 != null)
                    message.string1 = String(object.string1);
                return message;
            };

            /**
             * Creates a plain object from a TestStruct message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.test.TestStruct
             * @static
             * @param {exocore.test.TestStruct} message TestStruct
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestStruct.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.string1 = "";
                if (message.string1 != null && message.hasOwnProperty("string1"))
                    object.string1 = message.string1;
                return object;
            };

            /**
             * Converts this TestStruct to JSON.
             * @function toJSON
             * @memberof exocore.test.TestStruct
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestStruct.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TestStruct;
        })();

        test.TestMessage2 = (function() {

            /**
             * Properties of a TestMessage2.
             * @memberof exocore.test
             * @interface ITestMessage2
             * @property {string|null} [string1] TestMessage2 string1
             * @property {string|null} [string2] TestMessage2 string2
             */

            /**
             * Constructs a new TestMessage2.
             * @memberof exocore.test
             * @classdesc Represents a TestMessage2.
             * @implements ITestMessage2
             * @constructor
             * @param {exocore.test.ITestMessage2=} [properties] Properties to set
             */
            function TestMessage2(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TestMessage2 string1.
             * @member {string} string1
             * @memberof exocore.test.TestMessage2
             * @instance
             */
            TestMessage2.prototype.string1 = "";

            /**
             * TestMessage2 string2.
             * @member {string} string2
             * @memberof exocore.test.TestMessage2
             * @instance
             */
            TestMessage2.prototype.string2 = "";

            /**
             * Creates a new TestMessage2 instance using the specified properties.
             * @function create
             * @memberof exocore.test.TestMessage2
             * @static
             * @param {exocore.test.ITestMessage2=} [properties] Properties to set
             * @returns {exocore.test.TestMessage2} TestMessage2 instance
             */
            TestMessage2.create = function create(properties) {
                return new TestMessage2(properties);
            };

            /**
             * Encodes the specified TestMessage2 message. Does not implicitly {@link exocore.test.TestMessage2.verify|verify} messages.
             * @function encode
             * @memberof exocore.test.TestMessage2
             * @static
             * @param {exocore.test.ITestMessage2} message TestMessage2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMessage2.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.string1 != null && Object.hasOwnProperty.call(message, "string1"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.string1);
                if (message.string2 != null && Object.hasOwnProperty.call(message, "string2"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.string2);
                return writer;
            };

            /**
             * Encodes the specified TestMessage2 message, length delimited. Does not implicitly {@link exocore.test.TestMessage2.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exocore.test.TestMessage2
             * @static
             * @param {exocore.test.ITestMessage2} message TestMessage2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMessage2.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestMessage2 message from the specified reader or buffer.
             * @function decode
             * @memberof exocore.test.TestMessage2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exocore.test.TestMessage2} TestMessage2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestMessage2.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.exocore.test.TestMessage2();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.string1 = reader.string();
                        break;
                    case 2:
                        message.string2 = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TestMessage2 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exocore.test.TestMessage2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exocore.test.TestMessage2} TestMessage2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestMessage2.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestMessage2 message.
             * @function verify
             * @memberof exocore.test.TestMessage2
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestMessage2.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.string1 != null && message.hasOwnProperty("string1"))
                    if (!$util.isString(message.string1))
                        return "string1: string expected";
                if (message.string2 != null && message.hasOwnProperty("string2"))
                    if (!$util.isString(message.string2))
                        return "string2: string expected";
                return null;
            };

            /**
             * Creates a TestMessage2 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exocore.test.TestMessage2
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exocore.test.TestMessage2} TestMessage2
             */
            TestMessage2.fromObject = function fromObject(object) {
                if (object instanceof $root.exocore.test.TestMessage2)
                    return object;
                let message = new $root.exocore.test.TestMessage2();
                if (object.string1 != null)
                    message.string1 = String(object.string1);
                if (object.string2 != null)
                    message.string2 = String(object.string2);
                return message;
            };

            /**
             * Creates a plain object from a TestMessage2 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exocore.test.TestMessage2
             * @static
             * @param {exocore.test.TestMessage2} message TestMessage2
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestMessage2.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.string1 = "";
                    object.string2 = "";
                }
                if (message.string1 != null && message.hasOwnProperty("string1"))
                    object.string1 = message.string1;
                if (message.string2 != null && message.hasOwnProperty("string2"))
                    object.string2 = message.string2;
                return object;
            };

            /**
             * Converts this TestMessage2 to JSON.
             * @function toJSON
             * @memberof exocore.test.TestMessage2
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestMessage2.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TestMessage2;
        })();

        return test;
    })();

    return exocore;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                let message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        protobuf.FieldMask = (function() {

            /**
             * Properties of a FieldMask.
             * @memberof google.protobuf
             * @interface IFieldMask
             * @property {Array.<string>|null} [paths] FieldMask paths
             */

            /**
             * Constructs a new FieldMask.
             * @memberof google.protobuf
             * @classdesc Represents a FieldMask.
             * @implements IFieldMask
             * @constructor
             * @param {google.protobuf.IFieldMask=} [properties] Properties to set
             */
            function FieldMask(properties) {
                this.paths = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldMask paths.
             * @member {Array.<string>} paths
             * @memberof google.protobuf.FieldMask
             * @instance
             */
            FieldMask.prototype.paths = $util.emptyArray;

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {google.protobuf.IFieldMask=} [properties] Properties to set
             * @returns {google.protobuf.FieldMask} FieldMask instance
             */
            FieldMask.create = function create(properties) {
                return new FieldMask(properties);
            };

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {google.protobuf.IFieldMask} message FieldMask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldMask.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.paths != null && message.paths.length)
                    for (let i = 0; i < message.paths.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.paths[i]);
                return writer;
            };

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {google.protobuf.IFieldMask} message FieldMask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldMask.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldMask} FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldMask.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldMask();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.paths && message.paths.length))
                            message.paths = [];
                        message.paths.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldMask} FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldMask.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldMask message.
             * @function verify
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldMask.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.paths != null && message.hasOwnProperty("paths")) {
                    if (!Array.isArray(message.paths))
                        return "paths: array expected";
                    for (let i = 0; i < message.paths.length; ++i)
                        if (!$util.isString(message.paths[i]))
                            return "paths: string[] expected";
                }
                return null;
            };

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldMask} FieldMask
             */
            FieldMask.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldMask)
                    return object;
                let message = new $root.google.protobuf.FieldMask();
                if (object.paths) {
                    if (!Array.isArray(object.paths))
                        throw TypeError(".google.protobuf.FieldMask.paths: array expected");
                    message.paths = [];
                    for (let i = 0; i < object.paths.length; ++i)
                        message.paths[i] = String(object.paths[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {google.protobuf.FieldMask} message FieldMask
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldMask.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.paths = [];
                if (message.paths && message.paths.length) {
                    object.paths = [];
                    for (let j = 0; j < message.paths.length; ++j)
                        object.paths[j] = message.paths[j];
                }
                return object;
            };

            /**
             * Converts this FieldMask to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldMask
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldMask.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FieldMask;
        })();

        protobuf.FileDescriptorSet = (function() {

            /**
             * Properties of a FileDescriptorSet.
             * @memberof google.protobuf
             * @interface IFileDescriptorSet
             * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
             */

            /**
             * Constructs a new FileDescriptorSet.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorSet.
             * @implements IFileDescriptorSet
             * @constructor
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                this.file = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorSet file.
             * @member {Array.<google.protobuf.IFileDescriptorProto>} file
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
             */
            FileDescriptorSet.create = function create(properties) {
                return new FileDescriptorSet(properties);
            };

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.file.length)
                    for (let i = 0; i < message.file.length; ++i)
                        $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.file && message.file.length))
                            message.file = [];
                        message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorSet message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorSet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    if (!Array.isArray(message.file))
                        return "file: array expected";
                    for (let i = 0; i < message.file.length; ++i) {
                        let error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                        if (error)
                            return "file." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorSet)
                    return object;
                let message = new $root.google.protobuf.FileDescriptorSet();
                if (object.file) {
                    if (!Array.isArray(object.file))
                        throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                    message.file = [];
                    for (let i = 0; i < object.file.length; ++i) {
                        if (typeof object.file[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                        message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.file = [];
                if (message.file && message.file.length) {
                    object.file = [];
                    for (let j = 0; j < message.file.length; ++j)
                        object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                }
                return object;
            };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Properties of a FileDescriptorProto.
             * @memberof google.protobuf
             * @interface IFileDescriptorProto
             * @property {string|null} [name] FileDescriptorProto name
             * @property {string|null} ["package"] FileDescriptorProto package
             * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
             * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
             * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
             * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
             * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
             * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
             * @property {string|null} [syntax] FileDescriptorProto syntax
             */

            /**
             * Constructs a new FileDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorProto.
             * @implements IFileDescriptorProto
             * @constructor
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                this.dependency = [];
                this.publicDependency = [];
                this.weakDependency = [];
                this.messageType = [];
                this.enumType = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @member {string} package
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @member {Array.<string>} dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto publicDependency.
             * @member {Array.<number>} publicDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.publicDependency = $util.emptyArray;

            /**
             * FileDescriptorProto weakDependency.
             * @member {Array.<number>} weakDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.weakDependency = $util.emptyArray;

            /**
             * FileDescriptorProto messageType.
             * @member {Array.<google.protobuf.IDescriptorProto>} messageType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.messageType = $util.emptyArray;

            /**
             * FileDescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @member {google.protobuf.IFileOptions|null|undefined} options
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto sourceCodeInfo.
             * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.sourceCodeInfo = null;

            /**
             * FileDescriptorProto syntax.
             * @member {string} syntax
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.syntax = "";

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
             */
            FileDescriptorProto.create = function create(properties) {
                return new FileDescriptorProto(properties);
            };

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                if (message.dependency != null && message.dependency.length)
                    for (let i = 0; i < message.dependency.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                if (message.messageType != null && message.messageType.length)
                    for (let i = 0; i < message.messageType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (let i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.service != null && message.service.length)
                    for (let i = 0; i < message.service.length; ++i)
                        $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (let i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.sourceCodeInfo != null && Object.hasOwnProperty.call(message, "sourceCodeInfo"))
                    $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.publicDependency != null && message.publicDependency.length)
                    for (let i = 0; i < message.publicDependency.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                if (message.weakDependency != null && message.weakDependency.length)
                    for (let i = 0; i < message.weakDependency.length; ++i)
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message["package"] = reader.string();
                        break;
                    case 3:
                        if (!(message.dependency && message.dependency.length))
                            message.dependency = [];
                        message.dependency.push(reader.string());
                        break;
                    case 10:
                        if (!(message.publicDependency && message.publicDependency.length))
                            message.publicDependency = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.publicDependency.push(reader.int32());
                        } else
                            message.publicDependency.push(reader.int32());
                        break;
                    case 11:
                        if (!(message.weakDependency && message.weakDependency.length))
                            message.weakDependency = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.weakDependency.push(reader.int32());
                        } else
                            message.weakDependency.push(reader.int32());
                        break;
                    case 4:
                        if (!(message.messageType && message.messageType.length))
                            message.messageType = [];
                        message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.enumType && message.enumType.length))
                            message.enumType = [];
                        message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.service && message.service.length))
                            message.service = [];
                        message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.syntax = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message["package"] != null && message.hasOwnProperty("package"))
                    if (!$util.isString(message["package"]))
                        return "package: string expected";
                if (message.dependency != null && message.hasOwnProperty("dependency")) {
                    if (!Array.isArray(message.dependency))
                        return "dependency: array expected";
                    for (let i = 0; i < message.dependency.length; ++i)
                        if (!$util.isString(message.dependency[i]))
                            return "dependency: string[] expected";
                }
                if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                    if (!Array.isArray(message.publicDependency))
                        return "publicDependency: array expected";
                    for (let i = 0; i < message.publicDependency.length; ++i)
                        if (!$util.isInteger(message.publicDependency[i]))
                            return "publicDependency: integer[] expected";
                }
                if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                    if (!Array.isArray(message.weakDependency))
                        return "weakDependency: array expected";
                    for (let i = 0; i < message.weakDependency.length; ++i)
                        if (!$util.isInteger(message.weakDependency[i]))
                            return "weakDependency: integer[] expected";
                }
                if (message.messageType != null && message.hasOwnProperty("messageType")) {
                    if (!Array.isArray(message.messageType))
                        return "messageType: array expected";
                    for (let i = 0; i < message.messageType.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                        if (error)
                            return "messageType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (let i = 0; i < message.enumType.length; ++i) {
                        let error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.service != null && message.hasOwnProperty("service")) {
                    if (!Array.isArray(message.service))
                        return "service: array expected";
                    for (let i = 0; i < message.service.length; ++i) {
                        let error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                        if (error)
                            return "service." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (let i = 0; i < message.extension.length; ++i) {
                        let error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.FileOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                    let error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                    if (error)
                        return "sourceCodeInfo." + error;
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    if (!$util.isString(message.syntax))
                        return "syntax: string expected";
                return null;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.FileDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object["package"] != null)
                    message["package"] = String(object["package"]);
                if (object.dependency) {
                    if (!Array.isArray(object.dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                    message.dependency = [];
                    for (let i = 0; i < object.dependency.length; ++i)
                        message.dependency[i] = String(object.dependency[i]);
                }
                if (object.publicDependency) {
                    if (!Array.isArray(object.publicDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                    message.publicDependency = [];
                    for (let i = 0; i < object.publicDependency.length; ++i)
                        message.publicDependency[i] = object.publicDependency[i] | 0;
                }
                if (object.weakDependency) {
                    if (!Array.isArray(object.weakDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                    message.weakDependency = [];
                    for (let i = 0; i < object.weakDependency.length; ++i)
                        message.weakDependency[i] = object.weakDependency[i] | 0;
                }
                if (object.messageType) {
                    if (!Array.isArray(object.messageType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                    message.messageType = [];
                    for (let i = 0; i < object.messageType.length; ++i) {
                        if (typeof object.messageType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                        message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (let i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.service) {
                    if (!Array.isArray(object.service))
                        throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                    message.service = [];
                    for (let i = 0; i < object.service.length; ++i) {
                        if (typeof object.service[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                        message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                    message.extension = [];
                    for (let i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                }
                if (object.sourceCodeInfo != null) {
                    if (typeof object.sourceCodeInfo !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                    message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                }
                if (object.syntax != null)
                    message.syntax = String(object.syntax);
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.dependency = [];
                    object.messageType = [];
                    object.enumType = [];
                    object.service = [];
                    object.extension = [];
                    object.publicDependency = [];
                    object.weakDependency = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object["package"] = "";
                    object.options = null;
                    object.sourceCodeInfo = null;
                    object.syntax = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message["package"] != null && message.hasOwnProperty("package"))
                    object["package"] = message["package"];
                if (message.dependency && message.dependency.length) {
                    object.dependency = [];
                    for (let j = 0; j < message.dependency.length; ++j)
                        object.dependency[j] = message.dependency[j];
                }
                if (message.messageType && message.messageType.length) {
                    object.messageType = [];
                    for (let j = 0; j < message.messageType.length; ++j)
                        object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (let j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.service && message.service.length) {
                    object.service = [];
                    for (let j = 0; j < message.service.length; ++j)
                        object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (let j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                    object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                if (message.publicDependency && message.publicDependency.length) {
                    object.publicDependency = [];
                    for (let j = 0; j < message.publicDependency.length; ++j)
                        object.publicDependency[j] = message.publicDependency[j];
                }
                if (message.weakDependency && message.weakDependency.length) {
                    object.weakDependency = [];
                    for (let j = 0; j < message.weakDependency.length; ++j)
                        object.weakDependency[j] = message.weakDependency[j];
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    object.syntax = message.syntax;
                return object;
            };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Properties of a DescriptorProto.
             * @memberof google.protobuf
             * @interface IDescriptorProto
             * @property {string|null} [name] DescriptorProto name
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
             * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
             * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneofDecl] DescriptorProto oneofDecl
             * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
             * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reservedRange] DescriptorProto reservedRange
             * @property {Array.<string>|null} [reservedName] DescriptorProto reservedName
             */

            /**
             * Constructs a new DescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a DescriptorProto.
             * @implements IDescriptorProto
             * @constructor
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                this.field = [];
                this.extension = [];
                this.nestedType = [];
                this.enumType = [];
                this.extensionRange = [];
                this.oneofDecl = [];
                this.reservedRange = [];
                this.reservedName = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nestedType.
             * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.nestedType = $util.emptyArray;

            /**
             * DescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * DescriptorProto extensionRange.
             * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extensionRange = $util.emptyArray;

            /**
             * DescriptorProto oneofDecl.
             * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneofDecl
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.oneofDecl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @member {google.protobuf.IMessageOptions|null|undefined} options
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reservedRange.
             * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reservedRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedRange = $util.emptyArray;

            /**
             * DescriptorProto reservedName.
             * @member {Array.<string>} reservedName
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedName = $util.emptyArray;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
             */
            DescriptorProto.create = function create(properties) {
                return new DescriptorProto(properties);
            };

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.field != null && message.field.length)
                    for (let i = 0; i < message.field.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.nestedType != null && message.nestedType.length)
                    for (let i = 0; i < message.nestedType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (let i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extensionRange != null && message.extensionRange.length)
                    for (let i = 0; i < message.extensionRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (let i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.oneofDecl != null && message.oneofDecl.length)
                    for (let i = 0; i < message.oneofDecl.length; ++i)
                        $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.reservedRange != null && message.reservedRange.length)
                    for (let i = 0; i < message.reservedRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reservedName != null && message.reservedName.length)
                    for (let i = 0; i < message.reservedName.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                return writer;
            };

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.field && message.field.length))
                            message.field = [];
                        message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.nestedType && message.nestedType.length))
                            message.nestedType = [];
                        message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.enumType && message.enumType.length))
                            message.enumType = [];
                        message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.extensionRange && message.extensionRange.length))
                            message.extensionRange = [];
                        message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        if (!(message.oneofDecl && message.oneofDecl.length))
                            message.oneofDecl = [];
                        message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        if (!(message.reservedRange && message.reservedRange.length))
                            message.reservedRange = [];
                        message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                        break;
                    case 10:
                        if (!(message.reservedName && message.reservedName.length))
                            message.reservedName = [];
                        message.reservedName.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescriptorProto message.
             * @function verify
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.field != null && message.hasOwnProperty("field")) {
                    if (!Array.isArray(message.field))
                        return "field: array expected";
                    for (let i = 0; i < message.field.length; ++i) {
                        let error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                        if (error)
                            return "field." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (let i = 0; i < message.extension.length; ++i) {
                        let error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                    if (!Array.isArray(message.nestedType))
                        return "nestedType: array expected";
                    for (let i = 0; i < message.nestedType.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                        if (error)
                            return "nestedType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (let i = 0; i < message.enumType.length; ++i) {
                        let error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                    if (!Array.isArray(message.extensionRange))
                        return "extensionRange: array expected";
                    for (let i = 0; i < message.extensionRange.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                        if (error)
                            return "extensionRange." + error;
                    }
                }
                if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                    if (!Array.isArray(message.oneofDecl))
                        return "oneofDecl: array expected";
                    for (let i = 0; i < message.oneofDecl.length; ++i) {
                        let error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                        if (error)
                            return "oneofDecl." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.MessageOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                    if (!Array.isArray(message.reservedRange))
                        return "reservedRange: array expected";
                    for (let i = 0; i < message.reservedRange.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                        if (error)
                            return "reservedRange." + error;
                    }
                }
                if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                    if (!Array.isArray(message.reservedName))
                        return "reservedName: array expected";
                    for (let i = 0; i < message.reservedName.length; ++i)
                        if (!$util.isString(message.reservedName[i]))
                            return "reservedName: string[] expected";
                }
                return null;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DescriptorProto)
                    return object;
                let message = new $root.google.protobuf.DescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.field) {
                    if (!Array.isArray(object.field))
                        throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                    message.field = [];
                    for (let i = 0; i < object.field.length; ++i) {
                        if (typeof object.field[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                        message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                    message.extension = [];
                    for (let i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.nestedType) {
                    if (!Array.isArray(object.nestedType))
                        throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                    message.nestedType = [];
                    for (let i = 0; i < object.nestedType.length; ++i) {
                        if (typeof object.nestedType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                        message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (let i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.extensionRange) {
                    if (!Array.isArray(object.extensionRange))
                        throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                    message.extensionRange = [];
                    for (let i = 0; i < object.extensionRange.length; ++i) {
                        if (typeof object.extensionRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                        message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                    }
                }
                if (object.oneofDecl) {
                    if (!Array.isArray(object.oneofDecl))
                        throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                    message.oneofDecl = [];
                    for (let i = 0; i < object.oneofDecl.length; ++i) {
                        if (typeof object.oneofDecl[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                        message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                }
                if (object.reservedRange) {
                    if (!Array.isArray(object.reservedRange))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                    message.reservedRange = [];
                    for (let i = 0; i < object.reservedRange.length; ++i) {
                        if (typeof object.reservedRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                        message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                    }
                }
                if (object.reservedName) {
                    if (!Array.isArray(object.reservedName))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                    message.reservedName = [];
                    for (let i = 0; i < object.reservedName.length; ++i)
                        message.reservedName[i] = String(object.reservedName[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.DescriptorProto} message DescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.field = [];
                    object.nestedType = [];
                    object.enumType = [];
                    object.extensionRange = [];
                    object.extension = [];
                    object.oneofDecl = [];
                    object.reservedRange = [];
                    object.reservedName = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.field && message.field.length) {
                    object.field = [];
                    for (let j = 0; j < message.field.length; ++j)
                        object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                }
                if (message.nestedType && message.nestedType.length) {
                    object.nestedType = [];
                    for (let j = 0; j < message.nestedType.length; ++j)
                        object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (let j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.extensionRange && message.extensionRange.length) {
                    object.extensionRange = [];
                    for (let j = 0; j < message.extensionRange.length; ++j)
                        object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (let j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                if (message.oneofDecl && message.oneofDecl.length) {
                    object.oneofDecl = [];
                    for (let j = 0; j < message.oneofDecl.length; ++j)
                        object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                }
                if (message.reservedRange && message.reservedRange.length) {
                    object.reservedRange = [];
                    for (let j = 0; j < message.reservedRange.length; ++j)
                        object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                }
                if (message.reservedName && message.reservedName.length) {
                    object.reservedName = [];
                    for (let j = 0; j < message.reservedName.length; ++j)
                        object.reservedName[j] = message.reservedName[j];
                }
                return object;
            };

            /**
             * Converts this DescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.DescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Properties of an ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IExtensionRange
                 * @property {number|null} [start] ExtensionRange start
                 * @property {number|null} [end] ExtensionRange end
                 */

                /**
                 * Constructs a new ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents an ExtensionRange.
                 * @implements IExtensionRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExtensionRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                 */
                ExtensionRange.create = function create(properties) {
                    return new ExtensionRange(properties);
                };

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ExtensionRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                        return object;
                    let message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Properties of a ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IReservedRange
                 * @property {number|null} [start] ReservedRange start
                 * @property {number|null} [end] ReservedRange end
                 */

                /**
                 * Constructs a new ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents a ReservedRange.
                 * @implements IReservedRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 */
                function ReservedRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReservedRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                 */
                ReservedRange.create = function create(properties) {
                    return new ReservedRange(properties);
                };

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReservedRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReservedRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                        return object;
                    let message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ReservedRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReservedRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Properties of a FieldDescriptorProto.
             * @memberof google.protobuf
             * @interface IFieldDescriptorProto
             * @property {string|null} [name] FieldDescriptorProto name
             * @property {number|null} [number] FieldDescriptorProto number
             * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
             * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
             * @property {string|null} [typeName] FieldDescriptorProto typeName
             * @property {string|null} [extendee] FieldDescriptorProto extendee
             * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
             * @property {number|null} [oneofIndex] FieldDescriptorProto oneofIndex
             * @property {string|null} [jsonName] FieldDescriptorProto jsonName
             * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
             */

            /**
             * Constructs a new FieldDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FieldDescriptorProto.
             * @implements IFieldDescriptorProto
             * @constructor
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @member {google.protobuf.FieldDescriptorProto.Label} label
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @member {google.protobuf.FieldDescriptorProto.Type} type
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto typeName.
             * @member {string} typeName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.typeName = "";

            /**
             * FieldDescriptorProto extendee.
             * @member {string} extendee
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto defaultValue.
             * @member {string} defaultValue
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.defaultValue = "";

            /**
             * FieldDescriptorProto oneofIndex.
             * @member {number} oneofIndex
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.oneofIndex = 0;

            /**
             * FieldDescriptorProto jsonName.
             * @member {string} jsonName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.jsonName = "";

            /**
             * FieldDescriptorProto options.
             * @member {google.protobuf.IFieldOptions|null|undefined} options
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.options = null;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
             */
            FieldDescriptorProto.create = function create(properties) {
                return new FieldDescriptorProto(properties);
            };

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                if (message.typeName != null && Object.hasOwnProperty.call(message, "typeName"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                if (message.defaultValue != null && Object.hasOwnProperty.call(message, "defaultValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.oneofIndex != null && Object.hasOwnProperty.call(message, "oneofIndex"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                if (message.jsonName != null && Object.hasOwnProperty.call(message, "jsonName"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                return writer;
            };

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.number = reader.int32();
                        break;
                    case 4:
                        message.label = reader.int32();
                        break;
                    case 5:
                        message.type = reader.int32();
                        break;
                    case 6:
                        message.typeName = reader.string();
                        break;
                    case 2:
                        message.extendee = reader.string();
                        break;
                    case 7:
                        message.defaultValue = reader.string();
                        break;
                    case 9:
                        message.oneofIndex = reader.int32();
                        break;
                    case 10:
                        message.jsonName = reader.string();
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    switch (message.label) {
                    default:
                        return "label: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    }
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    if (!$util.isString(message.typeName))
                        return "typeName: string expected";
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    if (!$util.isString(message.extendee))
                        return "extendee: string expected";
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    if (!$util.isString(message.defaultValue))
                        return "defaultValue: string expected";
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    if (!$util.isInteger(message.oneofIndex))
                        return "oneofIndex: integer expected";
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    if (!$util.isString(message.jsonName))
                        return "jsonName: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.FieldOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.FieldDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                switch (object.label) {
                case "LABEL_OPTIONAL":
                case 1:
                    message.label = 1;
                    break;
                case "LABEL_REQUIRED":
                case 2:
                    message.label = 2;
                    break;
                case "LABEL_REPEATED":
                case 3:
                    message.label = 3;
                    break;
                }
                switch (object.type) {
                case "TYPE_DOUBLE":
                case 1:
                    message.type = 1;
                    break;
                case "TYPE_FLOAT":
                case 2:
                    message.type = 2;
                    break;
                case "TYPE_INT64":
                case 3:
                    message.type = 3;
                    break;
                case "TYPE_UINT64":
                case 4:
                    message.type = 4;
                    break;
                case "TYPE_INT32":
                case 5:
                    message.type = 5;
                    break;
                case "TYPE_FIXED64":
                case 6:
                    message.type = 6;
                    break;
                case "TYPE_FIXED32":
                case 7:
                    message.type = 7;
                    break;
                case "TYPE_BOOL":
                case 8:
                    message.type = 8;
                    break;
                case "TYPE_STRING":
                case 9:
                    message.type = 9;
                    break;
                case "TYPE_GROUP":
                case 10:
                    message.type = 10;
                    break;
                case "TYPE_MESSAGE":
                case 11:
                    message.type = 11;
                    break;
                case "TYPE_BYTES":
                case 12:
                    message.type = 12;
                    break;
                case "TYPE_UINT32":
                case 13:
                    message.type = 13;
                    break;
                case "TYPE_ENUM":
                case 14:
                    message.type = 14;
                    break;
                case "TYPE_SFIXED32":
                case 15:
                    message.type = 15;
                    break;
                case "TYPE_SFIXED64":
                case 16:
                    message.type = 16;
                    break;
                case "TYPE_SINT32":
                case 17:
                    message.type = 17;
                    break;
                case "TYPE_SINT64":
                case 18:
                    message.type = 18;
                    break;
                }
                if (object.typeName != null)
                    message.typeName = String(object.typeName);
                if (object.extendee != null)
                    message.extendee = String(object.extendee);
                if (object.defaultValue != null)
                    message.defaultValue = String(object.defaultValue);
                if (object.oneofIndex != null)
                    message.oneofIndex = object.oneofIndex | 0;
                if (object.jsonName != null)
                    message.jsonName = String(object.jsonName);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.extendee = "";
                    object.number = 0;
                    object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                    object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                    object.typeName = "";
                    object.defaultValue = "";
                    object.options = null;
                    object.oneofIndex = 0;
                    object.jsonName = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    object.extendee = message.extendee;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    object.typeName = message.typeName;
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    object.defaultValue = message.defaultValue;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    object.oneofIndex = message.oneofIndex;
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    object.jsonName = message.jsonName;
                return object;
            };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Type enum.
             * @name google.protobuf.FieldDescriptorProto.Type
             * @enum {number}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name google.protobuf.FieldDescriptorProto.Label
             * @enum {number}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Properties of an OneofDescriptorProto.
             * @memberof google.protobuf
             * @interface IOneofDescriptorProto
             * @property {string|null} [name] OneofDescriptorProto name
             * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
             */

            /**
             * Constructs a new OneofDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an OneofDescriptorProto.
             * @implements IOneofDescriptorProto
             * @constructor
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             */
            function OneofDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @member {google.protobuf.IOneofOptions|null|undefined} options
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.options = null;

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
             */
            OneofDescriptorProto.create = function create(properties) {
                return new OneofDescriptorProto(properties);
            };

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.OneofOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.OneofDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Properties of an EnumDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumDescriptorProto
             * @property {string|null} [name] EnumDescriptorProto name
             * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
             * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
             */

            /**
             * Constructs a new EnumDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumDescriptorProto.
             * @implements IEnumDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                this.value = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @member {google.protobuf.IEnumOptions|null|undefined} options
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
             */
            EnumDescriptorProto.create = function create(properties) {
                return new EnumDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.value.length)
                    for (let i = 0; i < message.value.length; ++i)
                        $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (let i = 0; i < message.value.length; ++i) {
                        let error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                        if (error)
                            return "value." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.EnumOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.EnumDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                    message.value = [];
                    for (let i = 0; i < object.value.length; ++i) {
                        if (typeof object.value[i] !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                        message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value && message.value.length) {
                    object.value = [];
                    for (let j = 0; j < message.value.length; ++j)
                        object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Properties of an EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumValueDescriptorProto
             * @property {string|null} [name] EnumValueDescriptorProto name
             * @property {number|null} [number] EnumValueDescriptorProto number
             * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
             */

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueDescriptorProto.
             * @implements IEnumValueDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @member {google.protobuf.IEnumValueOptions|null|undefined} options
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
             */
            EnumValueDescriptorProto.create = function create(properties) {
                return new EnumValueDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.number = reader.int32();
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.EnumValueDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Properties of a ServiceDescriptorProto.
             * @memberof google.protobuf
             * @interface IServiceDescriptorProto
             * @property {string|null} [name] ServiceDescriptorProto name
             * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
             * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
             */

            /**
             * Constructs a new ServiceDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceDescriptorProto.
             * @implements IServiceDescriptorProto
             * @constructor
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                this.method = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @member {google.protobuf.IServiceOptions|null|undefined} options
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.options = null;

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
             */
            ServiceDescriptorProto.create = function create(properties) {
                return new ServiceDescriptorProto(properties);
            };

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.method != null && message.method.length)
                    for (let i = 0; i < message.method.length; ++i)
                        $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.method && message.method.length))
                            message.method = [];
                        message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.method != null && message.hasOwnProperty("method")) {
                    if (!Array.isArray(message.method))
                        return "method: array expected";
                    for (let i = 0; i < message.method.length; ++i) {
                        let error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                        if (error)
                            return "method." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.ServiceOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.ServiceDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.method) {
                    if (!Array.isArray(object.method))
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                    message.method = [];
                    for (let i = 0; i < object.method.length; ++i) {
                        if (typeof object.method[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                        message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.method = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.method && message.method.length) {
                    object.method = [];
                    for (let j = 0; j < message.method.length; ++j)
                        object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Properties of a MethodDescriptorProto.
             * @memberof google.protobuf
             * @interface IMethodDescriptorProto
             * @property {string|null} [name] MethodDescriptorProto name
             * @property {string|null} [inputType] MethodDescriptorProto inputType
             * @property {string|null} [outputType] MethodDescriptorProto outputType
             * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
             * @property {boolean|null} [clientStreaming] MethodDescriptorProto clientStreaming
             * @property {boolean|null} [serverStreaming] MethodDescriptorProto serverStreaming
             */

            /**
             * Constructs a new MethodDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a MethodDescriptorProto.
             * @implements IMethodDescriptorProto
             * @constructor
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto inputType.
             * @member {string} inputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.inputType = "";

            /**
             * MethodDescriptorProto outputType.
             * @member {string} outputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.outputType = "";

            /**
             * MethodDescriptorProto options.
             * @member {google.protobuf.IMethodOptions|null|undefined} options
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto clientStreaming.
             * @member {boolean} clientStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.clientStreaming = false;

            /**
             * MethodDescriptorProto serverStreaming.
             * @member {boolean} serverStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.serverStreaming = false;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
             */
            MethodDescriptorProto.create = function create(properties) {
                return new MethodDescriptorProto(properties);
            };

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.inputType != null && Object.hasOwnProperty.call(message, "inputType"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                if (message.outputType != null && Object.hasOwnProperty.call(message, "outputType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.clientStreaming != null && Object.hasOwnProperty.call(message, "clientStreaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                if (message.serverStreaming != null && Object.hasOwnProperty.call(message, "serverStreaming"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                return writer;
            };

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.inputType = reader.string();
                        break;
                    case 3:
                        message.outputType = reader.string();
                        break;
                    case 4:
                        message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.clientStreaming = reader.bool();
                        break;
                    case 6:
                        message.serverStreaming = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    if (!$util.isString(message.inputType))
                        return "inputType: string expected";
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    if (!$util.isString(message.outputType))
                        return "outputType: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.MethodOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    if (typeof message.clientStreaming !== "boolean")
                        return "clientStreaming: boolean expected";
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    if (typeof message.serverStreaming !== "boolean")
                        return "serverStreaming: boolean expected";
                return null;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.MethodDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.inputType != null)
                    message.inputType = String(object.inputType);
                if (object.outputType != null)
                    message.outputType = String(object.outputType);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                }
                if (object.clientStreaming != null)
                    message.clientStreaming = Boolean(object.clientStreaming);
                if (object.serverStreaming != null)
                    message.serverStreaming = Boolean(object.serverStreaming);
                return message;
            };

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.inputType = "";
                    object.outputType = "";
                    object.options = null;
                    object.clientStreaming = false;
                    object.serverStreaming = false;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    object.inputType = message.inputType;
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    object.outputType = message.outputType;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    object.clientStreaming = message.clientStreaming;
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    object.serverStreaming = message.serverStreaming;
                return object;
            };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Properties of a FileOptions.
             * @memberof google.protobuf
             * @interface IFileOptions
             * @property {string|null} [javaPackage] FileOptions javaPackage
             * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
             * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
             * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
             * @property {boolean|null} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
             * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
             * @property {string|null} [goPackage] FileOptions goPackage
             * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
             * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
             * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
             * @property {boolean|null} [deprecated] FileOptions deprecated
             * @property {boolean|null} [ccEnableArenas] FileOptions ccEnableArenas
             * @property {string|null} [objcClassPrefix] FileOptions objcClassPrefix
             * @property {string|null} [csharpNamespace] FileOptions csharpNamespace
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
             */

            /**
             * Constructs a new FileOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FileOptions.
             * @implements IFileOptions
             * @constructor
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             */
            function FileOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileOptions javaPackage.
             * @member {string} javaPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaPackage = "";

            /**
             * FileOptions javaOuterClassname.
             * @member {string} javaOuterClassname
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaOuterClassname = "";

            /**
             * FileOptions javaMultipleFiles.
             * @member {boolean} javaMultipleFiles
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaMultipleFiles = false;

            /**
             * FileOptions javaGenerateEqualsAndHash.
             * @member {boolean} javaGenerateEqualsAndHash
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenerateEqualsAndHash = false;

            /**
             * FileOptions javaStringCheckUtf8.
             * @member {boolean} javaStringCheckUtf8
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaStringCheckUtf8 = false;

            /**
             * FileOptions optimizeFor.
             * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.optimizeFor = 1;

            /**
             * FileOptions goPackage.
             * @member {string} goPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.goPackage = "";

            /**
             * FileOptions ccGenericServices.
             * @member {boolean} ccGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccGenericServices = false;

            /**
             * FileOptions javaGenericServices.
             * @member {boolean} javaGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenericServices = false;

            /**
             * FileOptions pyGenericServices.
             * @member {boolean} pyGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.pyGenericServices = false;

            /**
             * FileOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions ccEnableArenas.
             * @member {boolean} ccEnableArenas
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccEnableArenas = false;

            /**
             * FileOptions objcClassPrefix.
             * @member {string} objcClassPrefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.objcClassPrefix = "";

            /**
             * FileOptions csharpNamespace.
             * @member {string} csharpNamespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.csharpNamespace = "";

            /**
             * FileOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             * @returns {google.protobuf.FileOptions} FileOptions instance
             */
            FileOptions.create = function create(properties) {
                return new FileOptions(properties);
            };

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.javaPackage != null && Object.hasOwnProperty.call(message, "javaPackage"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                if (message.javaOuterClassname != null && Object.hasOwnProperty.call(message, "javaOuterClassname"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                if (message.optimizeFor != null && Object.hasOwnProperty.call(message, "optimizeFor"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                if (message.javaMultipleFiles != null && Object.hasOwnProperty.call(message, "javaMultipleFiles"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                if (message.goPackage != null && Object.hasOwnProperty.call(message, "goPackage"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                if (message.ccGenericServices != null && Object.hasOwnProperty.call(message, "ccGenericServices"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                if (message.javaGenericServices != null && Object.hasOwnProperty.call(message, "javaGenericServices"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                if (message.pyGenericServices != null && Object.hasOwnProperty.call(message, "pyGenericServices"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                if (message.javaGenerateEqualsAndHash != null && Object.hasOwnProperty.call(message, "javaGenerateEqualsAndHash"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                if (message.javaStringCheckUtf8 != null && Object.hasOwnProperty.call(message, "javaStringCheckUtf8"))
                    writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                if (message.ccEnableArenas != null && Object.hasOwnProperty.call(message, "ccEnableArenas"))
                    writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                if (message.objcClassPrefix != null && Object.hasOwnProperty.call(message, "objcClassPrefix"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                if (message.csharpNamespace != null && Object.hasOwnProperty.call(message, "csharpNamespace"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.javaPackage = reader.string();
                        break;
                    case 8:
                        message.javaOuterClassname = reader.string();
                        break;
                    case 10:
                        message.javaMultipleFiles = reader.bool();
                        break;
                    case 20:
                        message.javaGenerateEqualsAndHash = reader.bool();
                        break;
                    case 27:
                        message.javaStringCheckUtf8 = reader.bool();
                        break;
                    case 9:
                        message.optimizeFor = reader.int32();
                        break;
                    case 11:
                        message.goPackage = reader.string();
                        break;
                    case 16:
                        message.ccGenericServices = reader.bool();
                        break;
                    case 17:
                        message.javaGenericServices = reader.bool();
                        break;
                    case 18:
                        message.pyGenericServices = reader.bool();
                        break;
                    case 23:
                        message.deprecated = reader.bool();
                        break;
                    case 31:
                        message.ccEnableArenas = reader.bool();
                        break;
                    case 36:
                        message.objcClassPrefix = reader.string();
                        break;
                    case 37:
                        message.csharpNamespace = reader.string();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileOptions message.
             * @function verify
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    if (!$util.isString(message.javaPackage))
                        return "javaPackage: string expected";
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    if (!$util.isString(message.javaOuterClassname))
                        return "javaOuterClassname: string expected";
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    if (typeof message.javaMultipleFiles !== "boolean")
                        return "javaMultipleFiles: boolean expected";
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                        return "javaGenerateEqualsAndHash: boolean expected";
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    if (typeof message.javaStringCheckUtf8 !== "boolean")
                        return "javaStringCheckUtf8: boolean expected";
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    switch (message.optimizeFor) {
                    default:
                        return "optimizeFor: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    if (!$util.isString(message.goPackage))
                        return "goPackage: string expected";
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    if (typeof message.ccGenericServices !== "boolean")
                        return "ccGenericServices: boolean expected";
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    if (typeof message.javaGenericServices !== "boolean")
                        return "javaGenericServices: boolean expected";
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    if (typeof message.pyGenericServices !== "boolean")
                        return "pyGenericServices: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    if (typeof message.ccEnableArenas !== "boolean")
                        return "ccEnableArenas: boolean expected";
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    if (!$util.isString(message.objcClassPrefix))
                        return "objcClassPrefix: string expected";
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    if (!$util.isString(message.csharpNamespace))
                        return "csharpNamespace: string expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileOptions)
                    return object;
                let message = new $root.google.protobuf.FileOptions();
                if (object.javaPackage != null)
                    message.javaPackage = String(object.javaPackage);
                if (object.javaOuterClassname != null)
                    message.javaOuterClassname = String(object.javaOuterClassname);
                if (object.javaMultipleFiles != null)
                    message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                if (object.javaGenerateEqualsAndHash != null)
                    message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                if (object.javaStringCheckUtf8 != null)
                    message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                switch (object.optimizeFor) {
                case "SPEED":
                case 1:
                    message.optimizeFor = 1;
                    break;
                case "CODE_SIZE":
                case 2:
                    message.optimizeFor = 2;
                    break;
                case "LITE_RUNTIME":
                case 3:
                    message.optimizeFor = 3;
                    break;
                }
                if (object.goPackage != null)
                    message.goPackage = String(object.goPackage);
                if (object.ccGenericServices != null)
                    message.ccGenericServices = Boolean(object.ccGenericServices);
                if (object.javaGenericServices != null)
                    message.javaGenericServices = Boolean(object.javaGenericServices);
                if (object.pyGenericServices != null)
                    message.pyGenericServices = Boolean(object.pyGenericServices);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.ccEnableArenas != null)
                    message.ccEnableArenas = Boolean(object.ccEnableArenas);
                if (object.objcClassPrefix != null)
                    message.objcClassPrefix = String(object.objcClassPrefix);
                if (object.csharpNamespace != null)
                    message.csharpNamespace = String(object.csharpNamespace);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.FileOptions} message FileOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.javaPackage = "";
                    object.javaOuterClassname = "";
                    object.optimizeFor = options.enums === String ? "SPEED" : 1;
                    object.javaMultipleFiles = false;
                    object.goPackage = "";
                    object.ccGenericServices = false;
                    object.javaGenericServices = false;
                    object.pyGenericServices = false;
                    object.javaGenerateEqualsAndHash = false;
                    object.deprecated = false;
                    object.javaStringCheckUtf8 = false;
                    object.ccEnableArenas = false;
                    object.objcClassPrefix = "";
                    object.csharpNamespace = "";
                }
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    object.javaPackage = message.javaPackage;
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    object.javaOuterClassname = message.javaOuterClassname;
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    object.javaMultipleFiles = message.javaMultipleFiles;
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    object.goPackage = message.goPackage;
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    object.ccGenericServices = message.ccGenericServices;
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    object.javaGenericServices = message.javaGenericServices;
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    object.pyGenericServices = message.pyGenericServices;
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    object.ccEnableArenas = message.ccEnableArenas;
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    object.objcClassPrefix = message.objcClassPrefix;
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    object.csharpNamespace = message.csharpNamespace;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this FileOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * OptimizeMode enum.
             * @name google.protobuf.FileOptions.OptimizeMode
             * @enum {number}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Properties of a MessageOptions.
             * @memberof google.protobuf
             * @interface IMessageOptions
             * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
             * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
             * @property {boolean|null} [deprecated] MessageOptions deprecated
             * @property {boolean|null} [mapEntry] MessageOptions mapEntry
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
             */

            /**
             * Constructs a new MessageOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MessageOptions.
             * @implements IMessageOptions
             * @constructor
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             */
            function MessageOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageOptions messageSetWireFormat.
             * @member {boolean} messageSetWireFormat
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.messageSetWireFormat = false;

            /**
             * MessageOptions noStandardDescriptorAccessor.
             * @member {boolean} noStandardDescriptorAccessor
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.noStandardDescriptorAccessor = false;

            /**
             * MessageOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions mapEntry.
             * @member {boolean} mapEntry
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.mapEntry = false;

            /**
             * MessageOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             * @returns {google.protobuf.MessageOptions} MessageOptions instance
             */
            MessageOptions.create = function create(properties) {
                return new MessageOptions(properties);
            };

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.messageSetWireFormat != null && Object.hasOwnProperty.call(message, "messageSetWireFormat"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                if (message.noStandardDescriptorAccessor != null && Object.hasOwnProperty.call(message, "noStandardDescriptorAccessor"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.mapEntry != null && Object.hasOwnProperty.call(message, "mapEntry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.messageSetWireFormat = reader.bool();
                        break;
                    case 2:
                        message.noStandardDescriptorAccessor = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 7:
                        message.mapEntry = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageOptions message.
             * @function verify
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    if (typeof message.messageSetWireFormat !== "boolean")
                        return "messageSetWireFormat: boolean expected";
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    if (typeof message.noStandardDescriptorAccessor !== "boolean")
                        return "noStandardDescriptorAccessor: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    if (typeof message.mapEntry !== "boolean")
                        return "mapEntry: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MessageOptions)
                    return object;
                let message = new $root.google.protobuf.MessageOptions();
                if (object.messageSetWireFormat != null)
                    message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                if (object.noStandardDescriptorAccessor != null)
                    message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.mapEntry != null)
                    message.mapEntry = Boolean(object.mapEntry);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.MessageOptions} message MessageOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.messageSetWireFormat = false;
                    object.noStandardDescriptorAccessor = false;
                    object.deprecated = false;
                    object.mapEntry = false;
                }
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    object.messageSetWireFormat = message.messageSetWireFormat;
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    object.mapEntry = message.mapEntry;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MessageOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Properties of a FieldOptions.
             * @memberof google.protobuf
             * @interface IFieldOptions
             * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
             * @property {boolean|null} [packed] FieldOptions packed
             * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
             * @property {boolean|null} [lazy] FieldOptions lazy
             * @property {boolean|null} [deprecated] FieldOptions deprecated
             * @property {boolean|null} [weak] FieldOptions weak
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
             * @property {boolean|null} [".exocore.indexed"] FieldOptions .exocore.indexed
             * @property {boolean|null} [".exocore.sorted"] FieldOptions .exocore.sorted
             * @property {boolean|null} [".exocore.text"] FieldOptions .exocore.text
             * @property {Array.<number>|null} [".exocore.fieldGroup"] FieldOptions .exocore.fieldGroup
             */

            /**
             * Constructs a new FieldOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FieldOptions.
             * @implements IFieldOptions
             * @constructor
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             */
            function FieldOptions(properties) {
                this.uninterpretedOption = [];
                this[".exocore.fieldGroup"] = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldOptions ctype.
             * @member {google.protobuf.FieldOptions.CType} ctype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @member {boolean} packed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @member {google.protobuf.FieldOptions.JSType} jstype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.jstype = 0;

            /**
             * FieldOptions lazy.
             * @member {boolean} lazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @member {boolean} weak
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * FieldOptions .exocore.indexed.
             * @member {boolean} .exocore.indexed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".exocore.indexed"] = false;

            /**
             * FieldOptions .exocore.sorted.
             * @member {boolean} .exocore.sorted
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".exocore.sorted"] = false;

            /**
             * FieldOptions .exocore.text.
             * @member {boolean} .exocore.text
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".exocore.text"] = false;

            /**
             * FieldOptions .exocore.fieldGroup.
             * @member {Array.<number>} .exocore.fieldGroup
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".exocore.fieldGroup"] = $util.emptyArray;

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             * @returns {google.protobuf.FieldOptions} FieldOptions instance
             */
            FieldOptions.create = function create(properties) {
                return new FieldOptions(properties);
            };

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.lazy != null && Object.hasOwnProperty.call(message, "lazy"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                if (message.jstype != null && Object.hasOwnProperty.call(message, "jstype"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".exocore.indexed"] != null && Object.hasOwnProperty.call(message, ".exocore.indexed"))
                    writer.uint32(/* id 1373, wireType 0 =*/10984).bool(message[".exocore.indexed"]);
                if (message[".exocore.sorted"] != null && Object.hasOwnProperty.call(message, ".exocore.sorted"))
                    writer.uint32(/* id 1374, wireType 0 =*/10992).bool(message[".exocore.sorted"]);
                if (message[".exocore.text"] != null && Object.hasOwnProperty.call(message, ".exocore.text"))
                    writer.uint32(/* id 1375, wireType 0 =*/11000).bool(message[".exocore.text"]);
                if (message[".exocore.fieldGroup"] != null && message[".exocore.fieldGroup"].length) {
                    writer.uint32(/* id 1376, wireType 2 =*/11010).fork();
                    for (let i = 0; i < message[".exocore.fieldGroup"].length; ++i)
                        writer.uint32(message[".exocore.fieldGroup"][i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ctype = reader.int32();
                        break;
                    case 2:
                        message.packed = reader.bool();
                        break;
                    case 6:
                        message.jstype = reader.int32();
                        break;
                    case 5:
                        message.lazy = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 10:
                        message.weak = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 1373:
                        message[".exocore.indexed"] = reader.bool();
                        break;
                    case 1374:
                        message[".exocore.sorted"] = reader.bool();
                        break;
                    case 1375:
                        message[".exocore.text"] = reader.bool();
                        break;
                    case 1376:
                        if (!(message[".exocore.fieldGroup"] && message[".exocore.fieldGroup"].length))
                            message[".exocore.fieldGroup"] = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message[".exocore.fieldGroup"].push(reader.uint32());
                        } else
                            message[".exocore.fieldGroup"].push(reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldOptions message.
             * @function verify
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    switch (message.ctype) {
                    default:
                        return "ctype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.packed != null && message.hasOwnProperty("packed"))
                    if (typeof message.packed !== "boolean")
                        return "packed: boolean expected";
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    switch (message.jstype) {
                    default:
                        return "jstype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    if (typeof message.lazy !== "boolean")
                        return "lazy: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.weak != null && message.hasOwnProperty("weak"))
                    if (typeof message.weak !== "boolean")
                        return "weak: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".exocore.indexed"] != null && message.hasOwnProperty(".exocore.indexed"))
                    if (typeof message[".exocore.indexed"] !== "boolean")
                        return ".exocore.indexed: boolean expected";
                if (message[".exocore.sorted"] != null && message.hasOwnProperty(".exocore.sorted"))
                    if (typeof message[".exocore.sorted"] !== "boolean")
                        return ".exocore.sorted: boolean expected";
                if (message[".exocore.text"] != null && message.hasOwnProperty(".exocore.text"))
                    if (typeof message[".exocore.text"] !== "boolean")
                        return ".exocore.text: boolean expected";
                if (message[".exocore.fieldGroup"] != null && message.hasOwnProperty(".exocore.fieldGroup")) {
                    if (!Array.isArray(message[".exocore.fieldGroup"]))
                        return ".exocore.fieldGroup: array expected";
                    for (let i = 0; i < message[".exocore.fieldGroup"].length; ++i)
                        if (!$util.isInteger(message[".exocore.fieldGroup"][i]))
                            return ".exocore.fieldGroup: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldOptions)
                    return object;
                let message = new $root.google.protobuf.FieldOptions();
                switch (object.ctype) {
                case "STRING":
                case 0:
                    message.ctype = 0;
                    break;
                case "CORD":
                case 1:
                    message.ctype = 1;
                    break;
                case "STRING_PIECE":
                case 2:
                    message.ctype = 2;
                    break;
                }
                if (object.packed != null)
                    message.packed = Boolean(object.packed);
                switch (object.jstype) {
                case "JS_NORMAL":
                case 0:
                    message.jstype = 0;
                    break;
                case "JS_STRING":
                case 1:
                    message.jstype = 1;
                    break;
                case "JS_NUMBER":
                case 2:
                    message.jstype = 2;
                    break;
                }
                if (object.lazy != null)
                    message.lazy = Boolean(object.lazy);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.weak != null)
                    message.weak = Boolean(object.weak);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".exocore.indexed"] != null)
                    message[".exocore.indexed"] = Boolean(object[".exocore.indexed"]);
                if (object[".exocore.sorted"] != null)
                    message[".exocore.sorted"] = Boolean(object[".exocore.sorted"]);
                if (object[".exocore.text"] != null)
                    message[".exocore.text"] = Boolean(object[".exocore.text"]);
                if (object[".exocore.fieldGroup"]) {
                    if (!Array.isArray(object[".exocore.fieldGroup"]))
                        throw TypeError(".google.protobuf.FieldOptions..exocore.fieldGroup: array expected");
                    message[".exocore.fieldGroup"] = [];
                    for (let i = 0; i < object[".exocore.fieldGroup"].length; ++i)
                        message[".exocore.fieldGroup"][i] = object[".exocore.fieldGroup"][i] >>> 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.FieldOptions} message FieldOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.uninterpretedOption = [];
                    object[".exocore.fieldGroup"] = [];
                }
                if (options.defaults) {
                    object.ctype = options.enums === String ? "STRING" : 0;
                    object.packed = false;
                    object.deprecated = false;
                    object.lazy = false;
                    object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                    object.weak = false;
                    object[".exocore.indexed"] = false;
                    object[".exocore.sorted"] = false;
                    object[".exocore.text"] = false;
                }
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                if (message.packed != null && message.hasOwnProperty("packed"))
                    object.packed = message.packed;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    object.lazy = message.lazy;
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                if (message.weak != null && message.hasOwnProperty("weak"))
                    object.weak = message.weak;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".exocore.indexed"] != null && message.hasOwnProperty(".exocore.indexed"))
                    object[".exocore.indexed"] = message[".exocore.indexed"];
                if (message[".exocore.sorted"] != null && message.hasOwnProperty(".exocore.sorted"))
                    object[".exocore.sorted"] = message[".exocore.sorted"];
                if (message[".exocore.text"] != null && message.hasOwnProperty(".exocore.text"))
                    object[".exocore.text"] = message[".exocore.text"];
                if (message[".exocore.fieldGroup"] && message[".exocore.fieldGroup"].length) {
                    object[".exocore.fieldGroup"] = [];
                    for (let j = 0; j < message[".exocore.fieldGroup"].length; ++j)
                        object[".exocore.fieldGroup"][j] = message[".exocore.fieldGroup"][j];
                }
                return object;
            };

            /**
             * Converts this FieldOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * CType enum.
             * @name google.protobuf.FieldOptions.CType
             * @enum {number}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @name google.protobuf.FieldOptions.JSType
             * @enum {number}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Properties of an OneofOptions.
             * @memberof google.protobuf
             * @interface IOneofOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] OneofOptions uninterpretedOption
             */

            /**
             * Constructs a new OneofOptions.
             * @memberof google.protobuf
             * @classdesc Represents an OneofOptions.
             * @implements IOneofOptions
             * @constructor
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             */
            function OneofOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.OneofOptions
             * @instance
             */
            OneofOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             * @returns {google.protobuf.OneofOptions} OneofOptions instance
             */
            OneofOptions.create = function create(properties) {
                return new OneofOptions(properties);
            };

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofOptions message.
             * @function verify
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofOptions)
                    return object;
                let message = new $root.google.protobuf.OneofOptions();
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.OneofOptions} message OneofOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this OneofOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Properties of an EnumOptions.
             * @memberof google.protobuf
             * @interface IEnumOptions
             * @property {boolean|null} [allowAlias] EnumOptions allowAlias
             * @property {boolean|null} [deprecated] EnumOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumOptions.
             * @implements IEnumOptions
             * @constructor
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             */
            function EnumOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumOptions allowAlias.
             * @member {boolean} allowAlias
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.allowAlias = false;

            /**
             * EnumOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumOptions} EnumOptions instance
             */
            EnumOptions.create = function create(properties) {
                return new EnumOptions(properties);
            };

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allowAlias != null && Object.hasOwnProperty.call(message, "allowAlias"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.allowAlias = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumOptions message.
             * @function verify
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    if (typeof message.allowAlias !== "boolean")
                        return "allowAlias: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumOptions)
                    return object;
                let message = new $root.google.protobuf.EnumOptions();
                if (object.allowAlias != null)
                    message.allowAlias = Boolean(object.allowAlias);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.EnumOptions} message EnumOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.allowAlias = false;
                    object.deprecated = false;
                }
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    object.allowAlias = message.allowAlias;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this EnumOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Properties of an EnumValueOptions.
             * @memberof google.protobuf
             * @interface IEnumValueOptions
             * @property {boolean|null} [deprecated] EnumValueOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumValueOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueOptions.
             * @implements IEnumValueOptions
             * @constructor
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
             */
            EnumValueOptions.create = function create(properties) {
                return new EnumValueOptions(properties);
            };

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueOptions message.
             * @function verify
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueOptions)
                    return object;
                let message = new $root.google.protobuf.EnumValueOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this EnumValueOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Properties of a ServiceOptions.
             * @memberof google.protobuf
             * @interface IServiceOptions
             * @property {boolean|null} [deprecated] ServiceOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
             */

            /**
             * Constructs a new ServiceOptions.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceOptions.
             * @implements IServiceOptions
             * @constructor
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
             */
            ServiceOptions.create = function create(properties) {
                return new ServiceOptions(properties);
            };

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceOptions message.
             * @function verify
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceOptions)
                    return object;
                let message = new $root.google.protobuf.ServiceOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.ServiceOptions} message ServiceOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this ServiceOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Properties of a MethodOptions.
             * @memberof google.protobuf
             * @interface IMethodOptions
             * @property {boolean|null} [deprecated] MethodOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
             */

            /**
             * Constructs a new MethodOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MethodOptions.
             * @implements IMethodOptions
             * @constructor
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             */
            function MethodOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             * @returns {google.protobuf.MethodOptions} MethodOptions instance
             */
            MethodOptions.create = function create(properties) {
                return new MethodOptions(properties);
            };

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodOptions message.
             * @function verify
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodOptions)
                    return object;
                let message = new $root.google.protobuf.MethodOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.MethodOptions} message MethodOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this MethodOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Properties of an UninterpretedOption.
             * @memberof google.protobuf
             * @interface IUninterpretedOption
             * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
             * @property {string|null} [identifierValue] UninterpretedOption identifierValue
             * @property {number|Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
             * @property {number|Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
             * @property {number|null} [doubleValue] UninterpretedOption doubleValue
             * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
             * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
             */

            /**
             * Constructs a new UninterpretedOption.
             * @memberof google.protobuf
             * @classdesc Represents an UninterpretedOption.
             * @implements IUninterpretedOption
             * @constructor
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                this.name = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UninterpretedOption name.
             * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifierValue.
             * @member {string} identifierValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.identifierValue = "";

            /**
             * UninterpretedOption positiveIntValue.
             * @member {number|Long} positiveIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negativeIntValue.
             * @member {number|Long} negativeIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption doubleValue.
             * @member {number} doubleValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.doubleValue = 0;

            /**
             * UninterpretedOption stringValue.
             * @member {Uint8Array} stringValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.stringValue = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregateValue.
             * @member {string} aggregateValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.aggregateValue = "";

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
             */
            UninterpretedOption.create = function create(properties) {
                return new UninterpretedOption(properties);
            };

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.name.length)
                    for (let i = 0; i < message.name.length; ++i)
                        $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identifierValue != null && Object.hasOwnProperty.call(message, "identifierValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                if (message.positiveIntValue != null && Object.hasOwnProperty.call(message, "positiveIntValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                if (message.negativeIntValue != null && Object.hasOwnProperty.call(message, "negativeIntValue"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                if (message.aggregateValue != null && Object.hasOwnProperty.call(message, "aggregateValue"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                return writer;
            };

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.name && message.name.length))
                            message.name = [];
                        message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.identifierValue = reader.string();
                        break;
                    case 4:
                        message.positiveIntValue = reader.uint64();
                        break;
                    case 5:
                        message.negativeIntValue = reader.int64();
                        break;
                    case 6:
                        message.doubleValue = reader.double();
                        break;
                    case 7:
                        message.stringValue = reader.bytes();
                        break;
                    case 8:
                        message.aggregateValue = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UninterpretedOption message.
             * @function verify
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UninterpretedOption.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name")) {
                    if (!Array.isArray(message.name))
                        return "name: array expected";
                    for (let i = 0; i < message.name.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                        if (error)
                            return "name." + error;
                    }
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    if (!$util.isString(message.identifierValue))
                        return "identifierValue: string expected";
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                        return "positiveIntValue: integer|Long expected";
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                        return "negativeIntValue: integer|Long expected";
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    if (typeof message.doubleValue !== "number")
                        return "doubleValue: number expected";
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                        return "stringValue: buffer expected";
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    if (!$util.isString(message.aggregateValue))
                        return "aggregateValue: string expected";
                return null;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UninterpretedOption)
                    return object;
                let message = new $root.google.protobuf.UninterpretedOption();
                if (object.name) {
                    if (!Array.isArray(object.name))
                        throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                    message.name = [];
                    for (let i = 0; i < object.name.length; ++i) {
                        if (typeof object.name[i] !== "object")
                            throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                        message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                    }
                }
                if (object.identifierValue != null)
                    message.identifierValue = String(object.identifierValue);
                if (object.positiveIntValue != null)
                    if ($util.Long)
                        (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                    else if (typeof object.positiveIntValue === "string")
                        message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                    else if (typeof object.positiveIntValue === "number")
                        message.positiveIntValue = object.positiveIntValue;
                    else if (typeof object.positiveIntValue === "object")
                        message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                if (object.negativeIntValue != null)
                    if ($util.Long)
                        (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                    else if (typeof object.negativeIntValue === "string")
                        message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                    else if (typeof object.negativeIntValue === "number")
                        message.negativeIntValue = object.negativeIntValue;
                    else if (typeof object.negativeIntValue === "object")
                        message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                if (object.doubleValue != null)
                    message.doubleValue = Number(object.doubleValue);
                if (object.stringValue != null)
                    if (typeof object.stringValue === "string")
                        $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                    else if (object.stringValue.length)
                        message.stringValue = object.stringValue;
                if (object.aggregateValue != null)
                    message.aggregateValue = String(object.aggregateValue);
                return message;
            };

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.name = [];
                if (options.defaults) {
                    object.identifierValue = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.positiveIntValue = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.negativeIntValue = options.longs === String ? "0" : 0;
                    object.doubleValue = 0;
                    if (options.bytes === String)
                        object.stringValue = "";
                    else {
                        object.stringValue = [];
                        if (options.bytes !== Array)
                            object.stringValue = $util.newBuffer(object.stringValue);
                    }
                    object.aggregateValue = "";
                }
                if (message.name && message.name.length) {
                    object.name = [];
                    for (let j = 0; j < message.name.length; ++j)
                        object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    object.identifierValue = message.identifierValue;
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (typeof message.positiveIntValue === "number")
                        object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                    else
                        object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (typeof message.negativeIntValue === "number")
                        object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                    else
                        object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    object.aggregateValue = message.aggregateValue;
                return object;
            };

            /**
             * Converts this UninterpretedOption to JSON.
             * @function toJSON
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UninterpretedOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Properties of a NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @interface INamePart
                 * @property {string} namePart NamePart namePart
                 * @property {boolean} isExtension NamePart isExtension
                 */

                /**
                 * Constructs a new NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @classdesc Represents a NamePart.
                 * @implements INamePart
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NamePart namePart.
                 * @member {string} namePart
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.namePart = "";

                /**
                 * NamePart isExtension.
                 * @member {boolean} isExtension
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.isExtension = false;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                 */
                NamePart.create = function create(properties) {
                    return new NamePart(properties);
                };

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                    return writer;
                };

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.namePart = reader.string();
                            break;
                        case 2:
                            message.isExtension = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("namePart"))
                        throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                    if (!message.hasOwnProperty("isExtension"))
                        throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NamePart message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NamePart.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.namePart))
                        return "namePart: string expected";
                    if (typeof message.isExtension !== "boolean")
                        return "isExtension: boolean expected";
                    return null;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                        return object;
                    let message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    if (object.namePart != null)
                        message.namePart = String(object.namePart);
                    if (object.isExtension != null)
                        message.isExtension = Boolean(object.isExtension);
                    return message;
                };

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.namePart = "";
                        object.isExtension = false;
                    }
                    if (message.namePart != null && message.hasOwnProperty("namePart"))
                        object.namePart = message.namePart;
                    if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                        object.isExtension = message.isExtension;
                    return object;
                };

                /**
                 * Converts this NamePart to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NamePart.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Properties of a SourceCodeInfo.
             * @memberof google.protobuf
             * @interface ISourceCodeInfo
             * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
             */

            /**
             * Constructs a new SourceCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a SourceCodeInfo.
             * @implements ISourceCodeInfo
             * @constructor
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                this.location = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SourceCodeInfo location.
             * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
             */
            SourceCodeInfo.create = function create(properties) {
                return new SourceCodeInfo(properties);
            };

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.location != null && message.location.length)
                    for (let i = 0; i < message.location.length; ++i)
                        $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.location && message.location.length))
                            message.location = [];
                        message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SourceCodeInfo message.
             * @function verify
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SourceCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.location != null && message.hasOwnProperty("location")) {
                    if (!Array.isArray(message.location))
                        return "location: array expected";
                    for (let i = 0; i < message.location.length; ++i) {
                        let error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                        if (error)
                            return "location." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.SourceCodeInfo)
                    return object;
                let message = new $root.google.protobuf.SourceCodeInfo();
                if (object.location) {
                    if (!Array.isArray(object.location))
                        throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                    message.location = [];
                    for (let i = 0; i < object.location.length; ++i) {
                        if (typeof object.location[i] !== "object")
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                        message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.location = [];
                if (message.location && message.location.length) {
                    object.location = [];
                    for (let j = 0; j < message.location.length; ++j)
                        object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                }
                return object;
            };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SourceCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Properties of a Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @interface ILocation
                 * @property {Array.<number>|null} [path] Location path
                 * @property {Array.<number>|null} [span] Location span
                 * @property {string|null} [leadingComments] Location leadingComments
                 * @property {string|null} [trailingComments] Location trailingComments
                 * @property {Array.<string>|null} [leadingDetachedComments] Location leadingDetachedComments
                 */

                /**
                 * Constructs a new Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @classdesc Represents a Location.
                 * @implements ILocation
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 */
                function Location(properties) {
                    this.path = [];
                    this.span = [];
                    this.leadingDetachedComments = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @member {Array.<number>} span
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leadingComments.
                 * @member {string} leadingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingComments = "";

                /**
                 * Location trailingComments.
                 * @member {string} trailingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.trailingComments = "";

                /**
                 * Location leadingDetachedComments.
                 * @member {Array.<string>} leadingDetachedComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingDetachedComments = $util.emptyArray;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                 */
                Location.create = function create(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span != null && message.span.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (let i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leadingComments != null && Object.hasOwnProperty.call(message, "leadingComments"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                    if (message.trailingComments != null && Object.hasOwnProperty.call(message, "trailingComments"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                    if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                        for (let i = 0; i < message.leadingDetachedComments.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            if (!(message.span && message.span.length))
                                message.span = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.span.push(reader.int32());
                            } else
                                message.span.push(reader.int32());
                            break;
                        case 3:
                            message.leadingComments = reader.string();
                            break;
                        case 4:
                            message.trailingComments = reader.string();
                            break;
                        case 6:
                            if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                message.leadingDetachedComments = [];
                            message.leadingDetachedComments.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Location message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (let i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.span != null && message.hasOwnProperty("span")) {
                        if (!Array.isArray(message.span))
                            return "span: array expected";
                        for (let i = 0; i < message.span.length; ++i)
                            if (!$util.isInteger(message.span[i]))
                                return "span: integer[] expected";
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        if (!$util.isString(message.leadingComments))
                            return "leadingComments: string expected";
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        if (!$util.isString(message.trailingComments))
                            return "trailingComments: string expected";
                    if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                        if (!Array.isArray(message.leadingDetachedComments))
                            return "leadingDetachedComments: array expected";
                        for (let i = 0; i < message.leadingDetachedComments.length; ++i)
                            if (!$util.isString(message.leadingDetachedComments[i]))
                                return "leadingDetachedComments: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                        return object;
                    let message = new $root.google.protobuf.SourceCodeInfo.Location();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                        message.path = [];
                        for (let i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.span) {
                        if (!Array.isArray(object.span))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                        message.span = [];
                        for (let i = 0; i < object.span.length; ++i)
                            message.span[i] = object.span[i] | 0;
                    }
                    if (object.leadingComments != null)
                        message.leadingComments = String(object.leadingComments);
                    if (object.trailingComments != null)
                        message.trailingComments = String(object.trailingComments);
                    if (object.leadingDetachedComments) {
                        if (!Array.isArray(object.leadingDetachedComments))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                        message.leadingDetachedComments = [];
                        for (let i = 0; i < object.leadingDetachedComments.length; ++i)
                            message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.Location} message Location
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                        object.span = [];
                        object.leadingDetachedComments = [];
                    }
                    if (options.defaults) {
                        object.leadingComments = "";
                        object.trailingComments = "";
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (let j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.span && message.span.length) {
                        object.span = [];
                        for (let j = 0; j < message.span.length; ++j)
                            object.span[j] = message.span[j];
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        object.leadingComments = message.leadingComments;
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        object.trailingComments = message.trailingComments;
                    if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                        object.leadingDetachedComments = [];
                        for (let j = 0; j < message.leadingDetachedComments.length; ++j)
                            object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                    }
                    return object;
                };

                /**
                 * Converts this Location to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Properties of a GeneratedCodeInfo.
             * @memberof google.protobuf
             * @interface IGeneratedCodeInfo
             * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
             */

            /**
             * Constructs a new GeneratedCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a GeneratedCodeInfo.
             * @implements IGeneratedCodeInfo
             * @constructor
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             */
            function GeneratedCodeInfo(properties) {
                this.annotation = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeneratedCodeInfo annotation.
             * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
             */
            GeneratedCodeInfo.create = function create(properties) {
                return new GeneratedCodeInfo(properties);
            };

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.annotation != null && message.annotation.length)
                    for (let i = 0; i < message.annotation.length; ++i)
                        $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.annotation && message.annotation.length))
                            message.annotation = [];
                        message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GeneratedCodeInfo message.
             * @function verify
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GeneratedCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.annotation != null && message.hasOwnProperty("annotation")) {
                    if (!Array.isArray(message.annotation))
                        return "annotation: array expected";
                    for (let i = 0; i < message.annotation.length; ++i) {
                        let error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                        if (error)
                            return "annotation." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                    return object;
                let message = new $root.google.protobuf.GeneratedCodeInfo();
                if (object.annotation) {
                    if (!Array.isArray(object.annotation))
                        throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                    message.annotation = [];
                    for (let i = 0; i < object.annotation.length; ++i) {
                        if (typeof object.annotation[i] !== "object")
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                        message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.annotation = [];
                if (message.annotation && message.annotation.length) {
                    object.annotation = [];
                    for (let j = 0; j < message.annotation.length; ++j)
                        object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                }
                return object;
            };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Properties of an Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @interface IAnnotation
                 * @property {Array.<number>|null} [path] Annotation path
                 * @property {string|null} [sourceFile] Annotation sourceFile
                 * @property {number|null} [begin] Annotation begin
                 * @property {number|null} [end] Annotation end
                 */

                /**
                 * Constructs a new Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @classdesc Represents an Annotation.
                 * @implements IAnnotation
                 * @constructor
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 */
                function Annotation(properties) {
                    this.path = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Annotation path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation sourceFile.
                 * @member {string} sourceFile
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.sourceFile = "";

                /**
                 * Annotation begin.
                 * @member {number} begin
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @member {number} end
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.end = 0;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                 */
                Annotation.create = function create(properties) {
                    return new Annotation(properties);
                };

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.sourceFile != null && Object.hasOwnProperty.call(message, "sourceFile"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                    if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            message.sourceFile = reader.string();
                            break;
                        case 3:
                            message.begin = reader.int32();
                            break;
                        case 4:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Annotation message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Annotation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (let i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        if (!$util.isString(message.sourceFile))
                            return "sourceFile: string expected";
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        if (!$util.isInteger(message.begin))
                            return "begin: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                        return object;
                    let message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                        message.path = [];
                        for (let i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.sourceFile != null)
                        message.sourceFile = String(object.sourceFile);
                    if (object.begin != null)
                        message.begin = object.begin | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.path = [];
                    if (options.defaults) {
                        object.sourceFile = "";
                        object.begin = 0;
                        object.end = 0;
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (let j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        object.sourceFile = message.sourceFile;
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        object.begin = message.begin;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this Annotation to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Annotation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
