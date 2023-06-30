import React, { useState, useCallback } from "react";
import "./Tracklist.css";
import Track from "../Track/Track";

const Tracklist = (props) => {

    const TrackItems = [
        { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
        { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
        { id: 3, name: 'Song 3', artist: 'Artist 3', album: 'Album 3' },
      ];
      

    return (
        <div className="Tracklist">
            {TrackItems.map((track) => {
                return (
                    <Track 
                    track={track} 
                    key={track.id} 
                    onAdd={props.onAdd}
                    isRemoval={props.isRemoval}
                    />
                );
            })}
        </div>
    );
}

export default Tracklist;