/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import App from "./App";
import ReactDOM from "react-dom";
import React from "react";
import { createReduxStore } from "./State/Store";

/**
 * Module:          index
 * Responsibility:  Application entry point.
 */


// Ensure the store is initialized before the application starts.
createReduxStore();

ReactDOM.render(<App />, document.getElementById("root"));