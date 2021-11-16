
import React, { Component } from 'react';
import Carousel from './elements/carousel';
import TitleTop from '@/elements/title-top';
import style from '&/home/main/section4/section_four.module.css'

class SectionFour extends React.Component {
    render() {
        return (
            <section id={style.section4} className="flex_c"> 
                <TitleTop title_style="upperline" title="membros" text="Pessoas que fazem parte da UnzippingThoughts"/>
                <Carousel />
            </section>
        );
    }
}

export default SectionFour;