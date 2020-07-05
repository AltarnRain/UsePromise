/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import React, { useState } from "react";
import { AsyncApp } from "./AsyncApp";
// import { AsyncApp } from "./AsyncApp";

/**
 * Module:          Hello world!
 * Responsibility:  Sets up a basic app functional component.
 */

export default function App(): JSX.Element {

    const [show, setShow] = useState(false);

    function click(): void {
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 10);
    }

    return (
        <div>
            <button onClick={click}>Cause error!</button>
            {
                show && <AsyncApp />
            }
        </div>
    );
}