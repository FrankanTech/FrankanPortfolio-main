import React, { Component } from 'react'
import AboutSection from "../Components/AboutComp/AboutSection.js"
import Timeline from '../Components/AboutComp/Timeline.js'
import FooterComp from '../Components/FooterComp/FooterComp';
import Loader from "../Components/LoaderComp/Loader.js";

export default class AboutPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            key: "" //Useless, used for reloading
        };
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render() 
    {
        return (
            <div>
                {/* <Loader/> */}
                <AboutSection/>
                <Timeline/>
                <FooterComp/>
            </div>
            )
    }
}
    