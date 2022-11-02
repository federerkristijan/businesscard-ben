import React, { useEffect, useState } from "react";
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";

import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState(null);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "events"] | order(_createdAt asc) {
        eventsTitle,
        eventsText,
        eventsAbout,
        eventsFacilitator,
        eventsImage,
        eventsLink
      }`
      )
      .then((data) => setEvents(data))
      .catch(console.error);
  }, []);

  return (
    <div className="events">
      <h1>Events</h1>
      <ul>
        <li>
          {events &&
            events.map((item) => (
              <div className="events-data" key={item.eventsTitle}>
                <a
                  href={item.eventsLink}
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <div className="events-card">
                    <div className="events-image">
                      {item.eventsImage && (
                        <img
                          src={urlFor(item.eventsImage).width(180).url()}
                          alt={item.eventsTitle}
                        />
                      )}
                    </div>
                    <div className="events-text">
                      <div className="events-description">
                        <h1>{item.eventsTitle}</h1>
                        <span>{item.eventsText}</span>
                      </div>
                      <div className="events-about">
                        <span>{item.eventsAbout}</span>
                      </div>
                      <div className="events-facilitator">
                        <span>{item.eventsFacilitator}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </li>
      </ul>
    </div>
  );
};

export default Events;
