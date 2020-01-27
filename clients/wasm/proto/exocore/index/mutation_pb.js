// source: exocore/index/mutation.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var exocore_index_entity_pb = require('../../exocore/index/entity_pb.js');
goog.object.extend(proto, exocore_index_entity_pb);
goog.exportSymbol('proto.exocore.index.DeleteTraitMutation', null, global);
goog.exportSymbol('proto.exocore.index.EntityMutation', null, global);
goog.exportSymbol('proto.exocore.index.EntityMutation.MutationCase', null, global);
goog.exportSymbol('proto.exocore.index.MutationResult', null, global);
goog.exportSymbol('proto.exocore.index.PutTraitMutation', null, global);
goog.exportSymbol('proto.exocore.index.TestMutation', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.exocore.index.EntityMutation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.exocore.index.EntityMutation.oneofGroups_);
};
goog.inherits(proto.exocore.index.EntityMutation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exocore.index.EntityMutation.displayName = 'proto.exocore.index.EntityMutation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.exocore.index.PutTraitMutation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.exocore.index.PutTraitMutation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exocore.index.PutTraitMutation.displayName = 'proto.exocore.index.PutTraitMutation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.exocore.index.DeleteTraitMutation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.exocore.index.DeleteTraitMutation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exocore.index.DeleteTraitMutation.displayName = 'proto.exocore.index.DeleteTraitMutation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.exocore.index.TestMutation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.exocore.index.TestMutation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exocore.index.TestMutation.displayName = 'proto.exocore.index.TestMutation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.exocore.index.MutationResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.exocore.index.MutationResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exocore.index.MutationResult.displayName = 'proto.exocore.index.MutationResult';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.exocore.index.EntityMutation.oneofGroups_ = [[2,3,99]];

/**
 * @enum {number}
 */
proto.exocore.index.EntityMutation.MutationCase = {
  MUTATION_NOT_SET: 0,
  PUT_TRAIT: 2,
  DELETE_TRAIT: 3,
  TEST: 99
};

/**
 * @return {proto.exocore.index.EntityMutation.MutationCase}
 */
proto.exocore.index.EntityMutation.prototype.getMutationCase = function() {
  return /** @type {proto.exocore.index.EntityMutation.MutationCase} */(jspb.Message.computeOneofCase(this, proto.exocore.index.EntityMutation.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.exocore.index.EntityMutation.prototype.toObject = function(opt_includeInstance) {
  return proto.exocore.index.EntityMutation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exocore.index.EntityMutation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exocore.index.EntityMutation.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    putTrait: (f = msg.getPutTrait()) && proto.exocore.index.PutTraitMutation.toObject(includeInstance, f),
    deleteTrait: (f = msg.getDeleteTrait()) && proto.exocore.index.DeleteTraitMutation.toObject(includeInstance, f),
    test: (f = msg.getTest()) && proto.exocore.index.TestMutation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.exocore.index.EntityMutation}
 */
proto.exocore.index.EntityMutation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exocore.index.EntityMutation;
  return proto.exocore.index.EntityMutation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exocore.index.EntityMutation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exocore.index.EntityMutation}
 */
proto.exocore.index.EntityMutation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityId(value);
      break;
    case 2:
      var value = new proto.exocore.index.PutTraitMutation;
      reader.readMessage(value,proto.exocore.index.PutTraitMutation.deserializeBinaryFromReader);
      msg.setPutTrait(value);
      break;
    case 3:
      var value = new proto.exocore.index.DeleteTraitMutation;
      reader.readMessage(value,proto.exocore.index.DeleteTraitMutation.deserializeBinaryFromReader);
      msg.setDeleteTrait(value);
      break;
    case 99:
      var value = new proto.exocore.index.TestMutation;
      reader.readMessage(value,proto.exocore.index.TestMutation.deserializeBinaryFromReader);
      msg.setTest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.exocore.index.EntityMutation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exocore.index.EntityMutation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exocore.index.EntityMutation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exocore.index.EntityMutation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPutTrait();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.exocore.index.PutTraitMutation.serializeBinaryToWriter
    );
  }
  f = message.getDeleteTrait();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.exocore.index.DeleteTraitMutation.serializeBinaryToWriter
    );
  }
  f = message.getTest();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      proto.exocore.index.TestMutation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string entity_id = 1;
 * @return {string}
 */
