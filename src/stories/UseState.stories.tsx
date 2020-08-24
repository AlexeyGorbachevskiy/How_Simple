import React, {useState} from 'react';


export default {
    title: 'advancedUseState demo',
};


export const AdvancedUseStateDemo = () => {
    console.log('UseStateDemo')

    const generateData = () => {
        // difficult counting
        return 453453453
    }

    const changer = (state: number) => {
        return state + 1
    }

    // First feature of useState
    // if we send to useState (to initialState) function, useState memoize returned value of this func
    // and we don't need to wrap function,in our case (generate Data) to useMemo and save result to var and write it to initValue of useState
    // !! so generateData will called only one time and useState memoize returned result of function  !!

    // Second feature of useState
    // we can send to SET useState function (in our case: to setCounter)- our function
    // with logic of changing useState previous value
    // see changer function
    const [counter, setCounter] = useState(generateData);

    return (
        <>
            <button onClick={() => {
                setCounter(changer)
            }}>+
            </button>
            {counter}
        </>
    )
}















