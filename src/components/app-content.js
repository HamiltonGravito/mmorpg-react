'use strict'

import React from "react";
import Search from "../components/search";
import BodyCard from "../components/body-card";
import Description from "../components/description";
import Slider from "../components/slider";

import PropTypes from 'prop-types';

const AppContent = ({ game, description, screenshots, handleSearch }) => {
  return (
    <div className="container">
      <Search handleSearch={ handleSearch }/>

      <div className="card">
      {!!game && <BodyCard game={game} />}

        {!!screenshots.length && <div className="footerPag">
          <Description description={description} />

          <Slider screenshots={screenshots} />
        </div>}
      </div>
    </div>
  );
}

AppContent.propTypes = {
  game : PropTypes.object,
  description : PropTypes.string,
  screenshots: PropTypes.array
}

export default AppContent;