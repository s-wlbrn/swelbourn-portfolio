import React from 'react';

import { ContactForm } from '../ContactForm/ContactForm.component';

import './Contact.styles.scss';

export const Contact = () => {
  return (
    <div className="contact-wrapper">
      <section className="contact main-section" id="contact">
        <header>
          <h2>Contact Me</h2>
        </header>
        <div className="contact-social-links">
          <a href="https://www.linkedin.com/in/swelbourn/">
            <img src="/svg/linkedin.svg" alt="linkedin logo" />
          </a>
          <a href="https://github.com/swelbourn">
            <img src="/svg/github.svg" alt="github logo" />
          </a>
        </div>
        <ContactForm />
      </section>
    </div>
  );
};
