import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils.js';

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='email'
            handleChange={this.handleChange}
            required
            name='email'
            value={email}
            type='email'
          />
          <FormInput
            label='password'
            handleChange={this.handleChange}
            name='password'
            value={password}
            type='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit' value='Submit'>
              Sign In
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
