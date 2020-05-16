import styled from 'styled-components';
import theme from '../../styles/theme';

const TestStyled = styled.div`

    .details {
        grid-column: 2/3;
        height: 20vh;
        height: calc(var(--vh, 1vh) * 20);
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
        margin-top: 1rem;
    }

    .details h2 {
        text-align: center;
        font-size: ${theme.titleSizeMobile};
        margin: .5rem;
    }
/*
    .hero {
        height: 290px;
        grid-column: 2/3;
        justify-self: center;
        display: flex;
        flex-direction: row;
        align-items:center;
        justify-content: center;
        overflow: hidden;
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
*/
    @media screen and (max-height: 415px){

        .details {
            margin-top: 1rem;
        }

        .details h1 {
            font-size: ${theme.bigTitleSizeMobileHorizontal};
        }

        .details h2 {
            font-size: ${theme.titleSizeMobileHorizontal};
        }
        /*
        .hero {
            height: 180px;
        }

        .hero img {
            height: 180px;
        }
*/
    }

    @media screen and (min-width: 760px) and (min-height: 550px){

        .details h1 {
            font-size: ${theme.bigTitleSizeTablet};
        }

        .details h2 {
            font-size: ${theme.titleSizeTablet};
        }
        /*
        .hero {
            height: 450px;
        }

        .hero img {
            height: 450px;
        }
*/
    }
/*
    @media screen and (min-width: 1025px){
        */
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

/*
        .hero {
            height: 390px;
            align-self: center;
            grid-column: 3/4;
        }

        .hero img {
            height: 390px;
        }
*/
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

export default TestStyled;