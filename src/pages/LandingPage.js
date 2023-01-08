import React, { Component } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import landingPage from '../json/landingPage.json';

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <Hero data={landingPage.hero} refMostPicked={''} />
      </>
    );
  }
}

export default LandingPage;
