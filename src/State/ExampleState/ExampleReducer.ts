/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { ExampleState } from "../ExampleState";
import { ExampleTypes } from "./ExampleTypes";
import { ExampleConstants } from "./ExampleConstants";
import produce from "immer";

/**
 * Module:          ExampleReducer
 * Responsibility:  Help me remember how to setup a reducer with a compount type.
 */

export function exampleReducer(state: ExampleState, action: ExampleTypes): ExampleState {
    return produce(state, (draft) => {
        switch(action.type) {
            case ExampleConstants.Example:
                draft.example = action.myExample;
            break;
        }
    })
}