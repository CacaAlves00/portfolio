import React from 'react'
import projects from './projects.json'
import './Projects.css'
import WritingText from './../WritingText/WritingText'
import { BiLinkExternal, BiLogoGithub } from 'react-icons/bi'

export default function Projects() {
  return (
    <article id='projects'>
      <WritingText text={'Projects'} />
      <section className='cards'>
        {
          projects.projects.map(project => (
            <div className='card' key={project.title}>
              <div className='image-container'>
                <img src={project.imagemSrc} alt='Card Image' />
                <div className='icons'>
                  <a href={project.githubLink} target='_blank'>
                    <BiLogoGithub />
                  </a>
                  <a href={project.resourceLink} target='_blank'>
                    <BiLinkExternal />
                  </a>
                </div>
              </div>
              <div className='card-description'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))
        }
      </section>
    </article>
  )
}
