import React, { Component } from 'react'

export default class Loader extends Component {
        constructor(props){
        super(props);
        this.state = {
            LoaderState : false
        };

    }
  render() {
    return (
      <div>Loader</div>
    )
  }
}
