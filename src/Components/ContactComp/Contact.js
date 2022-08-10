import React, { Component, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css"

export default class Contact extends Component {

  sendEmail(e) {
    e.preventDefault();

    if(e.target.name.value === "" || e.target.email.value || e.target.message.value)
    {
      
    }
    console.log(e.target.name.value);
      emailjs.sendForm('service_sxjaa0m', 'template_1a0i3yf', e.target, '7CtggsP5DMYgjJUz8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
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
              <form onSubmit={this.sendEmail} className="contact-wrapper">
                <input type="text" name="name" placeholder="Full Name" />
                <input type="email" name="email" placeholder="Email Address" />
                <textarea
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
