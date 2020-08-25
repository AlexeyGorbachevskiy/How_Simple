import React, {useEffect, useState} from 'react';


export default {
    title: 'UseEffect demo',
};


export const UseEffectDemo = () => {
    console.log('UseEffectDemo')
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        console.log('useEffect executes every render')
    })
    useEffect(() => {
        console.log('useEffect executes first render')
    }, [])
    useEffect(() => {
        console.log('useEffect executes first render + if counter is changed')
    }, [counter])

    return (
        <>
            Hello, {counter}
            <br/>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            {' '}
            <button onClick={() => {
                setFake(fake + 1)
            }}>+
            </button>
        </>

    )
}

export const UseEffectSetTimeoutDemo = () => {
    console.log('UseEffectSetTimeoutDemo')

    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        console.log('useEffect executes first render + if counter is changed');
        // setTimeout(() => {
        //     document.title = counter.toString();
        // }, 1000)
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [counter])

    return (
        <>
            Hello, counter: {counter} - fake : {fake}
            <br/>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            {' '}
            <button onClick={() => {
                setFake(fake + 1)
            }}>+
            </button>
        </>

    )
}

export const UseEffectClockDemo = () => {
    console.log('UseEffectClockDemo')

    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const timerId = setInterval(() => {
            console.log('tick')
            setTime(new Date())
        }, 1000);

        // will execute when component will unmount
        return ()=>{
            clearInterval(timerId)
        }
    }, [])

    const getTwoDigitsString = (timeValue: number) => timeValue < 10 ? '0' + timeValue : timeValue


    const hours = getTwoDigitsString(time.getHours())
    const minutes = getTwoDigitsString(time.getMinutes())
    const seconds = getTwoDigitsString(time.getSeconds())


    return (
        <>
            {hours}:{minutes}:{seconds}
        </>

    )
}















