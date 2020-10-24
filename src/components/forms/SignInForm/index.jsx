import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SignInForm.module.css';
import { divide } from 'lodash';

class SignInForm extends Component {
  state = {
    email: '',
    password: '',
    login: '',
    errors: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.validateSubmit(this.state);
    if(this.state.errors) {
        console.log('Submit failed');
        return;
    }
  };

  validateSubmit = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'This is required field';
    }

    this.setState({
      errors,
    });
  };

  handleChange = ({ target: { name, value } }) => {
    void this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password, login, errors } = this.state;
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        {errors && <div>{JSON.stringify(errors)}</div>}
        <input
          type="text"
          name="login"
          value={login}
          onChange={this.handleChange}
        />
        <input
          value={email}
          onChange={this.handleChange}
          name="email"
          type="text"
        />
        <input
          value={password}
          onChange={this.handleChange}
          name="password"
          type="password"
        />
        <input type="submit" />
      </form>
    );
  }
}

SignInForm.propTypes = {};

export default SignInForm;
