import {SocialIcon} from "react-social-icons"
import "./MySocialLinks.css"
import React from "react";

class SocialRow extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="Social-Row">
                <SocialIcon url={this.props.url} />
                <h4 className="Social-Row-h4"> {this.props.text}</h4>
            </div>
        )
    }
}

export default class MySocialLinks extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="Social-Row-Container">
                <div className="Social-Links">
                    <SocialRow text={"GitHub"} url={"https://github.com/Ericthestein"} />
                    <SocialRow text={"LinkedIn"} url={"https://www.linkedin.com/in/eric-stein/"} />
                    <h4 className="Additional-h4">ericthestein@gmail.com</h4>
                    <h4 className="Additional-h4">+1 (917)-753-3543</h4>
                </div>
            </div>

        )
    }
}