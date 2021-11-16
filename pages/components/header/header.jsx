import { Component } from 'react';
import style from '&/home/header/Header.module.css';
import HeaderLeft from './header_left';
import HeaderRight from './header_right'

class Header extends Component {
    render() { 
        return (
        <>
            <header id={style.header}>
                <HeaderLeft/>
                <HeaderRight/>
            </header>
        </>
        );
    }
}
 
export default Header;