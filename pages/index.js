import Image from 'next/image'
import { Component } from 'react';

import styles from '../styles/css/home/Home.module.css'
import Header from './components/header/header';
import Main from './components/main/main';

export default function Home() {
  return(
    <>  
      <Header/>
      <Main/>
    </>
  );
}