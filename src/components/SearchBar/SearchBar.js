import React, { useState, useCallback } from "react";
import "./SearchBar.css";


const SearchBar = () => {
    return (
        <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="SearchButton">SEARCH</button>
        </div>
    );
}

export default SearchBar;