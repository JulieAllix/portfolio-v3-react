import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../Home';
import Projects from '../Projects';
import Training from '../Training';
import Contact from '../Contact';
import Navbar from '../Navbar';
import StudyCards from '../StudyCards';
import BreakFree from '../BreakFree';
import Grocereaz from '../Grocereaz';
import PortfolioV1 from '../PortfolioV1';
import PortfolioV2 from '../PortfolioV2';
import RecipeManager from '../RecipeManager';
import PlantShop from '../PlantShop';
import NotFoundPage from '../NotFoundPage';

import AppStyled from './AppStyled';

import { render } from '@testing-library/react';

class App extends React.Component {

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
          <Route exact path="/study-cards" component={StudyCards} />
          <Route exact path="/break-free" component={BreakFree} />
          <Route exact path="/grocereaz" component={Grocereaz} />
          <Route exact path="/portfolio-v1" component={PortfolioV1} />
          <Route exact path="/portfolio-v2" component={PortfolioV2} />
          <Route exact path="/recipe-manager" component={RecipeManager} />
          <Route exact path="/plant-shop" component={PlantShop} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </AppStyled>
    );
  }
}

export default App;