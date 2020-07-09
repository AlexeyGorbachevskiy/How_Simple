import React, {useState} from 'react';




function UncontrolledOnOff(){


    let [on,setOn]=useState(false);

    const OnStyle={
        cursor:'pointer',
        marginLeft:'5px',
        width:'30px',
        height: '20px',
        border:'1px solid black',
        display:'inline-block',
        backgroundColor:on ? 'green':'white',
    };
    const OffStyle={
        cursor:'pointer',
        marginLeft:'5px',
        width:'30px',
        height: '20px',
        border:'1px solid black',
        display:'inline-block',
        backgroundColor:on ? 'white':'red',
    };
    const IndicatorStyle={
        marginLeft:'5px',
        width:'10px',
        height:'10px',
        borderRadius:'5px',
        border: '1px solid black',
        display:'inline-block',
        backgroundColor:on ? 'green':'red',
    };
    return <div>
        <div onClick={()=>{setOn(true)}} style={OnStyle}>On</div>
        <div onClick={()=>{setOn(false)}}style={OffStyle}>Off</div>
        <div style={IndicatorStyle}></div>

    </div>
}



export default UncontrolledOnOff;