import { websocket_transport } from './snippets/libp2p-wasm-ext-1eae7dcc481b5895/src/websockets.js';
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
function __wbg_adapter_22(arg0, arg1) {
    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he79bccf7f5fef061(arg0, arg1);
}

function __wbg_adapter_25(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h762529976d896217(arg0, arg1, addHeapObject(arg2));
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
    wasm.wasm_bindgen__convert__closures__invoke2_mut__haaa5a6e80832ae81(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
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

export const __wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
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

export const __wbg_listenon_40865a0ddcdd6b93 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).listen_on(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

export const __wbg_dial_0e901b0195a59cd4 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).dial(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

export const __wbg_read_5ed2cdd97cee00a2 = function(arg0) {
    var ret = getObject(arg0).read;
    return addHeapObject(ret);
};

export const __wbg_newaddrs_59e20b693011a529 = function(arg0, arg1) {
    var ret = getObject(arg1).new_addrs;
    var ptr0 = isLikeNone(ret) ? 0 : passArrayJsValueToWasm0(ret, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_newconnections_472fef1e57940f4a = function(arg0, arg1) {
    var ret = getObject(arg1).new_connections;
    var ptr0 = isLikeNone(ret) ? 0 : passArrayJsValueToWasm0(ret, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_localaddr_c4fb898f6ac3c7bd = function(arg0, arg1) {
    var ret = getObject(arg1).local_addr;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_observedaddr_31c714a57b865930 = function(arg0, arg1) {
    var ret = getObject(arg1).observed_addr;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_connection_66c1d8285b3a47f6 = function(arg0) {
    var ret = getObject(arg0).connection;
    return addHeapObject(ret);
};

export const __wbg_expiredaddrs_b271ca74fad716da = function(arg0, arg1) {
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

export const __wbg_write_33e87653271c876d = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).write(getArrayU8FromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

export const __wbg_shutdown_212f47c7abf10910 = handleError(function(arg0) {
    getObject(arg0).shutdown();
});

export const __wbg_close_ac50b620502b1353 = function(arg0) {
    getObject(arg0).close();
};

export const __wbg_websockettransport_ea1e3cce54575cbe = function() {
    var ret = websocket_transport();
    return addHeapObject(ret);
};

export const __wbg_instanceof_Window_adf3196bdc02b386 = function(arg0) {
    var ret = getObject(arg0) instanceof Window;
    return ret;
};

export const __wbg_performance_8594a974edffb1dc = function(arg0) {
    var ret = getObject(arg0).performance;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_crypto_2b7e0a54ef6824f4 = handleError(function(arg0) {
    var ret = getObject(arg0).crypto;
    return addHeapObject(ret);
});

export const __wbg_setTimeout_eaf00c9296a6ab88 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
    return ret;
});

export const __wbg_debug_d101e002eb92f20b = function(arg0, arg1, arg2, arg3) {
    console.debug(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
};

export const __wbg_error_7f083efc6bc6752c = function(arg0) {
    console.error(getObject(arg0));
};

export const __wbg_error_cb872335132b1ef7 = function(arg0, arg1, arg2, arg3) {
    console.error(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
};

export const __wbg_info_a25afde0ff8cd04a = function(arg0, arg1, arg2, arg3) {
    console.info(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
};

export const __wbg_log_64f566ae90a6c43c = function(arg0, arg1, arg2, arg3) {
    console.log(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
};

export const __wbg_warn_f632d7d3f55682b6 = function(arg0, arg1, arg2, arg3) {
    console.warn(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
};

export const __wbg_deriveBits_1bdb4635bdb49195 = handleError(function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).deriveBits(getObject(arg1), getObject(arg2), arg3 >>> 0);
    return addHeapObject(ret);
});

export const __wbg_exportKey_99a26fdda1476d00 = handleError(function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).exportKey(getStringFromWasm0(arg1, arg2), getObject(arg3));
    return addHeapObject(ret);
});

export const __wbg_generateKey_69584b334b99e35d = handleError(function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).generateKey(getObject(arg1), arg2 !== 0, getObject(arg3));
    return addHeapObject(ret);
});

export const __wbg_importKey_dcf3869c894bba72 = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    var ret = getObject(arg0).importKey(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4), arg5 !== 0, getObject(arg6));
    return addHeapObject(ret);
});

export const __wbg_now_49847177a6d1d57e = function(arg0) {
    var ret = getObject(arg0).now();
    return ret;
};

export const __wbg_subtle_1bb2d942dabbebc5 = function(arg0) {
    var ret = getObject(arg0).subtle;
    return addHeapObject(ret);
};

export const __wbg_next_2966fa909601a075 = handleError(function(arg0) {
    var ret = getObject(arg0).next();
    return addHeapObject(ret);
});

export const __wbg_done_037d0a173aef1834 = function(arg0) {
    var ret = getObject(arg0).done;
    return ret;
};

export const __wbg_value_e60bbfb7d52af62f = function(arg0) {
    var ret = getObject(arg0).value;
    return addHeapObject(ret);
};

export const __wbg_get_0e3f2950cdf758ae = handleError(function(arg0, arg1) {
    var ret = Reflect.get(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
});

export const __wbg_call_8e95613cc6524977 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
});

export const __wbg_new_e13110f81ae347cf = function() {
    var ret = new Array();
    return addHeapObject(ret);
};

export const __wbg_push_b46eeec52d2b03bb = function(arg0, arg1) {
    var ret = getObject(arg0).push(getObject(arg1));
    return ret;
};

export const __wbg_instanceof_Error_0b25dc8788d02c64 = function(arg0) {
    var ret = getObject(arg0) instanceof Error;
    return ret;
};

export const __wbg_new_1192d65414040ad9 = function(arg0, arg1) {
    var ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

export const __wbg_message_648d5860715944a3 = function(arg0) {
    var ret = getObject(arg0).message;
    return addHeapObject(ret);
};

export const __wbg_name_a08ace2acd4dd302 = function(arg0) {
    var ret = getObject(arg0).name;
    return addHeapObject(ret);
};

export const __wbg_newnoargs_f3b8a801d5d4b079 = function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

export const __wbg_call_d713ea0274dfc6d2 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
});

export const __wbg_now_4de5b53a19e45567 = function() {
    var ret = Date.now();
    return ret;
};

export const __wbg_instanceof_Object_75681edeb8be7268 = function(arg0) {
    var ret = getObject(arg0) instanceof Object;
    return ret;
};

export const __wbg_new_3e06d4f36713e4cb = function() {
    var ret = new Object();
    return addHeapObject(ret);
};

export const __wbg_toString_380767dc94884950 = function(arg0) {
    var ret = getObject(arg0).toString();
    return addHeapObject(ret);
};

export const __wbg_new_d0c63652ab4d825c = function(arg0, arg1) {
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

export const __wbg_resolve_2529512c3bb73938 = function(arg0) {
    var ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
};

export const __wbg_then_4a7a614abbbe6d81 = function(arg0, arg1) {
    var ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
};

export const __wbg_then_3b7ac098cfda2fa5 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
};

export const __wbg_self_07b2f89e82ceb76d = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

export const __wbg_window_ba85d88572adc0dc = handleError(function() {
    var ret = window.window;
    return addHeapObject(ret);
});

export const __wbg_globalThis_b9277fc37e201fe5 = handleError(function() {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
});

export const __wbg_global_e16303fe83e1d57f = handleError(function() {
    var ret = global.global;
    return addHeapObject(ret);
});

export const __wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

export const __wbg_buffer_49131c283a06686f = function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

export const __wbg_newwithbyteoffsetandlength_c0f38401daad5a22 = function(arg0, arg1, arg2) {
    var ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

export const __wbg_length_2b13641a9d906653 = function(arg0) {
    var ret = getObject(arg0).length;
    return ret;
};

export const __wbg_new_9b295d24cf1d706f = function(arg0) {
    var ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

export const __wbg_set_3bb960a9975f3cd2 = function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

export const __wbg_buffer_3d4c28111c30d143 = function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

export const __wbg_set_304f2ec1a3ab3b79 = handleError(function(arg0, arg1, arg2) {
    var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    return ret;
});

export const __wbg_getRandomValues_3ac1b33c90b52596 = function(arg0, arg1, arg2) {
    getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));
};

export const __wbg_randomFillSync_6f956029658662ec = function(arg0, arg1, arg2) {
    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
};

export const __wbg_self_1c83eb4471d9eb9b = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

export const __wbg_static_accessor_MODULE_abf5ae284bffdf45 = function() {
    var ret = module;
    return addHeapObject(ret);
};

export const __wbg_require_5b2b5b594d809d9f = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
};

export const __wbg_crypto_c12f14e810edcaa2 = function(arg0) {
    var ret = getObject(arg0).crypto;
    return addHeapObject(ret);
};

export const __wbg_msCrypto_679be765111ba775 = function(arg0) {
    var ret = getObject(arg0).msCrypto;
    return addHeapObject(ret);
};

export const __wbg_getRandomValues_05a60bf171bfc2be = function(arg0) {
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

export const __wbindgen_closure_wrapper2452 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 697, __wbg_adapter_22);
    return addHeapObject(ret);
};

export const __wbindgen_closure_wrapper2553 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 733, __wbg_adapter_25);
    return addHeapObject(ret);
};

