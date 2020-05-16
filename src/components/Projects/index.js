import React from 'react';

import skillsData from 'assets/data/skillsData';
import skillsDataWithoutLogo from 'assets/data/skillsDataWithoutLogo';
import projectsData from 'assets/data/projectsData';

import ProjectsStyled from './ProjectsStyled';

class Projects extends React.Component {
  render() {
    return (
      <ProjectsStyled>
        <section className="page-projects page">
        
            <div className="details-txt detail">
            
                <h1>My personal projects</h1>
                <div className="details-projects">
                    <div className="p-skills"><p>Hover the below skills to highlight the projects on which I’ve put them into practice :</p></div>
                    <p className="p-skills-tactile">Some of the skills I've put into practice in my personal projects</p>
                    
                    <ul className="skills">
                      {skillsData.map((skill) => (
                        <li className={skill.liClass} key={skill.id}>
                            <img
                                className={skill.class}
                                src={skill.logo}
                                alt={skill.skill}
                            />
                            <span className="skill-name">{skill.skill}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="p-skills">And also :</p>
                    <ul className="skills">
                      {skillsDataWithoutLogo.map((skill) => (
                        <li className="skill" key={skill.id}>
                            <span className="skill-name">{skill.skill}</span>
                        </li>
                      ))}
                    </ul>
                    
                </div>
                <p className="p-click animate__animated animate__headShake">Click on the pictures to see the projects !</p>
            </div>
            
            <div className="hero-projects projects">
                <div className="hero">
                
                    <div className="photo-left"></div>
                    <div className="photo-right"></div>
                </div>
                
                {projectsData.map((project) => (
                  <a href="#" key={project.id}>
                    <img
                        className={project.iconClass}
                        src={project.iconImage}
                        alt={project.projectName}
                    />
                  </a>
                  ))}
            </div>

        </section>
      </ProjectsStyled>
    );
  }
}

export default Projects;