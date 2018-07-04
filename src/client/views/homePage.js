/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import { createFilter } from 'react-search-input'
import PropTypes from 'prop-types';
import CardRender from './cardRender';
import { KEYS_TO_FILTER } from './constants';

class HomePage extends React.Component {
  static propTypes = {
    rooms: PropTypes.array,
    filterInput: PropTypes.string
  };


  render () {
    let data = this.props.rooms ? this.props.rooms : [],
        filterInput = this.props.filterData ? this.props.filterData : "",
        filteredData = data;
    if (filterInput.length > 0) {
      filteredData = filteredData.filter(createFilter(filterInput, KEYS_TO_FILTER));
    }
    return (
        <CardRender roomList={filteredData} />
    );
  }
}

function select (state) {
  return {
    rooms: state.rooms.data,
    filterData: state.filterData
  };
}

export default connect(select)(HomePage);
