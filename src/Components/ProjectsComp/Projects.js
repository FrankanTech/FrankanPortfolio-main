import React, { Component } from "react";
import "./Projects.css";
import img1 from "../../Assets/Images/CSharp.png";
import img2 from "../../Assets/Images/Img2.jpg";
import img3 from "../../Assets/Images/Img3.jpg";
import img4 from "../../Assets/Images/Img4.jpg";
import img5 from "../../Assets/Images/Img5.jpg";
import img6 from "../../Assets/Images/Img6.jpg";
export default class Projects extends Component {
  render() {
    return (
      <section className="ProjectsSection">
        <div data-aos="fade-down" className="MiddleBar"></div>
        <div className="row">
          <div  className="ImgDiv">
            <div data-aos="fade-left" className="FirstSet">
              <div>
                <img src={img1}></img>
              </div>
              <div>
                <img src={img2}></img>
              </div>
              <div>
                <img src={img3}></img>
              </div>
            </div>

            <div data-aos="fade-right" className="SecondSet">
              <div>
                <img src={img4}></img>
              </div>
              <div>
                <img src={img5}></img>
              </div>
              <div>
                <img src={img6}></img>
              </div>
            </div>
          </div>
      </div>
      </section>
    );
  }
}
