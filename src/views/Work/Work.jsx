import React, { useState, useEffect } from "react";
import sanityClient from "../../lib/client";

import "./Work.css";

const Work = () => {
  const [work, setWork] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "work"] | order(_createdT asc) {
        title,
        text
      }`
      )
      .then((data) => setWork(data))
      .catch(console.error);
  }, []);

  return (
    <div className="work">
      <div className="work-header">
        <h1>How I Work</h1>
      </div>
      {work &&
        work.map((item) => (
          <div className="work-data" key={item.title}>
            <div className="work-title">
              <h2>{item.title}</h2>
            </div>
            <div className="work-text">
              <span>{item.text}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Work;
