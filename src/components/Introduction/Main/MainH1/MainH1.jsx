import React, { useEffect, useState } from 'react'
import './MainH1.css'
import WritingText from '../../../WritingText/WritingText';

export default function MainH1() {
    const text = "I'm Antônio Alves";
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);

   
    return (
        <WritingText text={`I'm Antônio`} />
    )
}
