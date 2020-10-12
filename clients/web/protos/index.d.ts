import * as $protobuf from "protobufjs";
/** Namespace exocore. */
export namespace exocore {

    /** Namespace store. */
    namespace store {

        /** Properties of an Entity. */
        interface IEntity {

            /** Entity id */
            id?: (string|null);

            /** Entity traits */
            traits?: (exocore.store.ITrait[]|null);

            /** Entity creationDate */
            creationDate?: (google.protobuf.ITimestamp|null);

            /** Entity modificationDate */
            modificationDate?: (google.protobuf.ITimestamp|null);

            /** Entity deletionDate */
            deletionDate?: (google.protobuf.ITimestamp|null);

            /** Entity lastOperationId */
            lastOperationId?: (number|Long|null);
        }

        /** Represents an Entity. */
        class Entity implements IEntity {

            /**
             * Constructs a new Entity.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IEntity);

            /** Entity id. */
            public id: string;

            /** Entity traits. */
            public traits: exocore.store.ITrait[];

            /** Entity creationDate. */
            public creationDate?: (google.protobuf.ITimestamp|null);

            /** Entity modificationDate. */
            public modificationDate?: (google.protobuf.ITimestamp|null);

            /** Entity deletionDate. */
            public deletionDate?: (google.protobuf.ITimestamp|null);

            /** Entity lastOperationId. */
            public lastOperationId: (number|Long);

            /**
             * Creates a new Entity instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Entity instance
             */
            public static create(properties?: exocore.store.IEntity): exocore.store.Entity;

            /**
             * Encodes the specified Entity message. Does not implicitly {@link exocore.store.Entity.verify|verify} messages.
             * @param message Entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Entity message, length delimited. Does not implicitly {@link exocore.store.Entity.verify|verify} messages.
             * @param message Entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Entity message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.Entity;

            /**
             * Decodes an Entity message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.Entity;

            /**
             * Verifies an Entity message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Entity message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Entity
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.Entity;

            /**
             * Creates a plain object from an Entity message. Also converts values to other types if specified.
             * @param message Entity
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Entity to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Trait. */
        interface ITrait {

            /** Trait id */
            id?: (string|null);

            /** Trait message */
            message?: (google.protobuf.IAny|null);

            /** Trait creationDate */
            creationDate?: (google.protobuf.ITimestamp|null);

            /** Trait modificationDate */
            modificationDate?: (google.protobuf.ITimestamp|null);

            /** Trait deletionDate */
            deletionDate?: (google.protobuf.ITimestamp|null);

            /** Trait lastOperationId */
            lastOperationId?: (number|Long|null);

            /** Trait details */
            details?: (exocore.store.TraitDetails|null);
        }

        /** Represents a Trait. */
        class Trait implements ITrait {

            /**
             * Constructs a new Trait.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.ITrait);

            /** Trait id. */
            public id: string;

            /** Trait message. */
            public message?: (google.protobuf.IAny|null);

            /** Trait creationDate. */
            public creationDate?: (google.protobuf.ITimestamp|null);

            /** Trait modificationDate. */
            public modificationDate?: (google.protobuf.ITimestamp|null);

            /** Trait deletionDate. */
            public deletionDate?: (google.protobuf.ITimestamp|null);

            /** Trait lastOperationId. */
            public lastOperationId: (number|Long);

            /** Trait details. */
            public details: exocore.store.TraitDetails;

            /**
             * Creates a new Trait instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Trait instance
             */
            public static create(properties?: exocore.store.ITrait): exocore.store.Trait;

            /**
             * Encodes the specified Trait message. Does not implicitly {@link exocore.store.Trait.verify|verify} messages.
             * @param message Trait message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.ITrait, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Trait message, length delimited. Does not implicitly {@link exocore.store.Trait.verify|verify} messages.
             * @param message Trait message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.ITrait, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Trait message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Trait
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.Trait;

            /**
             * Decodes a Trait message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Trait
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.Trait;

            /**
             * Verifies a Trait message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Trait message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Trait
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.Trait;

            /**
             * Creates a plain object from a Trait message. Also converts values to other types if specified.
             * @param message Trait
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.Trait, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Trait to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Reference. */
        interface IReference {

            /** Reference entityId */
            entityId?: (string|null);

            /** Reference traitId */
            traitId?: (string|null);
        }

        /** Represents a Reference. */
        class Reference implements IReference {

            /**
             * Constructs a new Reference.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IReference);

            /** Reference entityId. */
            public entityId: string;

            /** Reference traitId. */
            public traitId: string;

            /**
             * Creates a new Reference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Reference instance
             */
            public static create(properties?: exocore.store.IReference): exocore.store.Reference;

            /**
             * Encodes the specified Reference message. Does not implicitly {@link exocore.store.Reference.verify|verify} messages.
             * @param message Reference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Reference message, length delimited. Does not implicitly {@link exocore.store.Reference.verify|verify} messages.
             * @param message Reference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Reference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Reference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.Reference;

            /**
             * Decodes a Reference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Reference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.Reference;

            /**
             * Verifies a Reference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Reference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Reference
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.Reference;

            /**
             * Creates a plain object from a Reference message. Also converts values to other types if specified.
             * @param message Reference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.Reference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Reference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** TraitDetails enum. */
        enum TraitDetails {
            TRAIT_DETAILS_FULL = 0,
            TRAIT_DETAILS_PARTIAL = 1
        }

        /** Properties of a MutationRequest. */
        interface IMutationRequest {

            /** Mutations to apply. */
            mutations?: (exocore.store.IEntityMutation[]|null);

            /** Waits for mutation to be indexed. */
            waitIndexed?: (boolean|null);

            /** Waits for mutation to be indexed and returns the mutated entities. */
            returnEntities?: (boolean|null);

            /** If an entity ID is generated for the mutated entities, reuse the same ID for all mutations. */
            commonEntityId?: (boolean|null);
        }

        /** Represents a MutationRequest. */
        class MutationRequest implements IMutationRequest {

            /**
             * Constructs a new MutationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IMutationRequest);

            /** Mutations to apply. */
            public mutations: exocore.store.IEntityMutation[];

            /** Waits for mutation to be indexed. */
            public waitIndexed: boolean;

            /** Waits for mutation to be indexed and returns the mutated entities. */
            public returnEntities: boolean;

            /** If an entity ID is generated for the mutated entities, reuse the same ID for all mutations. */
            public commonEntityId: boolean;

            /**
             * Creates a new MutationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MutationRequest instance
             */
            public static create(properties?: exocore.store.IMutationRequest): exocore.store.MutationRequest;

            /**
             * Encodes the specified MutationRequest message. Does not implicitly {@link exocore.store.MutationRequest.verify|verify} messages.
             * @param message MutationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IMutationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MutationRequest message, length delimited. Does not implicitly {@link exocore.store.MutationRequest.verify|verify} messages.
             * @param message MutationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IMutationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MutationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MutationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.MutationRequest;

            /**
             * Decodes a MutationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MutationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.MutationRequest;

            /**
             * Verifies a MutationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MutationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MutationRequest
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.MutationRequest;

            /**
             * Creates a plain object from a MutationRequest message. Also converts values to other types if specified.
             * @param message MutationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.MutationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MutationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MutationResult. */
        interface IMutationResult {

            /** Unique operation ids for each mutations. */
            operationIds?: ((number|Long)[]|null);

            /** Mutated entities if requested. */
            entities?: (exocore.store.IEntity[]|null);
        }

