import React, {useState} from 'react';

type OnOffPropsType={
    setOn:(on:boolean)=>void
    on:boolean
}


function OnOff(props:OnOffPropsType){



    const OnStyle={
        cursor:'pointer',
        marginLeft:'5px',
        width:'30px',
        height: '20px',
        border:'1px solid black',
        display:'inline-block',
        backgroundColor:props.on ? 'green':'white',
    };
    const OffStyle={
        cursor:'pointer',
        marginLeft:'5px',
        width:'30px',
        height: '20px',
        border:'1px solid black',
        display:'inline-block',
        backgroundColor:props.on ? 'white':'red',
    };
    const IndicatorStyle={
        marginLeft:'5px',
        width:'10px',
        height:'10px',
        borderRadius:'5px',
        border: '1px solid black',
        display:'inline-block',
        backgroundColor:props.on ? 'green':'red',
    };
    return <div>
        <div onClick={()=>props.setOn(true)} style={OnStyle}>On</div>
        <div onClick={()=>props.setOn(false)}style={OffStyle}>Off</div>
        <div style={IndicatorStyle}/>

    </div>
}



export default OnOff;