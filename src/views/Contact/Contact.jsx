import React from "react";
import { Button } from "bootstrap";

import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="title">Want to work with me?</div>
      <div className="form">
        <form>
          <div class="form-group">
            {/* <label for="name">Example label</label> */}
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Your name"
            />
          </div>
          <div class="form-group">
            {/* <label for="email">Email address</label> */}
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            {/* <label for="exampleFormControlTextarea1">What</label> */}
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="What"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary mb-2">Contact me</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
