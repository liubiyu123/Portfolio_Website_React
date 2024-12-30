import React from 'react';
import './css/Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h2>My Resume!</h2>
      <a 
        href="/Resume.pdf" // Relative path to the PDF in the public folder
        target="_blank"    // Open in a new tab
        rel="noopener noreferrer" // Security improvement for external links
        className="resume-button"
      >
        Grab a Copy
      </a>
    </div>
  );
}

export default Resume;
