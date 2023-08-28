import React, {useState, useCallback} from "react";
import styles from './App.module.css';

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

const App = () => {
  //const [searchResults, setSearchResults] = useState([]);
  //const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => 
        [...prevTracks, track]);
    }, [playlistTracks]
  );

  const removeTrack = useCallback(
    (track) => {
      setPlaylistTracks((prevTracks) => 
        prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
      );
    }, []
  );

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        <SearchBar/>
        <div className={styles.AppPlaylist}>
          <SearchResults
            onAdd={addTrack}
          />
          <Playlist
            onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
