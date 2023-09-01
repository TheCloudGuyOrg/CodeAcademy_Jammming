import React, {useState, useCallback} from "react";
import styles from "./App.module.css";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";

const sampleTracks = Spotify.search();

const App = () => {
  // Defining Spotify search state
  const [searchResults, setSearchResults] = useState([]);

  const search = useCallback((term) => {
    setSearchResults(sampleTracks)
  }, []);

  // Defining playlist tracks state
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  )

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => 
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  // Defining and Saving Playlist Name
  const [playlistName, setPlaylistName] = useState("New Playlist");
  
  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, [])

  
  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        <SearchBar
          onSearch={search}
        />
        <div className={styles.AppPlaylist}>
          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack}
          />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
