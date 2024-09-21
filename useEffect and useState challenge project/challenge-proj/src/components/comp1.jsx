

import React from 'react'

import {useState , useEffect} from 'react'

function comp1() {

    const [count , updateCount] = useState(0);

    useEffect(() => {

        console.log("inside the useEffect hook");

        let intervalId = setInterval(() => {
            updateCount( (prev) => prev + 1 );
        } , 1000);

        // cleanup 
        return () => clearInterval(intervalId);
    } , []);
    

    return (
        <>
            value of count is {count}
        </>
    );
}

export default comp1