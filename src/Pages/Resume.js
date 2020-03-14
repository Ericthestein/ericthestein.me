import React from 'react';

import logo from '../logo.svg';
import '../App.css';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// import Header from "../Header";

let resumeFile = "https://cors-anywhere.herokuapp.com/" + "http://www.ericthestein.me/Resume.pdf" //"http://www.pdf995.com/samples/pdf.pdf"

/*
class FullPdfForDownload extends React.Component {
    render() {
        return(
            <Document>
                <Page>

                </Page>
            </Document>
        )
    }
}

class ResumeDownloadLink extends React.Component {
    render() {
        return null

        return(
            <PDFDownloadLink document={<FullPdfForDownload />} fileName="ericsteinresume.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
        )


    }
}

 */

export default class Resume extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            numPages: null,
            pageNumber: 1,
            resumeUrl: "../resume.pdf"//resumeFile
        }
    }

    componentDidMount() {
        this.props.history.push("../resume.pdf")
        window.location.reload(false);
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {

        return null
        const { pageNumber, numPages } = this.state;
        return (
            <div className="Background">
                <h3>Resume</h3>
                <a href='../Resume.pdf' download>Download</a>
                <Document
                    className="Resume-Document"
                    file={this.state.resumeUrl}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    onLoadError={console.log}
                >
                    <Page
                        className="Resume-Page"
                        pageNumber={pageNumber}
                        height={window.screen.height / 2}
                    />
                </Document>
            </div>
        );
    }
}
