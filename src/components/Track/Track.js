import React, { useCallback } from "react";
import styles from "./Track.module.css";

const Track = (props) => {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    // eslint-disable-next-line
    [props.onAdd, props.track]
  );

  const renderAction = () => {
      return (
        <button className="TrackAction" onClick={addTrack}>
          +
        </button>
      )
    }

  return (
      <div className={styles.Track}>
        <div className={styles.TrackInformation}>
          <h3>{props.track.name}</h3>
          <p>
            {props.track.artist} | {props.track.album}
          </p>
        </div>
        {renderAction()}
      </div>
  );
}

export default Track;