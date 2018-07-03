/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import HomePage from './homePage';
import SearchBar from './searchBar';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class Home extends React.Component {

  componentDidMount () {
    this.props.dispatch(actions.getRoomsData());
  }

  render () {
      return (
        <div className="">
          <Header />
          <div className="">
            <div className="home-container">
                <div className="search-margin-top">
                    <div className="col-md-12">
                      <div className="search-panel">
                        <SearchBar />
                      </div>
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
