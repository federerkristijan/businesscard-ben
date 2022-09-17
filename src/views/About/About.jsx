import React, { useState, useEffect } from "react";
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";

import "./About.css";

const About = () => {
  const [about, setAbout] = useState(null);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"] | order(_createdAt asc) {
        title,
        text,
        image,
        href
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
            <div className="about-image">
              {item.image && (
                <img
                  src={urlFor(item.image).width(220).url()}
                  alt={item.title}
                />
              )}
            </div>
            <div className="about-text">
              <h3>{item.title}</h3>
              <span>{item.text}</span>
            </div>
            <div className="about-link">
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

export default About;
