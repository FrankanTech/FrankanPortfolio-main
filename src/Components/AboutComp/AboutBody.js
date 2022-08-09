import React, { Component } from 'react'
import {Link, NavLink } from "react-router-dom"
import "./AboutSectionStyle.css"
import AboutImg from "../../Assets/Images/AboutImg.jpeg"
import Skills from '../Skills/Skills'

export default class AboutTitle extends Component {
  render() {
    return (
      <div className="container">
        <div className="row about-fullscreen align-items-center justify-content-between">
            <div data-aos="fade-right" className="col-lg-6 col-md-6 home-about-left">
                <img className="img-fluid" src={AboutImg} alt=""/>
            </div>
            <div data-aos="fade-left" className="col-lg-6 col-md-6 home-about-right">
                <h1 className="text-uppercase">Personal Details</h1>
                <p>
                  Hi, my name is Frankan Tabone, I am a Software Developer with <strong>2</strong> Years experience. 
                </p>
                <Skills/>
                <div className='about-btn'>
                  <NavLink className={"primary-btn text-uppercase" + (({ isActive }) => isActive ? "menu-active" : undefined)} to="/About" >View Full Details</NavLink>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
