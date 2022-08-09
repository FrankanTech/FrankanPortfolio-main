import React, { Component } from 'react'
import SkillsComp from "../Components/Skills/SkillsComp"
import Footer from "../Components/FooterComp/FooterComp.js"

export default class SkillsPage extends Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <SkillsComp/>
        <Footer/>
      </div>
    )
  }
}
