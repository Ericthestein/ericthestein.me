import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import ProjectsBrowser from "../Components/ProjectsBrowser";

export default class Games extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Background">
                <ProjectsBrowser
                    constantFilters={["game"]}
                    title={"Games"}
                    description={""}
                />
            </div>
        );
    }
}
