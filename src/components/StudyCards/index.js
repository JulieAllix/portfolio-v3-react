import React from 'react';
import { Link } from 'react-router-dom';

import ProjectDetailsStyled from '../ProjectDetailsStyled';

import projectsData from 'assets/data/projectsData';
const data = projectsData[0];

class StudyCards extends React.Component {
  render() {
    return (
      <ProjectDetailsStyled>
        <main>
          <div className="banner">
            <picture>
              <source
                className="banner-background"
                media="(min-width: 1425px)"
                srcSet={data.bgSourceLg}   
                type="image/webp"
              /> 
              <source  
                className="banner-background" 
                media="(min-width: 760px)"   
                srcSet={data.bgSourceMd}   
                type="image/webp"
              />
              <source   
                className="banner-background"
                srcSet={data.bgSourceSm}  
                type="image/webp"
              />
              <img   
                className="banner-background" 
                srcSet={data.bgImageAll}   
                src={data.bgimagelg_1xjpg}   
                type="image/jpeg"   
                alt={data.projectName}
              />
            </picture>
            <div className="title">
              <h1>{data.projectName}</h1>
                <h2>{data.projectSubtitle}</h2>
            </div>
          </div>
          <div className="project">
            <section className="project-description">
              <h3>About</h3>
                <p className="p-content">{data.about}</p>
              <h3>Timing</h3>
                <p className="p-content">{data.timing}</p>
              <h3>Concepts / Skills used</h3>
                <ul className="projects-skills">
                  {data.skillsUsed.map((skill) => (
                    <li key={skill}>- {skill}</li>
                  ))}
                </ul>
              <h3>New skills learned</h3>
                <ul className="projects-skills">
                  {data.skillsDiscovered.map((skill) => (
                    <li key={skill}>- {skill}</li>
                  ))}
                </ul>
            </section>
            <section className="project-img-btn">
              <div className="project-img">
                <picture className="img">
                  <source
                    media="(min-width: 1425px)"
                    srcSet={data.im1SourceLg}   
                    type="image/webp"
                  /> 
                  <source  
                    media="(min-width: 760px)"   
                    srcSet={data.im1SourceMd}   
                    type="image/webp"
                  />
                  <source   
                    srcSet={data.im1SourceSm}  
                    type="image/webp"
                  />
                  <img   
                    srcSet={data.im1imageAll}   
                    src={data.im1imagelg_1xjpg}   
                    type="image/jpeg"   
                    alt={data.imageOneAlt}
                  />
                </picture>
                <picture className="img">
                  <source
                    media="(min-width: 1425px)"
                    srcSet={data.im2SourceLg}   
                    type="image/webp"
                  /> 
                  <source  
                    media="(min-width: 760px)"   
                    srcSet={data.im2SourceMd}   
                    type="image/webp"
                  />
                  <source   
                    srcSet={data.im2SourceSm}  
                    type="image/webp"
                  />
                  <img   
                    srcSet={data.im2imageAll}   
                    src={data.im2imagelg_1xjpg}   
                    type="image/jpeg"   
                    alt={data.imageOneAlt}
                  />
                </picture>
              </div>
              <div className="project-btn">
                <a type="button" className="btn" href={data.projectUrl} target="_blank">
                  See the project
                  <div className="tooltip">
                    <span>Opens in a new tab</span>
                  </div>
                </a>
                <a type="button" className="btn" href={data.gitHubUrl} target="_blank">
                  Access to the repository
                  <div className="tooltip">
                    <span>Opens in a new tab</span>
                  </div>
                </a>
                <Link type="button" className="btn" to="/">
                  Back to homepage
                </Link>
              </div>
            </section>
          </div>
        </main>
      </ProjectDetailsStyled>
    );
  }
}

export default StudyCards;