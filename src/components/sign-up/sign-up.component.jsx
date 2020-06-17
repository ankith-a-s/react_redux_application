import React, { Component } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export default class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password, confirmPassword, displayName } = this.state;
      if (password !== confirmPassword) {
        alert('Password and confirm password should match');
        return;
      }

      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log('user creation failed', error.message);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-out'>
        <h2>I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            label='name'
            handleChange={this.handleChange}
            required
          />
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
          <FormInput
            label='confirm password'
            handleChange={this.handleChange}
            name='confirmPassword'
            type='password'
            required
            value={confirmPassword}
          />
          <CustomButton type='submit' value='Submit'>
            Sign Up
          </CustomButton>
        </form>
      </div>
    );
  }
}
