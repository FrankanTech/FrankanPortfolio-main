import React, { Component } from 'react'
import {Link, NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import "./NavStyle.css"
import "./MobileNavStyle.css"
import { BiHomeAlt, BiCommentDots, BiInfoCircle, BiBriefcaseAlt } from "react-icons/bi";

export default class MobileNav extends Component {
	constructor(){
		super();
		this.state = {
			Name: "",
			SpanToggle: "mobile-nav-toggle",
			CloseMarker: ""
		}
	}
	
	onMobileToggle= () =>{
		if(this.state.Name == "open")
		{
			this.setState({
				Name: "",
				SpanToggle: "mobile-nav-toggle",
				CloseMarker: ""
			});
		}        else{
			this.setState({
				
				Name: "open",
				SpanToggle: "",
				CloseMarker: "close-marker"
			});
		}
	}
	
	render() {
		return (
			<div id="mobile-nav" onClick={this.onMobileToggle}>
				<div className={this.state.SpanToggle}>            
					<span/>
					<span/>
					<span/>
				</div>            
				<div className={this.state.CloseMarker}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
					<div className={"MobileToggle " +this.state.Name}>
						<ul className='container list-container'>
							<li>
								<i><BiHomeAlt/></i>
								<NavLink className={({ isActive }) => isActive ? "menu-active" : undefined} to="/" onClick={this.onMobileToggle}>Home</NavLink>							
							</li>
							<li>
								<i><BiInfoCircle/></i>
								<NavLink  className={({ isActive }) => isActive ? "menu-active" : undefined} to="/About" onClick={this.onMobileToggle}>About</NavLink>
							</li>
							<li>
								<i><BiCommentDots/></i>
								<NavLink  className={({ isActive }) => isActive ? "menu-active" : undefined} to="/Resume" onClick={this.onMobileToggle}>Resume</NavLink>
							</li>
							<li>
								<i><BiBriefcaseAlt/></i>
								<NavLink  className={({ isActive }) => isActive ? "menu-active" : undefined} to="/Services" onClick={this.onMobileToggle}>Services</NavLink>
							</li>
							<li className='contact-mob'>
								<NavLink className={"primary-btn text-uppercase" + (({ isActive }) => isActive ? "menu-active" : undefined)} to="Contact" onClick={this.onMobileToggle}>Contact Me</NavLink>        
							</li>
						</ul>
					</div>
			</div>
			
			)
		}
	}
	