        /** Represents a MutationResult. */
        class MutationResult implements IMutationResult {

            /**
             * Constructs a new MutationResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IMutationResult);

            /** Unique operation ids for each mutations. */
            public operationIds: (number|Long)[];

            /** Mutated entities if requested. */
            public entities: exocore.store.IEntity[];

            /**
             * Creates a new MutationResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MutationResult instance
             */
            public static create(properties?: exocore.store.IMutationResult): exocore.store.MutationResult;

            /**
             * Encodes the specified MutationResult message. Does not implicitly {@link exocore.store.MutationResult.verify|verify} messages.
             * @param message MutationResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IMutationResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MutationResult message, length delimited. Does not implicitly {@link exocore.store.MutationResult.verify|verify} messages.
             * @param message MutationResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IMutationResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MutationResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MutationResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.MutationResult;

            /**
             * Decodes a MutationResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MutationResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.MutationResult;

            /**
             * Verifies a MutationResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MutationResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MutationResult
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.MutationResult;

            /**
             * Creates a plain object from a MutationResult message. Also converts values to other types if specified.
             * @param message MutationResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.MutationResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MutationResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EntityMutation. */
        interface IEntityMutation {

            /** EntityMutation entityId */
            entityId?: (string|null);

            /** EntityMutation putTrait */
            putTrait?: (exocore.store.IPutTraitMutation|null);

            /** EntityMutation deleteTrait */
            deleteTrait?: (exocore.store.IDeleteTraitMutation|null);

            /** EntityMutation deleteEntity */
            deleteEntity?: (exocore.store.IDeleteEntityMutation|null);

            /** EntityMutation updateTrait */
            updateTrait?: (exocore.store.IUpdateTraitMutation|null);

            /** EntityMutation compactTrait */
            compactTrait?: (exocore.store.ICompactTraitMutation|null);

            /** EntityMutation test */
            test?: (exocore.store.ITestMutation|null);
        }

        /** Represents an EntityMutation. */
        class EntityMutation implements IEntityMutation {

            /**
             * Constructs a new EntityMutation.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IEntityMutation);

            /** EntityMutation entityId. */
            public entityId: string;

            /** EntityMutation putTrait. */
            public putTrait?: (exocore.store.IPutTraitMutation|null);

            /** EntityMutation deleteTrait. */
            public deleteTrait?: (exocore.store.IDeleteTraitMutation|null);

            /** EntityMutation deleteEntity. */
            public deleteEntity?: (exocore.store.IDeleteEntityMutation|null);

            /** EntityMutation updateTrait. */
            public updateTrait?: (exocore.store.IUpdateTraitMutation|null);

            /** EntityMutation compactTrait. */
            public compactTrait?: (exocore.store.ICompactTraitMutation|null);

            /** EntityMutation test. */
            public test?: (exocore.store.ITestMutation|null);

            /** EntityMutation mutation. */
            public mutation?: ("putTrait"|"deleteTrait"|"deleteEntity"|"updateTrait"|"compactTrait"|"test");

            /**
             * Creates a new EntityMutation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EntityMutation instance
             */
            public static create(properties?: exocore.store.IEntityMutation): exocore.store.EntityMutation;

            /**
             * Encodes the specified EntityMutation message. Does not implicitly {@link exocore.store.EntityMutation.verify|verify} messages.
             * @param message EntityMutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IEntityMutation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EntityMutation message, length delimited. Does not implicitly {@link exocore.store.EntityMutation.verify|verify} messages.
             * @param message EntityMutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IEntityMutation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EntityMutation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EntityMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.EntityMutation;

            /**
             * Decodes an EntityMutation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EntityMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.EntityMutation;

            /**
             * Verifies an EntityMutation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EntityMutation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EntityMutation
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.EntityMutation;

            /**
             * Creates a plain object from an EntityMutation message. Also converts values to other types if specified.
             * @param message EntityMutation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.EntityMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EntityMutation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PutTraitMutation. */
        interface IPutTraitMutation {

            /** PutTraitMutation trait */
            trait?: (exocore.store.ITrait|null);
        }

        /** Represents a PutTraitMutation. */
        class PutTraitMutation implements IPutTraitMutation {

            /**
             * Constructs a new PutTraitMutation.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IPutTraitMutation);

            /** PutTraitMutation trait. */
            public trait?: (exocore.store.ITrait|null);

            /**
             * Creates a new PutTraitMutation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PutTraitMutation instance
             */
            public static create(properties?: exocore.store.IPutTraitMutation): exocore.store.PutTraitMutation;

            /**
             * Encodes the specified PutTraitMutation message. Does not implicitly {@link exocore.store.PutTraitMutation.verify|verify} messages.
             * @param message PutTraitMutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IPutTraitMutation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PutTraitMutation message, length delimited. Does not implicitly {@link exocore.store.PutTraitMutation.verify|verify} messages.
             * @param message PutTraitMutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IPutTraitMutation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PutTraitMutation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PutTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.PutTraitMutation;

            /**
             * Decodes a PutTraitMutation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PutTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.PutTraitMutation;

            /**
             * Verifies a PutTraitMutation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PutTraitMutation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PutTraitMutation
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.PutTraitMutation;

            /**
             * Creates a plain object from a PutTraitMutation message. Also converts values to other types if specified.
             * @param message PutTraitMutation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.PutTraitMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PutTraitMutation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteTraitMutation. */
        interface IDeleteTraitMutation {

            /** DeleteTraitMutation traitId */
            traitId?: (string|null);
        }

        /** Represents a DeleteTraitMutation. */
        class DeleteTraitMutation implements IDeleteTraitMutation {

            /**
             * Constructs a new DeleteTraitMutation.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IDeleteTraitMutation);

            /** DeleteTraitMutation traitId. */
            public traitId: string;

            /**
             * Creates a new DeleteTraitMutation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteTraitMutation instance
             */
            public static create(properties?: exocore.store.IDeleteTraitMutation): exocore.store.DeleteTraitMutation;

            /**
             * Encodes the specified DeleteTraitMutation message. Does not implicitly {@link exocore.store.DeleteTraitMutation.verify|verify} messages.
             * @param message DeleteTraitMutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IDeleteTraitMutation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteTraitMutation message, length delimited. Does not implicitly {@link exocore.store.DeleteTraitMutation.verify|verify} messages.
             * @param message DeleteTraitMutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IDeleteTraitMutation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteTraitMutation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.DeleteTraitMutation;

            /**
             * Decodes a DeleteTraitMutation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.DeleteTraitMutation;

            /**
             * Verifies a DeleteTraitMutation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteTraitMutation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteTraitMutation
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.DeleteTraitMutation;

            /**
             * Creates a plain object from a DeleteTraitMutation message. Also converts values to other types if specified.
             * @param message DeleteTraitMutation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.DeleteTraitMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteTraitMutation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteEntityMutation. */
        interface IDeleteEntityMutation {
        }

        /** Represents a DeleteEntityMutation. */
        class DeleteEntityMutation implements IDeleteEntityMutation {

            /**
             * Constructs a new DeleteEntityMutation.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IDeleteEntityMutation);

            /**
             * Creates a new DeleteEntityMutation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteEntityMutation instance
             */
            public static create(properties?: exocore.store.IDeleteEntityMutation): exocore.store.DeleteEntityMutation;

