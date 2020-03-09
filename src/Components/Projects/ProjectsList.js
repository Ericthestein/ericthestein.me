import React, {Component} from 'react'

import ProjectComponent from "./ProjectComponent";
import "./Projects.css"
import data from "../../Data/projects.js"
let projects = data

export default class ProjectsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredComponents: []
        }
        this.filterUpdateDebounce = false
    }

    componentDidMount() {
        this.updateFilteredComponents()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.filterUpdateDebounce) {
            this.filterUpdateDebounce = true
            this.updateFilteredComponents()
            setTimeout(() => {
                this.filterUpdateDebounce = false
            }, 1000)
        }
    }

    isValidProject(projectData) {
        let {filters} = this.props
        for (var i = 0; i < filters.length; i++) {
            let filter = filters[i]
            if (projectData.categories.indexOf(filter) === -1) {
                return false
            }
        }
        return true
    }

    dateToMonthAndYear = (dateString) => {
        let components = dateString.split("/")
        return parseInt(components[0]), parseInt(components[1]) // POTBUG: String.parseInt
    }

    sortMostRecent = (components) => {
        components.sort((d1, d2) => {
            let d1Month, d1Year = this.dateToMonthAndYear(d1.date)
            let d2Month, d2Year = this.dateToMonthAndYear(d2.date)

            let yearDiff = d1Year - d2Year
            if (yearDiff === 0) {
                return d1Month - d2Month
            } else return yearDiff
        })
    }

    updateFilteredComponents() {
        let components = []
        for (var i = 0; i < projects.length; i++) {
            let projectData = projects[i]
            if (this.isValidProject(projectData)) {
                components.push(projectData)
            }
        }
        this.sortMostRecent(components)
        this.setState({
            filteredComponents: components
        })
    }

    render() {
        return(
            <div className={this.props.className || "Projects-List"}>
                {this.state.filteredComponents.map((data, index) => {
                    return(
                        <ProjectComponent data={data} key={index}/>
                    )
                })}
            </div>
        )
    }
}