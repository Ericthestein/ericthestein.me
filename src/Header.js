import React from 'react';
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import FlexView from "react-flexview/lib/FlexView";
import {Button} from '@material-ui/core'
import "./App.css"
import {SocialIcon} from "react-social-icons"
import withStyles from "@material-ui/core/styles/withStyles";

const valueToPage = {
    1: "/",
    2: "/stats",
    3: "/projects",
    4: "/EricSteinResume.pdf",
}

const customPageFunctions = {
    4: () => {
        const link = document.createElement('a');
        link.href = `/EricSteinResume.pdf`; // Eric Stein's Résumé
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

const pageToTitle = {
    "/": "Home",
    "/stats": "Stats",
    "/projects": "Projects",
    "/EricSteinResume.pdf": "Resume",
}

class SocialButtons extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return(
            <div className={this.props.className}>
                <SocialIcon className="Header-Social-Button" url={"https://github.com/Ericthestein"} target={"_blank"}/>
                <SocialIcon className="Header-Social-Button" url={"https://www.linkedin.com/in/eric-stein/"} target={"_blank"}/>
                <SocialIcon className="Header-Social-Button" url={"mailto:ericthestein@gmail.com"} target={"_blank"}/>
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
        const customFunction = customPageFunctions[option];
        if (customFunction) {
            customFunction();
        } else {
            this.history.push(valueToPage[option])
        }
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
                        {Object.keys(valueToPage).map((number, index) => {
                            return(
                                <BootstrapButton
                                    variant={"contained"}
                                    className={"Header-Button"}
                                    value={number}
                                    key={index}
                                    onClick={() => {this.changePage(number)}}
                                >{pageToTitle[valueToPage[number]]}</BootstrapButton>
                            )
                        })}
                    </FlexView>
                </div>
            </div>

        )
    }
}

const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#ffffff',
        borderColor: '#282c34',
        borderWidth: '0px',
        borderRightWidth: '1px',
        borderLeftWidth: '1px',
        borderRadius: 0,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#ffffff',
            borderColor: '#000000',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            borderColor: '#000000',
        },
    },
})(Button);