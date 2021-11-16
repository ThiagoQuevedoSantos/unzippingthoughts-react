import React, { Component } from 'react';
import style from '../../../../styles/css/home/main/section1/Section_one.module.css'
import DivLeft from './S1divLeft/S1divLeft';
import DivRight from './S1divRight/S1divRight';

class SectionOne extends React.Component {
    render() { 
        return (
            <section id={style.section_one} className="flex_r">
                <DivLeft/>
                <DivRight/>
            </section>
        );
    }
}
 
export default SectionOne;