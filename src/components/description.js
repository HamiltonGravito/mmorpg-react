'use strict'

import React from "react";

const Description = ({descricao}) => {
  return (
    <div className="description">
      <h2>Descrição:</h2>
      <p>{descricao}</p>
    </div>
  );
}

export default Description;