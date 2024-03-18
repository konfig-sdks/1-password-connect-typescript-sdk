/* tslint:disable */
/* eslint-disable */
/*
1Password Connect

REST API interface for 1Password Connect.

The version of the OpenAPI document: 1.5.7
Contact: support@1password.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { APIRequest } from '../models';
// @ts-ignore
import { ErrorResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ActivityApi - axios parameter creator
 * @export
 */
export const ActivityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Retrieve a list of API Requests that have been made.
         * @param {number} [limit] How many API Events should be retrieved in a single request.
         * @param {number} [offset] How far into the collection of API Events should the response start
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiRequests: async (limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/activity`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ConnectToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/activity',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ActivityApi - functional programming interface
 * @export
 */
export const ActivityApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ActivityApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Retrieve a list of API Requests that have been made.
         * @param {ActivityApiGetApiRequestsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiRequests(requestParameters: ActivityApiGetApiRequestsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<APIRequest>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApiRequests(requestParameters.limit, requestParameters.offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ActivityApi - factory interface
 * @export
 */
export const ActivityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ActivityApiFp(configuration)
    return {
        /**
         * 
         * @summary Retrieve a list of API Requests that have been made.
         * @param {ActivityApiGetApiRequestsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiRequests(requestParameters: ActivityApiGetApiRequestsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<APIRequest>> {
            return localVarFp.getApiRequests(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getApiRequests operation in ActivityApi.
 * @export
 * @interface ActivityApiGetApiRequestsRequest
 */
export type ActivityApiGetApiRequestsRequest = {
    
    /**
    * How many API Events should be retrieved in a single request.
    * @type {number}
    * @memberof ActivityApiGetApiRequests
    */
    readonly limit?: number
    
    /**
    * How far into the collection of API Events should the response start
    * @type {number}
    * @memberof ActivityApiGetApiRequests
    */
    readonly offset?: number
    
}

/**
 * ActivityApiGenerated - object-oriented interface
 * @export
 * @class ActivityApiGenerated
 * @extends {BaseAPI}
 */
export class ActivityApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Retrieve a list of API Requests that have been made.
     * @param {ActivityApiGetApiRequestsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivityApiGenerated
     */
    public getApiRequests(requestParameters: ActivityApiGetApiRequestsRequest = {}, options?: AxiosRequestConfig) {
        return ActivityApiFp(this.configuration).getApiRequests(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
