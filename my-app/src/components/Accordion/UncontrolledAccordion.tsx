import React, {useState} from "react";


type UncontrolledAccordionPropsType = {
    titleValue: string;
}


function UncontrolledAccordion(props:UncontrolledAccordionPropsType) {

    let [collapsed,setCollapsed]=useState(false);
    let btnStyle={
        cursor:'pointer'
    }
    let collapse=()=>setCollapsed(!collapsed);


    return <div>
        <UncontrolledAccordionTitle title={props.titleValue} collapse={collapse} />
        {/*pseudo lie/truth 5 lesson*/}
        {!collapsed&&<UncontrolledAccordionBody/>}
    </div>
}



type UncontrolledAccordionTitlePropsType = {
    title: string
    collapse:()=>void
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    let btnStyle={
        cursor:'pointer'
    }
    return <h3 style={btnStyle} onClick={props.collapse}>{props.title}</h3>

}


function UncontrolledAccordionBody() {

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

export default UncontrolledAccordion;