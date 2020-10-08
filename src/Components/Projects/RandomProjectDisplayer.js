import React, {Component} from 'react';
import data from "../../Data/projects";

export default class RandomProjectDisplayer extends Component {
    DISPLAY_DURATION = 4 * 1000;
    FADE_DURATION = 0.5 * 1000;

    constructor(props) {
        super(props);
        this.state = {
            currentProjectData: this.selectRandomProject()
        }
        this.displayRandomImages();
    }

    displayRandomImages = () => {
        setInterval(() => {
            // show
            this.setState({
                currentProjectData: this.selectRandomProject()
            });
            // fade in

            // fade out
        }, this.DISPLAY_DURATION + this.FADE_DURATION)
    }

    /**
     *
     * @returns {projectName, projectImage}
     */
    selectRandomProject = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const project = data[randomIndex];

        if (project.media) {
            // could be improved by only taking random of images, but that would increase wait time usually
            const randomMediumIndex = Math.floor(Math.random() * project.media.length);
            const randomMedium = project.media[randomMediumIndex];
            if (randomMedium && randomMedium.type === "image") {
                return({
                    projectName: project.name,
                    projectImage: randomMedium.src
                });
            }
        }

        return this.selectRandomProject();
    }

    render() {
        const currentProjectData = this.state.currentProjectData;
        if (currentProjectData) {
            return(
                <div className={"random-project-displayer-container"}>
                    <img
                        className={"random-project-displayer-image"}
                        src={currentProjectData.projectImage}
                    />
                    <div className={"random-project-displayer-name-container"}>
                        <h4 className={"random-project-displayer-name"}>{currentProjectData.projectName}</h4>
                    </div>
                </div>
            )
        } else {
            return(null)
        }
    }
}