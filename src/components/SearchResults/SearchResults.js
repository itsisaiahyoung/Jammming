import React, { useState, useCallback } from "react";
import "./SearchResults.css";

import Tracklist from "../TrackList/Tracklist";

const SearchResults = (props) => {
    return (
        <div className="search-results">
            <h2>Results</h2>
            <Tracklist track={props.SearchResults}  onAdd={props.onAdd}/>
        </div>
    );
}

export default SearchResults;