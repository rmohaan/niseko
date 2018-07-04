/*global document alert*/

'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Footer from './footer';
import HomePage from './homePage';
import SearchBar from './searchBar';
import { getRoomsData } from '../actions/index';

class Home extends React.Component {
  componentDidMount () {
    this.props.dispatch(getRoomsData());
  }

  render () {
    return (
      <div>
        <Header />
        <div className="home-container">
          <div className="search-margin-top">
            <div className="col-md-12">
              <div className="search-panel">
                <SearchBar />
              </div>
            </div>
            <HomePage />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect()(Home);
