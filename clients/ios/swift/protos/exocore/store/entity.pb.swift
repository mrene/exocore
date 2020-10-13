// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: exocore/store/entity.proto
//
// For information on using the generated types, please see the documentation:
//   https://github.com/apple/swift-protobuf/

import Foundation
import SwiftProtobuf

// If the compiler emits an error on this type, it is because this file
// was generated by a version of the `protoc` Swift plug-in that is
// incompatible with the version of SwiftProtobuf to which you are linking.
// Please ensure that you are building against the same version of the API
// that was used to generate this file.
fileprivate struct _GeneratedWithProtocGenSwiftVersion: SwiftProtobuf.ProtobufAPIVersionCheck {
  struct _2: SwiftProtobuf.ProtobufAPIVersion_2 {}
  typealias Version = _2
}

public enum Exocore_Store_TraitDetails: SwiftProtobuf.Enum {
  public typealias RawValue = Int
  case full // = 0
  case partial // = 1
  case UNRECOGNIZED(Int)

  public init() {
    self = .full
  }

  public init?(rawValue: Int) {
    switch rawValue {
    case 0: self = .full
    case 1: self = .partial
    default: self = .UNRECOGNIZED(rawValue)
    }
  }

  public var rawValue: Int {
    switch self {
    case .full: return 0
    case .partial: return 1
    case .UNRECOGNIZED(let i): return i
    }
  }

}

#if swift(>=4.2)

extension Exocore_Store_TraitDetails: CaseIterable {
  // The compiler won't synthesize support with the UNRECOGNIZED case.
  public static var allCases: [Exocore_Store_TraitDetails] = [
    .full,
    .partial,
  ]
}

#endif  // swift(>=4.2)

public struct Exocore_Store_Entity {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var id: String = String()

  public var traits: [Exocore_Store_Trait] = []

  public var creationDate: SwiftProtobuf.Google_Protobuf_Timestamp {
    get {return _creationDate ?? SwiftProtobuf.Google_Protobuf_Timestamp()}
    set {_creationDate = newValue}
  }
  /// Returns true if `creationDate` has been explicitly set.
  public var hasCreationDate: Bool {return self._creationDate != nil}
  /// Clears the value of `creationDate`. Subsequent reads from it will return its default value.
  public mutating func clearCreationDate() {self._creationDate = nil}

  public var modificationDate: SwiftProtobuf.Google_Protobuf_Timestamp {
    get {return _modificationDate ?? SwiftProtobuf.Google_Protobuf_Timestamp()}
    set {_modificationDate = newValue}
  }
  /// Returns true if `modificationDate` has been explicitly set.
  public var hasModificationDate: Bool {return self._modificationDate != nil}
  /// Clears the value of `modificationDate`. Subsequent reads from it will return its default value.
  public mutating func clearModificationDate() {self._modificationDate = nil}

  public var deletionDate: SwiftProtobuf.Google_Protobuf_Timestamp {
    get {return _deletionDate ?? SwiftProtobuf.Google_Protobuf_Timestamp()}
    set {_deletionDate = newValue}
  }
  /// Returns true if `deletionDate` has been explicitly set.
  public var hasDeletionDate: Bool {return self._deletionDate != nil}
  /// Clears the value of `deletionDate`. Subsequent reads from it will return its default value.
  public mutating func clearDeletionDate() {self._deletionDate = nil}

  public var lastOperationID: UInt64 = 0

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _creationDate: SwiftProtobuf.Google_Protobuf_Timestamp? = nil
  fileprivate var _modificationDate: SwiftProtobuf.Google_Protobuf_Timestamp? = nil
  fileprivate var _deletionDate: SwiftProtobuf.Google_Protobuf_Timestamp? = nil
}

public struct Exocore_Store_Trait {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var id: String = String()

  public var message: SwiftProtobuf.Google_Protobuf_Any {
    get {return _message ?? SwiftProtobuf.Google_Protobuf_Any()}
    set {_message = newValue}
  }
  /// Returns true if `message` has been explicitly set.
  public var hasMessage: Bool {return self._message != nil}
  /// Clears the value of `message`. Subsequent reads from it will return its default value.
  public mutating func clearMessage() {self._message = nil}

  public var creationDate: SwiftProtobuf.Google_Protobuf_Timestamp {
    get {return _creationDate ?? SwiftProtobuf.Google_Protobuf_Timestamp()}
    set {_creationDate = newValue}
  }
  /// Returns true if `creationDate` has been explicitly set.
  public var hasCreationDate: Bool {return self._creationDate != nil}
  /// Clears the value of `creationDate`. Subsequent reads from it will return its default value.
  public mutating func clearCreationDate() {self._creationDate = nil}

  public var modificationDate: SwiftProtobuf.Google_Protobuf_Timestamp {
    get {return _modificationDate ?? SwiftProtobuf.Google_Protobuf_Timestamp()}
    set {_modificationDate = newValue}
  }
  /// Returns true if `modificationDate` has been explicitly set.
  public var hasModificationDate: Bool {return self._modificationDate != nil}
  /// Clears the value of `modificationDate`. Subsequent reads from it will return its default value.
  public mutating func clearModificationDate() {self._modificationDate = nil}

