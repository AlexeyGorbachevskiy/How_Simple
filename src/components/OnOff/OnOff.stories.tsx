import React, {useState} from 'react';
import OnOff from "./OnOff";


export default {
    title: 'OnOff',
    component: OnOff,
};

export const OnMode = () => {
    let [on,setOn]=useState(true);
    return (
        <OnOff on={on} setOn={setOn}/>
    )
}

export const OffMode = () => {
    let [on,setOn]=useState(false);
    return (
        <OnOff on={on} setOn={setOn}/>
    )
}


