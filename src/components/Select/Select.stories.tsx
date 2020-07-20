import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select,
};

export const SelectBase = () => {
    const [value,setValue]=useState('2');
    const onChangeHandler=(newValue:any)=>{
        action('Value changed');
        setValue(newValue)
    }
    return (
        <Select
            onChange={onChangeHandler}
            value={value}
            items={[
                {value: '1', title:'Minsk'},
                {value: '2', title:'Borisov'},
                {value: '3', title:'Moscow'},
                ]}

        />
    )
}
export const SelectWithoutValue = () => {
    const [value,setValue]=useState(null);
    const onChangeHandler=(newValue:any)=>{
        action('Value changed');
        setValue(newValue)
    }
    return (
        <Select
            onChange={onChangeHandler}
            value={value}
            items={[
                {value: '1', title:'Minsk'},
                {value: '2', title:'Borisov'},
                {value: '3', title:'Moscow'},
                ]}

        />
    )
}

