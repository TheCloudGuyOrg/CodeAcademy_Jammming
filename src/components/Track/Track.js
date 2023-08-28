import React, { useCallback } from "react";
import styles from "./Track.module.css";

const Track = (props) => {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.tract);
    }, [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    }, [props.onRemove, props.track]
  )

    const renderAction = () => {
      if (props.isRemoval) {
        return (
          <button className="TrackAction" onClick={removeTrack}>
            -
          </button>
        );
      }
      return (
        <button className="TrackAction" onClick={addTrack}>
          +
        </button>
      );
    };

  return (
      <div className={styles.Track}>
        <div className={styles.TrackInformation}>
          <h3>{props.track.name}</h3>
          <p>
            {props.track.artist}| {props.track.album}
          </p>
        </div>
        {renderAction()}
      </div>
  );
}

export default Track;