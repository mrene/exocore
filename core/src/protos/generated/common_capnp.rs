#![allow(unknown_lints)]
#![allow(clippy::all)]

// @generated by the capnpc-rust plugin to the Cap'n Proto schema compiler.
// DO NOT EDIT.
// source: home/appaquet/Projects/exomind/exocore/protos/common.capnp

pub mod envelope {
    #[derive(Copy, Clone)]
    pub struct Owned;
    impl<'a> ::capnp::traits::Owned<'a> for Owned {
        type Reader = Reader<'a>;
        type Builder = Builder<'a>;
    }
    impl<'a> ::capnp::traits::OwnedStruct<'a> for Owned {
        type Reader = Reader<'a>;
        type Builder = Builder<'a>;
    }
    impl ::capnp::traits::Pipelined for Owned {
        type Pipeline = Pipeline;
    }

    #[derive(Clone, Copy)]
    pub struct Reader<'a> {
        reader: ::capnp::private::layout::StructReader<'a>,
    }

    impl<'a> ::capnp::traits::HasTypeId for Reader<'a> {
        #[inline]
        fn type_id() -> u64 {
            _private::TYPE_ID
        }
    }
    impl<'a> ::capnp::traits::FromStructReader<'a> for Reader<'a> {
        fn new(reader: ::capnp::private::layout::StructReader<'a>) -> Reader<'a> {
            Reader { reader }
        }
    }

    impl<'a> ::capnp::traits::FromPointerReader<'a> for Reader<'a> {
        fn get_from_pointer(
            reader: &::capnp::private::layout::PointerReader<'a>,
            default: ::core::option::Option<&'a [capnp::Word]>,
        ) -> ::capnp::Result<Reader<'a>> {
            ::core::result::Result::Ok(::capnp::traits::FromStructReader::new(
                reader.get_struct(default)?,
            ))
        }
    }

    impl<'a> ::capnp::traits::IntoInternalStructReader<'a> for Reader<'a> {
        fn into_internal_struct_reader(self) -> ::capnp::private::layout::StructReader<'a> {
            self.reader
        }
    }

    impl<'a> ::capnp::traits::Imbue<'a> for Reader<'a> {
        fn imbue(&mut self, cap_table: &'a ::capnp::private::layout::CapTable) {
            self.reader
                .imbue(::capnp::private::layout::CapTableReader::Plain(cap_table))
        }
    }

    impl<'a> Reader<'a> {
        pub fn reborrow(&self) -> Reader {
            Reader { ..*self }
        }

        pub fn total_size(&self) -> ::capnp::Result<::capnp::MessageSize> {
            self.reader.total_size()
        }
        #[inline]
        pub fn get_cell_id(self) -> ::capnp::Result<::capnp::data::Reader<'a>> {
            ::capnp::traits::FromPointerReader::get_from_pointer(
                &self.reader.get_pointer_field(0),
                ::core::option::Option::None,
            )
        }
        pub fn has_cell_id(&self) -> bool {
            !self.reader.get_pointer_field(0).is_null()
        }
        #[inline]
        pub fn get_service(self) -> u8 {
            self.reader.get_data_field::<u8>(0)
        }
        #[inline]
        pub fn get_type(self) -> u16 {
            self.reader.get_data_field::<u16>(1)
        }
        #[inline]
        pub fn get_rendez_vous_id(self) -> u64 {
            self.reader.get_data_field::<u64>(1)
        }
        #[inline]
        pub fn get_from_node_id(self) -> ::capnp::Result<::capnp::text::Reader<'a>> {
            ::capnp::traits::FromPointerReader::get_from_pointer(
                &self.reader.get_pointer_field(1),
                ::core::option::Option::None,
            )
        }
        pub fn has_from_node_id(&self) -> bool {
            !self.reader.get_pointer_field(1).is_null()
        }
        #[inline]
        pub fn get_data(self) -> ::capnp::Result<::capnp::data::Reader<'a>> {
            ::capnp::traits::FromPointerReader::get_from_pointer(
                &self.reader.get_pointer_field(2),
                ::core::option::Option::None,
            )
        }
        pub fn has_data(&self) -> bool {
            !self.reader.get_pointer_field(2).is_null()
        }
    }

    pub struct Builder<'a> {
        builder: ::capnp::private::layout::StructBuilder<'a>,
    }
    impl<'a> ::capnp::traits::HasStructSize for Builder<'a> {
        #[inline]
        fn struct_size() -> ::capnp::private::layout::StructSize {
            _private::STRUCT_SIZE
        }
    }
    impl<'a> ::capnp::traits::HasTypeId for Builder<'a> {
        #[inline]
        fn type_id() -> u64 {
            _private::TYPE_ID
        }
    }
    impl<'a> ::capnp::traits::FromStructBuilder<'a> for Builder<'a> {
        fn new(builder: ::capnp::private::layout::StructBuilder<'a>) -> Builder<'a> {
            Builder { builder }
        }
    }

    impl<'a> ::capnp::traits::ImbueMut<'a> for Builder<'a> {
        fn imbue_mut(&mut self, cap_table: &'a mut ::capnp::private::layout::CapTable) {
            self.builder
                .imbue(::capnp::private::layout::CapTableBuilder::Plain(cap_table))
        }
    }

    impl<'a> ::capnp::traits::FromPointerBuilder<'a> for Builder<'a> {
        fn init_pointer(
            builder: ::capnp::private::layout::PointerBuilder<'a>,
            _size: u32,
        ) -> Builder<'a> {
            ::capnp::traits::FromStructBuilder::new(builder.init_struct(_private::STRUCT_SIZE))
        }
        fn get_from_pointer(
            builder: ::capnp::private::layout::PointerBuilder<'a>,
            default: ::core::option::Option<&'a [capnp::Word]>,
        ) -> ::capnp::Result<Builder<'a>> {
            ::core::result::Result::Ok(::capnp::traits::FromStructBuilder::new(
                builder.get_struct(_private::STRUCT_SIZE, default)?,
            ))
        }
    }

    impl<'a> ::capnp::traits::SetPointerBuilder<Builder<'a>> for Reader<'a> {
        fn set_pointer_builder<'b>(
            pointer: ::capnp::private::layout::PointerBuilder<'b>,
            value: Reader<'a>,
            canonicalize: bool,
        ) -> ::capnp::Result<()> {
            pointer.set_struct(&value.reader, canonicalize)
        }
    }

    impl<'a> Builder<'a> {
        pub fn into_reader(self) -> Reader<'a> {
            ::capnp::traits::FromStructReader::new(self.builder.into_reader())
        }
        pub fn reborrow(&mut self) -> Builder {
            Builder { ..*self }
        }
        pub fn reborrow_as_reader(&self) -> Reader {
            ::capnp::traits::FromStructReader::new(self.builder.into_reader())
        }

        pub fn total_size(&self) -> ::capnp::Result<::capnp::MessageSize> {
            self.builder.into_reader().total_size()
        }
        #[inline]
        pub fn get_cell_id(self) -> ::capnp::Result<::capnp::data::Builder<'a>> {
            ::capnp::traits::FromPointerBuilder::get_from_pointer(
                self.builder.get_pointer_field(0),
                ::core::option::Option::None,
            )
        }
        #[inline]
        pub fn set_cell_id(&mut self, value: ::capnp::data::Reader) {
            self.builder.get_pointer_field(0).set_data(value);
        }
        #[inline]
        pub fn init_cell_id(self, size: u32) -> ::capnp::data::Builder<'a> {
            self.builder.get_pointer_field(0).init_data(size)
        }
        pub fn has_cell_id(&self) -> bool {
            !self.builder.get_pointer_field(0).is_null()
        }
        #[inline]
        pub fn get_service(self) -> u8 {
            self.builder.get_data_field::<u8>(0)
        }
        #[inline]
        pub fn set_service(&mut self, value: u8) {
            self.builder.set_data_field::<u8>(0, value);
        }
        #[inline]
        pub fn get_type(self) -> u16 {
            self.builder.get_data_field::<u16>(1)
        }
        #[inline]
        pub fn set_type(&mut self, value: u16) {
            self.builder.set_data_field::<u16>(1, value);
        }
        #[inline]
        pub fn get_rendez_vous_id(self) -> u64 {
            self.builder.get_data_field::<u64>(1)
        }
        #[inline]
        pub fn set_rendez_vous_id(&mut self, value: u64) {
            self.builder.set_data_field::<u64>(1, value);
        }
        #[inline]
        pub fn get_from_node_id(self) -> ::capnp::Result<::capnp::text::Builder<'a>> {
            ::capnp::traits::FromPointerBuilder::get_from_pointer(
                self.builder.get_pointer_field(1),
                ::core::option::Option::None,
            )
        }
        #[inline]
        pub fn set_from_node_id(&mut self, value: ::capnp::text::Reader) {
            self.builder.get_pointer_field(1).set_text(value);
        }
        #[inline]
        pub fn init_from_node_id(self, size: u32) -> ::capnp::text::Builder<'a> {
            self.builder.get_pointer_field(1).init_text(size)
        }
        pub fn has_from_node_id(&self) -> bool {
            !self.builder.get_pointer_field(1).is_null()
        }
        #[inline]
        pub fn get_data(self) -> ::capnp::Result<::capnp::data::Builder<'a>> {
            ::capnp::traits::FromPointerBuilder::get_from_pointer(
                self.builder.get_pointer_field(2),
                ::core::option::Option::None,
            )
        }
        #[inline]
        pub fn set_data(&mut self, value: ::capnp::data::Reader) {
            self.builder.get_pointer_field(2).set_data(value);
        }
        #[inline]
        pub fn init_data(self, size: u32) -> ::capnp::data::Builder<'a> {
            self.builder.get_pointer_field(2).init_data(size)
        }
        pub fn has_data(&self) -> bool {
            !self.builder.get_pointer_field(2).is_null()
        }
    }

    pub struct Pipeline {
        _typeless: ::capnp::any_pointer::Pipeline,
    }
    impl ::capnp::capability::FromTypelessPipeline for Pipeline {
        fn new(typeless: ::capnp::any_pointer::Pipeline) -> Pipeline {
            Pipeline {
                _typeless: typeless,
            }
        }
    }
    impl Pipeline {}
    mod _private {
        use capnp::private::layout;
        pub const STRUCT_SIZE: layout::StructSize = layout::StructSize {
            data: 2,
            pointers: 3,
        };
        pub const TYPE_ID: u64 = 0xc36d_6104_eea1_8449;
    }
}

