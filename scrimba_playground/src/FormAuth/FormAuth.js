import React, { useState } from 'react';
import './FormAuth.scss';

const FormAuth = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinNewsletter: false
  });

  const handleChange = event => {
    const { name, value, type, checked } = event.target;

    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = event => {
    event.preventDefault();

    if (userData.password === userData.passwordConfirm) {
      console.log('Successfully signed up');

      if (userData.joinNewsletter) {
        console.log('Thank you for signing up for our newsletter');
      }
    } else {
      console.log('passwords do not match')
    }

    
  }

  return (
    <div className="auth">
      <div className="container">
        <form className="auth-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label className="auth-form__label" htmlFor="email">Email</label>
            
            <input 
              className="auth-form__input"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              value={userData.email}
              type="email"
              name="email" />
          </div>

          <div className="form-group">
            <label className="auth-form__label" htmlFor="password">Password</label>
            
            <input 
              className="auth-form__input"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={userData.password}
              type="password"
              name="password" />
          </div>

          <div className="form-group">
            <label className="auth-form__label" htmlFor="passwordConfirm">Confirm Password</label>
            
            <input 
              className="auth-form__input"
              id="passwordConfirm"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={userData.passwordConfirm}
              type="password"
              name="passwordConfirm" />
          </div>
          
          <div className="form-group form-group--checkbox">
            
            <input 
              className="auth-form__checkbox"
              id="joinNewsletter"
              onChange={handleChange}
              checked={userData.joinNewsletter}
              type="checkbox"
              name="joinNewsletter" />

            <label className="auth-form__label" htmlFor="joinNewsletter">I want to join the newsletter</label>
          </div>

          <button className="auth-form__button">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default FormAuth;