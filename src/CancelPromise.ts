export class CancelPromise<T> {

    private innerPromise: Promise<T>;

    private cancelled: boolean = false;

    /**
     *
     */
    constructor(asyncCallback: () => T) {
        this.innerPromise = new Promise<T>((resolve) =>  resolve(asyncCallback()));
    }

    public then(callback: (result: T) => void): void {
        this.innerPromise.then((result) => {
            if (!this.cancelled) {
                callback(result);
            }
        });
    }

    public cancel(): void {
        this.cancelled = true;
    }
}
