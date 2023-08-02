import React, { useState, useCallback } from "react";
import "./Playlist.css";
import Tracklist from "../TrackList/Tracklist";

const Playlist = (props) => {
    
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        },[props.onNameChange]);

    return (
        <div className="Playlist">
            <h2>Playlist</h2>
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
            <Tracklist
                tracks={props.playlistTracks} 
                onRemove={props.onRemove} 
                isRemoval={true} 
            />
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;