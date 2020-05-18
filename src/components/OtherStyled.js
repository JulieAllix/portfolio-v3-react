import styled from 'styled-components';
import theme from '../styles/theme';

const TrainingStyled = styled.div`
   
   .details-txt {
        grid-column: 1/2;
        align-self: center;
        margin-bottom: 2rem;
    }

   .details-txt h1 {
        font-size: ${theme.titleSizeMobile};
    }

    .details-txt h3 {
        font-size: ${theme.subtitleSizeMobile};
        margin: 1rem auto;
        text-align: center;
    }

    .p-content {
        font-size: ${theme.textSizeMobile};
        margin-bottom: .8rem;
        line-height: 1.2rem;
    }

    .contact-list {
        list-style: none;
    }

    .contact-info {
        display: flex;
        align-items: center;
        margin-bottom: 1em;
    }
    
    .contact-icon {
        width: 25px;
        margin-right: 1em;
    }

    @media screen and (max-height: 415px){

        .details-txt h3 {
            text-align: left;
        }

    }

    @media screen and (min-width: 760px) and (min-height: 550px){

        .details-txt h1 {
            font-size: ${theme.titleSizeTablet};
            padding-top: 2rem;
        }

        .details-txt h3 {
            font-size: ${theme.subtitleSizeTablet};
            margin: 1.5rem auto;
            text-align: left;
        }

        .p-content {
            font-size: ${theme.textSizeTablet};
            line-height: 2rem;
        }

    }

    @media screen and (min-width: 1425px){

        .details-txt h1 {
            font-size: ${theme.titleSize};
        }

        .details-txt h3 {
            font-size: ${theme.subtitleSize};
            margin: 1.5rem auto;
        }

        .p-content {
            font-size: ${theme.textSize};
        }

    }

`

export default TrainingStyled;