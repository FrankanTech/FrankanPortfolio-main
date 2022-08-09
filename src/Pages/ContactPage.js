import React, { Component } from 'react'
import ContactForm from "../Components/ContactComp/ContactForm.js"

export default class ContactPage extends Component {
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