pub mod node {
    #[derive(Copy, Clone)]
    pub struct Owned;
    impl<'a> ::capnp::traits::Owned<'a> for Owned {
        type Reader = Reader<'a>;
        type Builder = Builder<'a>;
    }
    impl<'a> ::capnp::traits::OwnedStruct<'a> for Owned {
        type Reader = Reader<'a>;
        type Builder = Builder<'a>;
    }
    impl ::capnp::traits::Pipelined for Owned {
        type Pipeline = Pipeline;
    }

    #[derive(Clone, Copy)]
    pub struct Reader<'a> {
        reader: ::capnp::private::layout::StructReader<'a>,
    }

    impl<'a> ::capnp::traits::HasTypeId for Reader<'a> {
        #[inline]
        fn type_id() -> u64 {
            _private::TYPE_ID
        }
    }
    impl<'a> ::capnp::traits::FromStructReader<'a> for Reader<'a> {
        fn new(reader: ::capnp::private::layout::StructReader<'a>) -> Reader<'a> {
            Reader { reader }
        }
    }

    impl<'a> ::capnp::traits::FromPointerReader<'a> for Reader<'a> {
        fn get_from_pointer(
            reader: &::capnp::private::layout::PointerReader<'a>,
            default: ::core::option::Option<&'a [capnp::Word]>,
        ) -> ::capnp::Result<Reader<'a>> {
            ::core::result::Result::Ok(::capnp::traits::FromStructReader::new(
                reader.get_struct(default)?,
            ))
        }
    }

    impl<'a> ::capnp::traits::IntoInternalStructReader<'a> for Reader<'a> {
        fn into_internal_struct_reader(self) -> ::capnp::private::layout::StructReader<'a> {
            self.reader
        }
    }

    impl<'a> ::capnp::traits::Imbue<'a> for Reader<'a> {
        fn imbue(&mut self, cap_table: &'a ::capnp::private::layout::CapTable) {
            self.reader
                .imbue(::capnp::private::layout::CapTableReader::Plain(cap_table))
        }
    }

    impl<'a> Reader<'a> {
        pub fn reborrow(&self) -> Reader {
            Reader { ..*self }
        }

        pub fn total_size(&self) -> ::capnp::Result<::capnp::MessageSize> {
            self.reader.total_size()
        }
        #[inline]
        pub fn get_id(self) -> ::capnp::Result<::capnp::text::Reader<'a>> {
            ::capnp::traits::FromPointerReader::get_from_pointer(
                &self.reader.get_pointer_field(0),
                ::core::option::Option::None,
            )
        }
        pub fn has_id(&self) -> bool {
            !self.reader.get_pointer_field(0).is_null()
        }
        #[inline]
        pub fn get_public_key(self) -> ::capnp::Result<::capnp::text::Reader<'a>> {
            ::capnp::traits::FromPointerReader::get_from_pointer(
                &self.reader.get_pointer_field(1),
                ::core::option::Option::None,
            )
        }
        pub fn has_public_key(&self) -> bool {
            !self.reader.get_pointer_field(1).is_null()
        }
        #[inline]
        pub fn get_address(
            self,
        ) -> ::capnp::Result<
            ::capnp::struct_list::Reader<'a, crate::common_capnp::node_address::Owned>,
        > {
            ::capnp::traits::FromPointerReader::get_from_pointer(
                &self.reader.get_pointer_field(2),
                ::core::option::Option::None,
            )
        }
        pub fn has_address(&self) -> bool {
            !self.reader.get_pointer_field(2).is_null()
        }
    }

    pub struct Builder<'a> {
        builder: ::capnp::private::layout::StructBuilder<'a>,
    }
    impl<'a> ::capnp::traits::HasStructSize for Builder<'a> {
        #[inline]
        fn struct_size() -> ::capnp::private::layout::StructSize {
            _private::STRUCT_SIZE
        }
    }
    impl<'a> ::capnp::traits::HasTypeId for Builder<'a> {
        #[inline]
        fn type_id() -> u64 {
            _private::TYPE_ID
        }
    }
    impl<'a> ::capnp::traits::FromStructBuilder<'a> for Builder<'a> {
        fn new(builder: ::capnp::private::layout::StructBuilder<'a>) -> Builder<'a> {
            Builder { builder }
        }
    }

    impl<'a> ::capnp::traits::ImbueMut<'a> for Builder<'a> {
        fn imbue_mut(&mut self, cap_table: &'a mut ::capnp::private::layout::CapTable) {
            self.builder
                .imbue(::capnp::private::layout::CapTableBuilder::Plain(cap_table))
        }
    }

    impl<'a> ::capnp::traits::FromPointerBuilder<'a> for Builder<'a> {
        fn init_pointer(
            builder: ::capnp::private::layout::PointerBuilder<'a>,
            _size: u32,
        ) -> Builder<'a> {
            ::capnp::traits::FromStructBuilder::new(builder.init_struct(_private::STRUCT_SIZE))
        }
        fn get_from_pointer(
            builder: ::capnp::private::layout::PointerBuilder<'a>,
            default: ::core::option::Option<&'a [capnp::Word]>,
        ) -> ::capnp::Result<Builder<'a>> {
            ::core::result::Result::Ok(::capnp::traits::FromStructBuilder::new(
                builder.get_struct(_private::STRUCT_SIZE, default)?,
            ))
        }
    }

    impl<'a> ::capnp::traits::SetPointerBuilder<Builder<'a>> for Reader<'a> {
        fn set_pointer_builder<'b>(
            pointer: ::capnp::private::layout::PointerBuilder<'b>,
            value: Reader<'a>,
            canonicalize: bool,
        ) -> ::capnp::Result<()> {
            pointer.set_struct(&value.reader, canonicalize)
        }
    }

    impl<'a> Builder<'a> {
        pub fn into_reader(self) -> Reader<'a> {
            ::capnp::traits::FromStructReader::new(self.builder.into_reader())
        }
        pub fn reborrow(&mut self) -> Builder {
            Builder { ..*self }
        }
        pub fn reborrow_as_reader(&self) -> Reader {
            ::capnp::traits::FromStructReader::new(self.builder.into_reader())
        }

        pub fn total_size(&self) -> ::capnp::Result<::capnp::MessageSize> {
            self.builder.into_reader().total_size()
        }
        #[inline]
        pub fn get_id(self) -> ::capnp::Result<::capnp::text::Builder<'a>> {
            ::capnp::traits::FromPointerBuilder::get_from_pointer(
                self.builder.get_pointer_field(0),
                ::core::option::Option::None,
            )
        }
        #[inline]
        pub fn set_id(&mut self, value: ::capnp::text::Reader) {
            self.builder.get_pointer_field(0).set_text(value);
        }
        #[inline]
        pub fn init_id(self, size: u32) -> ::capnp::text::Builder<'a> {
            self.builder.get_pointer_field(0).init_text(size)
        }
        pub fn has_id(&self) -> bool {
            !self.builder.get_pointer_field(0).is_null()
        }
        #[inline]
        pub fn get_public_key(self) -> ::capnp::Result<::capnp::text::Builder<'a>> {
            ::capnp::traits::FromPointerBuilder::get_from_pointer(
                self.builder.get_pointer_field(1),
                ::core::option::Option::None,
            )
        }
        #[inline]
        pub fn set_public_key(&mut self, value: ::capnp::text::Reader) {
            self.builder.get_pointer_field(1).set_text(value);
        }
        #[inline]
        pub fn init_public_key(self, size: u32) -> ::capnp::text::Builder<'a> {
            self.builder.get_pointer_field(1).init_text(size)
        }
        pub fn has_public_key(&self) -> bool {
            !self.builder.get_pointer_field(1).is_null()
        }
        #[inline]
        pub fn get_address(
            self,
        ) -> ::capnp::Result<
            ::capnp::struct_list::Builder<'a, crate::common_capnp::node_address::Owned>,
        > {
            ::capnp::traits::FromPointerBuilder::get_from_pointer(
                self.builder.get_pointer_field(2),
                ::core::option::Option::None,
            )
        }
        #[inline]
        pub fn set_address(
            &mut self,
            value: ::capnp::struct_list::Reader<'a, crate::common_capnp::node_address::Owned>,
        ) -> ::capnp::Result<()> {
            ::capnp::traits::SetPointerBuilder::set_pointer_builder(
                self.builder.get_pointer_field(2),
                value,
                false,
            )
        }
        #[inline]
        pub fn init_address(
            self,
            size: u32,
        ) -> ::capnp::struct_list::Builder<'a, crate::common_capnp::node_address::Owned> {
            ::capnp::traits::FromPointerBuilder::init_pointer(
                self.builder.get_pointer_field(2),
                size,
            )
        }
        pub fn has_address(&self) -> bool {
            !self.builder.get_pointer_field(2).is_null()
        }
    }

    pub struct Pipeline {
        _typeless: ::capnp::any_pointer::Pipeline,
    }
    impl ::capnp::capability::FromTypelessPipeline for Pipeline {
        fn new(typeless: ::capnp::any_pointer::Pipeline) -> Pipeline {
            Pipeline {
                _typeless: typeless,
            }
        }
    }
    impl Pipeline {}
    mod _private {
        use capnp::private::layout;
        pub const STRUCT_SIZE: layout::StructSize = layout::StructSize {
            data: 0,
            pointers: 3,
        };
        pub const TYPE_ID: u64 = 0xd582_4f6b_8482_b631;
    }
}

