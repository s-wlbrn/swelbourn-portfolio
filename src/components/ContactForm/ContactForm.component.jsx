import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { CustomButton } from '../CustomButton/CustomButton.component';
import { FormInput } from '../FormInput/FormInput.component';
import { FormInputTextArea } from '../FormInputTextArea/FormInputTextArea.component';

import './ContactForm.styles.scss';

const initialState = {
  name: '',
  email: '',
  subject: '',
  body: '',
};

export const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [state, handleSubmit] = useForm('mnqlreqv');

  useEffect(() => {
    if (state.succeeded) {
      setFormData(initialState);
    }
  }, [state.succeeded]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await handleSubmit(formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmitForm}>
      <FormInput
        name="name"
        type="text"
        id="name"
        value={formData.name}
        onChange={handleChange}
        label="Name"
        required
      >
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="contact-form-error"
        />
      </FormInput>
      <FormInput
        name="email"
        type="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        label="Email"
        required
      >
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="contact-form-error"
        />
      </FormInput>
      <FormInput
        name="subject"
        type="text"
        id="subject"
        value={formData.subject}
        onChange={handleChange}
        label="Subject"
        required
      >
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
          className="contact-form-error"
        />
      </FormInput>
      <FormInputTextArea
        name="body"
        id="message-body"
        value={formData.body}
        onChange={handleChange}
        label="Message"
        required
      >
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="contact-form-error"
        />
      </FormInputTextArea>
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      <CustomButton alternate type="submit" disabled={state.submitting}>
        Submit
      </CustomButton>
    </form>
  );
};
