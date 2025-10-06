import React from "react";
import { useState } from "react";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import phone_icon from "../assets/phone_icon.jpg";
import "./SignUp_login.css";

export const SignUp_login = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const changeToLoginPage = () => {
    setIsSignUp(false);
  };
  return (
    <>
      <div className="header">
        <ul>
          <li className="start">connect</li>
        </ul>
        <ul>
          <li className="info-action">Policy</li>
          <li className="info-action">contact us</li>
        </ul>
      </div>
      <div className="sign-up-page">
        <div className="heading">
          <h3>Welcome</h3>
        </div>
        {isSignUp === true ? (
          <div class="form" id="form">
            <div className="first-name-input input">
              <img src={user_icon} />
              <input
                type="text"
                className="first-name"
                id="first-name"
                placeholder="First name"
              />
            </div>
            <div className="last-name-input input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                className="last-name"
                id="last-name"
                placeholder="Last name"
              />
            </div>
            <div className="email-input input">
              <img src={email_icon} alt="" />
              <input
                type="email_address"
                className="email-address"
                id="email-address"
                placeholder="email@example.com"
              />
            </div>
            <div className="date-of-birth-input input">
              <input type="date" className="date of birth" id="date-of-birth" />
            </div>
            <div className="tel-input input">
              <img src={phone_icon} alt="" srcset="" />
              <input type="tel" className="tel-number" id="tel-number" />
            </div>
            <div className="password-input input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
            </div>
            <div className="confirm-password-input input">
              <img src={password_icon} />
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="confirm-password"
              />
            </div>
            <div className="form-bottom">
              <div className="button-section">
                <button className="sign-up">Sign up</button>
                <div className="text">or</div>
                <button className="log-in" onClick={() => setIsSignUp(false)}>
                  Log in
                </button>
              </div>
              <div className="text-info">
                <a onClick={() => setIsSignUp(false)}>login</a> if your already
                have an account
              </div>
            </div>
          </div>
        ) : (
          <div className="login-form">
            <div className="email-input input">
              <img src={email_icon} alt="" />
              <input
                type="email_address"
                className="email-address"
                id="email-address"
                placeholder="email@example.com"
              />
            </div>
            <div className="password-input input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
            </div>
            <div className="action-section">
              <button>Login</button> or <a>forgot password</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default SignUp_login;
