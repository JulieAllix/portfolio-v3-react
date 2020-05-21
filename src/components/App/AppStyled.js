import styled from 'styled-components';
import theme from '../../styles/theme';

const AppStyled = styled.div`

    font-size: 16px;
    font-weight: 100;
    font-family: ${theme.contentFont};
    color: ${theme.fontColor};
    
    a {
        color: ${theme.linkColor};
        text-decoration: none;
    }

    .portfolio {
        background-image: radial-gradient(#4B4B4B, #0B1023);
        background-size: cover;
    }

    .standard-page, .page-projects {
        min-height: 100vh;
        min-height: calc(var(--vh, 1vh) * 100);
        display: grid;
        grid-template-columns: 5% 1fr 5%;
    }

    .page-projects, .training, .contact {
        display: none;
        width: 100%;
        opacity: 0;
        pointer-events: none;
    }

    .hero {
        height: 290px;
        grid-column: 2/3;
        justify-self: center;
        display: flex;
        flex-direction: row;
        align-items:center;
        justify-content: center;
        overflow: hidden;
        margin: 2rem auto;
    }

    .hero img {
        transition: transform 0.3s ease-out;
        height: 290px;
        width: auto;
    }

    .hero:hover .photo-right {
        transform: translate(0%, 0%);
    }

    .hero:hover .photo-left {
        transform: translate(0%, 0%);
    }

    .photo-left {
        transform: translate(0%, -5%);
    }

    .photo-right {
        transform: translate(0%, 5%);
    }

    .details-txt {
        grid-column: 2/3;
        align-self: center;
    }

    .details-txt h1 {
        font-family: ${theme.titleFont};
        font-size: ${theme.titleSizeMobile};
        text-align: center;
        margin-top: 4rem;
        padding-bottom: 2rem;
    }

    @media screen and (max-height: 415px){

        .hero {
            height: 180px;
        }

        .hero img {
            height: 180px;
        }

    }

    @media screen and (min-width: 760px) and (min-height: 550px){

        .hero {
            height: 450px;
        }

        .hero img {
            height: 450px;
        }

        .details-txt h1 {
            font-size: ${theme.titleSizeTablet};
            margin: 4rem auto 1rem;
        }

    }

    @media screen and (min-width: 1425px){
        
        overflow: hidden;

        .standard-page, .page-projects {
            grid-template-columns: 5% 1fr 1fr 1fr 5%;
        }

        .details-txt h1 {
            font-size: ${theme.subtitleSizeTablet};
        }

        .hero {
            height: 390px;
            align-self: center;
            grid-column: 3/4;
        }

        .hero img {
            height: 390px;
        }
    
    }

    @media screen and (min-width: 1780px){
        .details-txt h1 {
            font-size: ${theme.titleSizeTablet};
        }
    }
    
`

export default AppStyled;