import React, {useMemo, useState} from 'react';


export default {
    title: 'useMemo',
};


// case 1: use memo memoization(cache) previous value

export const UseMemoDifficultCountingDemo = () => {

    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResult = 1;

        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResult = tempResult * i;
        }

        return tempResult
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return (
        <>
            <input value={a} onChange={(e) => {
                setA(+e.currentTarget.value)
            }} type="text"/>
            <input value={b} onChange={(e) => {
                setB(+e.currentTarget.value)
            }} type="text"/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>

            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}


// case 2: UseMemoHelpsReactMemoDemo (rendering) , when we send to component changed array

const SecretUsers = (props: { users: Array<string> }) => {
    console.log('Users Secret')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(SecretUsers)

export const UseMemoHelpsReactMemoDemo = () => {
    console.log('UseMemoHelpsReactMemoDemo')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Alex', 'Bob', 'Boris']);

    // need to add dependency = users array obligatory, without it new values will not added to array (see add users button functionality)
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])
    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={() => {
                setUsers([...users, 'Valentin'])
            }}>Add Users
            </button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}














