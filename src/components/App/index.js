import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Test from '../Test';
import Home from '../Home';
import Projects from '../Projects';
import Training from '../Training';
import Contact from '../Contact';
import Navbar from '../Navbar';
import Grocereaz from '../Grocereaz';

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
        <Switch>
          <Route exact path="/">
            <div className="portfolio">
              <Home />
              <Projects />
              <Training />
              <Contact />
              <Navbar />
            </div>
          </Route>
          <Route exact path="/grocereaz" component={Grocereaz} />
          <Redirect to="/" />
        </Switch>
      </AppStyled>
    );
  }
}

export default App;