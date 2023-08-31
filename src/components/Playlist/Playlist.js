// import React, { useCallback } from "react";
import styles from "./Playlist.module.css";
//import TrackList from "../Tracklist/Tracklist";

const Playlist = () => {
    return (
        <div className={styles.Playlist}>
          <input/>
          {/* <TrackList/> */}
          <button className={styles.PlaylistSave}>
            SAVE TO SPOTIFY
          </button>
        </div>
      );
};

export default Playlist;