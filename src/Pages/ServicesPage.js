import React, { Component } from 'react'
import Services from "../Components/ServicesComp/Services.js"
import Footer from "../Components/FooterComp/FooterComp.js"
import Loader from "../Components/LoaderComp/Loader.js";

export default class ServicesPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        key: "" //Useless, used for reloading
    };
}
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        {/* <Loader/> */}
        <Services/>
        <Footer/>
      </div>
    )
  }
}
