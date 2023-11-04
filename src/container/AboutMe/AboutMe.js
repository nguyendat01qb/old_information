import React from "react";
import Header from "../../components/Header/Header";
import "./AboutMe.css";

export default function AboutMe() {
  const skills = [
    "Ruby On Rails",
    "PHP Laravel",
    "Interactive Front End as per the design",
    "React Redux & TypeScript",
    "NextJS",
    "Managing database SQL && NoSQL",
  ];

  return (
    <div className="about-me-container screen-container">
      <div className="about-me-parent">
        <Header title="About me" content="Why choose me?" />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              Full stack web with background knowledge of MERN stacks with
              redux, Ruby On Rails, PHP Laravel, React Redux TypeScript, along
              with a knack of building applications with utmost efficiency.
              Willing to be an asset for an organization.
            </span>
            <div className="about-me-highlights">
              <span>Here are a Few Highlights:</span>
              {skills.map((skill) => (
                <div className="highlight">
                  <div className="highlight-blob"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
