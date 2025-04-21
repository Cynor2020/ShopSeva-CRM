import React from 'react';
import './App.css';

const SignUp = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />

        <button type="submit">Sign Up</button>

        <p>Already have an account? <a href="#">Login</a></p>
      </form>
    </div>
  );
};

export default SignUp;
