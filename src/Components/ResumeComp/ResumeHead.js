import React, { Component } from 'react'
import cvImg from "../../Assets/Images/cvimg.png"

export default class ResumeHead extends Component {
  render() {
    return (
        <div>
        <div className='resume-head'>
            <div className='resume-img'>
                <img src={cvImg}/>
            </div>
            <div className='intro-name'>
                <h1>Frankan Tabone</h1>
                <div className='intro-spacer'></div>
                    <div className='intro-desc'>
                        <div className='desc-head'><div><b>Date of birth: </b>02/12/1996 </div><span className='head-span'/><div> <b>Nationality: </b>Maltese</div><span className='head-span'/><div> <b>Gender: </b>Male</div></div>
                        <p><b>About Me: </b><br/>
                        Hi, my name is Frankan Tabone. At a young age I was encompassed by technology and soon became fascinated with software and development. My ideology is to remain proficient in the ever-growing and constantly advancing state of technology. Thus, in 2022 I decided to pursue a Masters in Information Technology and System to enhance my knowledge and refine my skills. I am a fast learner who is passionate about what I do and always aim to provide the best service. I enjoy working with others and thrive off a team environment where I am provided with the opportunity to support my team members.
                        </p>
                    </div>
                </div>
        </div>
        
        </div>
    )
  }
}
