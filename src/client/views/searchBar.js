import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    this.textChanged = (event) => this._textChanged(event);
  }

  //TODO: Why do I need to push this to store???
  _textChanged (event) {
    event.preventDefault();
    this.setState ({
      text: event.target.value
    }, () => {
      this.props.dispatch(actions.updateRoomsOnFilter(this.state.text));
    });
  }

  render() {

    return (
      <div>
        <input type="text"
               id="search"
               className="form-control"
               value={this.state.text}
               onChange={this.textChanged}
               placeholder="Search rooms..." />
      </div>
    );
  }
}

export default connect()(SearchBar);
