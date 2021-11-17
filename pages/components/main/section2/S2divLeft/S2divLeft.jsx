import React, { Component } from 'react';
import Image from 'next/image';
import style from '&/home/main/section2/S2divLeft/S2divLeft.module.css';
import svgTeuFuturo from '&&/svgLogos/svgTeuFuturo.svg';

class DivLeft extends React.Component {
    render() {
        return (
            <>
                <div id={style.left} className="div_half">
                    <div id={style.image_container} className={style.img_container}>
                        <Image src={svgTeuFuturo} layout="fill" />
                    </div>
                </div>
            </>
        );
    }
}

export default DivLeft;