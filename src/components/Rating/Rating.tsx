import React from "react";


export type RatingValueType=0|1|2|3|4|5;


type RatingPropsType = {
    value: RatingValueType
    onClick:(value:RatingValueType)=>void
}

export function Rating(props: RatingPropsType) {
    //refactoring: pseudo truth
    return (<div>
            <Star value={1} onClick={props.onClick} selected={props.value > 0 && true}/>
            <Star value={2} onClick={props.onClick} selected={props.value > 1 && true}/>
            <Star value={3} onClick={props.onClick} selected={props.value > 2 && true}/>
            <Star value={4} onClick={props.onClick} selected={props.value > 3 && true}/>
            <Star value={5} onClick={props.onClick} selected={props.value > 4 && true}/>
        </div>
    );

}


type StarPropsType = {
    selected: boolean
    onClick:(value:RatingValueType)=>void
    value:RatingValueType
}

function Star(props: StarPropsType) {
    return <span onClick={()=>props.onClick(props.value)}>{props.selected ? <b>Star</b> : 'Star'}</span>

}