proto.exocore.index.EntityMutation.prototype.getEntityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.exocore.index.EntityMutation} returns this
 */
proto.exocore.index.EntityMutation.prototype.setEntityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PutTraitMutation put_trait = 2;
 * @return {?proto.exocore.index.PutTraitMutation}
 */
proto.exocore.index.EntityMutation.prototype.getPutTrait = function() {
  return /** @type{?proto.exocore.index.PutTraitMutation} */ (
    jspb.Message.getWrapperField(this, proto.exocore.index.PutTraitMutation, 2));
};


/**
 * @param {?proto.exocore.index.PutTraitMutation|undefined} value
 * @return {!proto.exocore.index.EntityMutation} returns this
*/
proto.exocore.index.EntityMutation.prototype.setPutTrait = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.exocore.index.EntityMutation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exocore.index.EntityMutation} returns this
 */
proto.exocore.index.EntityMutation.prototype.clearPutTrait = function() {
  return this.setPutTrait(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exocore.index.EntityMutation.prototype.hasPutTrait = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeleteTraitMutation delete_trait = 3;
 * @return {?proto.exocore.index.DeleteTraitMutation}
 */
proto.exocore.index.EntityMutation.prototype.getDeleteTrait = function() {
  return /** @type{?proto.exocore.index.DeleteTraitMutation} */ (
    jspb.Message.getWrapperField(this, proto.exocore.index.DeleteTraitMutation, 3));
};


/**
 * @param {?proto.exocore.index.DeleteTraitMutation|undefined} value
 * @return {!proto.exocore.index.EntityMutation} returns this
*/
proto.exocore.index.EntityMutation.prototype.setDeleteTrait = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.exocore.index.EntityMutation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exocore.index.EntityMutation} returns this
 */
proto.exocore.index.EntityMutation.prototype.clearDeleteTrait = function() {
  return this.setDeleteTrait(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exocore.index.EntityMutation.prototype.hasDeleteTrait = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TestMutation test = 99;
 * @return {?proto.exocore.index.TestMutation}
 */
proto.exocore.index.EntityMutation.prototype.getTest = function() {
  return /** @type{?proto.exocore.index.TestMutation} */ (
    jspb.Message.getWrapperField(this, proto.exocore.index.TestMutation, 99));
};


/**
 * @param {?proto.exocore.index.TestMutation|undefined} value
 * @return {!proto.exocore.index.EntityMutation} returns this
*/
proto.exocore.index.EntityMutation.prototype.setTest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 99, proto.exocore.index.EntityMutation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exocore.index.EntityMutation} returns this
 */
proto.exocore.index.EntityMutation.prototype.clearTest = function() {
  return this.setTest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exocore.index.EntityMutation.prototype.hasTest = function() {
  return jspb.Message.getField(this, 99) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.exocore.index.PutTraitMutation.prototype.toObject = function(opt_includeInstance) {
  return proto.exocore.index.PutTraitMutation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exocore.index.PutTraitMutation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exocore.index.PutTraitMutation.toObject = function(includeInstance, msg) {
  var f, obj = {
    trait: (f = msg.getTrait()) && exocore_index_entity_pb.Trait.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.exocore.index.PutTraitMutation}
 */
proto.exocore.index.PutTraitMutation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exocore.index.PutTraitMutation;
  return proto.exocore.index.PutTraitMutation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exocore.index.PutTraitMutation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exocore.index.PutTraitMutation}
 */
proto.exocore.index.PutTraitMutation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new exocore_index_entity_pb.Trait;
      reader.readMessage(value,exocore_index_entity_pb.Trait.deserializeBinaryFromReader);
      msg.setTrait(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.exocore.index.PutTraitMutation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exocore.index.PutTraitMutation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exocore.index.PutTraitMutation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exocore.index.PutTraitMutation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrait();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      exocore_index_entity_pb.Trait.serializeBinaryToWriter
    );
  }
};


/**
 * optional Trait trait = 1;
 * @return {?proto.exocore.index.Trait}
 */
proto.exocore.index.PutTraitMutation.prototype.getTrait = function() {
  return /** @type{?proto.exocore.index.Trait} */ (
    jspb.Message.getWrapperField(this, exocore_index_entity_pb.Trait, 1));
};


/**
 * @param {?proto.exocore.index.Trait|undefined} value
 * @return {!proto.exocore.index.PutTraitMutation} returns this
*/
proto.exocore.index.PutTraitMutation.prototype.setTrait = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exocore.index.PutTraitMutation} returns this
 */
proto.exocore.index.PutTraitMutation.prototype.clearTrait = function() {
  return this.setTrait(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exocore.index.PutTraitMutation.prototype.hasTrait = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.exocore.index.DeleteTraitMutation.prototype.toObject = function(opt_includeInstance) {
  return proto.exocore.index.DeleteTraitMutation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exocore.index.DeleteTraitMutation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exocore.index.DeleteTraitMutation.toObject = function(includeInstance, msg) {
  var f, obj = {
    traitId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.exocore.index.DeleteTraitMutation}
 */
proto.exocore.index.DeleteTraitMutation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exocore.index.DeleteTraitMutation;
  return proto.exocore.index.DeleteTraitMutation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exocore.index.DeleteTraitMutation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exocore.index.DeleteTraitMutation}
 */
proto.exocore.index.DeleteTraitMutation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTraitId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.exocore.index.DeleteTraitMutation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exocore.index.DeleteTraitMutation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exocore.index.DeleteTraitMutation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exocore.index.DeleteTraitMutation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTraitId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trait_id = 1;
 * @return {string}
 */
proto.exocore.index.DeleteTraitMutation.prototype.getTraitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.exocore.index.DeleteTraitMutation} returns this
 */
proto.exocore.index.DeleteTraitMutation.prototype.setTraitId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.exocore.index.TestMutation.prototype.toObject = function(opt_includeInstance) {
  return proto.exocore.index.TestMutation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exocore.index.TestMutation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exocore.index.TestMutation.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.exocore.index.TestMutation}
 */
proto.exocore.index.TestMutation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exocore.index.TestMutation;
  return proto.exocore.index.TestMutation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exocore.index.TestMutation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exocore.index.TestMutation}
 */
proto.exocore.index.TestMutation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.exocore.index.TestMutation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exocore.index.TestMutation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exocore.index.TestMutation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exocore.index.TestMutation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.exocore.index.TestMutation.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.exocore.index.TestMutation} returns this
 */
proto.exocore.index.TestMutation.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.exocore.index.MutationResult.prototype.toObject = function(opt_includeInstance) {
  return proto.exocore.index.MutationResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exocore.index.MutationResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exocore.index.MutationResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.exocore.index.MutationResult}
 */
proto.exocore.index.MutationResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exocore.index.MutationResult;
  return proto.exocore.index.MutationResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exocore.index.MutationResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exocore.index.MutationResult}
 */
proto.exocore.index.MutationResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOperationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.exocore.index.MutationResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exocore.index.MutationResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exocore.index.MutationResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exocore.index.MutationResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 operation_id = 1;
 * @return {number}
 */
proto.exocore.index.MutationResult.prototype.getOperationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.exocore.index.MutationResult} returns this
 */
proto.exocore.index.MutationResult.prototype.setOperationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.exocore.index);
