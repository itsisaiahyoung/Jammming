import React, { useState, useCallback } from "react";
import "./SearchBar.css";


const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const termSetter = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);
    return (
        <div className="search-bar">
        <input onChange={termSetter} type="text" placeholder="Search..." />
        <button onClick={search} className="SearchButton">SEARCH</button>
        </div>
    );
}

export default SearchBar;