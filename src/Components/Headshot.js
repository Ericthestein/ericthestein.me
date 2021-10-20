import React, {Component} from "react";
import "../App.css";

export default class Headshot extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <img className="Headshot" src={require("../Data/headshot.jpg")}/>
        )
    }
}