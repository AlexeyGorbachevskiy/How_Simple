import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick:(accordionCollapsed:boolean)=>void
    items: ItemType[]

}
type ItemType={
    title:string
    value:any
}


function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle collapsed={props.collapsed} onClick={props.onClick} title={props.titleValue}/>
        {/*псевдоистина/псевдоложь-рефактринг(5 урок)*/}
        {!props.collapsed&&<AccordionBody items={props.items}/>}
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


type AccordionBodyPropsType = {
    items: ItemType[]
}

function AccordionBody(props:AccordionBodyPropsType) {

    return <ul>
        {props.items.map((i,index)=><li key={index}>{i.title}</li>)}
    </ul>

}

export default Accordion;