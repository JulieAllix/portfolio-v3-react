import photo_left_imagelg1xwebp from '../img/photo-left-lg_1x.webp';
import photo_left_imagelg2xwebp from '../img/photo-left-lg_2x.webp';
import photo_left_imagemd1xwebp from '../img/photo-left-md_1x.webp';
import photo_left_imagemd2xwebp from '../img/photo-left-md_2x.webp';
import photo_left_imagesm1xwebp from '../img/photo-left-sm_1x.webp';
import photo_left_imagesm2xwebp from '../img/photo-left-sm_2x.webp';
import photo_left_imagesm1xjpg from '../img/photo-left-sm_1x.jpg';
import photo_left_imagemd1xjpg from '../img/photo-left-md_1x.jpg';
import photo_left_imagelg1xjpg from '../img/photo-left-lg_1x.jpg';

import photo_right_imagelg1xwebp from '../img/photo-right-lg_1x.webp';
import photo_right_imagelg2xwebp from '../img/photo-right-lg_2x.webp';
import photo_right_imagemd1xwebp from '../img/photo-right-md_1x.webp';
import photo_right_imagemd2xwebp from '../img/photo-right-md_2x.webp';
import photo_right_imagesm1xwebp from '../img/photo-right-sm_1x.webp';
import photo_right_imagesm2xwebp from '../img/photo-right-sm_2x.webp';
import photo_right_imagesm1xjpg from '../img/photo-right-sm_1x.jpg';
import photo_right_imagemd1xjpg from '../img/photo-right-md_1x.jpg';
import photo_right_imagelg1xjpg from '../img/photo-right-lg_1x.jpg';

export default [
    {
        photoSourceLg: photo_left_imagelg1xwebp + ' 1x,' + photo_left_imagelg2xwebp + ' 2x',
        photoSourceMd: photo_left_imagemd1xwebp + ' 1x,' + photo_left_imagemd2xwebp + ' 2x',
        photoSourceSm: photo_left_imagesm1xwebp + ' 1x,' + photo_left_imagesm2xwebp + ' 2x',
        photoImageAll: photo_left_imagesm1xjpg + ' 760w,' + photo_left_imagemd1xjpg + ' 1425w,' + photo_left_imagelg1xjpg + ' 1440w',
        photoimagelg_1xjpg: photo_left_imagelg1xjpg,
    },
    {
        photoSourceLg: photo_right_imagelg1xwebp + ' 1x,' + photo_right_imagelg2xwebp + ' 2x',
        photoSourceMd: photo_right_imagemd1xwebp + ' 1x,' + photo_right_imagemd2xwebp + ' 2x',
        photoSourceSm: photo_right_imagesm1xwebp + ' 1x,' + photo_right_imagesm2xwebp + ' 2x',
        photoImageAll: photo_right_imagesm1xjpg + ' 760w,' + photo_right_imagemd1xjpg + ' 1425w,' + photo_right_imagelg1xjpg + ' 1440w',
        photoimagelg_1xjpg: photo_right_imagelg1xjpg,
    }
]