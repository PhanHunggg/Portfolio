import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessageLine, RiPhoneLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import "./contact.scss";
export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_elm78bm",
        "template_p9y5h9i",
        form.current,
        "DL2ZL5d5eSr_gtTMx"
      )
      .then((response) => {
        if (response.status === 200) {
          alert("success");
          form.current.reset();
        }
      });
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="options">
          <article className="option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>phanquochung280702@gmail.com</h5>
            <a href="mailto:phanquochung280702@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="option">
            <RiMessageLine />
            <h4>Messenger</h4>
            <a
              href="https://www.messenger.com/t/100035424935347"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="option">
            <RiPhoneLine />
            <h4>Phone</h4>
            <h5>0797720574</h5>
            <a href="tel:+84797720574" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
