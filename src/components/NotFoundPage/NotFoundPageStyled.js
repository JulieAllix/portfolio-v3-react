import styled from 'styled-components';
import theme from '../../styles/theme';

const NotFoundPageStyled = styled.div`

    .wrapper {
        background-image: radial-gradient(#524D74, #0B1023);
        background-size: cover;
        min-height: 100vh;
        min-height: calc(var(--vh, 1vh) * 100);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .message h1 {
        font-family: ${theme.titleFont};
        font-size: ${theme.bigTitleSizeMobile};
        text-align: center;
        line-height: 5rem;
        margin-top: 4rem;
    }

    .message h2 {
        font-size: ${theme.titleSizeMobile};
        text-align: center;
    }
    
    .error-image {
        margin: 3rem;
        padding: 0;
    }

    .error-image img {
        width: 280px;
        height: 100%;
        border: 2px solid white;
    }

    .navbar {
        margin-bottom: 4rem;
    }

    .navbar-link {
        padding: 1rem;
        cursor: pointer;
    }

    .navbar-link:hover h2 {
        text-decoration: underline;
    }

    .navbar-link h2 {
        color: white;
        font-size: ${theme.subtitleSizeMobile};
    }

    @media screen and (min-width: 760px) and (min-height: 550px){

        .message h1 {
            font-size: ${theme.bigTitleSizeTablet};
            line-height: 5rem;
        }

        .message h2 {
            font-size: ${theme.titleSizeTablet};
        }

        .error-image img {
            width: 600px;
        }

        .navbar-link h2 {
            font-size: ${theme.subtitleSizeTablet};
        }

    }

    @media screen and (min-width: 1425px){

        .message h1 {
            font-size: ${theme.bigTitleSize};
            line-height: 5rem;
        }

        .message h2 {
            font-size: ${theme.titleSize};
        }

        .error-image img {
            width: 700px;
        }

        .navbar-link h2 {
            font-size: ${theme.subtitleSize};
        }

    }

`

export default NotFoundPageStyled;