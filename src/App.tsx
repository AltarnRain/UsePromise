/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import React, { useEffect, useState } from "react";
import { appStore, appState, dispatch } from "./State/Store";
import { setValue } from "./State/ExampleState/ExampleActions";

/**
 * Module:          Hello world!
 * Responsibility:  Sets up a basic app functional component.
 */

export default function App(): JSX.Element {

    const [message, setMessage] = useState("unset");

    useEffect(() => {
        return appStore().subscribe(() => {
            const newMessage = appState().example.value;
            setMessage(newMessage);
        })
    }, []);

    function click(): void {
        dispatch(setValue("Clicked me!"));
    }

    return (
        <div>
            <div>Hello world</div>
            <button onClick={click}>Click me!</button>
            <div>{message}</div>
        </div>
    );
}