import React, { Component } from "react";
import {Link, NavLink } from "react-router-dom"
import "./NavStyle.css";

export default class Nav extends Component {
 
  render() {
    return (
      <div className="nav">
        <nav id="nav-menu-container">
          <ul className="nav-menu sf-js-enabled sf-arrows test">
            <li>              
              <NavLink to="/" className={({ isActive }) => isActive ? "menu-active" : undefined}>Home</NavLink>
            </li>
            <li>
              <NavLink  className={({ isActive }) => isActive ? "menu-active" : undefined} to="/About">About</NavLink>
            </li>
            <li>
            <NavLink  className={({ isActive }) => isActive ? "menu-active" : undefined} to="/Resume">Resume</NavLink>
            </li>
            <li>
            <NavLink  className={({ isActive }) => isActive ? "menu-active" : undefined} to="/Services">Services</NavLink>
            </li>           
          </ul>
        </nav>
        <NavLink className={"ContactMe primary-btn text-uppercase" + (({ isActive }) => isActive ? "menu-active" : undefined)} to="/Contact" >Contact Me</NavLink>
        
      </div>
    );
  }
}
