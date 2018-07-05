/*global document alert*/

'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { createFilter } from 'react-search-input';
import PropTypes from 'prop-types';
import CardRender from './cardRender';
import { KEYS_TO_FILTER } from './constants';

class HomePage extends React.Component {
  render () {
    let data = this.props.rooms ? this.props.rooms : [],
      filterInput = this.props.filterData ? this.props.filterData : '',
      filteredData = data;
    if (filterInput.length > 0) {
      filteredData = filteredData.filter(createFilter(filterInput, KEYS_TO_FILTER));
    }
    return (
      <CardRender roomList={filteredData} filterInput={filterInput}/>
    );
  }
}

function select (state) {
  return {
    rooms: state.rooms.data,
    filterData: state.filterData
  };
}

HomePage.propTypes = {
  rooms: PropTypes.array,
  filterData: PropTypes.string
};

export default connect(select)(HomePage);
