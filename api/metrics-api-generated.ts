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
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * MetricsApi - axios parameter creator
 * @export
 */
export const MetricsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * See Prometheus documentation for a complete data model.
         * @summary Query server for exposed Prometheus metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryServerMetrics: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/metrics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/metrics',
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
 * MetricsApi - functional programming interface
 * @export
 */
export const MetricsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MetricsApiAxiosParamCreator(configuration)
    return {
        /**
         * See Prometheus documentation for a complete data model.
         * @summary Query server for exposed Prometheus metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryServerMetrics(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryServerMetrics(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MetricsApi - factory interface
 * @export
 */
export const MetricsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MetricsApiFp(configuration)
    return {
        /**
         * See Prometheus documentation for a complete data model.
         * @summary Query server for exposed Prometheus metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryServerMetrics(options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.queryServerMetrics(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MetricsApiGenerated - object-oriented interface
 * @export
 * @class MetricsApiGenerated
 * @extends {BaseAPI}
 */
export class MetricsApiGenerated extends BaseAPI {
    /**
     * See Prometheus documentation for a complete data model.
     * @summary Query server for exposed Prometheus metrics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetricsApiGenerated
     */
    public queryServerMetrics(options?: AxiosRequestConfig) {
        return MetricsApiFp(this.configuration).queryServerMetrics(options).then((request) => request(this.axios, this.basePath));
    }
}