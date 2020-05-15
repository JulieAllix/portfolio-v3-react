import React from 'react';

import skillsData from 'assets/data/skillsData';
import skillsDataWithoutLogo from 'assets/data/skillsDataWithoutLogo';
import projectsData from 'assets/data/projectsData';

import ProjectsStyled from './ProjectsStyled';

class Projects extends React.Component {
  render() {
    return (
      <ProjectsStyled>
        <section class="page-projects page">
            <div class="details-txt detail">
                <h1>My personal projects</h1>
                <div class="details-projects">
                    <div class="p-skills"><p>Hover the below skills to highlight the projects on which I’ve put them into practice :</p></div>
                    <p class="p-skills-tactile">Some of the skills I've put into practice in my personal projects</p>
                    
                    <ul class="skills">
                      {skillsData.map((skill) => (
                        <li class={skill.liClass} key={skill.id}>
                            <img
                                class={skill.class}
                                src={skill.logo}
                                alt={skill.skill}
                            />
                            <span class="skill-name">{skill.skill}</span>
                        </li>
                      ))}
                    </ul>
                    <p class="p-skills">And also :</p>
                    <ul class="skills">
                      {skillsDataWithoutLogo.map((skill) => (
                        <li class="skill" key={skill.id}>
                            <span class="skill-name">{skill.skill}</span>
                        </li>
                      ))}
                    </ul>
                    
                </div>
                <p class="p-click animate__animated animate__headShake">Click on the pictures to see the projects !</p>
            </div>
            
            <div class="hero-projects projects">
                <div class="hero">
                
                    <div class="photo-left"></div>
                    <div class="photo-right"></div>
                </div>
                
                {projectsData.map((project) => (
                  <a href="#">
                    <img
                        class={project.iconClass}
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