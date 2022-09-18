import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_id", "contact_form", form.current, "VLLoJzJV3AvC_eGBB")

      .then(
        (result) => {
          alert("Message successfully sent!");
          window.location.reload(false);
          form.reset(true);
        },
        (error) => {
          alert("Failed to send the message, please try again!");
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Want to work with me?</h1>
      </div>
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="name"
              name="user_name"
              placeholder="Your name"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              name="user_email"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="message"
              placeholder="What"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary mb-2">
            Contact me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
