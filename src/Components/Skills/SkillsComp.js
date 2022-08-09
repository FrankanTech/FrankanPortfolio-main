import React, { Component } from 'react'
import Skills from "./Skills.js"
import Services from "./Services.js"

export default class SkillsComp extends Component {
  render() {
    return (
        
        <section className='section-skills'>        
        <div className='skills-title'>
                    <h1>Skills</h1>
        </div>
        <Services/>
        <div className='container'>
            <Skills/>
        </div>
        </section>
    )
  }
}
