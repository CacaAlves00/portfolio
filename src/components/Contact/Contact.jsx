import React from 'react'
import './Contact.css'
import { BiLogoGmail, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'
import WritingText from '../WritingText/WritingText'

export default function Contact() {
  return (
    <article id='contact'>
      <WritingText text='Contact' />
      <div className='ibm-plex-mono-light'>
        <a href='mailto:antoniofeitosadev@gmail.com'>
          <BiLogoGmail size={70} />
        </a>
        <a href='https://github.com/CacaAlves00' target='_blank'>
          <BiLogoGithub size={70} /> 
        </a>
        <a href='https://www.linkedin.com/in/ant%C3%B4nio-carlos-alves-964a31239/' target='_blank'>
          <BiLogoLinkedin size={70} /> 
        </a>
      </div>
    </article>
  )
}
