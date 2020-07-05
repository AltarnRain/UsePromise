/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { CancelPromise } from "../CancelPromise";

/**
 * Module:          Example of a jest test
 * Responsibility:  Set this up so I don't have to figure it out over and over.
 */

describe("CancelPromise", () => {
    test("Resolve", () => {
        
        new CancelPromise<string>((resolve) => {
            resolve("Test");
        }).then((result) => {
            expect(result).toBe("Test");
        });
    });

    test("Reject", () => {
        
        var p = new CancelPromise((resolve, reject) => {
            reject("Rejected")
        });

        p.catch((reason) => expect(reason).toBe("Rejected"));
    });

    test("cancelled resolve", () => {
        var p = new CancelPromise<string>((resolve) => {
            resolve("Should not resolve");
        });

        p.cancel();

        p.then((result) => {
            expect(result).toBe("Something else");
        });
    });

    test("cancelled reject", () => {
        var p = new CancelPromise<string>((resolve, reject) => {
            reject("Should not resolve");
        });

        p.cancel();

        p.catch((result) => {
            expect(result).toBe("Something else");
        });
    });
});