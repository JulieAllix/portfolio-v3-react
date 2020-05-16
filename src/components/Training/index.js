import React from 'react';

import TrainingStyled from './TrainingStyled';

import otherData from 'assets/data/otherData';
const data = otherData[0];
const content = data.content;

class Training extends React.Component {
  render() {
    return (
      <TrainingStyled>
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
              <img
                  className="photo-left"
                  src={data.imgLeft}
                  alt="A computer"
              />
              <img
                  className="photo-right"
                  src={data.imgRight}
                  alt="A computer"
              />
            </div>
        </section>
      </TrainingStyled>
    );
  }
}

export default Training;