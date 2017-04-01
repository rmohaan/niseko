/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import ViewProject from './viewProject';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class ViewProjectWrapper extends React.Component {
  constructor () {
    super();
    this.state = {
      links: ''
    };
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
  }

  componentDidMount () {
    this.props.dispatch(actions.fetchProject(this.props.params.id));
  }

  render () {
      return (
        <div className="container-fluid">
          <Header />
          <div className="container-fluid">
            <ViewProject />
          </div>
          <Footer />
        </div>
      );
    }
}

export default connect()(ViewProjectWrapper);
