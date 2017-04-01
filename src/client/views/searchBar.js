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
    };
    this.textChanged = (event) => this._textChanged(event);
  }

  _textChanged (event) {
    event.preventDefault();
    this.setState ({
      text: event.target.value
    }, () => {
      this.props.dispatch(actions.updateProjectsonFilter(this.state.text));
    });
  }

  render() {

    return (
      <div className="form-group">
        <input type="text"
               id="search"
               className="form-control"
               value={this.state.text}
               onChange={this.textChanged}
               placeholder="Search projects..." />
      </div>
    );
  }
}

export default connect()(SearchBar);
