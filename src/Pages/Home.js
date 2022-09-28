import React, { Component } from 'react'
import Section from "../Components/SectionComp/Section.js";
import AboutBody from "../Components/AboutComp/AboutBody";
import ResumeMini from "../Components/ResumeComp/ResumeMini.js";
import FooterComp from '../Components/FooterComp/FooterComp';
import Loader from "../Components/LoaderComp/Loader.js";

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
                {/* <Loader/> */}
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
    