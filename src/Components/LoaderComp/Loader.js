import React, { Component } from 'react'
import "./LoaderStyle.css"

export default class Loader extends Component {
        constructor(props){
        super(props);
        this.state = {
            LoaderState : true,
            Load: "loading"
            
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
      setTimeout(() => {
        this.setState({LoaderState: false});
        this.setState({Load: ""});       
      }, 350);
    }
  render() {
    
    return (
        
      <div className={"loader " + this.state.Load}>
        <div className='loader-items'>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          
        </div>
      </div>
    )
  }
}
