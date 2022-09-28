import React, { Component } from 'react'
import emailjs from '@emailjs/browser';
import Socials from "../FooterComp/SocialsComp.js"
import ContactImg from "../../Assets/Images/ContactImg.jpg"

export default class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      lblMsg: "",
      lblClass: "lbl-hide",
      inputName: "",
      inputEmail: "",
      inputSubject: "",
      inputMessage: ""
    };

    
    this.sendEmail = this.sendEmail.bind(this);
  }
  sendEmail(e) {
    e.preventDefault();

    if(e.target.name.value === "")
    {
      this.setState({inputName: "input-error"});
    }
    else{
      this.setState({inputName: ""});
    }
    if(e.target.email.value === "")
    {
      this.setState({inputEmail: "input-error"});
    }
    else{
      this.setState({inputEmail: ""});
    }
    if(e.target.message.value === "")
    {
      this.setState({inputMessage: "input-error"});
    }
    else{
      this.setState({inputMessage: ""});
    }
    if(e.target.subject.value === "")
    {
      this.setState({inputSubject: "input-error"});
    }
    else{
      this.setState({inputSubject: ""});      
    }
    if(e.target.name.value === "" || e.target.email.value === "" || e.target.message.value === "" || e.target.subject.value === "")
    {
      this.setState({lblMsg: "Please Enter All The Details!"});
      this.setState({lblClass: "lbl-error"});
    }    
    else{
      this.setState({lblMsg: "Message Was Submitted Successfully!"});
      this.setState({lblClass: "lbl-success"}) ;
    emailjs.sendForm('service_sxjaa0m', 'template_1a0i3yf', e.target, '7CtggsP5DMYgjJUz8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  document.getElementById("lblmsg").scrollIntoView({behavior: "smooth", block: "center"});
}
  render() {

    return (
        <div className='section-contactform'>
            <div className='container'>
                <div className='contact-form'>
                  <div className='col-lg-6 col-12 card card-side'>
                    <h2>Let's Talk</h2>
                    <p>I will get back to you as soon as possible!</p>
                    <img src={ContactImg} style={{maxHeight: '300px'}}/>
                    <Socials/>
                  </div>
                  <div className='col-lg-6 col-12 card'>
                      <div>
                        <h2>Contact Me</h2>    
                      </div>
                      
                      <label id="lblmsg" className={this.state.lblClass}>{this.state.lblMsg}</label>
                      <form onSubmit={this.sendEmail} className="contact-wrapper">
                      <div className='contact-inputs'>                     
                        <input className={this.state.inputName}  type="text" name="name" placeholder="Your Name"></input>
                        <input className={this.state.inputEmail} type="email" name="email" placeholder="Email Address" />
                        <input className={this.state.inputSubject} type="text" name="subject" placeholder="Enter Subject" />
                        <textarea className={this.state.inputMessage} 
                          name="message"
                          id="message"
                          placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button type="submit" className='primary-btn submit-btn2'>Submit</button>
                    </form>
                  </div>
                </div>
            </div>
        </div>
    )
  }
}
