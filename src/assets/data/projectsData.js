import iconStudyCards from '../img/study-cards-ico.jpg';
import bgStudyCards from '../img/study-cards-lg.JPG';
import oneStudyCards from '../img/study-cards-1.JPG';
import twoStudyCards from '../img/study-cards-2.JPG';

import iconBreakfree from '../img/breakfree-ico.jpg';
import bgBreakfree from '../img/breakfree-lg.JPG';
import oneBreakfree from '../img/breakfree-1.JPG';
import twoBreakfree from '../img/breakfree-2.JPG';

import iconGrocereaz from '../img/grocereaz-ico.JPG';
import bgGrocereaz from '../img/grocereaz-lg.JPG';
import oneGrocereaz from '../img/grocereaz-1.JPG';
import twoGrocereaz from '../img/grocereaz-2.JPG';

import iconPortfolioV1 from '../img/portfolio-v1-ico.JPG';
import bgPortfolioV1 from '../img/portfolio-v1-lg.JPG';
import onePortfolioV1 from '../img/portfolio-v1-1.JPG';
import twoPortfolioV1 from '../img/portfolio-v1-2.JPG';

import iconPortfolioV2 from '../img/portfolio-v2-ico-lg.JPG';
import bgPortfolioV2 from '../img/portfolio-v2-lg.JPG';
import onePortfolioV2 from '../img/portfolio-v2-1.JPG';
import twoPortfolioV2 from '../img/portfolio-v2-2.JPG';

export default [
    {
        id: 1,
        projectClass: 'studyCards',
        iconClass: 'project-ico',
        slug: 'study-cards',
        highlightedProject: 'studyCardsIsHighlighted',
        projectName: 'Study Cards',
        projectSubtitle: 'My first personal project',
        iconImage: iconStudyCards,
        bgImage: bgStudyCards,
        imageOne: oneStudyCards,
        imageTwo: twoStudyCards,
        alt: 'My first personal project: Study Cards',
        about: 'The aim of this project was to help me learning the basics of html and css by mixing theory and practice. Those are study cards where I can find useful tips I learned in class (theory) in the shape of a website (practice). I added a toggle switch giving the opportunity to the user to choose between two themes.',
        timing: 'This was my first personal project. I worked on it during the very first weeks of my training (October 2019), and progressively updated it with the new knowledge I acquired.',
        skillsUsed: ['HTML / CSS', 'Flexbox'],
        skillsDiscovered: ['CSS variables', 'Theme switch'],
        projectUrl: 'http://julieallix.com/project-study-cards/',
        gitHubUrl: 'https://github.com/JulieAllix/fiche-revisions-oclock',
    },
    {
        id: 2,
        projectClass: 'breakFree',
        iconClass: 'project-ico',
        slug: 'break-free',
        highlightedProject: 'breakFreeIsHighlighted',
        projectName: 'Break Free',
        projectSubtitle: 'My first game in JavaScript',
        iconImage: iconBreakfree,
        bgImage: bgBreakfree,
        imageOne: oneBreakfree,
        imageTwo: twoBreakfree,
        alt: 'The game I created in JS: Break Free',
        about: "I started this project because I was curious about basic videogames design. I first followed <a target=\"_blank\" href=\"https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript\">this mozilla tutorial</a>. Then I adapted the code to organize it differently, created variables enabling to design different levels quickly. And I added new functionalities : an input request to get the name of the player, 4 levels of difficulty, a connection to a database to send the score of the player and to display the top 20 scores for each level.",
        timing: 'This is my second personal project. I worked on it during the month of November 2019.',
        skillsUsed: ['JavaScript', 'Cookies', 'SQL / Databases'],
        skillsDiscovered: ['Canvas', '2D animation'],
        projectUrl: 'http://julieallix.com/project-break-free/',
        gitHubUrl: 'https://github.com/JulieAllix/break-free',
    },
    {
        id: 3,
        projectClass: 'grocereaz',
        iconClass: 'project-ico',
        slug: 'grocereaz',
        highlightedProject: 'grocereazIsHighlighted',
        projectName: 'Grocer\'eaz',
        projectSubtitle: 'My end of studies project',
        iconImage: iconGrocereaz,
        bgImage: bgGrocereaz,
        imageOne: oneGrocereaz,
        imageTwo: twoGrocereaz,
        imageOneAlt: 'Recipe menu of Grocer\'eaz',
        imageTwoAlt: 'A grocery list of Grocer\'eaz',
        alt: 'My end of studies project : Grocer\'eaz',
        about: 'This is my end of studies project: in a team of four students, we had to design and code a website. I was the product owner, and part of the frontend team. We used React for the front and Symfony for the back. Grocereaz displays recipes coming from an external API and enables the connected user to save his favorite recipes and to generate grocery lists from the recipes he would like to cook.',
        timing: 'We started this project in February 2020 and it lasted one month: one week of conception, two weeks of coding, one week for fixing the bugs and put the project online.',
        skillsUsed: ['React / Redux', 'Functional components', 'Axios', 'Git / Github', 'Styled Components', 'Responsive design', 'Semantic UI' ],
        skillsDiscovered: ['Agile method', 'Teamwork', 'APIs', 'Git conflicts', 'Wireframes'],
        projectUrl: 'http://ec2-3-95-187-31.compute-1.amazonaws.com/',
        gitHubUrl: 'https://github.com/JulieAllix/projet-grocereaz',
    },
    {
        id: 4,
        projectClass: 'portfoliov1',
        iconClass: 'project-ico',
        slug: 'portfolio-v1',
        highlightedProject: 'portfolioV1IsHighlighted',
        projectName: 'Portfolio - v1',
        projectSubtitle: 'A former version of my portfolio',
        iconImage: iconPortfolioV1,
        bgImage: bgPortfolioV1,
        imageOne: onePortfolioV1,
        imageTwo: twoPortfolioV1,
        alt: 'The v1 of my portfolio',
        about: 'This is the first version of my portfolio, presenting my personal projects. A previous version developped with Lumen was created in January 2020 (the v0, not available online), but I decided to create a new version developped in React.',
        timing: 'I worked on this project after the end of my bootcamp, in April 2020.',
        skillsUsed: ['React / Redux', 'Styled Components', 'Responsive Design'],
        skillsDiscovered: ['Class components', 'Unit tests'],
        projectUrl: 'http://julieallix.com/project-portfolio-v1/',
        gitHubUrl: 'https://github.com/JulieAllix/portfolio-v1-react',
    },
    {
        id: 5,
        projectClass: 'portfoliov2',
        iconClass: 'project-ico-lg',
        slug: 'portfolio-v2',
        highlightedProject: 'portfolioV2IsHighlighted',
        projectName: 'Portfolio - v2',
        projectSubtitle: 'This portfolio',
        iconImage: iconPortfolioV2,
        bgImage: bgPortfolioV2,
        imageOne: onePortfolioV2,
        imageTwo: twoPortfolioV2,
        alt: 'The v2 of my portfolio',
        about: 'This is the second version of my portfolio. The goal of this project was to improve the general design with the help of Figma and use JavaScript animations.',
        timing: 'I worked on this project on May 2020.',
        skillsUsed: ['HTML / CSS', 'JavaScript', 'Responsive Design'],
        skillsDiscovered: ['Figma', 'JavaScript animations (Gsap)'],
        projectUrl: 'http://julieallix.com/',
        gitHubUrl: 'https://github.com/JulieAllix/portfolio-v2-react',
    },

];