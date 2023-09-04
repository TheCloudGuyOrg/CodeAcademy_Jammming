import React, { useCallback } from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = (props) => {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    // eslint-disable-next-line
    [props.onNameChange]
  );

    return (
        <div className={styles.Playlist}>
          <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
          <Tracklist
            tracks={props.playlistTracks}
            isRemoval={true}
            onRemove={props.onRemove}
          />
          <button className={styles.PlaylistSave} onClick={props.onSave}>
            SAVE TO SPOTIFY
          </button>
        </div>
      );
};

export default Playlist;