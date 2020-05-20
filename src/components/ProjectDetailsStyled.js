import styled from 'styled-components';
import theme from '../styles/theme';

const ProjectDetailsStyled = styled.div`

    color: black;

    .banner {
        height: auto;
        width: 100%;
        position: relative;
    }

    .banner img {
        height: 8rem;
        width: 100%;
    }

    .title {
        position: absolute;
        top: 2rem;
        background-color: rgba(0, 0, 0, 0.25);
        text-align: center;
        padding: 1em auto;
        width: 100%;
    }

    .title h1, .title h2 {
        color: white;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        margin: .6rem auto;
    }

    .title h1 {
        font-size: ${theme.titleSizeMobile};
        font-family: ${theme.titleFont}; 
    }
    
    .title h2 {
        font-size: ${theme.subtitleSizeMobile};
        font-weight: 100;
    }

    .project {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 90%;
        margin: auto;
        padding: 1em;
    }

    .project-description {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .project-description h3 {
        font-size: ${theme.subtitleSizeMobile};
        text-align: center;
        font-weight: bold;
    }

    .project-description p, .projects-skills {
        line-height: 1.5rem;
        padding: 17px;
        font-size: ${theme.textSizeMobile};
    }

    .projects-skills {
        margin-bottom: 1em;
    }

    .project-img {
        display: flex;
        justify-content: center;
    }

    .project-img img {
        max-width: 150px;
        max-height: 150px;
        margin: 2rem 0.5rem;
    }

    .project-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
    }

    .project-btn a {
        color: black;
        text-align: center;
        text-decoration: none;
    }

    .btn {
        font-size: ${theme.textSizeMobile};
        width: 80%;
        font-family: ${theme.contentFont};
        padding: .5rem;
        margin: .5rem auto;
        background-color: white;
        border: 2px solid black;
        position: relative;
        transition: .6s;
    }

    .btn:hover {
        cursor: pointer;
        background-color: black;
        color: white;
        transition: .6s;
    }

    .btn:hover .tooltip {
        opacity: 1;
        transition: .6s;
    }

    .tooltip {
        background-color: ${theme.linkColor};
        border: 1px solid ${theme.linkColor};
        color: white;
        padding: .3rem 0;
        font-size: 18px;
        text-align: center;
        width: 100%;
        position: absolute;
        z-index: 1;
        top: -2.2rem;
        left: 0;
        opacity: 0;
        transition: .6s;
        pointer-events: none;
    }

    .tooltip::after {
        content: " ";
        position: absolute;
        top: 100%; /* At the bottom of the tooltip */
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: ${theme.linkColor} transparent transparent transparent;
    }

    @media screen and (max-height: 415px){

        .banner img {
            height: 12rem;
        }

        .title {
            top: 5rem;
        }
    }

    @media screen and (min-width: 760px) and (min-height: 550px){

        .banner img {
            height: 18rem;
        }

        .title {
            top: 8rem;
        }

        .title h1 {
            font-size: ${theme.titleSizeTablet};
        }
        
        .title h2 {
            font-size: ${theme.subtitleSizeTablet};
        }

        .project-description h3 {
            font-size: ${theme.subtitleSizeTablet};
            text-align: center;
            margin: 2rem auto 1rem;
        }

        .project-description p, .projects-skills {
            line-height: 2rem;
            font-size: ${theme.textSizeTablet};
        }

        .project-img img {
            max-width: 300px;
            max-height: 300px;
            margin: 2rem 1rem;
        }

        .btn {
            font-size: ${theme.textSizeTablet};
        }

    }

    @media screen and (min-width: 1300px){

        .banner img {
            height: 30rem;
        }

        .title {
            top: 15rem;
        }

        .project-description h3 {
            margin: 3rem auto 2rem;
        }

        .project-img img {
            max-width: 39%;
            max-height: auto;
        }
    }

    @media screen and (min-width: 1425px){

        .banner {
            height: 75vh;
        }

        .banner img {
            height: 100%;
        }

        .title {
            top: 70%;
        }

        .title h1, .title h2 {
            margin: 1.3rem auto;
        }

        .title h1 {
            font-size: ${theme.bigTitleSize};
        }
        
        .title h2 {
            font-size: ${theme.titleSize};
        }
        
        .project {
            padding: 80px 0px;
            flex-direction: row;
        }

        .project-description {
            width: 50%;
        }

        .project-description h3 {
            font-size: ${theme.subtitleSize};
        }

        .project-description p {
            font-size: ${theme.textSize};
        }

        .projects-skills li {
            font-size: ${theme.textSize};
        }

        .project-img-btn {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .project-img img {
            width: 350px;
            max-height: 350px;
        }

        .btn {
            font-size: ${theme.titleSize};
            padding: 1rem;
            margin: 1rem auto;
        }
    }

`

export default ProjectDetailsStyled;