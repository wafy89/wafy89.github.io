import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const [status, setStatus] = useState("");

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <div className="contactContainer">
      <Fade bottom >
        <div className="pageTitleContainer">
          <div className="pageTitle" id="contact">Contact Me</div></div></Fade>
      <form onSubmit={submitForm}
        action="https://formspree.io/mbjzzlwz"
        method="POST" className="formContainer">
        <div className="nameField contactField ">
          <label>NAME</label>
          <input type="text" name="name" placeholder="Type your name"></input>
        </div>
        <div className="phoneField contactField ">
          <label>PHONE</label>
          <input type="text" name="phone" placeholder="Type your phone number"></input>
        </div>
        <div className="emailField contactField ">
          <label>EMAIL</label>
          <input type="email" name="email" placeholder="Type your email address"></input>
        </div>
        <div className="messageField contactField ">
          <label>YOUR MESSAGE</label>
          <textarea name="message" placeholder="Type your message"></textarea>
        </div>
        <div className="sendBTNField">
          <button type="submit" className="sendBTN">SEND</button>
        </div>
        {status === "SUCCESS" ? <p>Thanks!</p> : ""}
        {status === "ERROR" && <p>please fill all the field with valid date.</p>}
      </form>
    </div>
  );
};


export default Contact
