import React from "react";
import "./css/Work.css"; // Add a CSS file for styling
import azoom from '../img/azoom.png';
import petHeaven from '../img/petHeaven.png';
import simap from '../img/SIMap.png';
import portfolio from '../img/portfolio.png';

const works = [
  {
    img: azoom,
    name: "AZOOM CAR RENTAL WEBSITE",
    description: "Build a responsive car rental web app where users can rent cars and make payments.",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/liubiyu123/car-rental-website",
  },
  {
    img: petHeaven,
    name: "PET HEAVEN",
    description: "This ReactJS project aims to raise awareness and support for stray animal welfare in Singapore, focusing on rescuing and adopting stray dogs.",
    tools: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/liubiyu123/car-rental-website",
    website: "https://pet-heaven-liubiyu.netlify.app/",
  },
  {
    img: simap,
    name: "SIMap",
    description: "This phone app is a data-driven system that forecasts traffic conditions by leveraging existing incident data. ",
    tools: ["ReactNative", "JavaScript", "Axios", "Tensorflow"],
    link: "https://github.com/liubiyu123/SIMap",
    drive: "https://drive.google.com/drive/folders/1yrau42mkwsr8qFo2gryNUxj5A5yExndN?usp=drive_link",
  },
  {
    img: portfolio,
    name: "Portfolio V1",
    description: "A personal portfolio website built to introduce myself and showcase my projects.",
    tools: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/liubiyu123/Portfolio_Website_React",
  },
  // Add more works as needed
];

const WorkImageDetails = ({ img, name, description }) => (
  <div className="work-image-details">
    <img src={img} alt={name} className="work-image" />
    <div className="work-details">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const WorkMeta = ({ tools, link, website, drive }) => (
  <div className="work-meta">
    <div className="work-tools">
      {tools.map((tool, idx) => (
        <span key={idx} className="work-tool">{tool}</span>
      ))}
    </div>
    <div className="work-buttons">
      {website && (
        <span
          className="work-button"
          onClick={() => window.open(website, "_blank")}
          role="button"
          tabIndex="0"
        >
          Website
        </span>
      )}
      {drive && (
        <span
          className="work-button"
          onClick={() => window.open(drive, "_blank")}
          role="button"
          tabIndex="0"
        >
          Google Drive
        </span>
      )}
      <span
        className="work-button"
        onClick={() => window.open(link, "_blank")}
        role="button"
        tabIndex="0"
      >
        GitHub
      </span>
    </div>
  </div>
);


function Work() {
  return (
    <div className="work-section">
      <h2>Work I Have Done</h2>
      <p>(More Coming Soon)</p>
      <div className="work-list">
        {works.map((work, index) => (
          <div className="work-item" key={index}>
            <WorkImageDetails
              img={work.img}
              name={work.name}
              description={work.description}
            />
            <WorkMeta
              tools={work.tools}
              link={work.link}
              website={work.website}
              drive={work.drive}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
