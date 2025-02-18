import React from "react";
import "./intro.css";
import bg from "../../assets/assets/img.png";
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
          I am a skilled Frontend Developer passionate about 
          creating engaging and <br />
          user-friendly web experiences.
        </p>
        <Link to="contact">
          <button className="btn">
            <img src={btnImg} className="btnImg" alt="Hire Me" /> Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
