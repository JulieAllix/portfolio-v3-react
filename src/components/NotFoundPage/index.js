import React from 'react';
import { Link } from 'react-router-dom';

import data from 'assets/data/404Data';

import NotFoundPageStyled from './NotFoundPageStyled';

class NotFoundPage extends React.Component {
  render() {
    return (
      <NotFoundPageStyled>
        <div className="wrapper">
          <div className="message">
            <h1>Error 404</h1>
            <h2>This page does not exist</h2>
          </div>
          <div className="error-image">
            <picture className="src photo-left">
                <source
                  media="(min-width: 1425px)"
                  srcSet={data.photoSourceLg}   
                  type="image/webp"
                /> 
                <source  
                  media="(min-width: 760px)"   
                  srcSet={data.photoSourceMd}   
                  type="image/webp"
                />
                <source   
                  srcSet={data.photoSourceSm}  
                  type="image/webp"
                />
                <img   
                  srcSet={data.photoImageAll}   
                  src={data.photoImagelg_1xjpg}   
                  type="image/jpeg"   
                  alt="A sad pug"
                />
              </picture>
          </div>
          <div className="navbar">
            <Link to="/" >
              <div className="navbar-link">
                <h2>Home</h2>
              </div>
            </Link>
          </div>
        </div>
      </NotFoundPageStyled>
    );
  }
}

export default NotFoundPage;