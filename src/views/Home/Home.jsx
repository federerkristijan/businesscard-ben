import React, { useEffect, useState } from "react";
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";

import "./Home.css";


const Home = () => {
  const [home, setHome] = useState(null);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
    .fetch(
      `*[_type == "home"] | order(_createdAt asc) {
        title,
        text,
        image
      }`
    )
    .then((data) => setHome(data))
    .catch(console.error);
  }, []);

  return (
    <div className="home">
      {home && home.map((item) => (
      <div className="home-card" key={item.title}>
        <div className="home-img">
          <img
          src={urlFor(item.image).width(220).url()}
          alt={item.title}
          />
        </div>
        <div className="home-text">
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
      </div>))}
    </div>
  );
};

export default Home;
