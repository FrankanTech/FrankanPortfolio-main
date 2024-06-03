import React, { Component } from 'react'
import Socials from './SocialsComp.js'
import Nav from "./FooterNav.js"
import Contact from "../ContactComp/Contact.js"
import "./FooterStyle.css"

import Decor from "../ResumeComp/Decor.js"

export default class FooterComp extends Component {
  render() {
    return (
      <section className="FooterClass">
      <Decor/>
        <div className='container'>
            <Contact/>
            <Nav/>
            <Socials/>
          <div className="CopyRight">Copyright ©2024 All rights reserved by <b>Frankan Tabone</b></div>
          </div>
      </section>
    )
  }
}
