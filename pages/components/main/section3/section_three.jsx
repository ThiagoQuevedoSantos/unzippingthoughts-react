import React, { Component } from 'react';
import DivBottom from './elements/div-bottom';
import TitleTop from '@/elements/title-top';
import style from '&/home/main/section3/section_three.module.css'


class SectionThree extends React.Component {
    render() {
        return (
            <section id={style.section3} className="flex_c"> 
                <TitleTop title_style="upperline" title="processo de desenvolvimento" text="um texto de teste"/>
                <DivBottom />
            </section>
        );
    }
}

export default SectionThree;