import React, { Component } from 'react'
import {Link, NavLink } from "react-router-dom"


export default class ResumeMini extends Component {
  render() {
    return (
      <div className='resume-mini'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
            <div className="section-heading text-center">
            <h2 className='title'>My Resume</h2>
            </div>
            </div>
            <div className="col-md-6 col-12" data-aos="fade-right">
            <h2 className="mb-5 sub-title">Education</h2>
            <div className="resume-item mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-calendar" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
            <span className="date"> October 2021 - Present</span>
            <h3>Masters in Information Technology & Systems</h3>
            <p>This Master course, provides a number of units that cover the aspect of Networking, Security, Finance and Management.</p>
            <span className="school">MCAST</span>
            </div>
            <div className="resume-item mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-calendar" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
            <span className="date"> October 2017 - June 2020</span>
            <h3>Bachelor of Science In Software Development</h3>
            <p>Learning the essentials to become a Software Developer, studying at MCAST which provides
              a practical enviornment to learn.</p>
            <span className="school">MCAST</span>
            </div>      
            <div className="resume-item mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-calendar" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
            <span className="date"> October 2013 - June 2017</span>
            <h3>Software Development</h3>
            <p>Started my journey to become a Software Developer, developing my programming and engineering skills thaught by MCAST.
            </p>
            <span className="school">MCAST</span>
            </div>              
            </div>
            <div className="col-md-6 col-12" data-aos="fade-left">
            <h2 className="mb-5 sub-title">Experience</h2>
            <div className="resume-item mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-calendar" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
            <span className="date"> January 2021 - Present</span>
            <h3>Software Developer</h3>
            <p>Working as a Software Developer in the finance business. Mostly as a Back-End Developer, integrating APIs and integrating with third-party software.</p>
            <span className="school">Apco Pay</span>
            </div>
            <div className="resume-item mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-calendar" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
            <span className="date"> August 2020 - January 2021</span>
            <h3>Software Developer</h3>
            <p>As part of the Advisory team, my role was to handle any software issue related to clients. Furthermore, 
              developing new internal software and refactoring.</p>
            <span className="school">PwC</span>
            </div> 
            <div className="resume-item mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-calendar" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
            <span className="date"> June 2019 - August 2020</span>
            <h3>Software Developer in Test</h3>
            <p>Being part of the Advisory team as a part timer. Being responsbile for documenting, testing and fixing any issues related to Software.</p>
            <span className="school">PwC</span>
            </div>           
            </div>            
            <div className='col-12 btn-div'>
              <NavLink className={"primary-btn text-uppercase resume-btn " + (({ isActive }) => isActive ? "menu-active" : undefined)} to="/Resume" >Explore More</NavLink>
            </div>
          </div>
        </div>
        </div>
    )
  }
}
