import React, { Component } from 'react';
import style from '&/home/main/section2/S2divRight/S2divRight.module.css';
import ButtonsMUI from '../../../elements/buttons-MUI';



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
                    <div id={style.div_buttons}>
                        <ButtonsMUI text="Comportamental" color="primary" variant="contained"/>
                        <ButtonsMUI text="Técnico" color="primary" variant="contained"/>
                    </div>
                </div>
            </>
        );
    }
}

export default DivRight;