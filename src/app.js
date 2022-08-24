'use strict'

import React, { Component } from "react";
import Search from "./components/search";
import BodyCard from "./components/body-card";
import Description from "./components/description";
import Slider from "./components/slider";

export default class App extends Component {
    render(){
        return(
            <div className="container">

            <Search />
            <div className="card">
                <BodyCard />

                <div className="footerPag">
                   <Description  descricao={'Diablo Immortal is an all-new massively multiplayer online action RPG and Blizzard’s long advertised mobile Diablo experience (that totally was not coming to PC) comes to PC complete with all the demon slaying and looting you could want.'}/>

                    <Slider screenshots={[{
                        image : 'https://www.mmobomb.com/g/452/Call-of-Duty-Warzone-1.jpg'
                    }, {image : "https://www.mmobomb.com/g/452/Call-of-Duty-Warzone-2.jpg"}]}/>
               </div>
            </div>
        </div>
        )
    }
}