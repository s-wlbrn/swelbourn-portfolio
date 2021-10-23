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
          <a href="https://www.linkedin.com/in/stephen-w-23719b1b3">
            <img src="/img/linkedin-64px.png" alt="linkedin logo" />
          </a>
          <a href="https://github.com/swelbourn">
            <img src="/img/github-64px.png" alt="github logo" />
          </a>
        </div>
        <ContactForm />
      </section>
    </div>
  );
};
