/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { SetExampleType } from "./ExampleTypes";
import { ExampleConstants } from "./ExampleConstants";

/**
 * Module:          ExampleAction
 * Responsibility:  Help me remember how to setup types action dispensers.
 */

export function setExample(example: string): SetExampleType {
    return {
        type: ExampleConstants.Example,
        myExample: example,
    };
}