'use strict'

import React, { Component } from "react";
import AppContent from "./components/app-content";

export default class App extends Component {
    constructor () {
        super();
        this.state = {
            game: {
                'url': 'https://www.mmobomb.com/open/call-of-duty-warzone',
                'title': "Call Of Duty: Warzone",
                'thumbnail': "https://www.mmobomb.com/g/452/thumbnail.jpg",
                'genre': "Shooter",
                'platform': "Windows",
                'developer': "Infinity Ward"
            },
            screenshots: [
                {
                    "id": 1124,
                    "image": "https://www.mmobomb.com/g/452/Call-of-Duty-Warzone-1.jpg"
                  },
                  {
                    "id": 1125,
                    "image": "https://www.mmobomb.com/g/452/Call-of-Duty-Warzone-2.jpg"
                  }
            ],
            description : "One of the most popular FPSes in the world is now a free-to-play battle royale: Call of Duty: Warzone. Strive to become the last squad standing in Battle Royale mode, where 150 players loot and shoot their way through an ever-shrinking battlefield; or complete contracts and try to escape with the most cash in Plunder mode."
        }
    }
    render(){
        return(
            <AppContent 
                game = {this.state.game}
                description = {this.state.description}
                screenshots = {this.state.screenshots}
            />
        );
    }
}