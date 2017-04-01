/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class Header extends React.Component {
render () {
    return (
      <div className="container">
         <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container-fluid navbarColor">
            <div className="navbar-header brandColor">
              <a className="navbar-brand" href="/">Gieom Challenge</a>
            </div>
          </div>
         </nav>
      </div>
    );
  }
}

export default connect()(Header);
