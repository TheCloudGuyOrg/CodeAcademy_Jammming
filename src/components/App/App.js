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
  // eslint-disable-next-line
  const [playlistTracks, setPlaylistTracks] = useState([]);
  
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
          />
          <Playlist
            playlistTracks={playlistTracks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
