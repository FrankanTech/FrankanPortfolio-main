import React, { Component } from 'react'
import emailjs from '@emailjs/browser';
import Socials from "../FooterComp/SocialsComp.js"
import ContactImg from "../../Assets/Images/ContactImg.jpg"

export default class ContactForm extends Component {
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
        <div className='section-contactform'>
            <div className='container'>
                <div className='contact-form'>
                  <div className='col-lg-6 col-12 card card-side'>
                    <h2>Let's Talk</h2>
                    <p>I will get back to you as soon as possible!</p>
                    <img src={ContactImg} style={{maxHeight: '350px'}}/>
                    <Socials/>
                  </div>
                  <div className='col-lg-6 col-12 card'>
                      <div>
                        <h2>Contact Me</h2>    
                      </div>
                      <form onSubmit={this.sendEmail} className="contact-wrapper">
                      <div className='contact-inputs'>                     
                        <input type="text" name="name" placeholder="Your Name"></input>
                        <input type="email" name="email" placeholder="Email Address" />
                        <input type="text" name="subject" placeholder="Enter Subject" />
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button type="submit" className='submit-btn2' >Submit</button>
                    </form>
                  </div>
                </div>
            </div>
        </div>
    )
  }
}