pub mod node_address {
    #[derive(Copy, Clone)]
    pub struct Owned;
    impl<'a> ::capnp::traits::Owned<'a> for Owned {
        type Reader = Reader<'a>;
        type Builder = Builder<'a>;
    }
    impl<'a> ::capnp::traits::OwnedStruct<'a> for Owned {
        type Reader = Reader<'a>;
        type Builder = Builder<'a>;
    }
    impl ::capnp::traits::Pipelined for Owned {
        type Pipeline = Pipeline;
    }

    #[derive(Clone, Copy)]
    pub struct Reader<'a> {
        reader: ::capnp::private::layout::StructReader<'a>,
    }

    impl<'a> ::capnp::traits::HasTypeId for Reader<'a> {
        #[inline]
        fn type_id() -> u64 {
            _private::TYPE_ID
        }
    }
    impl<'a> ::capnp::traits::FromStructReader<'a> for Reader<'a> {
        fn new(reader: ::capnp::private::layout::StructReader<'a>) -> Reader<'a> {
            Reader { reader }
        }
    }

    impl<'a> ::capnp::traits::FromPointerReader<'a> for Reader<'a> {
        fn get_from_pointer(
            reader: &::capnp::private::layout::PointerReader<'a>,
            default: ::core::option::Option<&'a [capnp::Word]>,
        ) -> ::capnp::Result<Reader<'a>> {
            ::core::result::Result::Ok(::capnp::traits::FromStructReader::new(
                reader.get_struct(default)?,
            ))
        }
    }

    impl<'a> ::capnp::traits::IntoInternalStructReader<'a> for Reader<'a> {
        fn into_internal_struct_reader(self) -> ::capnp::private::layout::StructReader<'a> {
            self.reader
        }
    }

    impl<'a> ::capnp::traits::Imbue<'a> for Reader<'a> {
        fn imbue(&mut self, cap_table: &'a ::capnp::private::layout::CapTable) {
            self.reader
                .imbue(::capnp::private::layout::CapTableReader::Plain(cap_table))
        }
    }

    impl<'a> Reader<'a> {
        pub fn reborrow(&self) -> Reader {
            Reader { ..*self }
        }

        pub fn total_size(&self) -> ::capnp::Result<::capnp::MessageSize> {
            self.reader.total_size()
        }
        #[inline]
        pub fn get_data(self) -> ::capnp::Result<::capnp::text::Reader<'a>> {
            ::capnp::traits::FromPointerReader::get_from_pointer(
                &self.reader.get_pointer_field(0),
                ::core::option::Option::None,
            )
        }
        pub fn has_data(&self) -> bool {
            !self.reader.get_pointer_field(0).is_null()
        }
    }

    pub struct Builder<'a> {
        builder: ::capnp::private::layout::StructBuilder<'a>,
    }
    impl<'a> ::capnp::traits::HasStructSize for Builder<'a> {
        #[inline]
        fn struct_size() -> ::capnp::private::layout::StructSize {
            _private::STRUCT_SIZE
        }
    }
    impl<'a> ::capnp::traits::HasTypeId for Builder<'a> {
        #[inline]
        fn type_id() -> u64 {
            _private::TYPE_ID
        }
    }
    impl<'a> ::capnp::traits::FromStructBuilder<'a> for Builder<'a> {
        fn new(builder: ::capnp::private::layout::StructBuilder<'a>) -> Builder<'a> {
            Builder { builder }
        }
    }

    impl<'a> ::capnp::traits::ImbueMut<'a> for Builder<'a> {
        fn imbue_mut(&mut self, cap_table: &'a mut ::capnp::private::layout::CapTable) {
            self.builder
                .imbue(::capnp::private::layout::CapTableBuilder::Plain(cap_table))
        }
    }

    impl<'a> ::capnp::traits::FromPointerBuilder<'a> for Builder<'a> {
        fn init_pointer(
            builder: ::capnp::private::layout::PointerBuilder<'a>,
            _size: u32,
        ) -> Builder<'a> {
            ::capnp::traits::FromStructBuilder::new(builder.init_struct(_private::STRUCT_SIZE))
        }
        fn get_from_pointer(
            builder: ::capnp::private::layout::PointerBuilder<'a>,
            default: ::core::option::Option<&'a [capnp::Word]>,
        ) -> ::capnp::Result<Builder<'a>> {
            ::core::result::Result::Ok(::capnp::traits::FromStructBuilder::new(
                builder.get_struct(_private::STRUCT_SIZE, default)?,
            ))
        }
    }

    impl<'a> ::capnp::traits::SetPointerBuilder<Builder<'a>> for Reader<'a> {
        fn set_pointer_builder<'b>(
            pointer: ::capnp::private::layout::PointerBuilder<'b>,
            value: Reader<'a>,
            canonicalize: bool,
        ) -> ::capnp::Result<()> {
            pointer.set_struct(&value.reader, canonicalize)
        }
    }

    impl<'a> Builder<'a> {
        pub fn into_reader(self) -> Reader<'a> {
            ::capnp::traits::FromStructReader::new(self.builder.into_reader())
        }
        pub fn reborrow(&mut self) -> Builder {
            Builder { ..*self }
        }
        pub fn reborrow_as_reader(&self) -> Reader {
            ::capnp::traits::FromStructReader::new(self.builder.into_reader())
        }

        pub fn total_size(&self) -> ::capnp::Result<::capnp::MessageSize> {
            self.builder.into_reader().total_size()
        }
        #[inline]
        pub fn get_data(self) -> ::capnp::Result<::capnp::text::Builder<'a>> {
            ::capnp::traits::FromPointerBuilder::get_from_pointer(
                self.builder.get_pointer_field(0),
                ::core::option::Option::None,
            )
        }
        #[inline]
        pub fn set_data(&mut self, value: ::capnp::text::Reader) {
            self.builder.get_pointer_field(0).set_text(value);
        }
        #[inline]
        pub fn init_data(self, size: u32) -> ::capnp::text::Builder<'a> {
            self.builder.get_pointer_field(0).init_text(size)
        }
        pub fn has_data(&self) -> bool {
            !self.builder.get_pointer_field(0).is_null()
        }
    }

    pub struct Pipeline {
        _typeless: ::capnp::any_pointer::Pipeline,
    }
    impl ::capnp::capability::FromTypelessPipeline for Pipeline {
        fn new(typeless: ::capnp::any_pointer::Pipeline) -> Pipeline {
            Pipeline {
                _typeless: typeless,
            }
        }
    }
    impl Pipeline {}
    mod _private {
        use capnp::private::layout;
        pub const STRUCT_SIZE: layout::StructSize = layout::StructSize {
            data: 0,
            pointers: 1,
        };
        pub const TYPE_ID: u64 = 0xe4a1_33e3_2e61_0c12;
    }
}
