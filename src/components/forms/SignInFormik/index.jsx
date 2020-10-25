import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signInScheme } from "../../../utils/validationScheams";
import styles from "./SignInFormik.module.css";
import Classnames from "classnames";
import SignInIcon from './SignInIcon';

const SignInForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const submitHandler = (values, formikBag) => {
    console.log("VALUES=>", values);
    console.log("BAG=>", formikBag);
    formikBag.resetForm();
  };

  const emailErrorClasses = Classnames(styles.errorMessage, styles.emailError);
  const passwordErrorClasses = Classnames(
    styles.errorMessage,
    styles.passwordError
  );

  return (
    <>
      <SignInIcon />

      <Formik
        initialValues={initialValues}
        validationSchema={signInScheme}
        onSubmit={submitHandler}
      >
        <Form className={styles.formWrapper}>
          <span className={styles.inputTitle}>Email adress</span>
          <label>
            <Field name="email" type="text" className={styles.input} />
            <ErrorMessage
              name="email"
              component="span"
              className={emailErrorClasses}
            />
          </label>
          <span className={styles.inputTitle}>Password</span>
          <label>
            <Field name="password" type="password" className={styles.input} />
            <ErrorMessage
              name="password"
              component="span"
              className={passwordErrorClasses}
            />
          </label>

          <input
            type="submit"
            className={styles.submitButton}
            value="Sign in"
          />
        </Form>
      </Formik>
    </>
  );
};

export default SignInForm;
