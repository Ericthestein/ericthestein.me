import React, {Component} from 'react'
import { Multiselect } from 'multiselect-react-dropdown';

import "../Styles/Projects.css"

import ProjectsList from "./ProjectsList";

let projectsData = require("../Data/projects")

export default class ProjectsBrowser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filters: [],
            possibleFilters: []
        }
    }

    componentDidMount() {
        this.pushConstantFilters()
        this.updatePossibleFilters()
    }

    pushConstantFilters = () => {
        let {constantFilters} = this.props
        if (constantFilters !== undefined) {
            this.setState({
                filters: constantFilters
            })
        }
    }

    updatePossibleFilters = () => {
        var possibleFilters
        if (this.props.possibleFilters) {
            possibleFilters = this.props.possibleFilters
        } else { // get all possible filters without duplicates
            possibleFilters = []
            for (var i = 0; i < projectsData.length; i++) {
                let projectData = projectsData[i]
                for (var j = 0; j < projectData.categories.length; j++) {
                    if (possibleFilters.indexOf(projectData.categories[j]) === -1) {
                        //if (!this.props.constantFilters || this.props.constantFilters.indexOf(projectData.categories[j]) === -1) { // prevent adding constants
                            possibleFilters.push(projectData.categories[j])
                        //}
                    }
                }
            }
        }
        this.setState({
            possibleFilters: possibleFilters
        })
    }

    // Filter Dropdown

    prepareFilterArray = (filters) => {
        let preparedArray = []
        for (var i = 0; i < filters.length; i++) {
            preparedArray.push({
                name: filters[i],
                id: i
            })
        }
        return preparedArray
    }

    onFilterAdded = (selectedList, selectedValue) => {
        let currentFilters = this.state.filters
        currentFilters.push(selectedValue.name)
        this.setState({
            filters: currentFilters
        })
    }

    onFilterRemoved = (selectedList, selectedValue) => {
        let currentFilters = this.state.filters
        currentFilters.splice(currentFilters.indexOf(selectedValue.name))
        this.setState({
            filters: currentFilters
        })
    }

    render() {
        let options = this.prepareFilterArray(this.state.possibleFilters)
        let selectedFilters = this.prepareFilterArray(this.state.filters)
        let multiSelectConstantFilters = this.prepareFilterArray(this.props.constantFilters)
        return(
            <div className={this.props.className || "Projects-Browser"}>
                <h3 className="Projects-Browser-Title">{this.props.title}</h3>
                <h4 className="Projects-Browser-Description">{this.props.description}</h4>
                <Multiselect
                    className="Projects-Multiselect"
                    options={options}
                    selectedValues={multiSelectConstantFilters}
                    //disablePreSelectedValues={true}
                    onSelect={this.onFilterAdded}
                    onRemove={this.onFilterRemoved}
                    displayValue={"name"}
                />
                <ProjectsList
                    filters={this.state.filters}
                />

            </div>
        )
    }
}