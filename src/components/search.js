'use strict'

import React from "react";
import PropTypes from 'prop-types';

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <label htmlFor="busca">
        <input type="search" name="busca" id="" placeholder="Busque seu game aqui ID..."
          onKeyUp={handleSearch} />&#128269;
      </label>
    </div>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search;