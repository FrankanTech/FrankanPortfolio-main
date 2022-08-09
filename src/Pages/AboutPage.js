import React, { Component } from 'react'
import AboutSection from "../Components/AboutComp/AboutSection.js"
import Timeline from '../Components/AboutComp/Timeline.js'
import FooterComp from '../Components/FooterComp/FooterComp';

export default class TestPage extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <AboutSection/>
                <Timeline/>
                <FooterComp/>
            </div>
            )
        }
    }
    