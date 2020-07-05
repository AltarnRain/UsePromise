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
    test("TestCancelPromise", () => {
        
        new CancelPromise(() => {
            return "Test";
        }).then((result) => {
            expect(result).toBe("Test");
        });
    });

    test("TestCancelPromise cancelled", () => {
        
        var p = new CancelPromise(() => {
            return "Test";
        })

        p.cancel();

        p.then((result) => {
            expect(result).toBe("Never valled")
        });
    });
});