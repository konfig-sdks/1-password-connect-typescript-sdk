/*
1Password Connect

REST API interface for 1Password Connect.

The version of the OpenAPI document: 1.5.7
Contact: support@1password.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface PatchInner
 */
export interface PatchInner {
    /**
     * 
     * @type {string}
     * @memberof PatchInner
     */
    'op': PatchInnerOpEnum;
    /**
     * An RFC6901 JSON Pointer pointing to the Item document, an Item Attribute, and Item Field by Field ID, or an Item Field Attribute
     * @type {string}
     * @memberof PatchInner
     */
    'path': string;
    /**
     * 
     * @type {object}
     * @memberof PatchInner
     */
    'value'?: object;
}

type PatchInnerOpEnum = 'add' | 'remove' | 'replace'


