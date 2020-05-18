import React from 'react';
import { Link } from 'react-router-dom';

import ProjectDetailsStyled from '../ProjectDetailsStyled';

import projectsData from 'assets/data/projectsData';
const data = projectsData[4];

class PortfolioV2 extends React.Component {
  render() {
    return (
      <ProjectDetailsStyled>
        <main>
          <div className="banner">
            <img
              className="banner-background"
              src={data.bgImage}
              alt={data.projectName}
            />
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
                <img
                  className="img"
                  src={data.imageOne}
                  alt={data.imageOneAlt}
                />
                <img
                  className="img"
                  src={data.imageTwo}
                  alt={data.imageTwoAlt}
                />
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

export default PortfolioV2;