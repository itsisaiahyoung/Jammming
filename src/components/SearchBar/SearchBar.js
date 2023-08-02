import React, { useState, useCallback } from "react";
import "./SearchBar.css";


const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const termSetter = useCallback((event) => {
        console.log(event.target.value); // Check the input field's value
        setTerm(event.target.value);
    }, []);

    const search = useCallback((event) => {
        props.onSearch(term);
        console.log("Search Term:", term); // Check the search term
    }, [props.onSearch, term]);

    return (
        <div className="search-bar">
        <input onChange={termSetter} type="text" placeholder="Search..." />
        <button onClick={search} className="SearchButton">SEARCH</button>
        </div>
    );
}

export default SearchBar;