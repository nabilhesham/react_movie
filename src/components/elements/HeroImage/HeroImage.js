import React from "react";
import "./HeroImage.css";

function HeroImage(props) {
  return (
    <div
      className="rmdb-heroimage"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.3)
        39%, rgba(0,0,0,0.35)
        41%, rgba(0,0,0,0.65)
        100%),
        url('${props.image}'), #1c1c1c`,
      }}
    >
      <div className="rmdb-heroimage-content">
        <div className="rmdb-heroimage-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