            /**
             * Encodes the specified DeleteEntityMutation message. Does not implicitly {@link exocore.store.DeleteEntityMutation.verify|verify} messages.
             * @param message DeleteEntityMutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IDeleteEntityMutation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteEntityMutation message, length delimited. Does not implicitly {@link exocore.store.DeleteEntityMutation.verify|verify} messages.
             * @param message DeleteEntityMutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IDeleteEntityMutation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteEntityMutation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteEntityMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.DeleteEntityMutation;

            /**
             * Decodes a DeleteEntityMutation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteEntityMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.DeleteEntityMutation;

            /**
             * Verifies a DeleteEntityMutation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteEntityMutation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteEntityMutation
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.DeleteEntityMutation;

            /**
             * Creates a plain object from a DeleteEntityMutation message. Also converts values to other types if specified.
             * @param message DeleteEntityMutation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.DeleteEntityMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteEntityMutation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdateTraitMutation. */
        interface IUpdateTraitMutation {

            /** UpdateTraitMutation traitId */
            traitId?: (string|null);

            /** UpdateTraitMutation trait */
            trait?: (exocore.store.ITrait|null);

            /** UpdateTraitMutation fieldMask */
            fieldMask?: (google.protobuf.IFieldMask|null);

            /** UpdateTraitMutation ifLastOperationId */
            ifLastOperationId?: (number|Long|null);
        }

        /** Represents an UpdateTraitMutation. */
        class UpdateTraitMutation implements IUpdateTraitMutation {

            /**
             * Constructs a new UpdateTraitMutation.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IUpdateTraitMutation);

            /** UpdateTraitMutation traitId. */
            public traitId: string;

            /** UpdateTraitMutation trait. */
            public trait?: (exocore.store.ITrait|null);

            /** UpdateTraitMutation fieldMask. */
            public fieldMask?: (google.protobuf.IFieldMask|null);

            /** UpdateTraitMutation ifLastOperationId. */
            public ifLastOperationId: (number|Long);

            /**
             * Creates a new UpdateTraitMutation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateTraitMutation instance
             */
            public static create(properties?: exocore.store.IUpdateTraitMutation): exocore.store.UpdateTraitMutation;

            /**
             * Encodes the specified UpdateTraitMutation message. Does not implicitly {@link exocore.store.UpdateTraitMutation.verify|verify} messages.
             * @param message UpdateTraitMutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IUpdateTraitMutation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateTraitMutation message, length delimited. Does not implicitly {@link exocore.store.UpdateTraitMutation.verify|verify} messages.
             * @param message UpdateTraitMutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IUpdateTraitMutation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateTraitMutation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.UpdateTraitMutation;

            /**
             * Decodes an UpdateTraitMutation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.UpdateTraitMutation;

            /**
             * Verifies an UpdateTraitMutation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateTraitMutation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateTraitMutation
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.UpdateTraitMutation;

            /**
             * Creates a plain object from an UpdateTraitMutation message. Also converts values to other types if specified.
             * @param message UpdateTraitMutation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.UpdateTraitMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateTraitMutation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CompactTraitMutation. */
        interface ICompactTraitMutation {

            /** CompactTraitMutation compactedOperations */
            compactedOperations?: (exocore.store.CompactTraitMutation.IOperation[]|null);

            /** CompactTraitMutation trait */
            trait?: (exocore.store.ITrait|null);
        }

        /** Represents a CompactTraitMutation. */
        class CompactTraitMutation implements ICompactTraitMutation {

            /**
             * Constructs a new CompactTraitMutation.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.ICompactTraitMutation);

            /** CompactTraitMutation compactedOperations. */
            public compactedOperations: exocore.store.CompactTraitMutation.IOperation[];

            /** CompactTraitMutation trait. */
            public trait?: (exocore.store.ITrait|null);

            /**
             * Creates a new CompactTraitMutation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CompactTraitMutation instance
             */
            public static create(properties?: exocore.store.ICompactTraitMutation): exocore.store.CompactTraitMutation;

            /**
             * Encodes the specified CompactTraitMutation message. Does not implicitly {@link exocore.store.CompactTraitMutation.verify|verify} messages.
             * @param message CompactTraitMutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.ICompactTraitMutation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CompactTraitMutation message, length delimited. Does not implicitly {@link exocore.store.CompactTraitMutation.verify|verify} messages.
             * @param message CompactTraitMutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.ICompactTraitMutation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CompactTraitMutation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CompactTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.CompactTraitMutation;

            /**
             * Decodes a CompactTraitMutation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CompactTraitMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.CompactTraitMutation;

            /**
             * Verifies a CompactTraitMutation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CompactTraitMutation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CompactTraitMutation
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.CompactTraitMutation;

            /**
             * Creates a plain object from a CompactTraitMutation message. Also converts values to other types if specified.
             * @param message CompactTraitMutation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.CompactTraitMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CompactTraitMutation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace CompactTraitMutation {

            /** Properties of an Operation. */
            interface IOperation {

                /** Operation operationId */
                operationId?: (number|Long|null);
            }

            /** Represents an Operation. */
            class Operation implements IOperation {

                /**
                 * Constructs a new Operation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: exocore.store.CompactTraitMutation.IOperation);

                /** Operation operationId. */
                public operationId: (number|Long);

                /**
                 * Creates a new Operation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Operation instance
                 */
                public static create(properties?: exocore.store.CompactTraitMutation.IOperation): exocore.store.CompactTraitMutation.Operation;

                /**
                 * Encodes the specified Operation message. Does not implicitly {@link exocore.store.CompactTraitMutation.Operation.verify|verify} messages.
                 * @param message Operation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: exocore.store.CompactTraitMutation.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Operation message, length delimited. Does not implicitly {@link exocore.store.CompactTraitMutation.Operation.verify|verify} messages.
                 * @param message Operation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: exocore.store.CompactTraitMutation.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Operation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Operation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.CompactTraitMutation.Operation;

                /**
                 * Decodes an Operation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Operation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.CompactTraitMutation.Operation;

                /**
                 * Verifies an Operation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Operation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Operation
                 */
                public static fromObject(object: { [k: string]: any }): exocore.store.CompactTraitMutation.Operation;

                /**
                 * Creates a plain object from an Operation message. Also converts values to other types if specified.
                 * @param message Operation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: exocore.store.CompactTraitMutation.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Operation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a TestMutation. */
        interface ITestMutation {

            /** TestMutation success */
            success?: (boolean|null);
        }

        /** Represents a TestMutation. */
        class TestMutation implements ITestMutation {

            /**
             * Constructs a new TestMutation.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.ITestMutation);

            /** TestMutation success. */
            public success: boolean;

            /**
             * Creates a new TestMutation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestMutation instance
             */
            public static create(properties?: exocore.store.ITestMutation): exocore.store.TestMutation;

            /**
             * Encodes the specified TestMutation message. Does not implicitly {@link exocore.store.TestMutation.verify|verify} messages.
             * @param message TestMutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.ITestMutation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestMutation message, length delimited. Does not implicitly {@link exocore.store.TestMutation.verify|verify} messages.
             * @param message TestMutation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.ITestMutation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestMutation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.TestMutation;

            /**
             * Decodes a TestMutation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestMutation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.TestMutation;

            /**
             * Verifies a TestMutation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestMutation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestMutation
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.TestMutation;

            /**
             * Creates a plain object from a TestMutation message. Also converts values to other types if specified.
             * @param message TestMutation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.TestMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestMutation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EntityQuery. */
        interface IEntityQuery {

            /** EntityQuery match */
            match?: (exocore.store.IMatchPredicate|null);

            /** EntityQuery trait */
            trait?: (exocore.store.ITraitPredicate|null);

            /** EntityQuery ids */
            ids?: (exocore.store.IIdsPredicate|null);

