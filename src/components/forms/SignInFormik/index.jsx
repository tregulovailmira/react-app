import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signInScheme } from '../../../utils/validationScheams';
import styles from './SignInFormik.module.css';

const SignInForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const submitHandler = (values, formikBag) => {
    console.log('VALUES=>', values);
    console.log('BAG=>', formikBag);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInScheme}
      onSubmit={submitHandler}
    >
      {(formikProps) => {
        console.log(formikProps);
        return (
          <Form className={styles.formWrapper}>
            <ErrorMessage name="email" component="span" />
            <ErrorMessage name="password" component="span" />
            <span className={styles.inputTitle}>Email adress</span>
            <Field name="email" type="text" className={styles.input} />
            <span className={styles.inputTitle}>Password</span>
            <Field name="password" type="password" className={styles.input} />
            <input type="submit" className={styles.submitButton} value='Sign in'/>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
