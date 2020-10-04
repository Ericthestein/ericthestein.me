import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import ProjectsBrowser from "../Components/Projects/ProjectsBrowser";

export default class Projects extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Background">
                <div className={"ProjectsBrowserOnProjectsPage"}>
                    <ProjectsBrowser
                        constantFilters={[]}
                        title={"Projects"}
                        description={""}
                    />
                </div>
            </div>
        );
    }
}
