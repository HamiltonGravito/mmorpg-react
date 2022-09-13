'use strict'

import React, { Component } from "react";
import AppContent from "./components/app-content";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            game: null,
            screenshots: [],
            description: ""
        }
    }

    handleSearch(e) {

        const options = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'X-RapidAPI-Key': '2062f73105mshf3b49ac8093320dp106e6fjsnf58dc9fcf7e9',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
            }
        };

        const value = e.target.value;
        const keyCode = e.key;

        if (keyCode === "Enter") {
            fetch(`https://mmo-games.p.rapidapi.com/game?id=${value}`, options)
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        game: {
                            'url': response.game_url,
                            'title': response.title,
                            'thumbnail': response.thumbnail,
                            'genre': response.genre,
                            'platform': response.platform,
                            'developer': response.developer
                        },
                        screenshots: [
                            response.screenshots
                        ],
                        description: response.short_description
                    })
                    console.log(response)
                })
                .catch(err => console.error(err));
        }
    }

    render() {
        return (
            <AppContent
                game={this.state.game}
                description={this.state.description}
                screenshots={this.state.screenshots}
                handleSearch={(e) => this.handleSearch(e)}
            />
        );
    }
}