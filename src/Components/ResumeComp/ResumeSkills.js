import React, { Component } from 'react'

export default class ResumeSkills extends Component {
    constructor(props) {
    super(props);
}
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <ul>
            {this.props.WorkSkills.map((skill, index) =>{
                return <li key={index}>{skill}</li>
            })}
        </ul>
      </div>
    )
  }
}
  