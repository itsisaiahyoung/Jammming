import React, { useState, useCallback } from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";


const App = () => {

  return (
    <div className="App">
        <SearchBar />
    </div>
  );
}

export default App;
