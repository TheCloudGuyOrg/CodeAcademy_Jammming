//import React, { useCallback } from "react";
import styles from "./Track.module.css";

const Track = (props) => {

  return (
      <div className={styles.Track}>
        <div className={styles.TrackInformation}>
          <h3>{props.track.name}</h3>
          <p>
            {props.track.artist} | {props.track.album}
          </p>
        </div>
      </div>
  );
}

export default Track;