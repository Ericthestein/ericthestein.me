import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Slider from 'infinite-react-carousel';
import MySocialLinks from "../Components/MySocialLinks";
import Headshot from "../Components/Headshot";
import RandomProjectDisplayer from "../Components/Projects/RandomProjectDisplayer";

const bioText = "My name is Eric, and I love making impactful apps, websites, games, backend services, AI, and more";

class ResumePlug extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <p style={this.props.style}>
                In a rush? Here's my <a href='../resume.pdf' download>resume</a>
            </p>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="Background">
                <div className={"Introduction-Home"}>
                    <div className={"Headshot-Home-Container"}>
                        <Headshot />
                    </div>
                    <div className={"Introduction-Text-Container"}>
                        <h1 className={"bioTitle"}>Nice to meet you!</h1>
                        <h4 className="bioText">{bioText}</h4>
                    </div>
                </div>
                <div className={"Random-Projects-Container-Home"}>
                    <RandomProjectDisplayer />
                </div>
            </div>
        );
    }
}

export default App;

/*
<Slider dots className="App-carousel" arrows={false}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                </Slider>
 */