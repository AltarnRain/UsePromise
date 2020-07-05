import React, { useEffect, useState } from "react";
import { usePromise } from "./usePromise";


let loaded = false;

export function AsyncApp(): React.ReactElement {

    const [a, setA] = useState("hi");

    const p = usePromise();

    useEffect(() => {
        p<string>((resolve, reject) => {
            setTimeout(() => {
                resolve("Test 2");
                reject("Test");
            }, 50);
        }).then((result) => {
            console.log("Called when cancelled");
            setA(result);
        }).catch((reason) => {
            console.log("Catch called " + reason);
        });
    }, []);

    return <div>{a}</div>;
}