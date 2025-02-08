'use client';

import React from 'react';
import styles from './contactform.module.css';
import { SectionContainer } from '../container/Container.styles';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Image from 'next/image';
import Heading from '../headings/Headings';

const validationSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    })
    .min(2, { message: 'Must be 2 or more characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z
    .string({ required_error: 'Name is required' })
    .min(5, { message: 'Must be 5 or more characters long' })
    .max(1000, { message: 'Must be 1000 or less characters long' }),
});

const ContactForm: React.FC = () => {
  // Pass the useFormik() hook initial form values and a submit function that will be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: toFormikValidationSchema(validationSchema),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log('error name: ' + formik.errors.name);
  console.log('error message: ' + formik.errors.message);
  console.log('error email: ' + formik.errors.email);

  return (
    <SectionContainer>
      <Heading text="Contact me" type="h2" />
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Name"
            className={styles.input}
          />
          <p className={styles.error}>
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ' '}
          </p>

          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email"
            className={styles.input}
          />
          <p className={styles.error}>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ' '}
          </p>

          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            placeholder="Add message"
            className={styles.message}
          />
          <p className={styles.error}>
            {formik.touched.message && formik.errors.message
              ? formik.errors.message
              : ' '}
          </p>
          <button type="submit">Submit</button>
        </form>
        <div className={styles.rightContainer}>
          <Heading text="Get in touch" type="h3" />
          <div className={styles.description}>
            <Image
              src="/images/contact.svg"
              alt="Contact"
              width={100}
              height={100}
              className={styles.image} // TODO ???
            />
            <div>
              <p>
                If you have any questions or want to get in touch, please fill
                out the form on the left or send me an email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactForm;
