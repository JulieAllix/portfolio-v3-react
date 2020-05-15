import styled from 'styled-components';

const NavbarStyled = styled.div`

    .pages {
        display: flex;
        flex-direction: row;
        position: absolute;
        top: 0%;
        width: 100%;
        justify-content: space-around;
        margin-top: 1rem;
    }

    .page-1 {
        display: flex;
        flex-direction: column;
    }

    .pages > div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .pages h4 {
        font-size: 14px;
        cursor: pointer;
    }

    .slide {
        display: none;
    }

    .pages svg {
        cursor: pointer;
        opacity: 0.5;
        transform: scale(1.5);
    }

    .pages svg:hover {
        animation: dot 0.5s ease-in-out infinite alternate;
    }

    @keyframes dot {
        0% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(2.5);
        }
    }
    .pages svg.active {
        opacity: 1;
    }
    .pages h4.active {
        font-weight: bold;
        text-decoration: underline;
    }

    @media screen and (max-height: 415px){



    }

    @media screen and (min-width: 760px) and (min-height: 550px){
        
        .pages h4 {
            font-size: 24px;
        }

    }
    
    /*
    @media screen and (min-width: 1025px){
        */
    @media screen and (min-width: 1425px){

        .pages {
            flex-direction: column;
            right: 5%;
            top: 50%;
            transform: translateY(-50%);
            width: 15%;
            margin-top: 0;
        }

        .page-1 {
            flex-direction: row;
        }

        .pages h4 {
            padding: 30px;
            justify-self: flex-end;
            cursor: auto;
        }

        .pages h4.active {
            font-weight: 100;
            text-decoration: none;
        }

        .slide {
            display: flex;
        }

    }

    @media screen and (min-width: 1780px) {
        .pages {
            width: 12%;
        }
    }

    @media screen and (min-width: 1900px) {
        


    }


*/
`

export default NavbarStyled;