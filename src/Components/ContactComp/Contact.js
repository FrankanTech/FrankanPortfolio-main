import React, { Component, setState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css"

export default class Contact extends Component {
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
      }
  };

  render() {  
    
    return (
      <section className="ContactForm" id="Contact">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-7" style={{placeSelf: "center"}}>
              <div className="contact-caption mb-50">
                <h3>Let's Talk!</h3>
                <p>
                  Send me a message via email at <b>Frankan.Tabone@gmail.com</b>. <br/>Or fill up this form and I will get in touch with you.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <label id="lblmsg" className={this.state.lblClass}>{this.state.lblMsg}</label>
              <form onSubmit={this.sendEmail} className="contact-wrapper">
                <input className={this.state.inputName} type="text" name="name" placeholder="Full Name" />
                <input className={this.state.inputEmail} type="email" name="email" placeholder="Email Address" />
                <input className={this.state.inputSubject} type="text" name="subject" placeholder="Enter Subject" />
                <textarea className={this.state.inputMessage} 
                  name="message"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
                <button className="primary-btn submit-btn2" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