            /** EntityQuery reference */
            reference?: (exocore.store.IReferencePredicate|null);

            /** EntityQuery operations */
            operations?: (exocore.store.IOperationsPredicate|null);

            /** EntityQuery all */
            all?: (exocore.store.IAllPredicate|null);

            /** EntityQuery test */
            test?: (exocore.store.ITestPredicate|null);

            /** Optional projections on traits and fields to be returned. */
            projections?: (exocore.store.IProjection[]|null);

            /** Query paging requested. */
            paging?: (exocore.store.IPaging|null);

            /** Query ordering. */
            ordering?: (exocore.store.IOrdering|null);

            /** Optional watch token if this query is to be used for watching. */
            watchToken?: (number|Long|null);

            /** `skipped_hash` field set to `true`. */
            resultHash?: (number|Long|null);

            /** `deletion_date` field with the date of the deletion. */
            includeDeleted?: (boolean|null);
        }

        /** Represents an EntityQuery. */
        class EntityQuery implements IEntityQuery {

            /**
             * Constructs a new EntityQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IEntityQuery);

            /** EntityQuery match. */
            public match?: (exocore.store.IMatchPredicate|null);

            /** EntityQuery trait. */
            public trait?: (exocore.store.ITraitPredicate|null);

            /** EntityQuery ids. */
            public ids?: (exocore.store.IIdsPredicate|null);

            /** EntityQuery reference. */
            public reference?: (exocore.store.IReferencePredicate|null);

            /** EntityQuery operations. */
            public operations?: (exocore.store.IOperationsPredicate|null);

            /** EntityQuery all. */
            public all?: (exocore.store.IAllPredicate|null);

            /** EntityQuery test. */
            public test?: (exocore.store.ITestPredicate|null);

            /** Optional projections on traits and fields to be returned. */
            public projections: exocore.store.IProjection[];

            /** Query paging requested. */
            public paging?: (exocore.store.IPaging|null);

            /** Query ordering. */
            public ordering?: (exocore.store.IOrdering|null);

            /** Optional watch token if this query is to be used for watching. */
            public watchToken: (number|Long);

            /** `skipped_hash` field set to `true`. */
            public resultHash: (number|Long);

            /** `deletion_date` field with the date of the deletion. */
            public includeDeleted: boolean;

            /** EntityQuery predicate. */
            public predicate?: ("match"|"trait"|"ids"|"reference"|"operations"|"all"|"test");

            /**
             * Creates a new EntityQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EntityQuery instance
             */
            public static create(properties?: exocore.store.IEntityQuery): exocore.store.EntityQuery;

            /**
             * Encodes the specified EntityQuery message. Does not implicitly {@link exocore.store.EntityQuery.verify|verify} messages.
             * @param message EntityQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IEntityQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EntityQuery message, length delimited. Does not implicitly {@link exocore.store.EntityQuery.verify|verify} messages.
             * @param message EntityQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IEntityQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EntityQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EntityQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.EntityQuery;

            /**
             * Decodes an EntityQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EntityQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.EntityQuery;

            /**
             * Verifies an EntityQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EntityQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EntityQuery
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.EntityQuery;

            /**
             * Creates a plain object from an EntityQuery message. Also converts values to other types if specified.
             * @param message EntityQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.EntityQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EntityQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Projection. */
        interface IProjection {

            /** If ends with a dollar sign "$", an exact match is required (ex: `some.package.Name$` will only match this message) */
            "package"?: (string[]|null);

            /** Skips the trait if the projection matches. */
            skip?: (boolean|null);

            /** If specified, only return these fields. */
            fieldIds?: (number[]|null);

            /** If specified, only return fields annotated with `options.proto`.`field_group_id` matching ids. */
            fieldGroupIds?: (number[]|null);
        }

        /** Represents a Projection. */
        class Projection implements IProjection {

            /**
             * Constructs a new Projection.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IProjection);

            /** If ends with a dollar sign "$", an exact match is required (ex: `some.package.Name$` will only match this message) */
            public package: string[];

            /** Skips the trait if the projection matches. */
            public skip: boolean;

            /** If specified, only return these fields. */
            public fieldIds: number[];

            /** If specified, only return fields annotated with `options.proto`.`field_group_id` matching ids. */
            public fieldGroupIds: number[];

            /**
             * Creates a new Projection instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Projection instance
             */
            public static create(properties?: exocore.store.IProjection): exocore.store.Projection;

            /**
             * Encodes the specified Projection message. Does not implicitly {@link exocore.store.Projection.verify|verify} messages.
             * @param message Projection message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IProjection, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Projection message, length delimited. Does not implicitly {@link exocore.store.Projection.verify|verify} messages.
             * @param message Projection message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IProjection, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Projection message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Projection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.Projection;

            /**
             * Decodes a Projection message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Projection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.Projection;

            /**
             * Verifies a Projection message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Projection message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Projection
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.Projection;

            /**
             * Creates a plain object from a Projection message. Also converts values to other types if specified.
             * @param message Projection
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.Projection, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Projection to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MatchPredicate. */
        interface IMatchPredicate {

            /** MatchPredicate query */
            query?: (string|null);
        }

        /** Query entities by text match on all indexed fields across all traits. */
        class MatchPredicate implements IMatchPredicate {

            /**
             * Constructs a new MatchPredicate.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IMatchPredicate);

            /** MatchPredicate query. */
            public query: string;

            /**
             * Creates a new MatchPredicate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MatchPredicate instance
             */
            public static create(properties?: exocore.store.IMatchPredicate): exocore.store.MatchPredicate;

            /**
             * Encodes the specified MatchPredicate message. Does not implicitly {@link exocore.store.MatchPredicate.verify|verify} messages.
             * @param message MatchPredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IMatchPredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MatchPredicate message, length delimited. Does not implicitly {@link exocore.store.MatchPredicate.verify|verify} messages.
             * @param message MatchPredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IMatchPredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MatchPredicate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MatchPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.MatchPredicate;

            /**
             * Decodes a MatchPredicate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MatchPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.MatchPredicate;

            /**
             * Verifies a MatchPredicate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MatchPredicate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MatchPredicate
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.MatchPredicate;

            /**
             * Creates a plain object from a MatchPredicate message. Also converts values to other types if specified.
             * @param message MatchPredicate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.MatchPredicate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MatchPredicate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an IdsPredicate. */
        interface IIdsPredicate {

            /** IdsPredicate ids */
            ids?: (string[]|null);
        }

        /** Query entities by IDs. */
        class IdsPredicate implements IIdsPredicate {

            /**
             * Constructs a new IdsPredicate.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IIdsPredicate);

            /** IdsPredicate ids. */
            public ids: string[];

            /**
             * Creates a new IdsPredicate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IdsPredicate instance
             */
            public static create(properties?: exocore.store.IIdsPredicate): exocore.store.IdsPredicate;

            /**
             * Encodes the specified IdsPredicate message. Does not implicitly {@link exocore.store.IdsPredicate.verify|verify} messages.
             * @param message IdsPredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IIdsPredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IdsPredicate message, length delimited. Does not implicitly {@link exocore.store.IdsPredicate.verify|verify} messages.
             * @param message IdsPredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IIdsPredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IdsPredicate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IdsPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.IdsPredicate;

            /**
             * Decodes an IdsPredicate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IdsPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.IdsPredicate;

            /**
             * Verifies an IdsPredicate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IdsPredicate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IdsPredicate
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.IdsPredicate;

            /**
             * Creates a plain object from an IdsPredicate message. Also converts values to other types if specified.
             * @param message IdsPredicate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.IdsPredicate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IdsPredicate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperationsPredicate. */
        interface IOperationsPredicate {

