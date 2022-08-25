'use strict'

import React from "react";

const Description = ({description}) => {
  return (
    <div className="description">
      <h2>Descrição:</h2>
      <p>{description}</p>
    </div>
  );
}

export default Description;