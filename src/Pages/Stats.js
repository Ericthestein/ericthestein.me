import React, {Component} from 'react';
import StarRatings from 'react-star-ratings';

import logo from '../logo.svg';
import '../App.css';
import "../Styles/Stats.css"
// import Header from "../Header";
import { Button, Divider, Input, Segment } from 'semantic-ui-react'

let data = require("../Data/stats.json")

class DataValue extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (typeof(this.props.value) === "object") {
            if (this.props.value.valueDisplay === "download-link") {
                return(
                    <a href={this.props.value.link} download>{this.props.value.text}</a>
                )
            }
        }
        if (this.props.valueDisplay === "Stars") {
            return(
                <StarRatings
                    className="Stat-Data-Value"
                    rating={this.props.value * 5}
                    numberOfStars={5}
                    starRatedColor={"yellow"}
                />
            )
        } else {
            if (Array.isArray(this.props.value)) {
                return(
                    <ul className="Stat-Section-Data-Value-Bullet">
                        {this.props.value.map((val, ind) => {
                            return(
                                <li className="Stat-Data-Value-Bullet">{val}</li>
                            )
                        })}
                    </ul>
                )
                /*
                <div className="Stat-Data-Value">
                        {this.props.value.map((val, ind) => {
                            return(
                                <h4>{val}</h4>
                            )
                        })}
                    </div>
                 */
            } else {
                return(
                    <h4 className="Stat-Data-Value">{this.props.value}</h4>
                )
            }
        }
    }
}

class DataRow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.key)
        return(
            <div className="Stat-Section-Data-Row">
                <h4 className="Stat-Data-Key">{this.props.label}:</h4>
                <DataValue valueDisplay={this.props.valueDisplay} value={this.props.value}/>
            </div>
        )
    }
}

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
        console.log(this.state.data)
        console.log(Array.isArray(this.state.data))
        if (Array.isArray(this.state.data)) {
            dataKeys = this.state.data
            isArray = true
        } else {
            if (typeof(this.state.data) === "object") {
                dataKeys = Object.keys(this.state.data)
            } else {
                dataKeys = []
            }
        }

        return(
            <div className="Stat-Section-Container">
                <h2 className="Stat-Section-Title">{this.props.title || this.props.category}</h2>
                <div className="Stat-Section-Data-Container">
                    {dataKeys.map((key, index) => {
                        if (isArray) {
                            return(
                                <ul key={index} className="Stat-Section-Data-Row-Bullet">
                                    <li className="Stat-Data-Value-Bullet">{key}</li>
                                </ul>
                            )
                        } else {
                            let value = this.state.data[key]
                            return(
                                <DataRow key={index} label={key} value={value} valueDisplay={this.props.valueDisplay}/>
                            )
                        }

                    })}
                </div>
                {!this.props.hideDivider && <Divider className="Divider-Between-Sections" horizontal />}
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
                    <StatSection category={"Software"} valueDisplay={"Stars"}/>
                    <StatSection category={"Education (High School)"} />
                    <StatSection category={"Awards"} hideDivider/>
                </div>
            </div>
        ); // <p>Under Construction</p>
    }
}
