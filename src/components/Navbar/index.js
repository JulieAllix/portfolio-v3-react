import React from 'react';
// import classNames from 'classnames';
import $ from 'jquery';
import NavbarStyled from './NavbarStyled';

//import handleClick from 'function/handleClick';
import { changeDots, bold } from 'function/changeDots';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    /*
    this.highlight = this.highlight.bind(this);
    this.state = {
      home: true,
      projects: false,
      training: false,
      contact: false,
    };
    */
    this.test = this.test.bind(this);
  }
/*
  highlight(element, bool) {
    switch (element) {
      case 'home':
        this.setState({
          home: bool,
        });
        break;
      case 'projects':
        this.setState({
          projects: bool,
        });
        break;
      case 'training':
        this.setState({
          training: bool,
        });
        break;
      case 'contact':
        this.setState({
          contact: bool,
        });
        break;
      default:
        break;
    }
  }
  */

  test() {
    console.log('I click !');
  }

  componentDidMount() {
    console.log('component navbar DidMount');
    const slides = document.querySelectorAll('.slide');
    const pages = document.querySelectorAll('.page-name');

    slides.forEach((slide, index) => {
      $('.slide').on('click', (event) => {
        const dot = event.currentTarget;
        changeDots(slides, dot);
        /*
        nextSlide(index);
        */
      });
    });

    pages.forEach((page, index) => {
      $('.page-name').on('click', (event) => {
        const page = event.currentTarget;
        bold(pages, page);
      });
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
                    id="home"
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
                    id="projects"
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
                    id="training"
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
                    id="contact"
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