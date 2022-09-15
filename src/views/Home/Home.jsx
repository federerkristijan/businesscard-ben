import React, { useEffect, useState } from "react";
import sanityClient from "../../lib/client";
import "./Home.css";


const Home = () => {
  const [home, setHome] = useState(null);

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
          {item.image}
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
