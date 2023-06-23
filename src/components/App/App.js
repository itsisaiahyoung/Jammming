import React, { useState, useCallback } from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";


const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">My Spotify</h1>
      </header>
      <SearchBar />

      <div className="App-playlist">
        <div className="App-playlist-item">
          <SearchResults />
        </div>
        <div className="App-playlist-item">
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
