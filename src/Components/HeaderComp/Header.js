import React, { Component } from "react";
import "./HeaderStyle.css";
import Nav from "../NavComp/Nav.js";
import MobileNav from "../NavComp/MobileNav.js";
import Logo from "../../Assets/Images/Logo.png"

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      className: "",
      mobileView: ""
    };
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 280) {
      this.setState({
        className: "withShadow",
      });
    } else {
      this.setState({
        className: "",
      });
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll();
  }
  render() {
    return (
      <div className={this.state.className} id="Header">
        <div className="container main-menu">
          <div className="align-items-center justify-content-between d-flex">
            <div id="logo">
              <a href="/">
                <img
                  src={Logo} />
              </a>
            </div>
            
            <Nav />
            <MobileNav/>

            <div id="mobile-body-overly"></div>
          </div>
        </div>
      </div>
    );
  }
}

