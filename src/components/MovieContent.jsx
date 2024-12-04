import React from "react";
import "./movieContent.css";
import movieTitle from "../images/transformer-title.png";
import Button from "./Button";

function MovieContent() {
  return (
    <div className="content active">
      <img src={movieTitle} alt="movie title" className="movie-title" />
      <h4>
        <span>Year</span>
        <span>
          <i>age</i>
        </span>
        <span>length</span>
        <span>category</span>
      </h4>
      <p>description</p>
      <div className="button">
        <Button
          icon={<ion-icon name="bookmark-outline"></ion-icon>}
          name="Book"
          color="var(--primary)"
          bgColor="#ffffff"
        />
        <Button
          icon={<ion-icon name="add-outline"></ion-icon>}
          name="My List"
        />
      </div>
    </div>
  );
}

export default MovieContent;
