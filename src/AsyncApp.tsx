import React, { useEffect, useState } from "react";
import { usePromise } from "./usePromise";

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

        // Comment the promise out above and uncomment this one.
        // React will throw an error you updates the state post-unmount. The code
        // above will NOT do this.
        
        // new Promise<string>((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve("Test 2");
        //         reject("Test");
        //     }, 50);
        // }).then((result) => {
        //     console.log("Called when cancelled");
        //     setA(result);
        // }).catch((reason) => {
        //     console.log("Catch called " + reason);
        // });
    }, []);

    return <div>{a}</div>;
}