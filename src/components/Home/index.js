import React from 'react';
import photoJulieLeft from 'assets/img/photo-left.jpg';
import photoJulieRight from 'assets/img/photo-right.jpg';
import HomeStyled from './HomeStyled';

class Home extends React.Component {
  render() {
    return (
      <HomeStyled>
        <section className="standard-page home page">
          <div className="details detail">
              <h1>Julie Allix</h1>
              <h2>Frontend Developer</h2>
          </div>
          <div className="hero">
              <img
                  className="photo-left"
                  src={photoJulieLeft}
                  alt="Julie Allix"
              />
              <img
                  className="photo-right"
                  src={photoJulieRight}
                  alt="Julie Allix"
              />
          </div>
        </section>
      </HomeStyled>
    );
  }
}

export default Home;