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
      <div className="work-hreader">
        <h1>How I Work</h1>
      </div>
      {work &&
        work.map((item) => (
          <div className="work-data" key={item.title}>
            <h2>{item.title}</h2>
            <span>{item.text}</span>
          </div>
        ))}
    </div>
  );
};

export default Work;
