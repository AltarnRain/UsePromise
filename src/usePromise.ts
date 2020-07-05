/**
 * @preserve Copyright 2010-2020 iVention b.v.
 * This source code is subject to terms and conditions of the iVention b.V.
 * Public License. a copy of the license can be found in the License.html
 * file at the root of this distribution. If you cannot locate the
 * License, please send an email to support@ivention.nl
 * By using this source code in any fashion, you are agreeing to be bound
 * by the terms of the iVention software License. You must not remove this
 * notice, or any other, from this software.
 */

/**
 * Module:          UsePromise
 * Responsibility:  Provides a hook and a constuctor method to perform async operations while avoiding state
 *                  Updates when the component unmounts.
 */

import { useEffect, useState } from "react";
import { CancellablePromise } from "./CancellablePromise";

// Type definition for the cancellable promise constructor function.
type asyncCallBack = <T>(asyncCallBack: (resolve: (value: T) => void, reject?: (reason: any) => void) => void) => CancellablePromise<T>;

export function usePromise(): asyncCallBack {

    // State of the promises. Used to keep track of current CancelPromises still active and which need
    // to be cancelled when the component unmounts.
    const [promises, setPromises] = useState<CancellablePromise<any>[]>([]);

    // Use Effect hook that cancels all pending CancelPromises.
    useEffect(() => {
        // Cancel all pending async operations when the component unmounts.
        return () => promises.forEach((p) => p.cancel());
    });

    // Constructor function for a cancellable promise
    // Creates a CancelPromise object, adds it to the hook's state and provides
    // the CancelPromise object with a method to remote itself from the state
    // if its catch or then method is called.
    return asyncCallBack => {

        // Create a new CancelPromise object. Pass the async function into it, and a function
        // to remove it from the state.
        const p = new CancellablePromise(asyncCallBack, (self) => setPromises(promises.filter((p) => p !== self)));

        // Update state with the new CancelPromise.
        setPromises([...promises, p]);

        // Return the new CancelPromise object.
        return p;
    };
}
