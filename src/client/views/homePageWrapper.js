/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import HomePage from './homePage';
import SearchBar from './searchBar';
import SortBar from './sortBar';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class Home extends React.Component {

  componentDidMount () {
    this.props.dispatch(actions.fetchAPIData());
  }

  render () {
      return (
        <div className="container-fluid">
          <Header />
          <div className="container-fluid">
            <div className="row">

                <div className="container-fluid search-margin-top">
                  <div className="col-md-6 search-margin-left">
                    <SearchBar />
                  </div>
                  <div className="col-md-3 sort-bar-font">
                    <SortBar value="Sort by percentage funded" sorter="percentage"/>
                  </div>
                  <div className="col-md-3 sort-bar-font">
                    <SortBar value="Sort by Time" sorter="time"/>
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
