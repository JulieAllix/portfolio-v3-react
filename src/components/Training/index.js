import React from 'react';

import OtherStyled from '../OtherStyled';

import otherData from 'assets/data/otherData';
const data = otherData[0];
const content = data.content;
const photoLeft = data.imgLeft;
const photoRight = data.imgRight;

class Training extends React.Component {
  render() {
    return (
      <OtherStyled>
        <section className="standard-page training page">
            <div className="details-txt detail">
                <h1>{data.name}</h1>
                  {content.map((section) => (
                    <div key={section.id}>
                      <h3 >{section.subtitle}</h3>
                        {section.paragraphs.map((paragraph) => (
                          <p className="p-content" key={paragraph.id}>{paragraph.text}</p>
                        ))}
                    </div>
                  ))}
            </div>
            <div className="hero rest">
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
                  alt="A computer"
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
                  alt="A computer"
                />
              </picture>
            </div>
        </section>
      </OtherStyled>
    );
  }
}

export default Training;