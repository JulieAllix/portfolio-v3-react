import styled from 'styled-components';
import theme from '../../styles/theme';

const HomeStyled = styled.div`
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    background-image: radial-gradient(#4B4B4B, #0B1023);
    background-size: cover;
    color: ${theme.fontColor};

    .portfolio {
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
    }

    .standard-page {
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        display: grid;
        grid-template-columns: 5% 1fr 5%;
    }

    .details {
        grid-column: 2/3;
        height: 20vh;
        height: calc(var(--vh, 1vh) * 20);
        border: 2px solid red;
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
    }

    .details h1 {
        font-family: ${theme.titleFont};
        font-weight: 100;
        text-align: center;
        font-size: ${theme.bigTitleSizeMobile};
    }

    .details h2 {
        text-align: center;
        font-size: ${theme.titleSizeMobile};
        margin: .5rem;
    }

    .hero {
        height: 290px;
        grid-column: 2/3;
        justify-self: center;
        display: flex;
        flex-direction: row;
        align-items:center;
        justify-content: center;
        border: 3px solid blue;
    }

    .hero img {
        transition: transform 0.3s ease-out;
        height: 290px;
        width: auto;
    }

    .photo-left {
        transform: translate(0%, -5%);
    }

    .photo-right {
        transform: translate(0%, 5%);
    }

    .hero:hover .photo-right {
        transform: translate(0%, 0%);
    }

    .hero:hover .photo-left {
        transform: translate(0%, 0%);
    }

    @media screen and (max-height: 415px){

        .details h1 {
            font-size: ${theme.bigTitleSizeMobileHorizontal};
        }

        .details h2 {
            font-size: ${theme.titleSizeMobileHorizontal};
        }
        
        .hero {
            height: 200px;
        }
        .hero img {
            height: 200px;
        }

    }

    @media screen and (min-width: 600px){



    }

/*



    @media only screen and (max-width: 600px) {

        .hero img {
            width: 120px;
        }

    }

    @media only screen and (min-width: 600px){



    }

    @media only screen and (min-width: 768px){

        .details h1 {
            font-size: ${theme.bigTitleSizeTablet};
        }

        .details h2 {
            font-size: ${theme.titleSizeTablet};
        }

        .hero img {
            
        }


    }

    @media only screen and (min-width: 1024px){

        .hero img {
            
        }

    }

    @media only screen and (min-height: 370px){

        .hero img {
            
        }

    }

*/
`

export default HomeStyled;