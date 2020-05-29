import React from "react";
import "./MovieThumb.css";

function MovieThumb(props) {
  return (
    <div className="rmdb-moviethumb">
      <img src={props.image} alt="MovieThumb" />
    </div>
  );
}

export default MovieThumb;