            /** OperationsPredicate operationIds */
            operationIds?: ((number|Long)[]|null);
        }

        /** Used to return entities on which mutations with these operation ids were applied and indexed. */
        class OperationsPredicate implements IOperationsPredicate {

            /**
             * Constructs a new OperationsPredicate.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IOperationsPredicate);

            /** OperationsPredicate operationIds. */
            public operationIds: (number|Long)[];

            /**
             * Creates a new OperationsPredicate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationsPredicate instance
             */
            public static create(properties?: exocore.store.IOperationsPredicate): exocore.store.OperationsPredicate;

            /**
             * Encodes the specified OperationsPredicate message. Does not implicitly {@link exocore.store.OperationsPredicate.verify|verify} messages.
             * @param message OperationsPredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IOperationsPredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationsPredicate message, length delimited. Does not implicitly {@link exocore.store.OperationsPredicate.verify|verify} messages.
             * @param message OperationsPredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IOperationsPredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationsPredicate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationsPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.OperationsPredicate;

            /**
             * Decodes an OperationsPredicate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationsPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.OperationsPredicate;

            /**
             * Verifies an OperationsPredicate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationsPredicate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationsPredicate
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.OperationsPredicate;

            /**
             * Creates a plain object from an OperationsPredicate message. Also converts values to other types if specified.
             * @param message OperationsPredicate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.OperationsPredicate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationsPredicate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AllPredicate. */
        interface IAllPredicate {
        }

        /** Query all entities. */
        class AllPredicate implements IAllPredicate {

            /**
             * Constructs a new AllPredicate.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IAllPredicate);

            /**
             * Creates a new AllPredicate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AllPredicate instance
             */
            public static create(properties?: exocore.store.IAllPredicate): exocore.store.AllPredicate;

            /**
             * Encodes the specified AllPredicate message. Does not implicitly {@link exocore.store.AllPredicate.verify|verify} messages.
             * @param message AllPredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IAllPredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AllPredicate message, length delimited. Does not implicitly {@link exocore.store.AllPredicate.verify|verify} messages.
             * @param message AllPredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IAllPredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AllPredicate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AllPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.AllPredicate;

            /**
             * Decodes an AllPredicate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AllPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.AllPredicate;

            /**
             * Verifies an AllPredicate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AllPredicate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AllPredicate
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.AllPredicate;

            /**
             * Creates a plain object from an AllPredicate message. Also converts values to other types if specified.
             * @param message AllPredicate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.AllPredicate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AllPredicate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TestPredicate. */
        interface ITestPredicate {

            /** TestPredicate success */
            success?: (boolean|null);
        }

        /** Used for tests. */
        class TestPredicate implements ITestPredicate {

            /**
             * Constructs a new TestPredicate.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.ITestPredicate);

            /** TestPredicate success. */
            public success: boolean;

            /**
             * Creates a new TestPredicate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestPredicate instance
             */
            public static create(properties?: exocore.store.ITestPredicate): exocore.store.TestPredicate;

            /**
             * Encodes the specified TestPredicate message. Does not implicitly {@link exocore.store.TestPredicate.verify|verify} messages.
             * @param message TestPredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.ITestPredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestPredicate message, length delimited. Does not implicitly {@link exocore.store.TestPredicate.verify|verify} messages.
             * @param message TestPredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.ITestPredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestPredicate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.TestPredicate;

            /**
             * Decodes a TestPredicate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.TestPredicate;

            /**
             * Verifies a TestPredicate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestPredicate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestPredicate
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.TestPredicate;

            /**
             * Creates a plain object from a TestPredicate message. Also converts values to other types if specified.
             * @param message TestPredicate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.TestPredicate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestPredicate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TraitPredicate. */
        interface ITraitPredicate {

            /** TraitPredicate traitName */
            traitName?: (string|null);

            /** TraitPredicate query */
            query?: (exocore.store.ITraitQuery|null);
        }

        /** Query entities that have a specified trait and optionally matching a trait query. */
        class TraitPredicate implements ITraitPredicate {

            /**
             * Constructs a new TraitPredicate.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.ITraitPredicate);

            /** TraitPredicate traitName. */
            public traitName: string;

            /** TraitPredicate query. */
            public query?: (exocore.store.ITraitQuery|null);

            /**
             * Creates a new TraitPredicate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TraitPredicate instance
             */
            public static create(properties?: exocore.store.ITraitPredicate): exocore.store.TraitPredicate;

            /**
             * Encodes the specified TraitPredicate message. Does not implicitly {@link exocore.store.TraitPredicate.verify|verify} messages.
             * @param message TraitPredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.ITraitPredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TraitPredicate message, length delimited. Does not implicitly {@link exocore.store.TraitPredicate.verify|verify} messages.
             * @param message TraitPredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.ITraitPredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TraitPredicate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TraitPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.TraitPredicate;

            /**
             * Decodes a TraitPredicate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TraitPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.TraitPredicate;

            /**
             * Verifies a TraitPredicate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TraitPredicate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TraitPredicate
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.TraitPredicate;

            /**
             * Creates a plain object from a TraitPredicate message. Also converts values to other types if specified.
             * @param message TraitPredicate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.TraitPredicate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TraitPredicate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TraitQuery. */
        interface ITraitQuery {

            /** TraitQuery match */
            match?: (exocore.store.IMatchPredicate|null);

            /** TraitQuery field */
            field?: (exocore.store.ITraitFieldPredicate|null);

            /** TraitQuery reference */
            reference?: (exocore.store.ITraitFieldReferencePredicate|null);
        }

        /** Represents a TraitQuery. */
        class TraitQuery implements ITraitQuery {

            /**
             * Constructs a new TraitQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.ITraitQuery);

            /** TraitQuery match. */
            public match?: (exocore.store.IMatchPredicate|null);

            /** TraitQuery field. */
            public field?: (exocore.store.ITraitFieldPredicate|null);

            /** TraitQuery reference. */
            public reference?: (exocore.store.ITraitFieldReferencePredicate|null);

            /** TraitQuery predicate. */
            public predicate?: ("match"|"field"|"reference");

            /**
             * Creates a new TraitQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TraitQuery instance
             */
            public static create(properties?: exocore.store.ITraitQuery): exocore.store.TraitQuery;

            /**
             * Encodes the specified TraitQuery message. Does not implicitly {@link exocore.store.TraitQuery.verify|verify} messages.
             * @param message TraitQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.ITraitQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TraitQuery message, length delimited. Does not implicitly {@link exocore.store.TraitQuery.verify|verify} messages.
             * @param message TraitQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.ITraitQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TraitQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TraitQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.TraitQuery;

            /**
             * Decodes a TraitQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TraitQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.TraitQuery;

            /**
             * Verifies a TraitQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TraitQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TraitQuery
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.TraitQuery;

            /**
             * Creates a plain object from a TraitQuery message. Also converts values to other types if specified.
             * @param message TraitQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.TraitQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TraitQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TraitFieldPredicate. */
        interface ITraitFieldPredicate {

            /** TraitFieldPredicate field */
            field?: (string|null);

            /** TraitFieldPredicate string */
            string?: (string|null);

            /** TraitFieldPredicate int64 */
            int64?: (number|Long|null);

            /** TraitFieldPredicate uint64 */
            uint64?: (number|Long|null);

