import React from "react";
import "./css/Work.css"; // Add a CSS file for styling

const works = [
  {
    img: "path/to/image1.png", // Replace with the actual path to the image
    name: "Project Name 1",
    description: "Description of the project goes here.",
    tools: ["React", "CSS", "JavaScript"],
  },
  {
    img: "path/to/image2.png",
    name: "Project Name 2",
    description: "Another project description here.",
    tools: ["Gatsby", "Styled Components", "Netlify"],
  },
  // Add more works as needed
];

function Work() {
  return (
    <div className="work-section">
      <h2>work i have done</h2>
      <p>(more coming soon)</p>
      <div className="work-list">
        {works.map((work, index) => (
          <div className="work-item" key={index}>
            <img src={work.img} alt={work.name} className="work-image" />
            <div className="work-details">
              <h3>{work.name}</h3>
              <p>{work.description}</p>
              <div className="work-tools">
                {work.tools.map((tool, idx) => (
                  <span key={idx} className="work-tool">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
