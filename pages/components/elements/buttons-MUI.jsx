import style from '&/home/elements/buttons-MUI.module.css';
import theme from '@/elements/MUI/paletaColors.js';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core';

function ButtonsMUI(props) {
    return (
        <div className={`flex_c ${style[props.margin]} ${style[props.position]}`}>
            <ThemeProvider theme={theme}>
                <Button color={props.color} variant={props.variant} size="large">
                    <span className={style.button_text}>{props.text}</span>
                </Button>
            </ThemeProvider>
        </div>
    );
}

export default ButtonsMUI;