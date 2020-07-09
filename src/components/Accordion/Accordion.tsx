import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick:(accordionCollapsed:boolean)=>void
}


function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle collapsed={props.collapsed} onClick={props.onClick} title={props.titleValue}/>
        {/*псевдоистина/псевдоложь-рефактринг(5 урок)*/}
        {!props.collapsed&&<AccordionBody/>}
    </div>
}


// function Accordion(props: AccordionPropsType) {
//
//     if (!props.collapsed) {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//             <AccordionBody/>
//         </div>
//     } else {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//         </div>
//     }
// }

type AccordionTitlePropsType = {
    title: string
    onClick:(accordionCollapsed:boolean)=>void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const btnStyle={
        cursor:'pointer'
    }
    return <h3 style={btnStyle} onClick={()=>props.onClick(!props.collapsed)}>{props.title}</h3>

}


function AccordionBody() {

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

export default Accordion;