import React, { Component } from 'react'
import {Link, NavLink } from "react-router-dom"
import "./SectionStyle.css"
import ProfileImg from "../../Assets/Images/Picture.jpg"
import ProfileImg2 from "../../Assets/Images/CroppedImg.png"

import Socials from "../FooterComp/SocialsComp"


export default class Section extends Component {
  render() {
    return (
        <section data-aos="fade-down" className="main-area">
            <div className="container">
                <div className="row fullscreen align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-6 banner-left">                        
                        <h1>Frankan Tabone</h1>
                        <h2>Software Developer</h2>
                        <div className='home-btn'>
                            <NavLink className={"primary-btn text-uppercase" + (({ isActive }) => isActive ? "menu-active" : undefined)} to="/About" onClick={this.onMobileToggle}>About Me</NavLink>    
                       </div>              
                    </div>
                </div>
            </div>
        </section>    
    )
  }
}
