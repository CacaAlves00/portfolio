import React from 'react'
import './About.css'
import WritingText from '../WritingText/WritingText'

export default function About() {
  return (
    <article id='about'>
      <WritingText text={'About'} />
      <p className='nav jetbrains-mono-light'>
      &lt;p&gt;Hello, i'm Antonio Carlos.
I am very interested in Web Development. I'm always trying to be on top of the most used technologies in the world of web development.
I am a graduate student in Computer Science at Universidade Tecnológica Federal Do Paraná, avidly studying this field that never ceases to expand. 
Here some of the techlogies i have studied about:
HTML5, CSS3, JavaScript, TypeScript, Next.js, React, Bootstrap, Redux, Cypress e Figma,
Node, Express, Nest.js, Jest, C, C++, Java, Python, Git & GitHub, SQL, MongoDB, PostgreSQL.
Also have fluency in English.&lt;/p&gt;
      </p>
    </article>
  )
}
