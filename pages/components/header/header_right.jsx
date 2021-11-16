import React, { Component } from 'react';
import styles from '../../../styles/css/home/header/headerRight/HeaderRight.module.css'
let header, experiencia, desenvolvimento, membros, web_moderna = [];

const elements = [
    header = {
        text: "INÍCIO",
        id: "header",
    },
    experiencia = {
        text: "EXPERIÊNCIA",
        id: "experiencia"
    },
    desenvolvimento = {
        text: "MEMBROS",
        id: "desenvolvimento"
    },
    membros = {
        text: "EXPERIÊNCIA",
        id: "membros"
    },
    web_moderna = {
        text: "WEB MODERNA",
        id: "web_moderna"
    }
];


class HeaderRight extends React.Component {
    render() { 
        return (
            <>
                <nav className={styles.nav_header} id={styles.navbar}>
                    <ul className={styles.nav_ul}>
                        {
                            elements.map((element, index) => {
                                return (
                                    <li id={element.id} className={styles.nav_li} key={index}>
                                        <a className={styles.nav_link} href={"#" + element.id}>{element.text}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </>
        );
    }
}
 
export default HeaderRight;