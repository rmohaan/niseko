import React from 'react';
import { connect } from 'react-redux';
import { updateRoomsOnFilter } from '../actions/index';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    this.textChanged = (event) => this._textChanged(event);
    this.clearSearchTxt = () => this._clearSearchTxt();
    this.getClearIcon = () => this._getClearIcon();
  }

  _getClearIcon () {
    if (this.state.text) {
      return (
        <span className="input-group-addon" onClick={this.clearSearchTxt}>
          <i className="fa fa-times"></i>
        </span>
      );
    }
  }

  _clearSearchTxt () {
    this.setState({ 
      text: '' 
    }, () => {
      this.props.dispatch(updateRoomsOnFilter(this.state.text));
    });
  }

  _textChanged (event) {
    event.preventDefault();
    this.setState ({
      text: event.target.value
    }, () => {
      this.props.dispatch(updateRoomsOnFilter(this.state.text));
    });
  }

  render() {
    const clearIcon = this.getClearIcon();
    return (
      <div className="input-group">
        <input type="text" 
          id="search"
          className="form-control" 
          placeholder="Search rooms..." 
          value={this.state.text}
          onChange={this.textChanged} />
        {clearIcon}
      </div>
    );
  }
}

export default connect()(SearchBar);
