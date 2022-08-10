import React, { Component } from 'react'
import ErrorImg from "../Assets/Images/ErrorImg.PNG"

export default class ErrorPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        key: "" //Useless, used for reloading
    };
}
  render() {
    return (
        <div className='error-page'>
        <div className='container'>
            <div className='error-section'>
                <img src={ErrorImg}/>
                <h2>Oh No!</h2>
                <p>Looks like the page you are looking for is missing.</p>
            </div>
            </div>
      </div>
    )
  }
}
