import React, { useEffect, useState } from "react";

export function AsyncApp(): React.ReactElement {

    console.log("Loaded");
    const [a, setA] = useState("hi");

    useEffect(() => {
        longAssOperation().then(() => setA("B"));

        return () => {
            console.log("Unloaded");
        }
    });

    return <div>{a}</div>;
}

function longAssOperation(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 50);
    })
}