// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: exocore/index/options.proto
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

// MARK: - Extension support defined in options.proto.

// MARK: - Extension Properties

// Swift Extensions on the exteneded Messages to add easy access to the declared
// extension fields. The names are based on the extension field name from the proto
// declaration. To avoid naming collisions, the names are prefixed with the name of
// the scope where the extend directive occurs.

extension SwiftProtobuf.Google_Protobuf_FieldOptions {

  public var Exocore_indexed: Bool {
    get {return getExtensionValue(ext: Exocore_Extensions_indexed) ?? false}
    set {setExtensionValue(ext: Exocore_Extensions_indexed, value: newValue)}
  }
  /// Returns true if extension `Exocore_Extensions_indexed`
  /// has been explicitly set.
  public var hasExocore_indexed: Bool {
    return hasExtensionValue(ext: Exocore_Extensions_indexed)
  }
  /// Clears the value of extension `Exocore_Extensions_indexed`.
  /// Subsequent reads from it will return its default value.
  public mutating func clearExocore_indexed() {
    clearExtensionValue(ext: Exocore_Extensions_indexed)
  }

  public var Exocore_sorted: Bool {
    get {return getExtensionValue(ext: Exocore_Extensions_sorted) ?? false}
    set {setExtensionValue(ext: Exocore_Extensions_sorted, value: newValue)}
  }
  /// Returns true if extension `Exocore_Extensions_sorted`
  /// has been explicitly set.
  public var hasExocore_sorted: Bool {
    return hasExtensionValue(ext: Exocore_Extensions_sorted)
  }
  /// Clears the value of extension `Exocore_Extensions_sorted`.
  /// Subsequent reads from it will return its default value.
  public mutating func clearExocore_sorted() {
    clearExtensionValue(ext: Exocore_Extensions_sorted)
  }

  public var Exocore_text: Bool {
    get {return getExtensionValue(ext: Exocore_Extensions_text) ?? false}
    set {setExtensionValue(ext: Exocore_Extensions_text, value: newValue)}
  }
  /// Returns true if extension `Exocore_Extensions_text`
  /// has been explicitly set.
  public var hasExocore_text: Bool {
    return hasExtensionValue(ext: Exocore_Extensions_text)
  }
  /// Clears the value of extension `Exocore_Extensions_text`.
  /// Subsequent reads from it will return its default value.
  public mutating func clearExocore_text() {
    clearExtensionValue(ext: Exocore_Extensions_text)
  }

}

// MARK: - File's ExtensionMap: Exocore_Options_Extensions

/// A `SwiftProtobuf.SimpleExtensionMap` that includes all of the extensions defined by
/// this .proto file. It can be used any place an `SwiftProtobuf.ExtensionMap` is needed
/// in parsing, or it can be combined with other `SwiftProtobuf.SimpleExtensionMap`s to create
/// a larger `SwiftProtobuf.SimpleExtensionMap`.
public let Exocore_Options_Extensions: SwiftProtobuf.SimpleExtensionMap = [
  Exocore_Extensions_indexed,
  Exocore_Extensions_sorted,
  Exocore_Extensions_text
]

// Extension Objects - The only reason these might be needed is when manually
// constructing a `SimpleExtensionMap`, otherwise, use the above _Extension Properties_
// accessors for the extension fields on the messages directly.

public let Exocore_Extensions_indexed = SwiftProtobuf.MessageExtension<SwiftProtobuf.OptionalExtensionField<SwiftProtobuf.ProtobufBool>, SwiftProtobuf.Google_Protobuf_FieldOptions>(
  _protobuf_fieldNumber: 1373,
  fieldName: "exocore.indexed"
)

public let Exocore_Extensions_sorted = SwiftProtobuf.MessageExtension<SwiftProtobuf.OptionalExtensionField<SwiftProtobuf.ProtobufBool>, SwiftProtobuf.Google_Protobuf_FieldOptions>(
  _protobuf_fieldNumber: 1374,
  fieldName: "exocore.sorted"
)

public let Exocore_Extensions_text = SwiftProtobuf.MessageExtension<SwiftProtobuf.OptionalExtensionField<SwiftProtobuf.ProtobufBool>, SwiftProtobuf.Google_Protobuf_FieldOptions>(
  _protobuf_fieldNumber: 1375,
  fieldName: "exocore.text"
)
