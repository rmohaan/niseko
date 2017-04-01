import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import * as actions from '../actions/index';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      sorter: ''
    };
    this.sortChanged = (sorter) => this._sortChanged(sorter);
  }

  _sortChanged (sorter) {
    event.preventDefault();
    var dir = this.state.text === 'ASC' ? 'DESC' : 'ASC';
    this.setState ({
      text: dir,
      sorter: sorter
    }, () => {
      this.props.dispatch(actions.updateProjectsonSort({text: this.state.text, sorter: sorter}));
    });
  }

  render() {
    var sorter = this.props.sorter;
    return (
      <div className="cursor-pointer float-right form-group glyphicon glyphicon-filter" onClick={() => this.sortChanged(sorter)}>
        {this.props.value}
      </div>
    );
  }
}

export default connect()(SearchBar);
