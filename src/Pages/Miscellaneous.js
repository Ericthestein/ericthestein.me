import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import ProjectsBrowser from "../Components/ProjectsBrowser";

export default class Miscellaneous extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Background">
                <ProjectsBrowser
                    constantFilters={["misc"]}
                    title={"Miscellaneous"}
                    description={""}
                />
            </div>
        );
    }
}
