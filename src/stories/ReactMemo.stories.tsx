import React, {useState} from 'react';



export default {
    title: 'ReactMemo',
};


const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}
const SecretUsers = (props: { users: Array<string> }) => {
    console.log('Users Secret')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(SecretUsers)

export const ReactMemoDemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Alex', 'Bob', 'Boris']);
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
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}
























