import React, { Component } from 'react'
import Resume from "../Components/ResumeComp/Resume"
import FooterComp from '../Components/FooterComp/FooterComp';
import Loader from "../Components/LoaderComp/Loader.js";

export default class ResumePage extends Component {
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
          <Resume/>
          <FooterComp/>
      </div>
    )
  }
}
