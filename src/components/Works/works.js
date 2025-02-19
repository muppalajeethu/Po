import React from "react";
import "./works.css";
import portfolio1 from "../../assets/assets/portfolio1.png";
import portfolio2 from "../../assets/assets/portfolio2.png";
import portfolio3 from "../../assets/assets/portfolio3.png";
import portfolio4 from "../../assets/assets/portfolio4.png";
import portfolio5 from "../../assets/assets/portfolio5.png";
import portfolio6 from "../../assets/assets/portfolio6.png";

const works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My skills</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help businesses achieve their goals and create a strong
        online presence.
      </span>
      <div className="worksImgs">
        <img src={portfolio1} alt="portfolio1" className="worksImg" />
        <img src={portfolio2} alt="" className="worksImg" />
        <img src={portfolio3} alt="" className="worksImg" />
        <img src={portfolio4} alt="" className="worksImg" />
        <img src={portfolio5} alt="" className="worksImg" />
        <img src={portfolio6} alt="" className="worksImg" />
      </div>
      <btn className="workBtn">See More</btn>
    </section>
  );
};

export default works;
