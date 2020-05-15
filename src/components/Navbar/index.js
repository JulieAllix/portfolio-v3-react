import React from 'react';
import $ from 'jquery';
import NavbarStyled from './NavbarStyled';

import handleClick from 'function/handleClick';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }

  test() {
    console.log('I click !');
  }

  componentDidMount() {
    console.log('component navbar DidMount');
    const slides = document.querySelectorAll('.slide');
    const pages = document.querySelectorAll('.page-name');
    slides.forEach((slide, index) => {
      $('.slide').on('click', handleClick);
    });
    pages.forEach((page, index) => {
      $('.page-name').on('click', handleClick);
    });

    //document.addEventListener('wheel', handleClick);
  }

  render() {
    return (
      <NavbarStyled>
        <div className="pages">
            <div className="page-1">
                <h4 className="page-name">Home</h4>
                <svg
                    className="slide active"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="6" cy="6" r="6" fill="white" />
                </svg>
            </div>
            <div className="page-1">
                <h4 className="page-name">Projects</h4>
                <svg
                    className="slide"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="6" cy="6" r="6" fill="white" />
                </svg>
            </div>
            <div className="page-1">
                <h4 className="page-name">My training</h4>
                <svg
                    className="slide"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="6" cy="6" r="6" fill="white" />
                </svg>
            </div>
            <div className="page-1">
                <h4 className="page-name">Contact</h4>
                <svg
                    className="slide"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="6" cy="6" r="6" fill="white" />
                </svg>
            </div>
        </div>
      </NavbarStyled>
    );
  }
}

export default Navbar;