import React, { Component } from 'react';
import './sign-out.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

export default class SignOut extends Component {
  state = {
    email: '',
    password: '',
  };
  handleChange = (e) => {};

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-out'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='email'
            handleChange={this.handleChange}
            required
            name='email'
            type='email'
            value={email}
          />
          <FormInput
            label='password'
            handleChange={this.handleChange}
            name='password'
            type='password'
            required
            value={password}
          />
          <CustomButton type='submit' value='Submit'>
            Sign Up
          </CustomButton>
        </form>
      </div>
    );
  }
}
