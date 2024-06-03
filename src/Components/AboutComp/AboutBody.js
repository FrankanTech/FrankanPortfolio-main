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
          
          <div className='text-center'>
              <h2 className="text-uppercase">About</h2>
          </div>
            <div data-aos="fade-right" className="col-lg-6 col-md-6 home-about-left">
                <img className="img-fluid" src={AboutImg} alt=""/>
            </div>
            <div data-aos="fade-left" className="col-lg-6 col-md-6 home-about-right">
                <p>
                Hi, my name is Frankan Tabone, and I am a passionate Full-Stack Software Developer with <strong>4</strong> years of experience.
                <br/>
                I am a curious individual, constantly striving to learn and excel in my profession by giving more than <strong>100%</strong> to achieve my goals.            
                <br/>
                I consider myself an excellent team player who thrives in collaborative environments where we work together to produce the best version of a product.
                
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
