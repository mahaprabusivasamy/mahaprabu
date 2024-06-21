import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="wrapper">
      <h2>Contact us</h2>
      <div className="icons-row">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
        <a href="mailto:example@example.com">
          <FaEnvelope size={20} />
        </a>
      </div>
      <div id="error_message"></div>
      <form id="myform" onSubmit={validate}>
        <div className="input_field">
          <input type="text" placeholder="Name" id="name" />
        </div>
        <div className="input_field">
          <input type="text" placeholder="Subject" id="subject" />
        </div>
        <div className="input_field">
          <input type="text" placeholder="Phone" id="phone" />
        </div>
        <div className="input_field">
          <input type="text" placeholder="Email" id="email" />
        </div>
        <div className="input_field">
          <textarea placeholder="Message" id="message"></textarea>
        </div>
        <div className="btn">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

const validate = (event) => {
  event.preventDefault();
  // Add your validation logic here
};

export default ContactForm;
