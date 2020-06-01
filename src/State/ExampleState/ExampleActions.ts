/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { SetValue } from "./ExampleTypes";
import ExampleConstants from "./ExampleConstants";


/**
 * Module:          ExampleAction
 * Responsibility:  Help me remember how to setup types action dispensers.
 */

export function setValue(value: string): SetValue {
    return {
        type: ExampleConstants.example,
        value,
    };
}