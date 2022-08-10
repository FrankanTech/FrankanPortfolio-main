import { useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Pages
import Home from "./Pages/Home";
import ResumePage from "./Pages/ResumePage.js";
import About from "./Pages/AboutPage"
import Contact from "./Pages/ContactPage.js"
import Services from "./Pages/ServicesPage"

//Components
import Header from "./Components/HeaderComp/Header.js";
//todo: Increase clickable area for X Marker
//todo: Fix close Mobile nav overlay when clicking outside div
//todo: Try adding a loader before each components loads the img
 

function App() {
  useEffect(() => {
    Aos.init({once: false, duration: 2000});
   // Aos.refresh();
    }, []);


  return (
    <Router>
      <div className="">  
        <Header/> 
        <Routes>
          <Route path="/" element={<Home key={Math.random}/>}/>
          <Route path="/About" element={<About key={Math.random}/>}/>
          <Route path="/Resume" element={<ResumePage key={Math.random}/>}/>
          <Route path="/Contact" element={<Contact key={Math.random}/>}/>
          <Route path="/Services" element={<Services key={Math.random}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
