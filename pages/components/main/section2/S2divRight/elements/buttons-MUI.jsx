import React, { Component } from 'react';
import style from '&/home/main/section2/S2divRight/S2DivRight.module.css';
import theme from '@/elements/MUI/paletaColors.js';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core';

class ButtonsMUI extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={style.buttons}>
                <ThemeProvider theme={theme}>
                    <Button color="primary" variant="contained" size="large">
                        <span className={style.button_text}>{this.props.text}</span>
                    </Button>
                </ThemeProvider>
            </div>
        );
    }
}

export default ButtonsMUI;