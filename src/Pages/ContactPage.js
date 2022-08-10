import React, { Component } from 'react'
import ContactForm from "../Components/ContactComp/ContactForm.js"

export default class ContactPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        key: "" //Useless, used for reloading
    };
}
  componentDidMount(){
      window.scrollTo(0, 0)
  }
  render() {
    return (
        <div>
            <ContactForm/>
        </div>
    )
  }
}
