//import React, { useState, useCallback } from "react";
import './SearchBar.module.css';

function SearchBar() {
    return (
        <div className="SearchBar">
          <input placeholder="Enter A Song Title"/>
          <button className="SearchButton">
            SEARCH
          </button>
        </div>
      );
}

export default SearchBar;
