import { websocket_transport } from './snippets/libp2p-wasm-ext-da6788e702fb01e7/src/websockets.js';
import * as wasm from './exocore_client_web_bg.wasm';

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_22(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h83184e594997f5f9(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_25(arg0, arg1) {
    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h57e1f6b225c58ff8(arg0, arg1);
}

/**
* @param {string | undefined} prefix
* @returns {string}
*/
export function generate_id(prefix) {
    try {
        const retptr = wasm.__wbindgen_export_5.value - 16;
        wasm.__wbindgen_export_5.value = retptr;
        var ptr0 = isLikeNone(prefix) ? 0 : passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.generate_id(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_export_5.value += 16;
        wasm.__wbindgen_free(r0, r1);
    }
}

function handleError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            wasm.__wbindgen_exn_store(addHeapObject(e));
        }
    };
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachegetUint32Memory0 = null;
function getUint32Memory0() {
    if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory0;
}

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4);
    const mem = getUint32Memory0();
    for (let i = 0; i < array.length; i++) {
        mem[ptr / 4 + i] = addHeapObject(array[i]);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}
function __wbg_adapter_129(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures__invoke2_mut__hbe5804e0fd5b3b27(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

/**
*/
export class ExocoreClient {

    static __wrap(ptr) {
        const obj = Object.create(ExocoreClient.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_exocoreclient_free(ptr);
    }
    /**
    * @param {Uint8Array} node_config_bytes
    * @param {any} node_config_format
    * @param {Function | undefined} status_change_callback
    */
    constructor(node_config_bytes, node_config_format, status_change_callback) {
        var ret = wasm.exocoreclient_new(addHeapObject(node_config_bytes), addHeapObject(node_config_format), isLikeNone(status_change_callback) ? 0 : addHeapObject(status_change_callback));
        return ExocoreClient.__wrap(ret);
    }
    /**
    * @param {Uint8Array} mutation_proto_bytes
    * @returns {Promise<any>}
    */
    mutate(mutation_proto_bytes) {
        var ret = wasm.exocoreclient_mutate(this.ptr, addHeapObject(mutation_proto_bytes));
        return takeObject(ret);
    }
    /**
    * @param {Uint8Array} query_proto_bytes
    * @returns {Promise<any>}
    */
    query(query_proto_bytes) {
        var ret = wasm.exocoreclient_query(this.ptr, addHeapObject(query_proto_bytes));
        return takeObject(ret);
    }
    /**
    * @param {Uint8Array} query_proto_bytes
    * @returns {WatchedQuery}
    */
    watched_query(query_proto_bytes) {
        var ret = wasm.exocoreclient_watched_query(this.ptr, addHeapObject(query_proto_bytes));
        return WatchedQuery.__wrap(ret);
    }
}
/**
*/
export class WatchedQuery {

    static __wrap(ptr) {
        const obj = Object.create(WatchedQuery.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_watchedquery_free(ptr);
    }
    /**
    * @param {Function} promise
    */
    on_change(promise) {
        wasm.watchedquery_on_change(this.ptr, addHeapObject(promise));
    }
    /**
    * @returns {Uint8Array}
    */
    get() {
        var ret = wasm.watchedquery_get(this.ptr);
        return takeObject(ret);
    }
}

export const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

export const __wbindgen_cb_drop = function(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    var ret = false;
    return ret;
};

export const __wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

export const __wbg_new_59cb74e423758ede = function() {
    var ret = new Error();
    return addHeapObject(ret);
};

export const __wbg_stack_558ba5917b466edd = function(arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(arg0, arg1);
    }
};

export const __wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

export const __wbg_listenon_5228f02a937038a3 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).listen_on(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

export const __wbg_dial_0f006a22a5c1313a = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).dial(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

export const __wbg_read_aeedfe830eb97cfe = function(arg0) {
    var ret = getObject(arg0).read;
    return addHeapObject(ret);
};

export const __wbg_newaddrs_b2060f8d34a1ec64 = function(arg0, arg1) {
    var ret = getObject(arg1).new_addrs;
    var ptr0 = isLikeNone(ret) ? 0 : passArrayJsValueToWasm0(ret, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_newconnections_20c5220fdb816ee2 = function(arg0, arg1) {
    var ret = getObject(arg1).new_connections;
    var ptr0 = isLikeNone(ret) ? 0 : passArrayJsValueToWasm0(ret, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_localaddr_ff37873c56e9222a = function(arg0, arg1) {
    var ret = getObject(arg1).local_addr;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_observedaddr_a1dd7a59504e4962 = function(arg0, arg1) {
    var ret = getObject(arg1).observed_addr;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_connection_3717b63265632edf = function(arg0) {
    var ret = getObject(arg0).connection;
    return addHeapObject(ret);
};

export const __wbg_expiredaddrs_57aedfb7ca4b4c05 = function(arg0, arg1) {
    var ret = getObject(arg1).expired_addrs;
    var ptr0 = isLikeNone(ret) ? 0 : passArrayJsValueToWasm0(ret, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbindgen_is_null = function(arg0) {
    var ret = getObject(arg0) === null;
    return ret;
};

export const __wbg_write_6604bfd5700792ed = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).write(getArrayU8FromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

export const __wbg_shutdown_a8eae5baef9c2e49 = handleError(function(arg0) {
    getObject(arg0).shutdown();
});

export const __wbg_close_544b3c6144f1f6b4 = function(arg0) {
    getObject(arg0).close();
};

export const __wbg_websockettransport_59a526f8db1988f8 = function() {
    var ret = websocket_transport();
    return addHeapObject(ret);
};

export const __wbg_instanceof_Window_e8f84259147dce74 = function(arg0) {
    var ret = getObject(arg0) instanceof Window;
    return ret;
};

export const __wbg_performance_2f0ebe3582d821fa = function(arg0) {
    var ret = getObject(arg0).performance;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_crypto_571359f22faacd5e = handleError(function(arg0) {
    var ret = getObject(arg0).crypto;
    return addHeapObject(ret);
});

export const __wbg_setTimeout_d0eb4368d101bd72 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
    return ret;
});

export const __wbg_debug_cd8a0aad17c8c92f = function(arg0, arg1, arg2, arg3) {
    console.debug(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
};

export const __wbg_error_7dcc755846c00ef7 = function(arg0) {
    console.error(getObject(arg0));
};

export const __wbg_error_b47ee9a774776bfa = function(arg0, arg1, arg2, arg3) {
    console.error(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
};

export const __wbg_info_0c64856d96c69122 = function(arg0, arg1, arg2, arg3) {
    console.info(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
};

export const __wbg_log_7fc0936bf7223435 = function(arg0, arg1, arg2, arg3) {
    console.log(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
};

export const __wbg_warn_f88df7e1e2a26187 = function(arg0, arg1, arg2, arg3) {
    console.warn(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
};

export const __wbg_deriveBits_221e52ad98a7e8ff = handleError(function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).deriveBits(getObject(arg1), getObject(arg2), arg3 >>> 0);
    return addHeapObject(ret);
});

export const __wbg_exportKey_b9847220d4a8274c = handleError(function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).exportKey(getStringFromWasm0(arg1, arg2), getObject(arg3));
    return addHeapObject(ret);
});

export const __wbg_generateKey_80322d3774bae4e0 = handleError(function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).generateKey(getObject(arg1), arg2 !== 0, getObject(arg3));
    return addHeapObject(ret);
});

export const __wbg_importKey_3be718584c9088dc = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    var ret = getObject(arg0).importKey(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4), arg5 !== 0, getObject(arg6));
    return addHeapObject(ret);
});

export const __wbg_now_acfa6ea53a7be2c2 = function(arg0) {
    var ret = getObject(arg0).now();
    return ret;
};

export const __wbg_subtle_20a40c8aeb34a8c8 = function(arg0) {
    var ret = getObject(arg0).subtle;
    return addHeapObject(ret);
};

export const __wbg_next_610093e8f95067a4 = handleError(function(arg0) {
    var ret = getObject(arg0).next();
    return addHeapObject(ret);
});

export const __wbg_done_deb5f896b3ea14eb = function(arg0) {
    var ret = getObject(arg0).done;
    return ret;
};

export const __wbg_value_5b6409ce10298b82 = function(arg0) {
    var ret = getObject(arg0).value;
    return addHeapObject(ret);
};

export const __wbg_get_2e96a823c1c5a5bd = handleError(function(arg0, arg1) {
    var ret = Reflect.get(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
});

export const __wbg_call_e9f0ce4da840ab94 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
});

export const __wbg_new_17534eac4df3cd22 = function() {
    var ret = new Array();
    return addHeapObject(ret);
};

export const __wbg_push_7114ccbf1c58e41f = function(arg0, arg1) {
    var ret = getObject(arg0).push(getObject(arg1));
    return ret;
};

export const __wbg_instanceof_Error_e6c50eb74e5b1d2e = function(arg0) {
    var ret = getObject(arg0) instanceof Error;
    return ret;
};

export const __wbg_new_4896ab6bba55e0d9 = function(arg0, arg1) {
    var ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

export const __wbg_message_77738ab37fb0c262 = function(arg0) {
    var ret = getObject(arg0).message;
    return addHeapObject(ret);
};

export const __wbg_name_4bf792b1c494191a = function(arg0) {
    var ret = getObject(arg0).name;
    return addHeapObject(ret);
};

export const __wbg_newnoargs_e2fdfe2af14a2323 = function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

export const __wbg_call_0dad7db75ec90ae7 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
});

export const __wbg_now_ad54c8b6865a8103 = function() {
    var ret = Date.now();
    return ret;
};

export const __wbg_instanceof_Object_edeae2897d76d350 = function(arg0) {
    var ret = getObject(arg0) instanceof Object;
    return ret;
};

export const __wbg_new_8172f4fed77fdb7c = function() {
    var ret = new Object();
    return addHeapObject(ret);
};

export const __wbg_toString_5569fb966c567353 = function(arg0) {
    var ret = getObject(arg0).toString();
    return addHeapObject(ret);
};

export const __wbg_new_7039bf8b99f049e1 = function(arg0, arg1) {
    try {
        var state0 = {a: arg0, b: arg1};
        var cb0 = (arg0, arg1) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return __wbg_adapter_129(a, state0.b, arg0, arg1);
            } finally {
                state0.a = a;
            }
        };
        var ret = new Promise(cb0);
        return addHeapObject(ret);
    } finally {
        state0.a = state0.b = 0;
    }
};

export const __wbg_resolve_4df26938859b92e3 = function(arg0) {
    var ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
};

export const __wbg_then_ffb6e71f7a6735ad = function(arg0, arg1) {
    var ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
};

export const __wbg_then_021fcdc7f0350b58 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
};

export const __wbg_self_179e8c2a5a4c73a3 = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

export const __wbg_window_492cfe63a6e41dfa = handleError(function() {
    var ret = window.window;
    return addHeapObject(ret);
});

export const __wbg_globalThis_8ebfea75c2dd63ee = handleError(function() {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
});

export const __wbg_global_62ea2619f58bf94d = handleError(function() {
    var ret = global.global;
    return addHeapObject(ret);
});

export const __wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

export const __wbg_buffer_88f603259d7a7b82 = function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

export const __wbg_newwithbyteoffsetandlength_a048d126789a272b = function(arg0, arg1, arg2) {
    var ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

export const __wbg_length_2e98733d73dac355 = function(arg0) {
    var ret = getObject(arg0).length;
    return ret;
};

export const __wbg_new_85d8a1fc4384acef = function(arg0) {
    var ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

export const __wbg_set_478951586c457484 = function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

export const __wbg_buffer_e83d375a8e411d5d = function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

export const __wbg_set_afe54b1eeb1aa77c = handleError(function(arg0, arg1, arg2) {
    var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    return ret;
});

export const __wbg_getRandomValues_f5e14ab7ac8e995d = function(arg0, arg1, arg2) {
    getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));
};

export const __wbg_randomFillSync_d5bd2d655fdf256a = function(arg0, arg1, arg2) {
    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
};

export const __wbg_self_1b7a39e3a92c949c = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

export const __wbg_require_604837428532a733 = function(arg0, arg1) {
    var ret = require(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

export const __wbg_crypto_968f1772287e2df0 = function(arg0) {
    var ret = getObject(arg0).crypto;
    return addHeapObject(ret);
};

export const __wbg_getRandomValues_a3d34b4fee3c2869 = function(arg0) {
    var ret = getObject(arg0).getRandomValues;
    return addHeapObject(ret);
};

export const __wbindgen_string_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

export const __wbindgen_memory = function() {
    var ret = wasm.memory;
    return addHeapObject(ret);
};

export const __wbindgen_closure_wrapper2415 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 699, __wbg_adapter_25);
    return addHeapObject(ret);
};

export const __wbindgen_closure_wrapper2517 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 735, __wbg_adapter_22);
    return addHeapObject(ret);
};

