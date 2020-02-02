#!/usr/bin/env bash
set -e
CUR_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$CUR_DIR"

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
OUT_DIR="./proto"

#protoc \
#    -I"$CUR_DIR/../../common/protos/" \
#    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
#    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
#    --ts_out="${OUT_DIR}" \
#    $CUR_DIR/../../common/protos/exocore/index/*.proto \
#    $CUR_DIR/../../common/protos/exocore/test/*.proto

./node_modules/.bin/pbjs \
  -t static-module \
  -w commonjs \
  -o $CUR_DIR/js/proto.js \
  -p "$CUR_DIR/../../common/protos/" \
  --es6 \
  $CUR_DIR/../../common/protos/exocore/index/*.proto \
  $CUR_DIR/../../common/protos/exocore/test/*.proto

./node_modules/.bin/pbts $CUR_DIR/js/proto.js -o $CUR_DIR/js/proto.d.ts