            /** TraitFieldPredicate date */
            date?: (google.protobuf.ITimestamp|null);

            /** TraitFieldPredicate operator */
            operator?: (exocore.store.TraitFieldPredicate.Operator|null);
        }

        /** Represents a TraitFieldPredicate. */
        class TraitFieldPredicate implements ITraitFieldPredicate {

            /**
             * Constructs a new TraitFieldPredicate.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.ITraitFieldPredicate);

            /** TraitFieldPredicate field. */
            public field: string;

            /** TraitFieldPredicate string. */
            public string: string;

            /** TraitFieldPredicate int64. */
            public int64: (number|Long);

            /** TraitFieldPredicate uint64. */
            public uint64: (number|Long);

            /** TraitFieldPredicate date. */
            public date?: (google.protobuf.ITimestamp|null);

            /** TraitFieldPredicate operator. */
            public operator: exocore.store.TraitFieldPredicate.Operator;

            /** TraitFieldPredicate value. */
            public value?: ("string"|"int64"|"uint64"|"date");

            /**
             * Creates a new TraitFieldPredicate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TraitFieldPredicate instance
             */
            public static create(properties?: exocore.store.ITraitFieldPredicate): exocore.store.TraitFieldPredicate;

            /**
             * Encodes the specified TraitFieldPredicate message. Does not implicitly {@link exocore.store.TraitFieldPredicate.verify|verify} messages.
             * @param message TraitFieldPredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.ITraitFieldPredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TraitFieldPredicate message, length delimited. Does not implicitly {@link exocore.store.TraitFieldPredicate.verify|verify} messages.
             * @param message TraitFieldPredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.ITraitFieldPredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TraitFieldPredicate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TraitFieldPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.TraitFieldPredicate;

            /**
             * Decodes a TraitFieldPredicate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TraitFieldPredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.TraitFieldPredicate;

            /**
             * Verifies a TraitFieldPredicate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TraitFieldPredicate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TraitFieldPredicate
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.TraitFieldPredicate;

            /**
             * Creates a plain object from a TraitFieldPredicate message. Also converts values to other types if specified.
             * @param message TraitFieldPredicate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.TraitFieldPredicate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TraitFieldPredicate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace TraitFieldPredicate {

            /** Operator enum. */
            enum Operator {
                EQUAL = 0,
                GT = 1,
                GTE = 2,
                LT = 3,
                LTE = 4
            }
        }

        /** Properties of a TraitFieldReferencePredicate. */
        interface ITraitFieldReferencePredicate {

            /** TraitFieldReferencePredicate field */
            field?: (string|null);

            /** TraitFieldReferencePredicate reference */
            reference?: (exocore.store.IReferencePredicate|null);
        }

        /** Represents a TraitFieldReferencePredicate. */
        class TraitFieldReferencePredicate implements ITraitFieldReferencePredicate {

            /**
             * Constructs a new TraitFieldReferencePredicate.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.ITraitFieldReferencePredicate);

            /** TraitFieldReferencePredicate field. */
            public field: string;

            /** TraitFieldReferencePredicate reference. */
            public reference?: (exocore.store.IReferencePredicate|null);

            /**
             * Creates a new TraitFieldReferencePredicate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TraitFieldReferencePredicate instance
             */
            public static create(properties?: exocore.store.ITraitFieldReferencePredicate): exocore.store.TraitFieldReferencePredicate;

            /**
             * Encodes the specified TraitFieldReferencePredicate message. Does not implicitly {@link exocore.store.TraitFieldReferencePredicate.verify|verify} messages.
             * @param message TraitFieldReferencePredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.ITraitFieldReferencePredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TraitFieldReferencePredicate message, length delimited. Does not implicitly {@link exocore.store.TraitFieldReferencePredicate.verify|verify} messages.
             * @param message TraitFieldReferencePredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.ITraitFieldReferencePredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TraitFieldReferencePredicate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TraitFieldReferencePredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.TraitFieldReferencePredicate;

            /**
             * Decodes a TraitFieldReferencePredicate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TraitFieldReferencePredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.TraitFieldReferencePredicate;

            /**
             * Verifies a TraitFieldReferencePredicate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TraitFieldReferencePredicate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TraitFieldReferencePredicate
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.TraitFieldReferencePredicate;

            /**
             * Creates a plain object from a TraitFieldReferencePredicate message. Also converts values to other types if specified.
             * @param message TraitFieldReferencePredicate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.TraitFieldReferencePredicate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TraitFieldReferencePredicate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReferencePredicate. */
        interface IReferencePredicate {

            /** ReferencePredicate entityId */
            entityId?: (string|null);

            /** ReferencePredicate traitId */
            traitId?: (string|null);
        }

        /** Represents a ReferencePredicate. */
        class ReferencePredicate implements IReferencePredicate {

            /**
             * Constructs a new ReferencePredicate.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IReferencePredicate);

            /** ReferencePredicate entityId. */
            public entityId: string;

            /** ReferencePredicate traitId. */
            public traitId: string;

            /**
             * Creates a new ReferencePredicate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReferencePredicate instance
             */
            public static create(properties?: exocore.store.IReferencePredicate): exocore.store.ReferencePredicate;

            /**
             * Encodes the specified ReferencePredicate message. Does not implicitly {@link exocore.store.ReferencePredicate.verify|verify} messages.
             * @param message ReferencePredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IReferencePredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReferencePredicate message, length delimited. Does not implicitly {@link exocore.store.ReferencePredicate.verify|verify} messages.
             * @param message ReferencePredicate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IReferencePredicate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReferencePredicate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReferencePredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.ReferencePredicate;

            /**
             * Decodes a ReferencePredicate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReferencePredicate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.ReferencePredicate;

            /**
             * Verifies a ReferencePredicate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReferencePredicate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReferencePredicate
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.ReferencePredicate;

            /**
             * Creates a plain object from a ReferencePredicate message. Also converts values to other types if specified.
             * @param message ReferencePredicate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.ReferencePredicate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReferencePredicate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Paging. */
        interface IPaging {

            /** Returns results after this given ordering value. */
            afterOrderingValue?: (exocore.store.IOrderingValue|null);

            /** Returns results before this given ordering value. */
            beforeOrderingValue?: (exocore.store.IOrderingValue|null);

            /** Desired results count. Default if 0. */
            count?: (number|null);
        }

        /** Represents a Paging. */
        class Paging implements IPaging {

            /**
             * Constructs a new Paging.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IPaging);

            /** Returns results after this given ordering value. */
            public afterOrderingValue?: (exocore.store.IOrderingValue|null);

            /** Returns results before this given ordering value. */
            public beforeOrderingValue?: (exocore.store.IOrderingValue|null);

            /** Desired results count. Default if 0. */
            public count: number;

            /**
             * Creates a new Paging instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Paging instance
             */
            public static create(properties?: exocore.store.IPaging): exocore.store.Paging;

            /**
             * Encodes the specified Paging message. Does not implicitly {@link exocore.store.Paging.verify|verify} messages.
             * @param message Paging message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IPaging, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Paging message, length delimited. Does not implicitly {@link exocore.store.Paging.verify|verify} messages.
             * @param message Paging message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IPaging, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Paging message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Paging
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.Paging;

            /**
             * Decodes a Paging message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Paging
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.Paging;

            /**
             * Verifies a Paging message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Paging message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Paging
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.Paging;

            /**
             * Creates a plain object from a Paging message. Also converts values to other types if specified.
             * @param message Paging
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.Paging, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Paging to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Ordering. */
        interface IOrdering {

