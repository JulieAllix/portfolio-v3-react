import trainingLeft from '../img/computer-left-r.jpg';
import trainingRight from '../img/computer-right-r.jpg';
import contactLeft from '../img/photo-2-left.jpg';
import contactRight from '../img/photo-2-right.jpg';

import mail from '../img/mail.png';
import phone from '../img/phone.png';
import linkedIn from '../img/linkedin.png';
import git from '../img/git.png';

export default [
    {
        id: 1,
        name: 'My training at O\'clock',
        content: [
            {
                id: 1,
                subtitle: 'A virtual classroom',
                paragraphs: [
                    {
                        id: 1,
                        text: 'O\'clock is a French school based on a "teleworking" model : there is a virtual classroom with a teacher teaching from home.'
                    }
                    
                ]
            },
            {
                id: 2,
                subtitle: 'A well organized curriculum',
                paragraphs: [
                    {
                        id: 1,
                        text: 'Every weekday, the students get five hours of theoretical class and two hours of practical exercises in autonomy.'
                    },
                    {
                        id: 2,
                        text: 'The curriculum is composed of three months of learning the basics to become a web developer (html, css, php, js, sql), then one month of specialization (Symfony, React, or Wordpress) and one month of full-time team-project.'
                    }
                ]
            },
            {
                id: 3,
                subtitle: 'A lot of practical exercises',
                paragraphs: [
                    {
                        id: 1,
                        text: 'Two-hours challenges on a daily basis, eight peer-programming workshop days, one month of full-time project with a team ...'
                    }
                ]
            },
        ],
        imgLeft: trainingLeft,
        imgRight: trainingRight,
    },
    {
        id: 2,
        name: 'Contact',
        content: [
            {
                id: 1,
                subtitle: 'About me',
                paragraphs: [
                    {
                        id: 1,
                        text: 'Hello, my name is Julie and I\'m a French Web Developer. I love all kind of creative activities: after having experimented drawing, doing Photoshop designs, sewing, I now express my creativity by coding.'
                    },
                    {
                        id: 2,
                        text: 'I started my career in 2015 in the Supply Chain as a Distribution Planner for Saint Laurent Paris. Very quickly, I started learning Visual Basics in order to automatize my weekly reports on Excel. That\'s how I discovered my passion for coding. I see any coding challenge like a riddle to solve. I\'m addicted to the rewarding feeling I get when I solve a bug.'
                    },
                    {
                        id: 3,
                        text: 'In October 2019, I started a full-time five-months-training with O\'clock and moved from Paris to Barcelona.'
                    },
                ]
            },
        ],
        imgLeft: contactLeft,
        imgRight: contactRight,
        contactInfo: [
            {
                id: 1,
                text: 'allixjulie@gmail.com',
                icon: mail,
                alt: 'Mail icon',
            },
            {
                id: 2,
                text: '+33 7 63 20 29 87',
                icon: phone,
                alt: 'Phone icon',
            }
        ],
        contactInfoWithLink: [
            {
                id: 1,
                text: 'LinkedIn',
                icon: linkedIn,
                alt: 'Linkedin icon',
                href: 'https://www.linkedin.com/in/julieallix/',
            },
            {
                id: 2,
                text: 'GitHub',
                icon: git,
                alt: 'Git icon',
                href: 'https://github.com/JulieAllix',
            }
        ]
    },
];