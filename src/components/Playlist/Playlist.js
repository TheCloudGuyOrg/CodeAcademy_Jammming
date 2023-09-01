// import React, { useCallback } from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = (props) => {
    return (
        <div className={styles.Playlist}>
          <input defaultValue={"New Playlist"}/>
          <Tracklist
            tracks={props.playlistTracks}
            isRemoval={true}
            onRemove={props.onRemove}
          />
          <button className={styles.PlaylistSave}>
            SAVE TO SPOTIFY
          </button>
        </div>
      );
};

export default Playlist;