import { Component } from 'react';
import Image from 'next/image';
import style from '../../../styles/css/home/header/headerLeft/HeaderLeft.module.css'
import svgHeader from '../../../static/assets/svgLogos/svgHeader.svg'

class HeaderLeft extends Component {
    render() { 
        return (
            <>
                <Image id={style.img} src={svgHeader}/>
            </>
        );
    }
}
 
export default HeaderLeft;
