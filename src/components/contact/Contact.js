import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div>
      <section id="contact">
        <h1>Contact Us</h1>
        <a href="mailto: parimisuguna@gmail.com" target="_blank">
          <img
            src="data:image/png;base64,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"
            alt="email"
          />
        </a>
      </section>
    </div>
  );
}

export default Contact;
