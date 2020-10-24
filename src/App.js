import React, { Component } from 'react';
import './App.css';
import UserListContainer from './components/UserListContainer';
import Form from './components/forms/SignInForm';
import SignInFormik from './components/forms/SignInFormik';

const App = () => {
  return (<UserListContainer />), (<SignInFormik />);
};

export default App;
