import React, {useState} from "react";
import {RatingValueType} from "./Rating";

type UncontrolledRatingPropsType={
    defaultValue?:RatingValueType
}

export function UncontrolledRating(props:UncontrolledRatingPropsType) {
    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue: 0);


    return (<div>
            <Star value={1} setValue={setValue} selected={value > 0 && true}/>
            <Star value={2} setValue={setValue} selected={value > 1 && true}/>
            <Star value={3} setValue={setValue} selected={value > 2 && true}/>
            <Star value={4} setValue={setValue} selected={value > 3 && true}/>
            <Star value={5} setValue={setValue} selected={value > 4 && true}/>
        </div>
    )
        ;

}


type StarPropsType = {
    selected: boolean
    value:1|2|3|4|5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarPropsType) {
    let likeStyle = {
        cursor: 'pointer',
        margin: '0 5px',
    }
    return <span style={likeStyle} onClick={() => props.setValue(props.value)}>{props.selected ? <b>Star</b> : 'Star '}</span>
}