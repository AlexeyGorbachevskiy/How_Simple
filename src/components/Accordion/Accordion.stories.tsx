import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
};

export const CollapsedAccordion = () => {
    return (
        <Accordion collapsed={true}
                   onClick={action('clicked')}
                   titleValue={'--Collapsed--'}
        />
    )
}
export const UncollapsedAccordion = () => {
    return (
        <Accordion collapsed={false}
                   onClick={action('clicked')}
                   titleValue={'--Uncollapsed--'}
        />
    )
}

export const ClickableAccordion = () => {
    let [accordionCollapsed,setAccordionCollapsed]=useState<boolean>(false);
    return (
        <Accordion collapsed={accordionCollapsed}
                   onClick={setAccordionCollapsed}
                   titleValue={'--Clickable--'}
        />
    )
}



