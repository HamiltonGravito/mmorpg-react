'use strict'

import React from "react";
import Actions from "./actions";

const BodyCard = () => {
  return (
    <div className="bodyCard">
      <div className="gameTitle">
        <h1><a href="https://www.mmobomb.com/open/diablo-immortal">Diablo Immortal</a></h1>
        <img src="https://www.mmobomb.com/g/1118/thumbnail.jpg" alt="Imagem jogo" />
      </div>

      <ul className="gameInfo">
        <li>Genêro: MMOARPG</li>
        <li>Plataforma: PC (Windows)</li>
        <li>Desenvolvedor(a): Blizzard Entertainment</li>
      </ul>

      <Actions />
    </div>
  );
}

export default BodyCard;