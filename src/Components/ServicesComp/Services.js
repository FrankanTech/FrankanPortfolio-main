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
                  I can help in building a responsive and eye-catching UI interface.
                </p>
              </div>
              </div>
              <div className="col-lg-4 col-md-6">
              <div className="single-services">
              <span className="lnr lnr-laptop-phone"></span>
              <div className='title-space'><a href="#"><h4>Back-End Development</h4></a></div>
                <p>
                  I can integrate your web application with an API or build a service from scratch.
                </p>
              </div>
              </div>
              <div className="col-lg-4 col-md-6">
              <div className="single-services">
              <span className="lnr lnr-camera"></span>
              <div className='title-space'><a href="#"><h4>Portfolio Development</h4></a></div>
                <p>
                  I can help build your own Portfolio website and ensure a top quality design.
                </p>
              </div>
              </div>              
              <div className="col-lg-4 col-md-6">
              <div className="single-services">
              <span className="lnr lnr-rocket"></span>
              <div className='title-space'><a href="#"><h4>Consultation</h4></a></div>
                <p>
                  I can guide you if in need for consultation regarding technologies or which software is best to use.
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
