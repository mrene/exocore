/* tslint:disable */
/* eslint-disable */
/**
* @param {string | undefined} prefix
* @returns {string}
*/
export function generate_id(prefix?: string): string;
/**
*/
export class ExocoreClient {
  free(): void;
/**
* @param {Uint8Array} node_config_bytes
* @param {any} node_config_format
* @param {Function | undefined} status_change_callback
*/
  constructor(node_config_bytes: Uint8Array, node_config_format: any, status_change_callback?: Function);
/**
* @param {number} expiration_days
* @returns {string}
*/
  cell_generate_auth_token(expiration_days: number): string;
/**
* @param {Uint8Array} mutation_proto_bytes
* @returns {Promise<any>}
*/
  store_mutate(mutation_proto_bytes: Uint8Array): Promise<any>;
/**
* @param {Uint8Array} query_proto_bytes
* @returns {Promise<any>}
*/
  store_query(query_proto_bytes: Uint8Array): Promise<any>;
/**
* @param {Uint8Array} query_proto_bytes
* @returns {WatchedQuery}
*/
  store_watched_query(query_proto_bytes: Uint8Array): WatchedQuery;
/**
* @returns {Array<any>}
*/
  store_http_endpoints(): Array<any>;
}
/**
*/
export class WatchedQuery {
  free(): void;
/**
* @param {Function} promise
*/
  on_change(promise: Function): void;
/**
* @returns {Uint8Array}
*/
  get(): Uint8Array;
}