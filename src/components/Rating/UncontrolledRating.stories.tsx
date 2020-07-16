import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledRating} from "./UncontrolledRating";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
};


export const UncontrolledRating0 = () => <UncontrolledRating defaultValue={0}/>;
export const UncontrolledRating1 = () => <UncontrolledRating defaultValue={1}/>;
export const UncontrolledRating2 = () => <UncontrolledRating defaultValue={2}/>;
export const UncontrolledRating3 = () => <UncontrolledRating defaultValue={3}/>;
export const UncontrolledRating4 = () => <UncontrolledRating defaultValue={4}/>;
export const UncontrolledRating5 = () => <UncontrolledRating defaultValue={5}/>;



