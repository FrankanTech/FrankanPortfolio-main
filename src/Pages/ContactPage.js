import React, { Component } from 'react'
import ContactForm from "../Components/ContactComp/ContactForm.js"
import Loader from "../Components/LoaderComp/Loader.js";

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
            {/* <Loader/>  */}
            <ContactForm/>
        </div>
    )
  }
}
