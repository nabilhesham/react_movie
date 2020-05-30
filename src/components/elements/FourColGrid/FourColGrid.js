import React from "react";
import PropTypes from "prop-types";
import "./FourColGrid.css";

function FourColGrid(props) {
  const renderMovies = () => {
    const gridMovies = props.children.map((movie, i) => {
      return (
        <div key={i} className="rmdb-grid-element">
          {movie}
        </div>
      );
    });
    return gridMovies;
  };

  return (
    <div className="rmdb-grid">
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="rmdb-grid-content">{renderMovies()}</div>
    </div>
  );
}

FourColGrid.prototype = {
  header: PropTypes.string,
  loading: PropTypes.bool,
};

export default FourColGrid;
