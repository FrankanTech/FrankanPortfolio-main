import React, { Component } from 'react'
import Services from "../Components/ServicesComp/Services.js"
import Footer from "../Components/FooterComp/FooterComp.js"

export default class ServicesPage extends Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <Services/>
        <Footer/>
      </div>
    )
  }
}
