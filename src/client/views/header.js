/*global document alert*/

'use strict';

import React from 'react';

export default class Header extends React.Component {
  render () {
    return (
      <div className="container">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container-fluid navbarColor">
            <div className="navbar-header brandColor">
              <a className="navbar-brand" href="/">HTM Stay</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
