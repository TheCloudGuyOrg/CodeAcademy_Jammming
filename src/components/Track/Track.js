// import React, { useCallback } from "react";
import styles from "./Track.module.css";

function Track() {
    return (
        <div className={styles.Track}>
          <div className={styles.TrackInformation}>
            <h3>Temp TrackName</h3>
            <p>
              Temp Artist| Temp Album
            </p>
          </div>
        </div>
      );
}

export default Track;