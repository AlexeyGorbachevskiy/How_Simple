import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Rating, RatingValueType} from "./Rating";


export default {
    title: 'Rating',
    component: Rating,
};

export const RatingStories = () => <Rating value={0} onClick={action('clicked')}/>;
export const Rating2 = () => <Rating value={2} onClick={action('clicked')}/>;
export const Rating3 = () => <Rating value={3} onClick={action('clicked')}/>;
export const Rating4 = () => <Rating value={4} onClick={action('clicked')}/>;
export const Rating5 = () => <Rating value={5} onClick={action('clicked')}/>;
export const RatingChanging = () => {
    const [rating,setRating]=useState<RatingValueType>(3);
    return (
        <Rating value={rating} onClick={setRating}/>
    )
}


