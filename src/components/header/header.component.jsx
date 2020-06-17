import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.component.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        <h4>SHOP</h4>
      </Link>
      <Link className='option' to='/contact'>
        <h4>CONTACT</h4>
      </Link>
      {currentUser ? (
        <h4
          className='option'
          onClick={() => {
            auth.signOut();
          }}
        >
          Sign Out
        </h4>
      ) : (
        <Link className='option' to='/sign-in'>
          <h4>Sign In</h4>
        </Link>
      )}
    </div>
  </div>
);

export default Header;
