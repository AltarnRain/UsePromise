/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { ExampleState } from "../ExampleState";
import { ExampleTypes } from "./ExampleTypes";
import produce from "immer";
import ExampleConstants from "./ExampleConstants";

/**
 * Module:          ExampleReducer
 * Responsibility:  Help me remember how to setup a reducer with a compount type.
 */

export default function exampleReducer(state: ExampleState = initState(), action: ExampleTypes): ExampleState {
    return produce(state, (draft) => {
        switch(action.type) {
            case ExampleConstants.example:
                draft.value = action.value;
            break;
        }
    });
}

function initState(): ExampleState {
    return {
        value: "Default value",
    }
}