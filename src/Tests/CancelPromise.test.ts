/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { CancellablePromise } from "../CancellablePromise";
import ExampleConstants from "../State/ExampleState/ExampleConstants";

/**
 * Module:          Example of a jest test
 * Responsibility:  Set this up so I don't have to figure it out over and over.
 */

describe("CancelPromise", () => {
    test("Resolve", () => {

        new CancellablePromise<string>((resolve) => {
            resolve("Test");
        }).then((result) => {
            expect(result).toBe("Test");
        });
    });

    test("Reject", () => {

        var p = new CancellablePromise((resolve, reject) => {
            reject("Rejected")
        });

        p.catch((reason) => expect(reason).toBe("Rejected"));
    });

    test("cancelled resolve", () => {
        var p = new CancellablePromise<string>((resolve) => {
            resolve("Should not resolve");
        });

        p.cancel();

        p.then((result) => {
            expect(result).toBe("Something else");
        });
    });

    test("cancelled reject", () => {
        var p = new CancellablePromise<string>((resolve, reject) => {
            reject("Should not resolve");
        });

        p.cancel();

        p.catch((result) => {
            expect(result).toBe("Something else");
        });
    });

    test("done is called if provided", () => {
        let a = "A";
        var p = new CancellablePromise<string>(undefined, () => a = "B");

        p.then(() => {
            expect(a).toBe("B");
        });
    })
});