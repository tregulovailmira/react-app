import React from "react";
import SignInFormik from "../../components/forms/SignInFormik";
import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";
import { Link } from "react-router-dom";
import styles from "./SignInPage.module.css";

const SignInPage = () => {
  return (
    <>
      <Link to="/contacts">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/signin">Contacts</Link>
      <div className={styles.signInWrapper}>
        <Icon path={mdiAccountCircle} size={3} />
        <span className={styles.signInPageTitle}>Sign in</span>
        <SignInFormik />
      </div>
    </>
  );
};

export default SignInPage;
