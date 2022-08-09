import React, { Component } from 'react'

export default class Loader extends Component {
        constructor(props){
        super(props);
        this.state = {
            LoaderState : false
        };

    }

  render() {
    if(this.state.LoaderState)
        {
            console.log("Loading")
            
        }
    return (
        
      <div>
        
      </div>
    )
  }
}
