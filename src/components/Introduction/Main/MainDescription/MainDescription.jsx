import React, { useCallback, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import './MainDescription.css'

export default function MainDescription() {

    const [text, setText] = useState(
        `
let greetings = 'Hello !'                                                   
let name = 'Antônio Alves'                                                  
const interest = \`I'm very interested in web development\`                   
//Check out my projects and contact                                          
    `);

    const onChange = useCallback((val, viewUpdate) => {
        setText(val);
    }, []);

    return <section id='description'>
        <CodeMirror value={text} height='200px' id='code-mirror'
            extensions={[javascript({ jsx: true })]}
            theme={'light'}
            onChange={onChange}
        />
    </section>
}
