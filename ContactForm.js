import React from 'react';
import { useFormik } from 'formik';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formik.values.message}
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
