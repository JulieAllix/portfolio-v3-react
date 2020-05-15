import React, { useEffect } from 'react';
import Home from '../Home';
import AppStyled from './AppStyled';
import { render } from '@testing-library/react';

import handleRoll from 'function/handleRoll';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }

  test() {
    console.log('Make it roll !');
  }

  componentDidMount() {
    console.log('componentDidMount');
    // Custom viewport unit
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    window.addEventListener('resize', () => {
      let vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty('--vw', `${vw}px`);
    });

    document.addEventListener('wheel', handleRoll);
  }
  
  render() {
    return (
      <AppStyled>
        <Home />
      </AppStyled>
    );
  }
}

export default App;