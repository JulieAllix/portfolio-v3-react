import tinycolor from 'tinycolor2';

export const lighten = (color, percent) => tinycolor(color).lighten(percent).toString();
export const darken = (color, percent) => tinycolor(color).darken(percent).toString();

const theme = {

    /* Fonts */
    titleFont: 'Abril Fatface',
    contentFont: 'Poppins',

    /* Colors */

    /* Sizes */
    bigTitleSize: '4.5rem',
    titleSize: '3rem',
    contentSize: '1.1rem',
};

export default theme;