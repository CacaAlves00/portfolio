import React from 'react'
import './Main.css'
import MainH1 from './MainH1/MainH1';
import MainDescription from './MainDescription/MainDescription';

export default function Main() {
    return (
        <main id='main'>
            <MainH1 />
            <MainDescription />
        </main>
    )
}
