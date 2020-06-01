/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { ExampleActions } from "./ExampleConstants";

/**
 * Module:          ExampleTypes
 * Responsibility:  Help me remember how to setup types for redux actions.
 */

export interface SetValue {
    type: typeof ExampleActions.example,
    value: string;
}

export type ExampleTypes = SetValue;