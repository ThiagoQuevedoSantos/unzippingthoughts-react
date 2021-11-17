import React, { Component } from 'react';
import style from '&/home/main/section1/S1divLeft/S1DivLeft.module.css';

class DivLeft extends React.Component {
    render() { 
        return (
        
                <div id={style.div_left} className="div_half flex_r">
                    <h1 id={style.title_master} className="simple_h1">
                        EQUIPE DE DESENVOLVIMENTO <span className="highlighter">UNZZIPING TOUGHTS</span>
                    </h1>
                </div>
        
        );
    }
}
 
export default DivLeft;