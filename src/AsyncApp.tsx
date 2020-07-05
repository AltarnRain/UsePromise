// import React, { useEffect, useState } from "react";
// import usePromise from "./usePromise";


// let loaded = false;

// export function AsyncApp(): React.ReactElement {

//     const [a, setA] = useState("hi");

//     const p = usePromise();

//     useEffect(() => {

//             p<string>((resolve) => {
//                 setTimeout(() => {
//                     resolve("S")
//                 }, 200)
//             }).then((r) => setA(r));
        
//     }, []);

//     return <div>{a}</div>;
// }