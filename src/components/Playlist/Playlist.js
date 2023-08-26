// import React, { useCallback } from "react";
import './Playlist.module.css';
import TrackList from "../Tracklist/Tracklist";

function Playlist() {
    return (
        <div className="Playlist">
          <input/>
          <TrackList/>
          <button className="Playlist-save">
            SAVE TO SPOTIFY
          </button>
        </div>
      );
};

export default Playlist;