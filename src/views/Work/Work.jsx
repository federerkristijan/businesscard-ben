import React, { useState, useEffect } from "react";
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";

import "./Work.css";

const Work = () => {
  const [work, setWork] = useState(null);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "work"] | order(_createdAt asc) {
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
      <ul>
        <li>
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
                <div className="work-text">
                  <h1>{item.title}</h1>
                  <span>{item.text}</span>
                </div>
                <div className="work-link">
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      without
                      rel="noreferrer"
                    >
                      {item.href}
                    </a>
                  )}
                </div>
              </div>
            ))}
        </li>
      </ul>
    </div>
  );
};

export default Work;
