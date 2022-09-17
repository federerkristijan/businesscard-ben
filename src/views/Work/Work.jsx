import React, { useState, useEffect } from "react";
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";

import "./Work.css";

const Work = () => {
  const [work, setWork] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "work"] | order(_createdT asc) {
        title,
        text,
        image,
        href
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
            <div className="work-image">
              {item.image && (
                <img
                  src={urlFor(item.image).width(220).url()}
                  alt={item.title}
                />
              )}
            </div>
            <div className="work-title">
              <h2>{item.title}</h2>
            </div>
            <div className="work-text">
              <span>{item.text}</span>
            </div>
            <div className="work-link">
              {item.href && (
                <a href={item.href} target="_blank">
                  {item.href}
                </a>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Work;
