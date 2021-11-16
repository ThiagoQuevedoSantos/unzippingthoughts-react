import React, { Component } from 'react';
import SectionOne from './section1/section_one';
import SectionTwo from './section2/section_two';
import SectionThree from './section3/section_three';

class Main extends React.Component {
    render() { 
        return (
            <>
            <SectionOne/>
            {/* <SectionTwo/> */}
            </>
        );
    }
}
 
export default Main;