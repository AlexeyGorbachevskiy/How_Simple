import React, {useState} from 'react';
import UncontrolledOnOff from "./UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

export const OnOff = () => {
    let [on, setOn] = useState(true);
    return (
        <UncontrolledOnOff/>
    )
}



