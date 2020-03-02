import React from 'react';
import '../App.css';


export default class ResumeBackup extends React.Component {
    constructor(props) {
        super(props)
        this.props.history.push("../Resume.pdf")
        window.location.reload(false);

    }

    componentDidMount() {

    }

    render() {
        return null
    }
}
