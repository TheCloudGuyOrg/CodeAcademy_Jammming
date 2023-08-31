// import React, { useCallback } from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

const samplePlaylist = [
  {
    artist: 'Chase and Status',
    album: '2021 Essential Mix',
    name: 'Chase and Status 2021 Essential Mix',
    id: '2',
    uri: 'www.spotify.com/chaseandstatus'
  },
  {
    artist: 'Subfocus',
    album: '2022 Essential Mix',
    name: 'Subfocus 2022 Essential Mix',
    id: '3',
    uri: 'www.spotify.com/subfocus'
  }
]

const Playlist = (props) => {
    return (
        <div className={styles.Playlist}>
          <input defaultValue={"New Playlist"}/>
          <Tracklist
            tracks={samplePlaylist}
          />
          <button className={styles.PlaylistSave}>
            SAVE TO SPOTIFY
          </button>
        </div>
      );
};

export default Playlist;