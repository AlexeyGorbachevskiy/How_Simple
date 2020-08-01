import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";


function App() {
    let [ratingValue,setRatingValue]=useState<RatingValueType>(0);
    let [accordionCollapsed,setAccordionCollapsed]=useState<boolean>(false);
    let [on,setOn]=useState(true);
    return (

        <div className={'app'}>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'How you doing?'}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>*/}
            {/*<Rating onClick={setRatingValue} value={ratingValue}/>*/}
            {/*<OnOff on={on} setOn={setOn}/>*/}
            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrolledAccordion titleValue={'--Users--'}/>*/}
            {/*<UncontrolledAccordion titleValue={'--Menu--'} /> */}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
        </div>
        // <div className='app-wrapper'>
        //     <Header />
        //     <Nav/>
        //     <Profile/>
        // </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h3>{props.title}</h3>
}



export default App;
