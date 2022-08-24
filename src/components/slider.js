'use strict'

import React from "react";

const Slider = ({ screenshots }) => {
  return (
    <div className="slider">
      <h2>Imagens:</h2>

      <input name='slide' type="radio" />
      <input name='slide' type="radio" />

      <div className="slider-content">
        {screenshots.map(
          (shots, index) => {
            return (
              <div key={index} className="slider-item"><img src={shots.image} alt="" /></div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Slider;