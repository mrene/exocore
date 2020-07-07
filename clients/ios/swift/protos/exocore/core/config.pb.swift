// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: exocore/core/config.proto
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

public struct Exocore_Core_LocalNodeConfig {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var keypair: String = String()

  public var publicKey: String = String()

  public var name: String = String()

  public var id: String = String()

  public var path: String = String()

  public var listenAddresses: [String] = []

  public var cells: [Exocore_Core_NodeCellConfig] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

public struct Exocore_Core_NodeCellConfig {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var location: Exocore_Core_NodeCellConfig.OneOf_Location? = nil

  public var instance: Exocore_Core_CellConfig {
    get {
      if case .instance(let v)? = location {return v}
      return Exocore_Core_CellConfig()
    }
    set {location = .instance(newValue)}
  }

  public var directory: String {
    get {
      if case .directory(let v)? = location {return v}
      return String()
    }
    set {location = .directory(newValue)}
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public enum OneOf_Location: Equatable {
    case instance(Exocore_Core_CellConfig)
    case directory(String)

  #if !swift(>=4.1)
    public static func ==(lhs: Exocore_Core_NodeCellConfig.OneOf_Location, rhs: Exocore_Core_NodeCellConfig.OneOf_Location) -> Bool {
      switch (lhs, rhs) {
      case (.instance(let l), .instance(let r)): return l == r
      case (.directory(let l), .directory(let r)): return l == r
      default: return false
      }
    }
  #endif
  }

  public init() {}
}

public struct Exocore_Core_CellConfig {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var publicKey: String = String()

  public var keypair: String = String()

  public var name: String = String()

  public var id: String = String()

  public var path: String = String()

  public var nodes: [Exocore_Core_CellNodeConfig] = []

  public var apps: [Exocore_Core_CellApplicationConfig] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

public struct Exocore_Core_CellNodeConfig {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var node: Exocore_Core_NodeConfig {
    get {return _node ?? Exocore_Core_NodeConfig()}
    set {_node = newValue}
  }
  /// Returns true if `node` has been explicitly set.
  public var hasNode: Bool {return self._node != nil}
  /// Clears the value of `node`. Subsequent reads from it will return its default value.
  public mutating func clearNode() {self._node = nil}

  public var roles: [Exocore_Core_CellNodeConfig.Role] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public enum Role: SwiftProtobuf.Enum {
    public typealias RawValue = Int
    case invalidRole // = 0
    case chainRole // = 1
    case indexStoreRole // = 2
    case UNRECOGNIZED(Int)

    public init() {
      self = .invalidRole
    }

    public init?(rawValue: Int) {
      switch rawValue {
      case 0: self = .invalidRole
      case 1: self = .chainRole
      case 2: self = .indexStoreRole
      default: self = .UNRECOGNIZED(rawValue)
      }
    }

    public var rawValue: Int {
      switch self {
      case .invalidRole: return 0
      case .chainRole: return 1
      case .indexStoreRole: return 2
      case .UNRECOGNIZED(let i): return i
      }
    }

  }

  public init() {}

  fileprivate var _node: Exocore_Core_NodeConfig? = nil
}

#if swift(>=4.2)

extension Exocore_Core_CellNodeConfig.Role: CaseIterable {
  // The compiler won't synthesize support with the UNRECOGNIZED case.
  public static var allCases: [Exocore_Core_CellNodeConfig.Role] = [
    .invalidRole,
    .chainRole,
    .indexStoreRole,
  ]
}

#endif  // swift(>=4.2)

public struct Exocore_Core_NodeConfig {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var publicKey: String = String()

  public var name: String = String()

  public var id: String = String()

  public var addresses: [String] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

public struct Exocore_Core_CellApplicationConfig {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var location: Exocore_Core_CellApplicationConfig.OneOf_Location? = nil

  public var instance: Exocore_Apps_Manifest {
    get {
      if case .instance(let v)? = location {return v}
      return Exocore_Apps_Manifest()
    }
    set {location = .instance(newValue)}
  }

