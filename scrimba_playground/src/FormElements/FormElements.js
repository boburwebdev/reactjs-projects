import React, { useState } from 'react';
import './FormElements.scss';

const FormElements = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: false,
    employment: "",
    favColor: ""
  });

  const [showData, setShowData] = useState(false);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;

    setUserInfo(prevUserInfo => {
      return {
        ...prevUserInfo,
        [name]: type === "checkbox" ? checked : value
      }
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    setShowData(true);
  }

  const handleClickHide = () => {
    setShowData(false);
  }

  const handleClickReset = () => {
    setUserInfo({
      firstName: "",
      lastName: "",
      email: "",
      comment: "",
      isFriendly: false,
      employment: ""
    })
  }

  return (
    <div className="form-elements" onSubmit={handleSubmit}>
        <div className="container">
          <form className="form-elements__form">
            <h1 className="form-elements__title">Form Elements</h1>

            <div className="form-group">
              <label className="form-elements__label" htmlFor="firstName">
                First Name
              </label>

              <input 
                className="form-elements__input" 
                id="firstName"
                name="firstName"
                onChange={handleChange}
                type="text"
                placeholder="First name"
                value={userInfo.firstName} 
                />
            </div>
            
            <div className="form-group">
              <label className="form-elements__label" htmlFor="lastName">
                Last Name
              </label>

              <input 
                className="form-elements__input" 
                id="lastName"
                name="lastName"
                onChange={handleChange}
                type="text"
                placeholder="Last name"
                value={userInfo.lastName} 
                />
            </div>
            
            <div className="form-group">
              <label className="form-elements__label" htmlFor="email">
                Email
              </label>

              <input 
                className="form-elements__input" 
                id="email"
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Email"
                value={userInfo.email} 
                />
            </div>

            <div className="form-group">
              <label className="form-elements__label" htmlFor="comment">
                Message
              </label>

              <textarea 
                className="form-elements__textarea" 
                id="comment"
                name="comment"
                onChange={handleChange}
                type="comment"
                placeholder="Message"
                value={userInfo.comment} 
                />
            </div>

            <div className="form-group">
              <label className="form-elements__label" htmlFor="isFriendly">
                Are you friendly?
              </label>

              <input 
                className="form-elements__input" 
                id="isFriendly"
                name="isFriendly"
                onChange={handleChange}
                type="checkbox"
                checked={userInfo.isFriendly}
                />
            </div>
            
            <fieldset className="form-elements__fieldset">

              <div className="form-group form-group__radio">
                <label className="form-elements__label" htmlFor="unemployed">
                  Unemployed
                </label>

                <input 
                  className="form-elements__input" 
                  id="unemployed"
                  name="employment"
                  onChange={handleChange}
                  type="radio"
                  checked={userInfo.employment === "unemployed"}
                  value="unemployed"
                  />
              </div>

              <div className="form-group form-group__radio">
                <label className="form-elements__label" htmlFor="part-time">
                  Part-time
                </label>

                <input 
                  className="form-elements__input" 
                  id="part-time"
                  name="employment"
                  onChange={handleChange}
                  type="radio"
                  checked={userInfo.employment === "part-time"}
                  value="part-time"
                  />
              </div>

              <div className="form-group form-group__radio">
                <label className="form-elements__label" htmlFor="full-time">
                  Full-time
                </label>

                <input 
                  className="form-elements__input" 
                  id="full-time"
                  name="employment"
                  onChange={handleChange}
                  type="radio"
                  checked={userInfo.employment === "full-time"}
                  value="full-time"
                  />
              </div>

            </fieldset>

            <div className="form-group form-group__select">
              <label className="form-elements__label" htmlFor="favColor">
                What is your favorite color?
              </label>
              
              <select 
                  className="form-elements__select"
                  id="favColor"
                  value={userInfo.favColor}
                  onChange={handleChange}
                  name="favColor"
              >
                  <option value="">-- Choose --</option>
                  <option value="red">Red</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="indigo">Indigo</option>
                  <option value="violet">Violet</option>
              </select>
            </div>

            <button className="form-elements__button form-elements__button-submit">Submit</button>
          </form>

          {
            showData && (
              <div className="form-elements__user-data">
                <p className="form-elements__user-data__text">First Name: <span>{userInfo.firstName}</span></p>
                <p className="form-elements__user-data__text">Last Name: <span>{userInfo.lastName}</span></p>
                <p className="form-elements__user-data__text">Email: <span>{userInfo.email}</span></p>
                <p className="form-elements__user-data__text">Message: <span>{userInfo.comment}</span></p>
                <p className="form-elements__user-data__text">Affability: <span>{userInfo.isFriendly ? `Friendly` : `Not friendly`}</span></p>
                <p className="form-elements__user-data__text">Employment: <span>{userInfo.employment}</span></p>
                <p className="form-elements__user-data__text">Favorite Color: <span>{userInfo.favColor}</span></p>

                <button className="form-elements__button form-elements__button-hide" onClick={handleClickHide}>Hide Data</button>
                <button className="form-elements__button form-elements__button-reset" onClick={handleClickReset}>Reset Data</button>
              </div>
            )
          }

        </div>
    </div>
  )
}

export default FormElements;