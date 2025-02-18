import React from "react";
import "./skill.css";
import UIDesign from "../../assets/assets/ui-design.png";
import WebDesign from "../../assets/assets/website-design.png";
import AppDesign from "../../assets/assets/app-design.png";

const skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> What I do </span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, JavaScript, and frameworks such as React.js and Node.js
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is demo text you can write your own content here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>Building responsive and visually appealing websites.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesgn" className="skillBarImg" />
          <div className="skillBarText">
            <h2> Frontend App Development</h2>
            <p>Developing mobile-friendly and high-performance applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skill;
