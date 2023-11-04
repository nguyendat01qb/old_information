import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/Header/Header";
import "./ContactMe.css";

export default function ContacMe() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fb6rtyq",
        "template_eorhi3s",
        form.current,
        "JQCKKugDUJT2AbJT3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="main-container">
      <Header title="Contact Me" content="Lets Keep In Touch" />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <p className="styles_typicalWrapper__1_Uvh">Get In Touch</p>
          </h2>
          <a href="https://www.facebook.com/neukhongthulamsaobietduoc">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a href="https://www.instagram.com/nvdatdev/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-skype"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            {/* <img src="./img/mailz.d13d5e32.jpg" /> */}
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <p></p>
            <label for="name">Name</label>
            <input type="text" placeholder="Name" name="name" required></input>
            <label for="email">Email</label>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
            ></input>
            <label for="email">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
            ></input>
            <label for="message">Message</label>
            <textarea
              type="text"
              placeholder="Your message"
              name="message"
              required
            ></textarea>
            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
