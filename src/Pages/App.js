import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Slider from 'infinite-react-carousel';
import MySocialLinks from "../Components/MySocialLinks";

const bioText = "My name is Eric Stein, and I'll be your captain today. I am a maker of software, games, mobile apps, websites, and AI." +
    " I have huge ambitions and am always looking to engage in impactful work. Enjoy your stay, and please do not hesitate to contact me if you have" +
    " any questions or would like to join me on my next voyage."

class App extends React.Component {
    render() {
        return (
            <div className="Background">
                <h1>Welcome aboard</h1>
                <h4 className="bioText">{bioText}</h4>
                <MySocialLinks />
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