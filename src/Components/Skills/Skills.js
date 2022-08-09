import React, { Component } from 'react'
import cSharp from "../../Assets/Images/CSharp.png";
import Html from "../../Assets/Images/Html.png";
import Css from "../../Assets/Images/Css.png";
import JavaScript from "../../Assets/Images/JavaScript.png";
import SQL from "../../Assets/Images/sql.png";
import "./SkillsStyle.css"

export default class Skills extends Component {
    render() {
        return (
            <div className="my-5">
            <div className="skill">
                <div className='fig'>
                    <img src={cSharp} className="skill-img"/>
                    <h3>C#</h3>
                </div>
            <div className="progress">
            <div data-aos="fade-right" className="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
            <span>95%</span>
            </div>
            </div>   
            </div>  
                <div className="skill">
                <div className='fig'>
                        <img src={Html} className="skill-img"/>
                        <h3>HTML5</h3>
                    </div>
                <div className="progress">
                <div data-aos="fade-right" className="progress-bar" role="progressbar" style={{width: "96%"}} aria-valuenow="96" aria-valuemin="0" aria-valuemax="100">
                <span>96%</span>
                </div>
                </div>
                </div>
                <div className="skill">
                <div className='fig'>
                        <img src={Css} className="skill-img"/>
                        <h3>CSS</h3>
                    </div>
                <div className="progress">
                <div data-aos="fade-right" className="progress-bar" role="progressbar" style={{width: "92%"}} aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">
                <span>92%</span>
                </div>
                </div>
                </div>
                <div className="skill">
                <div className='fig'>
                        <img src={JavaScript} className="skill-img"/>
                        <h3>JavaScript</h3>
                    </div>
                <div className="progress">
                <div data-aos="fade-right" className="progress-bar" role="progressbar" style={{width: "88%"}} aria-valuenow="88" aria-valuemin="0" aria-valuemax="100">
                <span>88%</span>
                </div>
                </div>
                </div>           
                <div className="skill">
                <div className='fig'>
                        <img src={SQL} className="skill-img"/>
                        <h3>SQL</h3>
                    </div>
                    <div className="progress">
                        <div data-aos="fade-right" className="progress-bar" role="progressbar" style={{width: "88%"}} aria-valuenow="88" aria-valuemin="0" aria-valuemax="100">
                            <span>88%</span>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
    