/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { Action, combineReducers, createStore, Store, AnyAction } from "redux";
import { ApplicationState } from "./ApplicationState";
import exampleReducer from "./ExampleState/ExampleReducer";

/**
 * Module:          Store
 * Responsibility:  Handles the redux store
 */

const allReducers = combineReducers({
    example: exampleReducer
});

let store: Store<ApplicationState>;

/**
 * Creates the store.
 * @returns {Store<ApplicationState>}. The redux store.
 */
export function createReduxStore(): void {
    // Uncomment he linees below to return a store you can monotir with the Redux Chrome extention.
    // return createStore(
    //     allReducers,
    //     (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

    store = createStore(allReducers);
}

/**
 * Returns the ApplicationState
 * @returns {ApplicationState}. The application state.
 */
export function appState(): ApplicationState {
    return store.getState();
}

/**
 * Returns the app store.
 */
export function appStore(): Store<ApplicationState, AnyAction> {
    return store;
}

/**
 * Shorthand for store.Dispatch.
 * @param {Action} action. An action.
 */
export function dispatch(action: Action): void {
    store.dispatch(action);
}