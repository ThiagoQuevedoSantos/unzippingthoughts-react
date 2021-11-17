import React, { Component } from 'react';
import styleSection from '&/home/main/section2/Section_two.module.css';
import style from '&/home/main/section2/S2divRight/S2DivRight.module.css';
import ButtonsMUI from './elements/buttons-MUI';



class DivRight extends React.Component {
    render() {
        return (
            <>
                <div className="div_half">
                    <div id={style.paragraph_container}>
                        <p id={style.paragraph} className="high_p">
                            Nossa equipe conta com um amplo conhecimento
                            <span className="highlighter"> técnico</span> e
                            <span className="highlighter"> comportamental</span> graças ao
                            treinamento extensivo do programa TeuFuturo e os profissionais
                            envolvidos!
                        </p>
                    </div>
                    <div>
                        <ButtonsMUI text="Comportamental"/>
                        <ButtonsMUI text="Técnico"/>
                    </div>
                </div>
            </>
        );
    }
}

export default DivRight;