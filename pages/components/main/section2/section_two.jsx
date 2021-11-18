import React, { Component } from 'react';
import style from '&/home/main/section2/section_two.module.css';
import DivLeft from './S2divLeft/S2divLeft';
import DivRight from './S2divRight/S2divRight';


class SectionTwo extends React.Component {
    render() {
        return (
            <section id={style.section_two} className="grid"> 
                <DivLeft />
                <DivRight />
            </section>
        );
    }
}

export default SectionTwo;