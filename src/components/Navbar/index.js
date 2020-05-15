import React from 'react';
import NavbarStyled from './NavbarStyled';

function Navbar() {
  return (
    <NavbarStyled>
      <div className="pages">
          <div className="page-1">
              <h4>Home</h4>
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
              <h4>Projects</h4>
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
              <h4>My training</h4>
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
              <h4>Contact</h4>
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

export default Navbar;