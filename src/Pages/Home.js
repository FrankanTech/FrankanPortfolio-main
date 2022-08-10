import React, { Component } from 'react'
import Section from "../Components/SectionComp/Section.js";
import AboutBody from "../Components/AboutComp/AboutBody"
import Projects from '../Components/ProjectsComp/Projects';
import ResumeMini from "../Components/ResumeComp/ResumeMini.js"
import FooterComp from '../Components/FooterComp/FooterComp';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            key: "" //Useless, used for reloading
        };
    }
componentDidMount(){
    window.scrollTo(0, 0)
}


    render() {
        return (
            <div>
            <Section/>            
            <AboutBody/>
            <ResumeMini/>
            {/*<ServiceSection/>*/}
            {/*<Projects/>*/}
            <FooterComp/>
            </div>
            )
        }
    }
    