import React, { Component } from 'react';
import './search-box.styles.css'

class SearchBox extends Component {
  render() {

    const { className, placeholder, onSearchHandler } = this.props

    return (
      <div>
        <input
          className={className}
          type="search"
          placeholder={placeholder}
          onChange={onSearchHandler}
        />
      </div>
    );
  }
}

export default SearchBox;