import React from "react";
import "./intro.css";
import bg from "../../assets/assets/pppp.png";
import btnImg from "../../assets/assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Jeethu</span> <br /> Frontend Designer
        </span>
        <p className="introPara">
          I am a skilled Frontend Developer passionate about creating engaging
          and <br />
          user-friendly web experiences.
        </p>
        <div className="btnContainer">
          <Link to="contact">
            <button className="btn">
              <img src={btnImg} className="btnImg" alt="Hire Me" /> Hire Me
            </button>
          </Link>
          <a
            href="/Muppala_Jeethu_Resume_A.pdf"
            download="Muppala_Jeethu_CV.pdf"
          >
            <button className="btn downloadBtn">Download CV</button>
          </a>
        </div>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
