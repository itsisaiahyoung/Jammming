import React, { useState, useCallback } from "react";
import "./Playlist.css";
import Tracklist from "../TrackList/Tracklist";

const Playlist = () => {
    const [playlistName, setPlaylistName] = useState("");
    
    return (
        <div className="Playlist">
            <h2>Playlist</h2>
            <input onChange={(event) => setPlaylistName(event.target.value)} defaultValue={"New Playlist"} />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;