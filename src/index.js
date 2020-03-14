import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router, Switch} from "react-router-dom";

import NotFound from "./Pages/NotFound";
import Header from "./Header";

import App from './Pages/App'
import Apps from "./Pages/Apps"
import Games from "./Pages/Games"
import Miscellaneous from "./Pages/Miscellaneous"
import Resume from "./Pages/Resume"
import ResumeBackup from "./Pages/ResumeBackup"
import Stats from "./Pages/Stats";
import Projects from "./Pages/Projects";

document.body.style = 'background: #282c34;';

const routing = (
    <Router>
        <div>
            <Route component={Header} />
            <Route exact path="/" component={App} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume.pdf" component={Resume} />
            <Route exact path="/stats" component={Stats} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// <Route component={NotFound} />

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
