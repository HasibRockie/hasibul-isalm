import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
          process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          setSuccess(true);
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <h1 style={{ fontSize: "60px" }}>Contact </h1>
      <form onSubmit={sendEmail} ref={form}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={(e) => setSuccess(false)}
          required
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          required
          placeholder="Type Your Message"
          onChange={(e) => setSuccess(false)}
        ></textarea>
        <input type="submit" value="Send" />
      </form>

      {success && (
        <div className="success">
          <h5>Your Message successfully sent. Thanks for contacting!</h5>
        </div>
      )}
    </div>
  );
};

export default Contact;
