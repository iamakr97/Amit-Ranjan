import React from 'react'
import './Projects.css';
import { project } from '../../Data/ProjectData';

function Projects() {
  return (
    <div id='projects'>
      <h2>Projects</h2>
      <p className='porject-head-desc'>I have worked on some projects. Here are some of my projects.</p>
      <div className="project-container">
        {
          project.map((pro) => {
            return <div key={pro.id} className='project-card'>
              <img src={pro.image} alt="Project Image" className='project-image' />
              <div className="tag-container">
                {
                  (pro.tags).map(tag => <p className='project-tag'>{tag}</p>)
                }
              </div>
              <h3 className='project-title'>{pro.title}</h3>
              {(pro.description).length > 200
                ?
                <p className='project-desc'>{(pro.description).substr(0, 200)}...</p>
                :
                <p className='project-desc'>{pro.description}</p>
              }
              <div className='project-btn-container'>
                <a href={pro.Live_Link} target='_blank'>
                  <button className='project-btn live-btn'>View Live App</button>
                </a>
                <a href={pro.github} target='_blank'>
                  <button className='project-btn git-btn'>View Code </button>
                </a>
                
              </div>
            </div>
          })
        }

      </div>
    </div>
  );
}

export default Projects;