            /** Ordering score */
            score?: (boolean|null);

            /** Ordering operationId */
            operationId?: (boolean|null);

            /** Ordering field */
            field?: (string|null);

            /** Direction of ordering. */
            ascending?: (boolean|null);
        }

        /** Represents an Ordering. */
        class Ordering implements IOrdering {

            /**
             * Constructs a new Ordering.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IOrdering);

            /** Ordering score. */
            public score: boolean;

            /** Ordering operationId. */
            public operationId: boolean;

            /** Ordering field. */
            public field: string;

            /** Direction of ordering. */
            public ascending: boolean;

            /** Value by which we want results to be ordered. */
            public value?: ("score"|"operationId"|"field");

            /**
             * Creates a new Ordering instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ordering instance
             */
            public static create(properties?: exocore.store.IOrdering): exocore.store.Ordering;

            /**
             * Encodes the specified Ordering message. Does not implicitly {@link exocore.store.Ordering.verify|verify} messages.
             * @param message Ordering message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IOrdering, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Ordering message, length delimited. Does not implicitly {@link exocore.store.Ordering.verify|verify} messages.
             * @param message Ordering message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IOrdering, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Ordering message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ordering
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.Ordering;

            /**
             * Decodes an Ordering message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Ordering
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.Ordering;

            /**
             * Verifies an Ordering message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Ordering message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Ordering
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.Ordering;

            /**
             * Creates a plain object from an Ordering message. Also converts values to other types if specified.
             * @param message Ordering
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.Ordering, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Ordering to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OrderingValue. */
        interface IOrderingValue {

            /** OrderingValue float */
            float?: (number|null);

            /** OrderingValue uint64 */
            uint64?: (number|Long|null);

            /** OrderingValue date */
            date?: (google.protobuf.ITimestamp|null);

            /** OrderingValue min */
            min?: (boolean|null);

            /** OrderingValue max */
            max?: (boolean|null);

            /** the last operation id that mutated the entity is used. */
            operationId?: (number|Long|null);
        }

        /** Represents an OrderingValue. */
        class OrderingValue implements IOrderingValue {

            /**
             * Constructs a new OrderingValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IOrderingValue);

            /** OrderingValue float. */
            public float: number;

            /** OrderingValue uint64. */
            public uint64: (number|Long);

            /** OrderingValue date. */
            public date?: (google.protobuf.ITimestamp|null);

            /** OrderingValue min. */
            public min: boolean;

            /** OrderingValue max. */
            public max: boolean;

            /** the last operation id that mutated the entity is used. */
            public operationId: (number|Long);

            /** Primary comparison */
            public value?: ("float"|"uint64"|"date"|"min"|"max");

            /**
             * Creates a new OrderingValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OrderingValue instance
             */
            public static create(properties?: exocore.store.IOrderingValue): exocore.store.OrderingValue;

            /**
             * Encodes the specified OrderingValue message. Does not implicitly {@link exocore.store.OrderingValue.verify|verify} messages.
             * @param message OrderingValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IOrderingValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OrderingValue message, length delimited. Does not implicitly {@link exocore.store.OrderingValue.verify|verify} messages.
             * @param message OrderingValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IOrderingValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OrderingValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OrderingValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.OrderingValue;

            /**
             * Decodes an OrderingValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OrderingValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.OrderingValue;

            /**
             * Verifies an OrderingValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OrderingValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OrderingValue
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.OrderingValue;

            /**
             * Creates a plain object from an OrderingValue message. Also converts values to other types if specified.
             * @param message OrderingValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.OrderingValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OrderingValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EntityResults. */
        interface IEntityResults {

            /** Entities matching query. */
            entities?: (exocore.store.IEntityResult[]|null);

            /** had the same hash has the specified and that `entities` were set to empty. */
            skippedHash?: (boolean|null);

            /** Estimated number of entities matching, based on number of matching mutations. */
            estimatedCount?: (number|null);

            /** Paging token of the current results. */
            currentPage?: (exocore.store.IPaging|null);

            /** Paging token of the next page of results. */
            nextPage?: (exocore.store.IPaging|null);

            /** changed by using the `result_hash` field on the query. */
            hash?: (number|Long|null);
        }

        /** Represents an EntityResults. */
        class EntityResults implements IEntityResults {

            /**
             * Constructs a new EntityResults.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IEntityResults);

            /** Entities matching query. */
            public entities: exocore.store.IEntityResult[];

            /** had the same hash has the specified and that `entities` were set to empty. */
            public skippedHash: boolean;

            /** Estimated number of entities matching, based on number of matching mutations. */
            public estimatedCount: number;

            /** Paging token of the current results. */
            public currentPage?: (exocore.store.IPaging|null);

            /** Paging token of the next page of results. */
            public nextPage?: (exocore.store.IPaging|null);

            /** changed by using the `result_hash` field on the query. */
            public hash: (number|Long);

            /**
             * Creates a new EntityResults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EntityResults instance
             */
            public static create(properties?: exocore.store.IEntityResults): exocore.store.EntityResults;

            /**
             * Encodes the specified EntityResults message. Does not implicitly {@link exocore.store.EntityResults.verify|verify} messages.
             * @param message EntityResults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IEntityResults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EntityResults message, length delimited. Does not implicitly {@link exocore.store.EntityResults.verify|verify} messages.
             * @param message EntityResults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IEntityResults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EntityResults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EntityResults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.EntityResults;

            /**
             * Decodes an EntityResults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EntityResults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.EntityResults;

            /**
             * Verifies an EntityResults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EntityResults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EntityResults
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.EntityResults;

            /**
             * Creates a plain object from an EntityResults message. Also converts values to other types if specified.
             * @param message EntityResults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.EntityResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EntityResults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EntityResult. */
        interface IEntityResult {

            /** be indicated in its traits' details field. */
            entity?: (exocore.store.IEntity|null);

            /** before the latest consistent timestamp. */
            source?: (exocore.store.EntityResultSource|null);

            /** but it may be useful to compare ordering queries (ex.: to merge different pages) */
            orderingValue?: (exocore.store.IOrderingValue|null);

            /** Hash of the tntiy result. Can be used to compare if the entity has changed since last results. */
            hash?: (number|Long|null);
        }

        /** Represents an EntityResult. */
        class EntityResult implements IEntityResult {

            /**
             * Constructs a new EntityResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.store.IEntityResult);

            /** be indicated in its traits' details field. */
            public entity?: (exocore.store.IEntity|null);

            /** before the latest consistent timestamp. */
            public source: exocore.store.EntityResultSource;

            /** but it may be useful to compare ordering queries (ex.: to merge different pages) */
            public orderingValue?: (exocore.store.IOrderingValue|null);

            /** Hash of the tntiy result. Can be used to compare if the entity has changed since last results. */
            public hash: (number|Long);

            /**
             * Creates a new EntityResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EntityResult instance
             */
            public static create(properties?: exocore.store.IEntityResult): exocore.store.EntityResult;

            /**
             * Encodes the specified EntityResult message. Does not implicitly {@link exocore.store.EntityResult.verify|verify} messages.
             * @param message EntityResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.store.IEntityResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EntityResult message, length delimited. Does not implicitly {@link exocore.store.EntityResult.verify|verify} messages.
             * @param message EntityResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.store.IEntityResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EntityResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EntityResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.store.EntityResult;

            /**
             * Decodes an EntityResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EntityResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.store.EntityResult;

            /**
             * Verifies an EntityResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EntityResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EntityResult
             */
            public static fromObject(object: { [k: string]: any }): exocore.store.EntityResult;

