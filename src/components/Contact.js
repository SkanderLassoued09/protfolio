import React from "react";
import "../styles/contact.css";
import contactImage from "../icons/gmail.png";
import emailjs from "@emailjs/browser";

export default function Contact() {
  function contactForm(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fo9glka",
        "template_6omzwch",
        e.target,
        "user_h2NMniXDqaNvf3PrjOPsj"
      )
      .then((response) => {
        console.log(response);
        alert("Your message has been sent, Thanks ");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="contact">
      <div className="contactContent">
        <div className="headingSectionContact">
          <h1>Say Hello</h1>
          <p>Get in touch</p>
        </div>
        <div className="contactForm">
          <div className="imageContact">
            <img src={contactImage} alt="mail" />
          </div>
          <div className="form">
            <form onSubmit={contactForm}>
              <div className="name">
                <label>Name</label>
                <input type="text" name="name" required />
              </div>
              <div className="mail">
                <label>E-mail</label>
                <input type="mail" name="mail" />
              </div>
              <div className="message">
                <label>Message</label>
                <textarea rows="6" name="message" />
              </div>
              <div className="action">
                <button>Send 🚀</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
