/* tslint:disable */
/* eslint-disable */
/**
 * FP Order service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TeaType
 */
export interface TeaType {
    /**
     * 
     * @type {string}
     * @memberof TeaType
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof TeaType
     */
    name?: string;
}

export function TeaTypeFromJSON(json: any): TeaType {
    return TeaTypeFromJSONTyped(json, false);
}

export function TeaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function TeaTypeToJSON(value?: TeaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}


