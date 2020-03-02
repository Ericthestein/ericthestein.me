import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router, Switch} from "react-router-dom";

import NotFound from "./Pages/NotFound";
import Header from "./Header";

import App from './Pages/App'
import Freelance from "./Pages/Freelance"
import Research from "./Pages/Research"
import PersonalProjects from "./Pages/PersonalProjects"
import Resume from "./Pages/Resume"
import ResumeBackup from "./Pages/ResumeBackup"

const routing = (
    <Router>
        <div>
            <Route component={Header} />
            <Route exact path="/" component={App} />
            <Route exact path="/freelance" component={Freelance} />
            <Route exact path="/research" component={Research} />
            <Route exact path="/personal-projects" component={PersonalProjects} />
            <Route exact path="/resume" component={ResumeBackup} />


        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// <Route component={NotFound} />

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
