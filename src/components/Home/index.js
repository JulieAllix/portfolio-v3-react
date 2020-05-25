import React from 'react';
import homeData from 'assets/data/homeData';

import HomeStyled from './HomeStyled';

const photoLeft = homeData[0];
const photoRight = homeData[1];

class Home extends React.Component {
  render() {
    return (
      <HomeStyled>
        <section className="standard-page home page">
          <div className="details detail">
              <h1>Julie Allix</h1>
              <h2>Frontend Developer</h2>
          </div>
          <div className="hero">
              <picture className="src photo-left">
                <source
                  media="(min-width: 1425px)"
                  srcSet={photoLeft.photoSourceLg}   
                  type="image/webp"
                /> 
                <source  
                  media="(min-width: 760px)"   
                  srcSet={photoLeft.photoSourceMd}   
                  type="image/webp"
                />
                <source   
                  srcSet={photoLeft.photoSourceSm}  
                  type="image/webp"
                />
                <img   
                  srcSet={photoLeft.photoImageAll}   
                  src={photoLeft.photoImagelg_1xjpg}   
                  type="image/jpeg"   
                  alt="Julie Allix"
                />
              </picture>
              <picture className="src photo-right">
                <source
                  media="(min-width: 1425px)"
                  srcSet={photoRight.photoSourceLg}   
                  type="image/webp"
                /> 
                <source 
                  media="(min-width: 760px)"   
                  srcSet={photoRight.photoSourceMd}   
                  type="image/webp"
                />
                <source  
                  srcSet={photoRight.photoSourceSm}  
                  type="image/webp"
                />
                <img   
                  srcSet={photoRight.photoImageAll}   
                  src={photoRight.photoImagelg_1xjpg}   
                  type="image/jpeg"   
                  alt="Julie Allix"
                />
              </picture>
          </div>
        </section>
      </HomeStyled>
    );
  }
}

export default Home;