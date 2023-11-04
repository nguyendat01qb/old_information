import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Resume.css";

export default function Resume() {
  const [type, setType] = useState("Education");
  const [sty, setSty] = useState("translateY(0px)");
  const tabs = [
    "Education",
    "Work History",
    "Programming Skills",
    "Projects",
    "Interests",
    "Certificate",
  ];

  useEffect(() => {
    tabs.map((tab, index) => {
      if (type === tab) {
        switch (index) {
          case 1:
            setSty("translateY(-360px)");
            break;
          case 2:
            setSty("translateY(-720px)");
            break;
          case 3:
            setSty("translateY(-1080px)");
            break;
          case 4:
            setSty("translateY(-1440px)");
            break;
          case 5:
            setSty("translateY(-1800px)");
            break;
          default:
            setSty("translateY(0px)");
            break;
        }
      }
    });
  }, [type]);

  const education = [
    {
      name: "Da Nang Pedagogical University",
      description: "BACHELOR OF SCIENCE INFORMATION TECHNOLOGY",
      time: "2019-2023",
    },
    {
      name: "High School",
      description: "High school students",
      time: "2016-2019",
    },
  ];

  const skills = [
    {
      name: "JavaScript",
      percent: "80%",
    },
    {
      name: "ReactJS",
      percent: "85%",
    },
    {
      name: "VueJS",
      percent: "65%",
    },
    {
      name: "NodeJS",
      percent: "90%",
    },
    {
      name: "Express",
      percent: "75%",
    },
    {
      name: "MongoDB",
      percent: "85%",
    },
    {
      name: "MySQL && SQL Server",
      percent: "75%",
    },
    {
      name: "Ruby On Rails",
      percent: "93%",
    },
    {
      name: "HTML & CSS",
      percent: "78%",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "E-Shop",
      content:
        "Technologies Used: React Native, Mongo DB, Express Js, Node Js.",
      description:
        "An ecommerce application designed to sell products online wth payment system integration",
      time: "2021",
      webapp: "https://nguyendat01qb.github.io/react-client-electronic/",
    },
    {
      id: 2,
      name: "Down Game",
      content: "Technologies Used: Node JS, Express JS, SQL Server, VueJS.",
      description:
        "Website is a library of all games played on computers with many genres suitable for users",
      time: "2021",
      webapp: "#",
    },
    {
      id: 3,
      name: "The Movies",
      content: "Technologies Used: API, ReactJS, React Native, SCSS",
      description: "The website is a library of all popular movie genres",
      time: "2021-2022",
      webapp: "https://moviereactclone.herokuapp.com/",
    },
    // {
    // id: 4,
    //   name: "The Movies",
    //   content: "Technologies Used: API, ReactJS, React Native, SCSS",
    //   description: "The website is a library of all popular movie genres",
    //   time: "2021-2022",
    //   webapp: "https://moviereactclone.herokuapp.com/",
    // },
  ];

  const interests = [
    {
      name: "Running",
      content:
        "Running helps me relax and improve my health, because of the nature of this job, I need to exercise more to improve my health.",
    },
    {
      name: "Music",
      content:
        "Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on.",
    },
    {
      name: "Backpacking",
      content: "Finding new lands, seeing the scenery helps me relax my mind.",
    },
  ];

  const certificates = [
    {
      name: "F8 HTML & CSS",
      link: "https://fullstack.edu.vn/cert/dbmus",
    },
    {
      name: "F8 Responsive Web Design",
      link: "https://fullstack.edu.vn/cert/idh0d",
    },
    {
      name: "F8 JavaScript Basic",
      link: "https://fullstack.edu.vn/cert/o9ves",
    },
    {
      name: "F8 JavaScript Advanced",
      link: "https://fullstack.edu.vn/cert/rcefa",
    },
    {
      name: "F8 Node & ExpressJS",
      link: "https://fullstack.edu.vn/cert/fl61z",
    },
  ];
  return (
    <div className="resume-container screen-container">
      <div className="resume-content">
        <Header title="Resume" content="My formal Bio Details" />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container" key={'resume'}>
              <div className="bullets">
                <div className="bullet-icons"></div>
                {tabs.map((tab) => (
                  <div
                    className="bullet"
                    style={
                      type === tab ? { color: "white", width: "100%" } : {}
                    }
                  >
                    <span className="bullet-label" onClick={() => setType(tab)}>
                      {tab}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="resume-bullet-details">
            <div className="resume-details-carousal" style={{ transform: sty }}>
              <div className="resume-screen-container">
                {education.map((edu) => (
                  <div className="resume-heading">
                    <div className="resume-main-heading">
                      <div className="heading-bullet"></div>
                      <span>{edu.name}</span>
                      <div className="heading-date">{edu.time}</div>
                    </div>
                    <div className="resume-sub-heading">
                      <span>{edu.description}</span>
                    </div>
                    <div className="resume-heading-description">
                      <span></span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="resume-screen-container" style={{ overflowY: "scroll" }}>
                <div className="experience-container">
                  <div className="resume-heading">
                    <div className="resume-main-heading">
                      <div className="heading-bullet"></div>
                      <span>Team and individual work</span>
                      <div className="heading-date">2020-Present</div>
                    </div>
                    <div className="resume-sub-heading">
                      <span>FULL STACK DEVELOPER</span>
                    </div>
                    <div className="resume-heading-description">
                      <span></span>
                    </div>
                  </div>
                  <div className="experience-description">
                    <span className="resume-description-text">
                      Currently working on Ruby On Rails team and doing some
                      small projects
                    </span>
                  </div>
                  <div className="experience-description">
                    <span className="resume-description-text">
                      - Developed an ecommerce website with the dashboard for
                      managing the products, managing reviews, users, payment
                      etc...
                    </span>
                    <br />
                    <span className="resume-description-text">
                      - Data management with SQL and NoSQL databases: MongoDB,
                      MySQL, SQL Server...
                    </span>
                    <br />
                    <span className="resume-description-text">
                      - I am constantly developing my expertise and soft skills
                      to meet product quality requirements.
                    </span>
                    <br />
                  </div>
                </div>
              </div>

              <div className="resume-screen-container programming-skills-container">
                {skills.map((skill) => (
                  <div className="skill-parent">
                    <div className="heading-bullet"></div>
                    <span>{skill.name}</span>
                    <div className="skill-percentage">
                      <div
                        className="active-percentage-bar"
                        style={{ width: skill.percent }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="resume-screen-container">
                {projects.map((project) => (
                  <div className="resume-heading">
                    <div className="resume-main-heading">
                      <div className="heading-bullet"></div>
                      <a href={project.webapp} key={project.id} target="_blank">
                        {project.name}
                      </a>
                      <div className="heading-date">{project.time}</div>
                    </div>
                    <div className="resume-sub-heading">
                      <span>{project.content}</span>
                    </div>
                    <div className="resume-heading-description">
                      <span>{project.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="resume-screen-container">
                {interests.map((interest) => (
                  <div className="resume-heading">
                    <div className="resume-main-heading">
                      <div className="heading-bullet"></div>
                      <span>{interest.name}</span>
                      <div></div>
                    </div>
                    <div className="resume-sub-heading">
                      <span></span>
                    </div>
                    <div className="resume-heading-description">
                      <span>{interest.content}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="resume-screen-container">
                {certificates.map((certificate) => (
                  <div className="resume-heading">
                    <div className="resume-main-heading">
                      <div className="heading-bullet"></div>
                      <a href={certificate.link} target="_blank">
                        {certificate.name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
