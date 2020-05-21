import React from 'react';
import { Link } from 'react-router-dom';

import errorImage from 'assets/img/pug-2.webp';

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
            <img src={errorImage} alt=""/>
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