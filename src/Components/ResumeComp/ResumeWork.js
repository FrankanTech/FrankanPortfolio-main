import React, { Component } from 'react'
import Skill from "./ResumeSkills"

export default class ResumeWork extends Component {
    constructor(props) {
        super(props);
        
    }
    
    
    render() {
        return (
            <div data-aos="fade-up" > 
                <div className='resume-work'>
                    <span/>
                    <div className='work-title-container'>
                        <div className='work-title'>
                            <p className='date'>{this.props.WorkDate}</p>
                            <div className='title'>
                                <h2>{this.props.WorkTitle}</h2> 
                                <h3>- {this.props.WorkPos}</h3>
                            </div>
                        <p>{this.props.WorkDesc}</p>
                        </div>
                        <div className='spacer-full'></div>
                        <div className='work-list'>
                            {this.props.Skills.map(element => {                                
                                return <Skill title={element.Title} WorkSkills={element.List}/>
                            })}                                                                   
                        </div>
                    </div>
                    
                </div>   
                <div className='spacer'></div>
            </div>
            
        )
    }
}
    