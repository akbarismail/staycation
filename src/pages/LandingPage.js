import React, { Component } from 'react';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MostPicked from '../components/MostPicked';
import landingPage from '../json/landingPage.json';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  state = {};
  render() {
    return (
      <>
        <Header />
        <Hero data={landingPage.hero} refMostPicked={this.refMostPicked} />
        <MostPicked
          data={landingPage.mostPicked}
          refMostPicked={this.refMostPicked}
        />
        <Categories data={landingPage.categories} />
      </>
    );
  }
}

export default LandingPage;