            /**
             * Creates a plain object from an EntityResult message. Also converts values to other types if specified.
             * @param message EntityResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.store.EntityResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EntityResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** EntityResultSource enum. */
        enum EntityResultSource {
            UNKNOWN = 0,
            PENDING = 1,
            CHAIN = 2
        }
    }

    /** Namespace test. */
    namespace test {

        /** Properties of a TestMessage. */
        interface ITestMessage {

            /** TestMessage string1 */
            string1?: (string|null);

            /** TestMessage string2 */
            string2?: (string|null);

            /** TestMessage string3 */
            string3?: (string|null);

            /** TestMessage struct1 */
            struct1?: (exocore.test.ITestStruct|null);

            /** TestMessage oneofString1 */
            oneofString1?: (string|null);

            /** TestMessage oneofInt1 */
            oneofInt1?: (number|null);

            /** TestMessage date1 */
            date1?: (google.protobuf.ITimestamp|null);

            /** TestMessage date2 */
            date2?: (google.protobuf.ITimestamp|null);

            /** TestMessage date3 */
            date3?: (google.protobuf.ITimestamp|null);

            /** TestMessage uint1 */
            uint1?: (number|null);

            /** TestMessage uint2 */
            uint2?: (number|null);

            /** TestMessage uint3 */
            uint3?: (number|null);

            /** TestMessage int1 */
            int1?: (number|null);

            /** TestMessage int2 */
            int2?: (number|null);

            /** TestMessage int3 */
            int3?: (number|null);

            /** TestMessage ref1 */
            ref1?: (exocore.store.IReference|null);

            /** TestMessage ref2 */
            ref2?: (exocore.store.IReference|null);

            /** TestMessage grouped1 */
            grouped1?: (string|null);

            /** TestMessage grouped2 */
            grouped2?: (string|null);
        }

        /** Represents a TestMessage. */
        class TestMessage implements ITestMessage {

            /**
             * Constructs a new TestMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.test.ITestMessage);

            /** TestMessage string1. */
            public string1: string;

            /** TestMessage string2. */
            public string2: string;

            /** TestMessage string3. */
            public string3: string;

            /** TestMessage struct1. */
            public struct1?: (exocore.test.ITestStruct|null);

            /** TestMessage oneofString1. */
            public oneofString1: string;

            /** TestMessage oneofInt1. */
            public oneofInt1: number;

            /** TestMessage date1. */
            public date1?: (google.protobuf.ITimestamp|null);

            /** TestMessage date2. */
            public date2?: (google.protobuf.ITimestamp|null);

            /** TestMessage date3. */
            public date3?: (google.protobuf.ITimestamp|null);

            /** TestMessage uint1. */
            public uint1: number;

            /** TestMessage uint2. */
            public uint2: number;

            /** TestMessage uint3. */
            public uint3: number;

            /** TestMessage int1. */
            public int1: number;

            /** TestMessage int2. */
            public int2: number;

            /** TestMessage int3. */
            public int3: number;

            /** TestMessage ref1. */
            public ref1?: (exocore.store.IReference|null);

            /** TestMessage ref2. */
            public ref2?: (exocore.store.IReference|null);

            /** TestMessage grouped1. */
            public grouped1: string;

            /** TestMessage grouped2. */
            public grouped2: string;

            /** TestMessage fields. */
            public fields?: ("oneofString1"|"oneofInt1");

            /**
             * Creates a new TestMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestMessage instance
             */
            public static create(properties?: exocore.test.ITestMessage): exocore.test.TestMessage;

            /**
             * Encodes the specified TestMessage message. Does not implicitly {@link exocore.test.TestMessage.verify|verify} messages.
             * @param message TestMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.test.ITestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestMessage message, length delimited. Does not implicitly {@link exocore.test.TestMessage.verify|verify} messages.
             * @param message TestMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.test.ITestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.test.TestMessage;

            /**
             * Decodes a TestMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.test.TestMessage;

            /**
             * Verifies a TestMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestMessage
             */
            public static fromObject(object: { [k: string]: any }): exocore.test.TestMessage;

            /**
             * Creates a plain object from a TestMessage message. Also converts values to other types if specified.
             * @param message TestMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.test.TestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TestStruct. */
        interface ITestStruct {

            /** TestStruct string1 */
            string1?: (string|null);
        }

        /** Represents a TestStruct. */
        class TestStruct implements ITestStruct {

            /**
             * Constructs a new TestStruct.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.test.ITestStruct);

            /** TestStruct string1. */
            public string1: string;

            /**
             * Creates a new TestStruct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestStruct instance
             */
            public static create(properties?: exocore.test.ITestStruct): exocore.test.TestStruct;

            /**
             * Encodes the specified TestStruct message. Does not implicitly {@link exocore.test.TestStruct.verify|verify} messages.
             * @param message TestStruct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.test.ITestStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestStruct message, length delimited. Does not implicitly {@link exocore.test.TestStruct.verify|verify} messages.
             * @param message TestStruct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.test.ITestStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestStruct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestStruct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.test.TestStruct;

            /**
             * Decodes a TestStruct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestStruct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.test.TestStruct;

            /**
             * Verifies a TestStruct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestStruct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestStruct
             */
            public static fromObject(object: { [k: string]: any }): exocore.test.TestStruct;

            /**
             * Creates a plain object from a TestStruct message. Also converts values to other types if specified.
             * @param message TestStruct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.test.TestStruct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestStruct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TestMessage2. */
        interface ITestMessage2 {

            /** TestMessage2 string1 */
            string1?: (string|null);

            /** TestMessage2 string2 */
            string2?: (string|null);
        }

        /** Represents a TestMessage2. */
        class TestMessage2 implements ITestMessage2 {

            /**
             * Constructs a new TestMessage2.
             * @param [properties] Properties to set
             */
            constructor(properties?: exocore.test.ITestMessage2);

            /** TestMessage2 string1. */
            public string1: string;

            /** TestMessage2 string2. */
            public string2: string;

            /**
             * Creates a new TestMessage2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestMessage2 instance
             */
            public static create(properties?: exocore.test.ITestMessage2): exocore.test.TestMessage2;

            /**
             * Encodes the specified TestMessage2 message. Does not implicitly {@link exocore.test.TestMessage2.verify|verify} messages.
             * @param message TestMessage2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: exocore.test.ITestMessage2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestMessage2 message, length delimited. Does not implicitly {@link exocore.test.TestMessage2.verify|verify} messages.
             * @param message TestMessage2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: exocore.test.ITestMessage2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestMessage2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestMessage2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): exocore.test.TestMessage2;

            /**
             * Decodes a TestMessage2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestMessage2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): exocore.test.TestMessage2;

            /**
             * Verifies a TestMessage2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestMessage2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestMessage2
             */
            public static fromObject(object: { [k: string]: any }): exocore.test.TestMessage2;

            /**
             * Creates a plain object from a TestMessage2 message. Also converts values to other types if specified.
             * @param message TestMessage2
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: exocore.test.TestMessage2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestMessage2 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .exocore.indexed */
            ".exocore.indexed"?: (boolean|null);

            /** FieldOptions .exocore.sorted */
            ".exocore.sorted"?: (boolean|null);

            /** FieldOptions .exocore.text */
            ".exocore.text"?: (boolean|null);

            /** FieldOptions .exocore.fieldGroup */
            ".exocore.fieldGroup"?: (number[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
