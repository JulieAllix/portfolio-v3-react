import training_left_imagelg1xwebp from '../img/computer-left-r-lg_1x.webp';
import training_left_imagelg2xwebp from '../img/computer-left-r-lg_2x.webp';
import training_left_imagemd1xwebp from '../img/computer-left-r-md_1x.webp';
import training_left_imagemd2xwebp from '../img/computer-left-r-md_2x.webp';
import training_left_imagesm1xwebp from '../img/computer-left-r-sm_1x.webp';
import training_left_imagesm2xwebp from '../img/computer-left-r-sm_2x.webp';
import training_left_imagesm1xjpg from '../img/computer-left-r-sm_1x.jpg';
import training_left_imagemd1xjpg from '../img/computer-left-r-md_1x.jpg';
import training_left_imagelg1xjpg from '../img/computer-left-r-lg_1x.jpg';

import training_right_imagelg1xwebp from '../img/computer-right-r-lg_1x.webp';
import training_right_imagelg2xwebp from '../img/computer-right-r-lg_2x.webp';
import training_right_imagemd1xwebp from '../img/computer-right-r-md_1x.webp';
import training_right_imagemd2xwebp from '../img/computer-right-r-md_2x.webp';
import training_right_imagesm1xwebp from '../img/computer-right-r-sm_1x.webp';
import training_right_imagesm2xwebp from '../img/computer-right-r-sm_2x.webp';
import training_right_imagesm1xjpg from '../img/computer-right-r-sm_1x.jpg';
import training_right_imagemd1xjpg from '../img/computer-right-r-md_1x.jpg';
import training_right_imagelg1xjpg from '../img/computer-right-r-lg_1x.jpg';


import contact_left_imagelg1xwebp from '../img/photo-2-left-lg_1x.webp';
import contact_left_imagelg2xwebp from '../img/photo-2-left-lg_2x.webp';
import contact_left_imagemd1xwebp from '../img/photo-2-left-md_1x.webp';
import contact_left_imagemd2xwebp from '../img/photo-2-left-md_2x.webp';
import contact_left_imagesm1xwebp from '../img/photo-2-left-sm_1x.webp';
import contact_left_imagesm2xwebp from '../img/photo-2-left-sm_2x.webp';
import contact_left_imagesm1xjpg from '../img/photo-2-left-sm_1x.jpg';
import contact_left_imagemd1xjpg from '../img/photo-2-left-md_1x.jpg';
import contact_left_imagelg1xjpg from '../img/photo-2-left-lg_1x.jpg';

import contact_right_imagelg1xwebp from '../img/photo-2-right-lg_1x.webp';
import contact_right_imagelg2xwebp from '../img/photo-2-right-lg_2x.webp';
import contact_right_imagemd1xwebp from '../img/photo-2-right-md_1x.webp';
import contact_right_imagemd2xwebp from '../img/photo-2-right-md_2x.webp';
import contact_right_imagesm1xwebp from '../img/photo-2-right-sm_1x.webp';
import contact_right_imagesm2xwebp from '../img/photo-2-right-sm_2x.webp';
import contact_right_imagesm1xjpg from '../img/photo-2-right-sm_1x.jpg';
import contact_right_imagemd1xjpg from '../img/photo-2-right-md_1x.jpg';
import contact_right_imagelg1xjpg from '../img/photo-2-right-lg_1x.jpg';


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
                        text: 'Two-hours challenges on a daily basis, eight peer-programming workshop days, one month of full-time project with a team...'
                    }
                ]
            },
        ],
        imgLeft: {
            photoSourceLg: training_left_imagelg1xwebp + ' 1x,' + training_left_imagelg2xwebp + ' 2x',
            photoSourceMd: training_left_imagemd1xwebp + ' 1x,' + training_left_imagemd2xwebp + ' 2x',
            photoSourceSm: training_left_imagesm1xwebp + ' 1x,' + training_left_imagesm2xwebp + ' 2x',
            photoImageAll: training_left_imagesm1xjpg + ' 760w,' + training_left_imagemd1xjpg + ' 1425w,' + training_left_imagelg1xjpg + ' 1440w',
            photoimagelg_1xjpg: training_left_imagelg1xjpg,
        },
        imgRight: {
            photoSourceLg: training_right_imagelg1xwebp + ' 1x,' + training_right_imagelg2xwebp + ' 2x',
            photoSourceMd: training_right_imagemd1xwebp + ' 1x,' + training_right_imagemd2xwebp + ' 2x',
            photoSourceSm: training_right_imagesm1xwebp + ' 1x,' + training_right_imagesm2xwebp + ' 2x',
            photoImageAll: training_right_imagesm1xjpg + ' 760w,' + training_right_imagemd1xjpg + ' 1425w,' + training_right_imagelg1xjpg + ' 1440w',
            photoimagelg_1xjpg: training_right_imagelg1xjpg,
        }
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
        imgLeft: {
            photoSourceLg: contact_left_imagelg1xwebp + ' 1x,' + contact_left_imagelg2xwebp + ' 2x',
            photoSourceMd: contact_left_imagemd1xwebp + ' 1x,' + contact_left_imagemd2xwebp + ' 2x',
            photoSourceSm: contact_left_imagesm1xwebp + ' 1x,' + contact_left_imagesm2xwebp + ' 2x',
            photoImageAll: contact_left_imagesm1xjpg + ' 760w,' + contact_left_imagemd1xjpg + ' 1425w,' + contact_left_imagelg1xjpg + ' 1440w',
            photoimagelg_1xjpg: contact_left_imagelg1xjpg,
        },
        imgRight: {
            photoSourceLg: contact_right_imagelg1xwebp + ' 1x,' + contact_right_imagelg2xwebp + ' 2x',
            photoSourceMd: contact_right_imagemd1xwebp + ' 1x,' + contact_right_imagemd2xwebp + ' 2x',
            photoSourceSm: contact_right_imagesm1xwebp + ' 1x,' + contact_right_imagesm2xwebp + ' 2x',
            photoImageAll: contact_right_imagesm1xjpg + ' 760w,' + contact_right_imagemd1xjpg + ' 1425w,' + contact_right_imagelg1xjpg + ' 1440w',
            photoimagelg_1xjpg: contact_right_imagelg1xjpg,
        },
        contactInfo: [
            {
                id: 1,
                text: 'allixjulie@gmail.com',
                icon: mail,
                alt: 'Mail icon',
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