'use strict'

import React, { Component } from "react";

export default class App extends Component {
    render(){
        return(
            <div className="container">

                <div className="search">
                    <input type="search" name="" id="" placeholder="Busque seu game aqui..." />
                </div>

               <div className="gameTitle">
                    <h1><a href="https://www.mmobomb.com/open/diablo-immortal">Diablo Immortal</a></h1>
                    <img src= "https://www.mmobomb.com/g/1118/thumbnail.jpg" alt="Imagem jogo" />
               </div>

               <ul className="gameInfo">
                    <li>Genêro: MMOARPG</li>
                    <li>Plataforma: PC (Windows)</li>
                    <li>Desenvolvedor(a): Blizzard Entertainment</li>
               </ul>

               <div className="actions">
                    <button>Descrição</button>
                    <button>Imagens</button>
               </div>

               <div className="description">
                    <h2>Descrição:</h2>
                    <p>Diablo Immortal is an all-new massively multiplayer online action RPG and Blizzard’s long advertised mobile Diablo experience (that totally was not coming to PC) comes to PC complete with all the demon slaying and looting you could want.
                    </p>
               </div>

               <div className="imagens">
                    <h2>Imagens:</h2>
                    <ul>
                        <li><img src="https://www.mmobomb.com/g/1118/diablo-immortal-1.jpg" alt="" /></li>

                        <li><img src="https://www.mmobomb.com/g/1118/diablo-immortal-2.jpg" alt="" /></li>
                    </ul>
               </div>
            </div>
        )
    }
}