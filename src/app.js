'use strict'

import React, { Component } from "react";
import { HelloWorld } from "./helloWorld";

export default class App extends Component {
    render(){
        return(
            <div className="container">
                <HelloWorld />
            </div>
        )
    }
}