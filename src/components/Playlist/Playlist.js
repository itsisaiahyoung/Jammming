import React, { useState, useCallback } from "react";
import "./Playlist.css";


const Playlist = () => {
    return (
        <div className="Playlist">
            <h2>Playlist</h2>
            <input defaultValue={"New Playlist"} />
        </div>
    );
}

export default Playlist;