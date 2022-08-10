import React, { Component } from 'react'
import {Link, NavLink } from "react-router-dom"
import "./FooterStyle.css"

export default class FooterNav extends Component {
  render() {
    return (
      <div className='FooterNav'>
        <ul className='footer-navbar'>
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
            <NavLink className={({ isActive }) => isActive ? "menu-active" : undefined} to="/Services">Services</NavLink>
            </li>           
        </ul>

      </div>
    )
  }
}
