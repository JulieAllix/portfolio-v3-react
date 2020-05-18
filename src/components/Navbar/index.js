import React from 'react';
// import classNames from 'classnames';
import $ from 'jquery';
import NavbarStyled from './NavbarStyled';

//import handleClick from 'function/handleClick';
import { changeDots, bold, throttle, nextSlide } from 'function/changePage';

class Navbar extends React.Component {

  componentDidMount() {
    const slides = document.querySelectorAll('.slide');
    const pageNames = document.querySelectorAll('.page-name');
    const pages = document.querySelectorAll('.page');

    // Tracker
    let current = 0;
    let scrollSlide = 0;

    document.addEventListener('wheel', throttle(function(event) {
      if (event.deltaY > 0){
        scrollSlide += 1;
      } else {
          scrollSlide -= 1;
      }

      if (scrollSlide > 3){
          scrollSlide = 0;
      }
      if (scrollSlide < 0){
          scrollSlide = 3;
      }
      
      const dot = slides[scrollSlide];
      changeDots(slides, dot);
      nextSlide(pages, current, scrollSlide, slides);
      current = scrollSlide;
    }, 1500));

    slides.forEach((slide, index) => {
      slide.addEventListener('click', function(event) {
        const dot = event.currentTarget;
        console.log(dot);
        changeDots(slides, dot);
        current = nextSlide(pages, current, index, slides);
        scrollSlide = index;
    });
      slide.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
          const dot = event.currentTarget;
          changeDots(slides, dot);
          current = nextSlide(pages, current, index, slides);
          scrollSlide = index;
        }
      });
    });

    pageNames.forEach((page, index) => {
      page.addEventListener('click', function(event) {
        const page = event.currentTarget;
        bold(pageNames, page);
        current = nextSlide(pages, current, index, slides);
        scrollSlide = index;
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