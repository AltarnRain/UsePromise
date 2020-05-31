/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { ExampleState } from "./ExampleState";

/**
 * Module:          ApplicationState
 * Responsibility:  Define the redux application state
 */

export interface ApplicationState {
    example: ExampleState;
}