import React from 'react';
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import FlexView from "react-flexview/lib/FlexView";

const valueToPage = {
    1: "/",
    2: "/freelance",
    3: "/research",
    4: "/personal-projects",
    5: "/resume"
}

const pageToTitle = {
    "/": "Home",
    "/freelance": "Freelance",
    "/research": "Research",
    "/personal-projects": "Personal Projects",
    "/resume": "Resume"
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
                    <div className="horizontal">
                        <h1>hi </h1>
                        <h2> there </h2>
                    </div>
                </div>
                <div className="Header-Bar">
                    <FlexView className="Header-Button-Group-FlexView" grow shrink basis='200'>
                        <ToggleButtonGroup className="Header-Button-Group" type="radio" name="options" defaultValue={1/*this.state.currentKey*/} onChange={this.changePage}>
                            {Object.keys(valueToPage).map((number) => {
                                return(
                                    <ToggleButton className={"Header-Button"} value={number} checked={number === this.state.currentKey}>{pageToTitle[valueToPage[number]]}</ToggleButton>
                                )
                            })}
                        </ToggleButtonGroup>
                    </FlexView>
                </div>
            </div>

        )
    }
}