import React, { Component } from 'react';
import styles from '&/home/header/headerRight/HeaderRight.module.css';
import styleS2 from '&/home/main/section2/section_two.module.css';
import sections from '@/elements/sections-links';
let header, conhecimentos, desenvolvimento, membros, web_moderna, contato = [];

const elements = [
     header = {
        text: "INÍCIO",
        id: "header",
    },
    conhecimentos = {
        text: "CONHECIMENTO",
        id: "conhecimento",
    },
    desenvolvimento = {
        text: "DESENVOLVIMENTO",
        id: "desenvolvimento",
    },
    membros = {
        text: "MEMBROS",
        id: "membros",
    },
    // web_moderna = {
    //     text: "WEB MODERNA",
    //     id: "web_moderna"
    // },
    contato = {
        text: "CONTATO",
        id: "contato"
    }
];


class HeaderRight extends React.Component {
    render() { 
        return (
            
                <nav className={styles.nav_header} id={styles.navbar}>
                    <ul className={styles.nav_ul}>
                        {
                            elements.map((element, index) => {
                                return (
                                    <li className={styles.nav_li} key={index}>
                                        <a className={styles.nav_link} href={"#" + element.id}>{element.text}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            
        );
    }
}
 
export default HeaderRight;