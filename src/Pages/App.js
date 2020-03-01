import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Slider from 'infinite-react-carousel';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
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
                </header>
            </div>
        );
    }
}

export default App;
