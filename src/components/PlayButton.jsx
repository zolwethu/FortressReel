import React from "react";
import "./playBtn.css";

function PlayButton() {
  return (
    <div className="trailer d-flex align-items-center justify-content-center active">
      <a href="" className="playBtn">
        <ion-icon name="play-outline"></ion-icon>
      </a>
      <p>Watch Trailer</p>
    </div>
  );
}

export default PlayButton;
