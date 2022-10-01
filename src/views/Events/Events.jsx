import React, { useEffect, useState } from "react";
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";

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
          {events?.map((item) => (
            <div className="events-data" key={item.eventsTitle}>
              <div className="events-image">
                  {item.eventImage && (
                    <img
                      src={urlFor(item.eventImage).width(220).url()}
                      alt={item.title}
                    />
                  )}
                </div>
                <div className="events-text">
                  <h1>{item.eventTitle}</h1>
                  <span>{item.eventText}</span>
                </div>
                <div className="events-link">
                  {item.eventLink && (
                    <a
                      href={item.eventLink}
                      target="_blank"
                      without
                      rel="noreferrer"
                    >
                      {item.eventLink}
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

export default Events;
