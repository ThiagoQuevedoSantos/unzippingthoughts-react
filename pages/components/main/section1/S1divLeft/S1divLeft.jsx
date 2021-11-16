import React, { Component } from 'react';
import style from '&/home/main/section1/divLeft/DivLeft.module.css';

class DivLeft extends React.Component {
    render() { 
        return (
        
                <div className={style.div_left}>
                    <h1 id={style.title_master} className={style.title}>
                        EQUIPE DE DESENVOLVIMENTO <span className={style.color1}>UNZZIPING TOUGHTS</span>
                    </h1>
                </div>
        
        );
    }
}
 
export default DivLeft;