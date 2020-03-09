import React from 'react';
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import FlexView from "react-flexview/lib/FlexView";
import "./App.css"
import {SocialIcon} from "react-social-icons"

const valueToPage = {
    1: "/",
    2: "/stats",
    3: "/apps",
    4: "/games",
    5: "/misc",
    6: "/resume",
}

const pageToTitle = {
    "/": "Home",
    "/stats": "Stats",
    "/apps": "Apps",
    "/games": "Games",
    "/misc": "Miscellaneous",
    "/resume": "Resume",
}

class SocialButtons extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return(
            <div className={this.props.className}>
                <SocialIcon className="Header-Social-Button" url={"https://github.com/Ericthestein"}/>
                <SocialIcon className="Header-Social-Button" url={"https://www.linkedin.com/in/eric-stein/"}/>
                <SocialIcon className="Header-Social-Button" url={"mailto:ericthestein@gmail.com"}/>
            </div>
        )
    }
}

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.history = this.props.history
        this.state = {
            currentKey: 1
        }
    }

    componentDidMount() {
        this.initializeCurrentKey()
    }

    initializeCurrentKey = () => {
        this.setState({
            currentKey: this.pageToValue(this.history.location.pathname)
        })
        this.forceUpdate()
    }

    changePage = (option) => {
        this.history.push(valueToPage[option])
    }

    pageToValue = (page) => {
        let keys = Object.keys(valueToPage)
        for (var i = 0; i < keys.length; i++) {
            if (valueToPage[keys[i]] === page) {
                return keys[i]
            }
        }
    }

    render(){
        return(
            <div className="Header-Container">
                <div className="Header-Bar">
                    <div className="Horizontal">
                        <h1 className="EricStein">Eric Stein</h1>
                        <SocialButtons className="Header-Social-Buttons"/>
                    </div>
                </div>
                <div className="Header-Bar">
                    <FlexView className="Header-Button-Group-FlexView" grow shrink basis='200'>
                        <ToggleButtonGroup className="Header-Button-Group" type="radio" name="options" defaultValue={1/*this.state.currentKey*/} onChange={this.changePage}>
                            {Object.keys(valueToPage).map((number, index) => {
                                return(
                                    <ToggleButton className={"Header-Button"} value={number} checked={number === this.state.currentKey} key={index}>{pageToTitle[valueToPage[number]]}</ToggleButton>
                                )
                            })}
                        </ToggleButtonGroup>
                    </FlexView>
                </div>
            </div>

        )
    }
}