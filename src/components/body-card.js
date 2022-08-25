'use strict'

import React from "react";
import Actions from "./actions";
import PropTypes from 'prop-types';

const BodyCard = ({game}) => {
  return (
    <div className="bodyCard">
      <div className="gameTitle">
        <h1><a href={game.url}>{game.title}</a></h1>
        <img src={game.thumbnail} alt="Imagem jogo" />
      </div>

      <ul className="gameInfo">
        <li>Genêro: {game.genre}</li>
        <li>Plataforma: {game.platform}</li>
        <li>Desenvolvedor(a): {game.developer}</li>
      </ul>

      <Actions />
    </div>
  );
}

BodyCard.propTypes = {
  game: PropTypes.object.isRequired
}

export default BodyCard;