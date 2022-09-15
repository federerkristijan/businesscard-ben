import React, { useState, useEffect } from "react";
import sanityClient from "../../lib/client";

import "./About.css";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"] | order(_createdAt asc) {
        title,
        text
      }`
      )
      .then((data) => setAbout(data))
      .catch(console.error);
  }, []);

  return (
    <div className="about">
      <div className="about-header">
        <h1>Ben Elan</h1>
        <h2>Native therapist</h2>
      </div>
      {about &&
        about.map((item) => (
          <div className="about-data" key={item.title}>
            <div className="about-text">
              <h3>{item.title}</h3>
              <span>{item.text}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default About;
