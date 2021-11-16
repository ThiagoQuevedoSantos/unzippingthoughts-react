import Image from 'next/image'
import { Component } from 'react';

import styles from '&/home/Home.module.css'
import Header from '@/header/header';
import Main from '@/main/main';

export default function Home() {
  return(
    <>  
      <Header/>
      <Main/>
    </>
  );
}