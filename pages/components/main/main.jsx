import React, { Component } from 'react';
import SectionOne from './section1/section_one';
import SectionTwo from './section2/section_two';
import SectionThree from './section3/section_three';
import SectionFour from './section4/section_four';
import CallToAction from '../elements/call-to-action-btn';
import Contact from './contact/contact';

class Main extends React.Component {
    render() { 
        return (
            <>
            <SectionOne/>
            <SectionTwo/>
            <CallToAction text="Contate-nos" color="primary" variant="outlined" position="center"/>
            <SectionThree/>
            <SectionFour/>
            <Contact/>
            </>
        );
    }
}
 
export default Main;