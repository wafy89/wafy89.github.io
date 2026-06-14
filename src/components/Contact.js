import React, { useState } from "react";

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

  const details = [
    {
      label: "Email",
      value: "wafy89@gmail.com",
      href: "mailto:wafy89@gmail.com",
    },
    {
      label: "Phone",
      value: "+49 1590 6501550",
      href: "tel:+4915906501550",
    },
    {
      label: "Location",
      value: "Leipzig, Germany",
    },
  ];

  return (
    <section className="contactContainer" id="contact">
      <p className="section-label">Contact</p>
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">
        Have a project in mind? Let's build something great together.
      </p>
      <div className="contactInner">
        <div className="contactInfo">
          {details.map((item) => {
            const Inner = item.href ? "a" : "div";
            const innerProps = item.href
              ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: item.href.startsWith("http") ? "noreferrer" : undefined }
              : {};
            return (
              <Inner key={item.label} {...innerProps} className="contactDetail">
                <span className="contactLabel">{item.label}</span>
                <span className="contactValue">{item.value}</span>
              </Inner>
            );
          })}
          <div className="contactSocials">
            <a href="https://github.com/wafy89" target="_blank" rel="noreferrer" className="socialLink">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a href="https://wafiamer.com" target="_blank" rel="noreferrer" className="socialLink">
              Website
            </a>
          </div>
        </div>
        <form
          onSubmit={submitForm}
          action="https://formspree.io/mbjzzlwz"
          method="POST"
          className="formContainer"
        >
          <div className="formField">
            <label>Name</label>
            <input type="text" name="name" placeholder="Your name" required />
          </div>
          <div className="formField">
            <label>Email</label>
            <input type="email" name="email" placeholder="your@email.com" required />
          </div>
          <div className="formField">
            <label>Message</label>
            <textarea name="message" placeholder="Tell me about your project..." required />
          </div>
          <button type="submit" className="sendBTN">
            Send Message
          </button>
          {status === "SUCCESS" && <p className="formStatus success">Message sent. I'll get back to you soon.</p>}
          {status === "ERROR" && <p className="formStatus error">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
