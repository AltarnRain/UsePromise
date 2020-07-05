export class CancelPromise<T> {

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
    constructor(asyncCallback: (resolve: (value: T) => void, reject?: (reason: any) => void) => void) {

        this.innerResolve = this.innerResolve.bind(this);
        this.innerReject = this.innerReject.bind(this);

        this.innerPromise = new Promise<T>((pResolve, pReject) => {
            this.actualResolve = pResolve;
            this.actualReject = pReject;
            asyncCallback(this.innerResolve, this.innerReject)
        });
    }

    private innerResolve(value: T): void {
        if (!this.cancelled) {
            this.actualResolve(value);
        }
    }

    private innerReject(reason: any): void {
        if (!this.cancelled) {
            this.actualReject(reason);
        }
    }

    public then(callback: (result: T) => void): void {
        this.innerPromise.then((result) => {
            if (!this.cancelled) {
                callback(result);
            }
        });
    }

    public catch(callback: (reason: any)=> void): void {
        this.innerPromise.catch((reason) => {
            if (!this.cancelled) {
                callback(reason);
            }
        })
    }

    public cancel(): void {
        this.cancelled = true;
    }
}