  public var directory: String {
    get {
      if case .directory(let v)? = location {return v}
      return String()
    }
    set {location = .directory(newValue)}
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public enum OneOf_Location: Equatable {
    case instance(Exocore_Apps_Manifest)
    case directory(String)

  #if !swift(>=4.1)
    public static func ==(lhs: Exocore_Core_CellApplicationConfig.OneOf_Location, rhs: Exocore_Core_CellApplicationConfig.OneOf_Location) -> Bool {
      switch (lhs, rhs) {
      case (.instance(let l), .instance(let r)): return l == r
      case (.directory(let l), .directory(let r)): return l == r
      default: return false
      }
    }
  #endif
  }

  public init() {}
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "exocore.core"

extension Exocore_Core_LocalNodeConfig: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".LocalNodeConfig"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "keypair"),
    2: .standard(proto: "public_key"),
    3: .same(proto: "name"),
    4: .same(proto: "id"),
    5: .same(proto: "path"),
    6: .standard(proto: "listen_addresses"),
    7: .same(proto: "cells"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularStringField(value: &self.keypair)
      case 2: try decoder.decodeSingularStringField(value: &self.publicKey)
      case 3: try decoder.decodeSingularStringField(value: &self.name)
      case 4: try decoder.decodeSingularStringField(value: &self.id)
      case 5: try decoder.decodeSingularStringField(value: &self.path)
      case 6: try decoder.decodeRepeatedStringField(value: &self.listenAddresses)
      case 7: try decoder.decodeRepeatedMessageField(value: &self.cells)
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.keypair.isEmpty {
      try visitor.visitSingularStringField(value: self.keypair, fieldNumber: 1)
    }
    if !self.publicKey.isEmpty {
      try visitor.visitSingularStringField(value: self.publicKey, fieldNumber: 2)
    }
    if !self.name.isEmpty {
      try visitor.visitSingularStringField(value: self.name, fieldNumber: 3)
    }
    if !self.id.isEmpty {
      try visitor.visitSingularStringField(value: self.id, fieldNumber: 4)
    }
    if !self.path.isEmpty {
      try visitor.visitSingularStringField(value: self.path, fieldNumber: 5)
    }
    if !self.listenAddresses.isEmpty {
      try visitor.visitRepeatedStringField(value: self.listenAddresses, fieldNumber: 6)
    }
    if !self.cells.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.cells, fieldNumber: 7)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Exocore_Core_LocalNodeConfig, rhs: Exocore_Core_LocalNodeConfig) -> Bool {
    if lhs.keypair != rhs.keypair {return false}
    if lhs.publicKey != rhs.publicKey {return false}
    if lhs.name != rhs.name {return false}
    if lhs.id != rhs.id {return false}
    if lhs.path != rhs.path {return false}
    if lhs.listenAddresses != rhs.listenAddresses {return false}
    if lhs.cells != rhs.cells {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Exocore_Core_NodeCellConfig: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".NodeCellConfig"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "instance"),
    2: .same(proto: "directory"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1:
        var v: Exocore_Core_CellConfig?
        if let current = self.location {
          try decoder.handleConflictingOneOf()
          if case .instance(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.location = .instance(v)}
      case 2:
        if self.location != nil {try decoder.handleConflictingOneOf()}
        var v: String?
        try decoder.decodeSingularStringField(value: &v)
        if let v = v {self.location = .directory(v)}
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    switch self.location {
    case .instance(let v)?:
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    case .directory(let v)?:
      try visitor.visitSingularStringField(value: v, fieldNumber: 2)
    case nil: break
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Exocore_Core_NodeCellConfig, rhs: Exocore_Core_NodeCellConfig) -> Bool {
    if lhs.location != rhs.location {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Exocore_Core_CellConfig: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".CellConfig"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "public_key"),
    2: .same(proto: "keypair"),
    3: .same(proto: "name"),
    4: .same(proto: "id"),
    5: .same(proto: "path"),
    6: .same(proto: "nodes"),
    7: .same(proto: "apps"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularStringField(value: &self.publicKey)
      case 2: try decoder.decodeSingularStringField(value: &self.keypair)
      case 3: try decoder.decodeSingularStringField(value: &self.name)
      case 4: try decoder.decodeSingularStringField(value: &self.id)
      case 5: try decoder.decodeSingularStringField(value: &self.path)
      case 6: try decoder.decodeRepeatedMessageField(value: &self.nodes)
      case 7: try decoder.decodeRepeatedMessageField(value: &self.apps)
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.publicKey.isEmpty {
      try visitor.visitSingularStringField(value: self.publicKey, fieldNumber: 1)
    }
    if !self.keypair.isEmpty {
      try visitor.visitSingularStringField(value: self.keypair, fieldNumber: 2)
    }
    if !self.name.isEmpty {
      try visitor.visitSingularStringField(value: self.name, fieldNumber: 3)
    }
    if !self.id.isEmpty {
      try visitor.visitSingularStringField(value: self.id, fieldNumber: 4)
    }
    if !self.path.isEmpty {
      try visitor.visitSingularStringField(value: self.path, fieldNumber: 5)
    }
    if !self.nodes.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.nodes, fieldNumber: 6)
    }
    if !self.apps.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.apps, fieldNumber: 7)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Exocore_Core_CellConfig, rhs: Exocore_Core_CellConfig) -> Bool {
    if lhs.publicKey != rhs.publicKey {return false}
    if lhs.keypair != rhs.keypair {return false}
    if lhs.name != rhs.name {return false}
    if lhs.id != rhs.id {return false}
    if lhs.path != rhs.path {return false}
    if lhs.nodes != rhs.nodes {return false}
    if lhs.apps != rhs.apps {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Exocore_Core_CellNodeConfig: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".CellNodeConfig"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "node"),
    2: .same(proto: "roles"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularMessageField(value: &self._node)
      case 2: try decoder.decodeRepeatedEnumField(value: &self.roles)
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if let v = self._node {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    }
    if !self.roles.isEmpty {
      try visitor.visitPackedEnumField(value: self.roles, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Exocore_Core_CellNodeConfig, rhs: Exocore_Core_CellNodeConfig) -> Bool {
    if lhs._node != rhs._node {return false}
    if lhs.roles != rhs.roles {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Exocore_Core_CellNodeConfig.Role: SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "INVALID_ROLE"),
    1: .same(proto: "CHAIN_ROLE"),
    2: .same(proto: "INDEX_STORE_ROLE"),
  ]
}

extension Exocore_Core_NodeConfig: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".NodeConfig"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "public_key"),
    2: .same(proto: "name"),
    3: .same(proto: "id"),
    4: .same(proto: "addresses"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularStringField(value: &self.publicKey)
      case 2: try decoder.decodeSingularStringField(value: &self.name)
      case 3: try decoder.decodeSingularStringField(value: &self.id)
      case 4: try decoder.decodeRepeatedStringField(value: &self.addresses)
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.publicKey.isEmpty {
      try visitor.visitSingularStringField(value: self.publicKey, fieldNumber: 1)
    }
    if !self.name.isEmpty {
      try visitor.visitSingularStringField(value: self.name, fieldNumber: 2)
    }
    if !self.id.isEmpty {
      try visitor.visitSingularStringField(value: self.id, fieldNumber: 3)
    }
    if !self.addresses.isEmpty {
      try visitor.visitRepeatedStringField(value: self.addresses, fieldNumber: 4)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Exocore_Core_NodeConfig, rhs: Exocore_Core_NodeConfig) -> Bool {
    if lhs.publicKey != rhs.publicKey {return false}
    if lhs.name != rhs.name {return false}
    if lhs.id != rhs.id {return false}
    if lhs.addresses != rhs.addresses {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Exocore_Core_CellApplicationConfig: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".CellApplicationConfig"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "instance"),
    2: .same(proto: "directory"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1:
        var v: Exocore_Apps_Manifest?
        if let current = self.location {
          try decoder.handleConflictingOneOf()
          if case .instance(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.location = .instance(v)}
      case 2:
        if self.location != nil {try decoder.handleConflictingOneOf()}
        var v: String?
        try decoder.decodeSingularStringField(value: &v)
        if let v = v {self.location = .directory(v)}
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    switch self.location {
    case .instance(let v)?:
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    case .directory(let v)?:
      try visitor.visitSingularStringField(value: v, fieldNumber: 2)
    case nil: break
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Exocore_Core_CellApplicationConfig, rhs: Exocore_Core_CellApplicationConfig) -> Bool {
    if lhs.location != rhs.location {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
