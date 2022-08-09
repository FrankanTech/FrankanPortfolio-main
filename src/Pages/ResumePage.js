import React, { Component } from 'react'
import Resume from "../Components/ResumeComp/Resume"
import FooterComp from '../Components/FooterComp/FooterComp';

export default class ResumePage extends Component {
  componentDidMount(){
  window.scrollTo(0, 0)
}
  render() {
    return (
      <div>
        <Resume/>
          <FooterComp/>
      </div>
    )
  }
}
