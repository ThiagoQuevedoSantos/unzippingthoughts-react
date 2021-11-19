import React, { Component } from 'react';
import style from '&/home/main/section1/S1divRight/S1DivRight.module.css'


class DivRight extends React.Component {
    render() {
        return (
            <div id={style.frame} className="div_half">
                <iframe
                    width="550"
                    height="315"
                    src="https://www.youtube.com/embed/a0BxlDEz--0?controls=1&rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        );
    }
}

export default DivRight;