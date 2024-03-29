/*
1Password Connect

REST API interface for 1Password Connect.

The version of the OpenAPI document: 1.5.7
Contact: support@1password.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The recipe is used in conjunction with the \"generate\" property to set the character set used to generate a new secure value
 * @export
 * @interface GeneratorRecipe
 */
export interface GeneratorRecipe {
    /**
     * Length of the generated value
     * @type {number}
     * @memberof GeneratorRecipe
     */
    'length'?: number;
    /**
     * 
     * @type {Set<string>}
     * @memberof GeneratorRecipe
     */
    'characterSets'?: Set<GeneratorRecipeCharacterSetsEnum>;
    /**
     * List of all characters that should be excluded from generated passwords.
     * @type {string}
     * @memberof GeneratorRecipe
     */
    'excludeCharacters'?: string;
}

type GeneratorRecipeCharacterSetsEnum = 'LETTERS' | 'DIGITS' | 'SYMBOLS'


