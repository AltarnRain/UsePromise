/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import React, { useState } from "react";
import { AsyncApp } from "./AsyncApp";


export default function App(): JSX.Element {

    const [show, setShow] = useState(false);

    function click(): void {
        // Show the async app. This will trigger an async update.
        setShow(true);
        setTimeout(() => {
            // Hide the async app after 10 ms. This will unmount the
            // component and any state updates after unmount will trigger an error.
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