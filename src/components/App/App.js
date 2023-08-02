import React, { useState, useCallback } from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/MySpotify";

const App = () => {

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  
  /*const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);*/

  const search = useCallback((term) => {
    Spotify.search(term).then((results) => {
      console.log("Search Results:", results); // Check the search results
      setSearchResults(results);
    });
  }, []);
  

  const addTrack = useCallback((track) => {
    if(playlistTracks.some(savedTrack => savedTrack.id === track.id)) 
    return;

    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  } , [playlistTracks]);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks(prevTracks => prevTracks.filter(savedTrack => savedTrack.id !== track.id));

  }, []);


  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  console.log("App - searchResults:", searchResults); // Check the value of searchResults
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">My Spotify</h1>
      </header>
      <SearchBar onSearch={search} />

      <div className="App-playlist">
        <div className="App-playlist-item">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
        </div>
        <div className="App-playlist-item">
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
