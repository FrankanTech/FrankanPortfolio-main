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
                        <div className='desc-head'>Date of birth: 02/12/1996 <span className='head-span'/><div> <b>Nationality: </b>Maltese</div><span className='head-span'/><div> <b>Gender: </b>Male</div></div>
                        <p><b>About Me: </b><br/>Hi, my name is Frankan Tabone. Since young age technology was always
                            around me and I was always fascinated by the development and the software
                            side of technology. My mind set is to always learn and adapt to the current
                            state of technology. Thus, this year I decided to pursue a Master In Information
                            Technology and System to better improve myself and my skills. I consider
                            myself a very fast learner, mostly due to the fact that I enjoy what I do and
                            always thrive to be the best in what I do. I am a very good working among
                            other people as I always consider myself a team player who always tries to
                            support my team members.
                        </p>
                    </div>
                </div>
        </div>
        
        </div>
    )
  }
}