  public var deletionDate: SwiftProtobuf.Google_Protobuf_Timestamp {
    get {return _deletionDate ?? SwiftProtobuf.Google_Protobuf_Timestamp()}
    set {_deletionDate = newValue}
  }
  /// Returns true if `deletionDate` has been explicitly set.
  public var hasDeletionDate: Bool {return self._deletionDate != nil}
  /// Clears the value of `deletionDate`. Subsequent reads from it will return its default value.
  public mutating func clearDeletionDate() {self._deletionDate = nil}

  public var lastOperationID: UInt64 = 0

  public var details: Exocore_Store_TraitDetails = .full

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _message: SwiftProtobuf.Google_Protobuf_Any? = nil
  fileprivate var _creationDate: SwiftProtobuf.Google_Protobuf_Timestamp? = nil
  fileprivate var _modificationDate: SwiftProtobuf.Google_Protobuf_Timestamp? = nil
  fileprivate var _deletionDate: SwiftProtobuf.Google_Protobuf_Timestamp? = nil
}

public struct Exocore_Store_Reference {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var entityID: String = String()

  public var traitID: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "exocore.store"

extension Exocore_Store_TraitDetails: SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "TRAIT_DETAILS_FULL"),
    1: .same(proto: "TRAIT_DETAILS_PARTIAL"),
  ]
}

extension Exocore_Store_Entity: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".Entity"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "id"),
    4: .same(proto: "traits"),
    5: .standard(proto: "creation_date"),
    6: .standard(proto: "modification_date"),
    7: .standard(proto: "deletion_date"),
    8: .standard(proto: "last_operation_id"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.id) }()
      case 4: try { try decoder.decodeRepeatedMessageField(value: &self.traits) }()
      case 5: try { try decoder.decodeSingularMessageField(value: &self._creationDate) }()
      case 6: try { try decoder.decodeSingularMessageField(value: &self._modificationDate) }()
      case 7: try { try decoder.decodeSingularMessageField(value: &self._deletionDate) }()
      case 8: try { try decoder.decodeSingularUInt64Field(value: &self.lastOperationID) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.id.isEmpty {
      try visitor.visitSingularStringField(value: self.id, fieldNumber: 1)
    }
    if !self.traits.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.traits, fieldNumber: 4)
    }
    if let v = self._creationDate {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 5)
    }
    if let v = self._modificationDate {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 6)
    }
    if let v = self._deletionDate {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 7)
    }
    if self.lastOperationID != 0 {
      try visitor.visitSingularUInt64Field(value: self.lastOperationID, fieldNumber: 8)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Exocore_Store_Entity, rhs: Exocore_Store_Entity) -> Bool {
    if lhs.id != rhs.id {return false}
    if lhs.traits != rhs.traits {return false}
    if lhs._creationDate != rhs._creationDate {return false}
    if lhs._modificationDate != rhs._modificationDate {return false}
    if lhs._deletionDate != rhs._deletionDate {return false}
    if lhs.lastOperationID != rhs.lastOperationID {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Exocore_Store_Trait: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".Trait"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "id"),
    2: .same(proto: "message"),
    3: .standard(proto: "creation_date"),
    4: .standard(proto: "modification_date"),
    6: .standard(proto: "deletion_date"),
    7: .standard(proto: "last_operation_id"),
    5: .same(proto: "details"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.id) }()
      case 2: try { try decoder.decodeSingularMessageField(value: &self._message) }()
      case 3: try { try decoder.decodeSingularMessageField(value: &self._creationDate) }()
      case 4: try { try decoder.decodeSingularMessageField(value: &self._modificationDate) }()
      case 5: try { try decoder.decodeSingularEnumField(value: &self.details) }()
      case 6: try { try decoder.decodeSingularMessageField(value: &self._deletionDate) }()
      case 7: try { try decoder.decodeSingularUInt64Field(value: &self.lastOperationID) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.id.isEmpty {
      try visitor.visitSingularStringField(value: self.id, fieldNumber: 1)
    }
    if let v = self._message {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
    }
    if let v = self._creationDate {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 3)
    }
    if let v = self._modificationDate {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 4)
    }
    if self.details != .full {
      try visitor.visitSingularEnumField(value: self.details, fieldNumber: 5)
    }
    if let v = self._deletionDate {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 6)
    }
    if self.lastOperationID != 0 {
      try visitor.visitSingularUInt64Field(value: self.lastOperationID, fieldNumber: 7)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Exocore_Store_Trait, rhs: Exocore_Store_Trait) -> Bool {
    if lhs.id != rhs.id {return false}
    if lhs._message != rhs._message {return false}
    if lhs._creationDate != rhs._creationDate {return false}
    if lhs._modificationDate != rhs._modificationDate {return false}
    if lhs._deletionDate != rhs._deletionDate {return false}
    if lhs.lastOperationID != rhs.lastOperationID {return false}
    if lhs.details != rhs.details {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Exocore_Store_Reference: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".Reference"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "entity_id"),
    2: .standard(proto: "trait_id"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.entityID) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.traitID) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.entityID.isEmpty {
      try visitor.visitSingularStringField(value: self.entityID, fieldNumber: 1)
    }
    if !self.traitID.isEmpty {
      try visitor.visitSingularStringField(value: self.traitID, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Exocore_Store_Reference, rhs: Exocore_Store_Reference) -> Bool {
    if lhs.entityID != rhs.entityID {return false}
    if lhs.traitID != rhs.traitID {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
