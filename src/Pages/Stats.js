import React, {Component} from 'react';
import StarRatings from 'react-star-ratings';

import logo from '../logo.svg';
import '../App.css';
import "../Styles/Stats.css"
// import Header from "../Header";

let data = require("../Data/stats.json")

class StatSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        this.setState({
            data: data[this.props.category.toLowerCase()]
        })
    }

    render() {
        var dataKeys
        var isArray = false
        if (Array.isArray(this.state.data)) {
            dataKeys = this.state.data
            isArray = true
        } else {
            if (typeof(this.state.data) === "object") {
                dataKeys = Object.keys(this.state.data)
            }
        }

        return(
            <div className="Stat-Section-Container">
                <h2 className="Stat-Section-Title">{this.props.title || this.props.category}</h2>
                <div className="Stat-Section-Data-Container">
                    {dataKeys.map((key, index) => {
                        if (isArray) {
                            return(
                                <div key={index} className="Stat-Section-Data-Row">
                                    <h4 className="Stat-Data-Value-Array">{key}</h4>
                                </div>
                            )
                        } else {
                            let value = this.state.data[key]
                            return(
                                <div key={index} className="Stat-Section-Data-Row">
                                    <h4 className="Stat-Data-Key">{key}:</h4>
                                    {this.props.valueDisplay === "Stars" ?
                                        <StarRatings
                                            className="Stat-Data-Value"
                                            rating={value * 5}
                                            numberOfStars={5}
                                            starRatedColor={"yellow"}
                                        />
                                        :
                                        <h4 className="Stat-Data-Value">{value}</h4>
                                    }
                                </div>
                            )
                        }

                    })}
                </div>
            </div>
        )
    }
}

export default class Stats extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Background">

                <div className="Stat-Sections">
                    <StatSection category={"Education"} />
                    <StatSection category={"Programming Languages"} valueDisplay={"Stars"}/>
                    <StatSection category={"Frameworks/Libraries/Services"} title={"Frameworks, Libraries, & Services"} valueDisplay={"Stars"}/>
                </div>
            </div>
        ); // <p>Under Construction</p>
    }
}
