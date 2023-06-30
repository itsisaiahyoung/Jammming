import React, { useState, useCallback } from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";


const App = () => {

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = useCallback((track) => {
  } , []);

  const removeTrack = useCallback((track) => {
  }, []);





  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">My Spotify</h1>
      </header>
      <SearchBar />

      <div className="App-playlist">
        <div className="App-playlist-item">
          <SearchResults SearchResults={SearchResults} onAdd={addTrack} />
        </div>
        <div className="App-playlist-item">
          <Playlist 
            playlistName={playlistName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
