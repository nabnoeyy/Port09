import React from "react";
import cv_Nabthong from "../assets/download/CV_Nabthong.pdf";

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        {/** About Me*/}
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              Hello! My name is Nabthong, and I am a software Engineering. I am
              passionate about Javascript and have experience in mySQL and UX/UI
              . I enjoy collaborating with others and am always eager to learn
              and grow.
            </p>
            <div className="about-btn">
              <a href={cv_Nabthong} target="_blank">
                <button className="btn">
                  Download CV <i className="uil uil-import"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/** Skills*/}
        <div className="col"></div>
        <div className="Skills-Box">
          <div className="Skills-Header"></div>
          <h3>Frontend</h3>
          <div className="skills-list">
            <span> nab </span>
            <span> figma </span>
            <span>CSS</span>
            <span>Javascript</span>
            <span>Html</span>
          </div>
        </div>

        <div className="Skills-Box">
          <div className="Skills-Header"></div>
          <h3>Design</h3>
          <div className="skills-list">
            <span> nab </span>
            <span> figma </span>
            <span>CSS</span>
            <span>Javascript</span>
            <span>Html</span>
          </div>
        </div>
        <div className="Skills-Header">
          {" "}
          <h3>Backend</h3>
          <div className="skills-list">
            <span> nab </span>
            <span> figma </span>
            <span>CSS</span>
            <span>Javascript</span>
            <span>Html</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
