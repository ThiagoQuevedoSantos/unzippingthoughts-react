import React, { Component } from 'react';
import SectionOne from './section1/section_one';
import SectionTwo from './section2/section_two';
import SectionThree from './section3/section_three';
import SectionFour from './section4/section_four';
import CallToActionBtn from '@/elements/call-to-action-btn';

class Main extends React.Component {
    render() { 
        return (
            <>
            <SectionOne/>
            <SectionTwo/>
            <CallToActionBtn text="Contate-nos" position="center" btnStyle="style1"/>
            <SectionThree/>
            <SectionFour/>
            </>
        );
    }
}
 
export default Main;