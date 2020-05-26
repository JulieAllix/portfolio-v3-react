import styled from 'styled-components';
import theme from '../../styles/theme';

const HomeStyled = styled.div`

    .details {
        grid-column: 2/3;
        height: 20vh;
        height: calc(var(--vh, 1vh) * 20);
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        margin-top: 1rem;
    }

    .details h1 {
        font-family: ${theme.titleFont};
        font-weight: 100;
        text-align: center;
        font-size: ${theme.bigTitleSizeMobile};
        margin-top: 1rem;
    }

    .details h2 {
        text-align: center;
        font-size: ${theme.titleSizeMobile};
        margin: .5rem;
    }

    @media screen and (max-height: 415px){

        .details {
            margin-top: 3rem;
        }

        .details h1 {
            font-size: ${theme.bigTitleSizeMobileHorizontal};
        }

        .details h2 {
            font-size: ${theme.titleSizeMobileHorizontal};
        }

    }

    @media screen and (min-width: 760px) and (min-height: 550px){

        .details h1 {
            font-size: ${theme.bigTitleSizeTablet};
        }

        .details h2 {
            font-size: ${theme.titleSizeTablet};
        }

    }

    @media screen and (min-width: 1425px){

        .details {
            grid-column: 2/3;
            align-self: end;
            margin-bottom: 7rem;
        }

        .details h1 {
            font-size: ${theme.bigTitleSize};
            margin-top: 0;
        }

        .details h2 {
            font-size: ${theme.titleSize};
            padding-top: 1rem;
        }

    }

`

export default HomeStyled;