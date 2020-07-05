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
 * Module:          CancellablePromise<T>
 * Responsibility:  A wrapper class around a Promise whose resolve and reject methods are never
 *                  called when the CancellablePromise is cancelled.
 */

export class CancellablePromise<T> {

    /**
     * Reference to an actual promise.
     */
    private innerPromise: Promise<T>;

    /**
     * When true, this async operation has been canceled.
     */
    private cancelled: boolean = false;

    /**
     * Reference to the inner Promise's resolve method.
     */

    private actualResolve: (value?: T | PromiseLike<T>) => void

    /**
     * Reference to the inner Proimise's reject method.
     */

    private actualReject: (reason: any) => void;


    /**
     * Construct the cancel promise object.
     * @param asyncCallback.
     */
    constructor(
        asyncCallback: (resolve: (value: T) => void, reject?: (reason: any) => void) => void,
        private done?: (self: CancellablePromise<T>) => void) {

        this.innerResolve = this.innerResolve.bind(this);
        this.innerReject = this.innerReject.bind(this);

        this.innerPromise = new Promise<T>((pResolve, pReject) => {
            this.actualResolve = pResolve;
            this.actualReject = pReject;

            if (asyncCallback) {
                asyncCallback(this.innerResolve, this.innerReject)
            }
        });
    }

    /**
     * Injected Resolve function.
     * @param {T} value. Value of type T. 
     */
    private innerResolve(value: T): void {
        // Do not call the actual resolve when this CancelPromise is cancelled.
        if (!this.cancelled) {
            this.actualResolve(value);
        }
    }

    private innerReject(reason: any): void {
        // Do not call the actual resolve when this CancelPromise is cancelled.
        if (!this.cancelled) {
            this.actualReject(reason);
        }
    }

    /**
     * Wrapper method for a Promise.then.
     * @param {(result: T) => void} callback. Callback that accepts the result of an async operation.
     */
    public then(callback: (result: T) => void): CancellablePromise<T> {
        // Call the innerPromise's then method to obtain the async result
        // If this CancelPromise is not cancelled the provided callback is called
        // to return the result
        this.innerPromise.then((result) => {

            // This promise is done.
            if (this.done) {
                this.done(this);
            }

            if (!this.cancelled) {
                callback(result);
            }
        });

        return this;
    }

    /**
     * Wrapper method for a Promise.catch.
     * @param {reason: any} callback. Callback that accepts the result of a reject.
     */
    public catch(callback: (reason: any) => void): CancellablePromise<T> {
        // Call the innerPromise's catch method to obtain the catch reason.
        // If this CancelPromise is not cancelled the provided callback is called
        // to return the result
        this.innerPromise.catch((reason) => {
            // This promise is done.
            if (this.done) {
                this.done(this);
            }

            if (!this.cancelled) {
                callback(reason);
            }
        });

        return this;
    }

    /**
     * Canceles this CancelPromise. When set to true, the 'resolve' methods are not called.
     */
    public cancel(): void {
        this.cancelled = true;
    }
}
