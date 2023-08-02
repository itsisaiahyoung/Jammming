import React, { useState, useCallback } from "react";
import "./Tracklist.css";
import Track from "../Track/Track";

const Tracklist = (props) => {
    if (props.tracks.length === 0) {
        return <p>No tracks found.</p>;
    }

    return (
        <div className="Tracklist">
            {props.tracks.map((track) => {
                return (
                    <Track 
                    track={track} 
                    key={track.id} 
                    onAdd={props.onAdd}
                    isRemoval={props.isRemoval}
                    onRemove={props.onRemove}
                    />
                );
            })}
        </div>
    );
}

export default Tracklist;