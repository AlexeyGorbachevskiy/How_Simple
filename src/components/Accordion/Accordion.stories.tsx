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
                   items={[]}
        />
    )
}
export const UncollapsedAccordion = () => {
    return (
        <Accordion collapsed={false}
                   onClick={action('clicked')}
                   titleValue={'--Uncollapsed--'}
                   items={[{value:1,title: 'Alex'},{value:2,title: 'Boris'},{value:3,title: 'Bob'}]}
        />
    )
}

export const ClickableAccordion = () => {
    let [accordionCollapsed,setAccordionCollapsed]=useState<boolean>(false);
    return (
        <Accordion collapsed={accordionCollapsed}
                   onClick={setAccordionCollapsed}
                   titleValue={'--Clickable--'}
                   items={[{value:1,title: 'Alex'},{value:2,title: 'Boris'},{value:3,title: 'Bob'}]}
        />
    )
}



