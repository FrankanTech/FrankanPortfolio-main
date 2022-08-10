import React, { Component } from 'react'
import "./ServicesStyle.css"

export default class Services extends Component {
  render() {
    return ( 
    <section className='section-services'>        
    <div className='services-title'>
                <h1>services</h1>
    </div>
      <div data-aos="fade-up" className='ServiceSection'>
        <div className='container'>
          <div className='service-header'>
            <h2>My Offered Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
              <span className="lnr lnr-pie-chart"></span>
              <div className='title-space'><a href="#"><h4>Front-End Development</h4></a></div>
                <p>
                  Building a responsive Front-End website with a modern looking style.
                </p>
              </div>
              </div>
              <div className="col-lg-4 col-md-6">
              <div className="single-services">
              <span className="lnr lnr-laptop-phone"></span>
              <div className='title-space'><a href="#"><h4>Back-End Development</h4></a></div>
                <p>
                  Integrating or Developing a Back-End API service with performance and effeciency in mind. 
                </p>
              </div>
              </div>
              <div className="col-lg-4 col-md-6">
              <div className="single-services">
              <span className="lnr lnr-camera"></span>
              <div className='title-space'><a href="#"><h4>Portfolio Development</h4></a></div>
                <p>
                  Building a Portfolio website with a variety of features that is easy to modify.
                </p>
              </div>
              </div>
            </div>
        </div>
      </div>
      </section>
    )
  }
}
