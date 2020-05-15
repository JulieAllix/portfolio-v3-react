import styled from 'styled-components';
import theme from '../../styles/theme';

const ProjectsStyled = styled.div`
    overflow-x: hidden;

    background-image: radial-gradient(#225D94, #0B1023);
    background-size: cover;

    .details-projects {

/*
        height: 20vh;
        height: calc(var(--vh, 1vh) * 20);
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
*/
        border: 2px solid white;
        /*
        align-self: center;
        margin-top: 2em;
        */
    }

    .p-skills {
        display: none;
    }

    .p-skills-tactile {
        display: block;
        text-align: center;
        font-size: ${theme.contentSizeMobile};
        margin-top: 1rem;
    }

    .skills {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        list-style: none;
        padding-top: 2rem;
    }

    .skill {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-bottom: .5em;
    }

    .skill-lg {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .logo-skill {
        height: 50px;
    }

    .logo-skill-lg {
        width: 50px;
        align-self: center;
    }

    .skill-name {
        padding: 5px 0;
        font-size: ${theme.contentSizeMobile}
    }
/*




    /* Mobile */
/*
    .hero-projects {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: center;
    }

    .hero-projects img {
        max-width: 280px;
    }

    .project-ico {
        width: 300px;
        height: 300px;
        margin: 5px;
        filter: grayscale(1);
        transition: .6s;
    }

    .project-ico-lg {
        width: 300px;
        margin: 5px;
        filter: grayscale(1);
        transition: .6s;
    }

    /* Fin mobile 

    .hero-projects a {
        text-decoration: none;
    }

    .project-ico:hover, .project-ico-lg:hover {
        filter: none;
        transform: scale(1.1);
        transition: .6s;
    }

    @media screen and (max-height: 415px){



    }
*/
    @media screen and (min-width: 760px) and (min-height: 550px){

        .p-skills-tactile {
            font-size: ${theme.contentSizeTablet};
            margin-top: .8em;
        }

        .logo-skill {
            height: 70px;
        }

        .logo-skill-lg {
            width: 70px;
            align-self: center;
        }

        .skill-name {
            font-size: ${theme.contentSizeTablet};
            padding-top: 1rem;
        }
        /*
        .hero-projects {
            align-self: center;
            justify-self: center;
            margin-left: 10em;
        }

        .project-ico {
            width: 200px;
            height: 200px;
        }

        .project-ico-lg {
            width: 415px;
        }
*/
    }

    @media screen and (min-width: 1025px){

        .details-projects {
            padding: 1.5rem;
            width: 32vw;
        }

        .p-skills {
            display: block;
            text-align: center;
            font-size: ${theme.contentSizeTablet};
            margin-top: 1.5rem;
        }

        .p-skills-tactile {
            display: none;
        }

        .skills {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        .skill {
            margin: .7rem;
        }
        
        .skill-name {
            font-size: ${theme.contentSize}
        }

        .logo-skill {
            height: 80px;
        }

        .logo-skill-lg {
            width: 80px;
        }



    }

`

export default ProjectsStyled;