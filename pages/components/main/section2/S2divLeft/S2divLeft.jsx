import React, { Component } from 'react';
import Image from 'next/image';
import svgTeuFuturo from '../../../../../static/assets/svgLogos/svgTeuFuturo.svg';

class DivLeft extends React.Component {
    render() { 
        return (
            <>
                <div>
                    <Image src={svgTeuFuturo}/>
                </div>
            </>
        );
    }
}
 
export default DivLeft;