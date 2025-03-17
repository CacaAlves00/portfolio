import React, { useEffect, useState } from 'react'
import './WritingText.css'

export default function WritingText({ text }) {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDisplayText(prev => prev + text[index]);
            setIndex(prevIndex => prevIndex + 1);
        }, 200);

        if (index === text.length) {
            clearInterval(timer);
            setTimeout(() => {
                setDisplayText('');
                setIndex(0);
            }, 10000);
        }

        return () => clearInterval(timer);
    }, [index]);



    return (
        <section id='h1'>
            <span className='jetbrains-mono-regular'>&lt;h1&gt;</span>
            <h1 className='jetbrains-mono-regular'>
                {displayText} <span id='cursor'>|</span>
            </h1>
            <span className='jetbrains-mono-regular'>&lt;/h1&gt;</span>
        </section>
    )
}
