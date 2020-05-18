import React from 'react';

import OtherStyled from '../OtherStyled';

import otherData from 'assets/data/otherData';
const data = otherData[1];
const content = data.content;

class Contact extends React.Component {
  render() {
    return (
      <OtherStyled>
        <section className="standard-page contact page" id="contact">
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
                  <h3>Contact information</h3>
                    <ul className="contact-list">
                      {data.contactInfo.map((info) => (
                        <li className="contact-info" key={info.id}>
                          <img
                              className="contact-icon"
                              src={info.icon}
                              alt={info.alt}
                          />
                          <span className="contact-name">{info.text}</span>
                        </li>
                      ))}
                      {data.contactInfoWithLink.map((info) => (
                        <li className="contact-info" key={info.id}>
                          <img
                              className="contact-icon"
                              src={info.icon}
                              alt={info.alt}
                          />
                          <a className="contact-link" href={info.href} target="_blank">
                            <span className="contact-name">
                              {info.text}
                              <div className="tooltip">
                                <span>Opens in a new tab</span>
                              </div>
                          </span>
                          </a>
                        </li>
                      ))}
                    </ul>
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
      </OtherStyled>
    );
  }
}

export default Contact;