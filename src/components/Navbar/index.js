import React from 'react';
// import classNames from 'classnames';
import $ from 'jquery';
import NavbarStyled from './NavbarStyled';

//import handleClick from 'function/handleClick';
import { changeDots, bold, nextSlide } from 'function/changePage';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
    /*
    this.highlight = this.highlight.bind(this);
    this.state = {
      home: true,
      projects: false,
      training: false,
      contact: false,
    };
    */
  }
  test() {
    console.log('oui oui ouiii !');
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

  componentDidMount() {
    const slides = document.querySelectorAll('.slide');
    const pageNames = document.querySelectorAll('.page-name');
    const pages = document.querySelectorAll('.page');

    // Tracker
    let current = 0;
    let scrollSlide = 0;

    slides.forEach((slide, index) => {
      slide.addEventListener('click', function(event) {
        const dot = event.currentTarget;
        changeDots(slides, dot);
        current = nextSlide(pages, current, index);
    });
    slide.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        const dot = event.currentTarget;
        changeDots(slides, dot);
        current = nextSlide(pages, current, index);
      }
  });
    /*
        scrollSlide = index;
      });*/
    });

    pageNames.forEach((page, index) => {
      page.addEventListener('click', function(event) {
        const page = event.currentTarget;
        bold(pageNames, page);
        current = nextSlide(pages, current, index);
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
                    tabIndex="1"
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
                    tabIndex="2"
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
                    tabIndex="3"
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
                    tabIndex="4"
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