import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";


const login = () => {

  const handleGoogle = () => {

  };


  const handleApple = () => {

  };

  const handleLogIn = () => {

  };

  const handleEmail = () => {

  }
   
  const handlePassword = () => {

  }

  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  return (
    <div className = "logIn-container">
        <h2 className = "title"> Log in with</h2>

        <div className = "logIn-social">
            <button className = "social-button" onClick = {handleGoogle}>
                <img src = "frontend/app/src/assets/apple-photo.webp" className = "social-icon" alt = "google"/>
                Google
            </button>

            <button className = "social-button" onClick = {handleApple}>
                <img src = "frontend/app/src/assets/apple-photo.webp" className = "social-icon" alt = "apple"/>
                Apple
            </button>

        </div>

        <p className = "separator"> <span> or </span> </p>

        <form className = "log-in-form" action = "#">
            <div className = "inputWrapper">
                <span class="material-symbols-outlined"> drafts </span>
                <input type = "email" name = "email" className = "input-field" placeholder = "Email adress" onChange = {handleEmail} required/>
            </div>
            <div className = "inputWrapper">
                <span className="material-symbols-outlined"> key </span>
                <input type = "password" name = "password" className = "input-field" placeholder = "Password" onChange = {handlePassword} required />

            </div>
        </form>

        <div className = "forgot password">
            <Link to = "/password" className = "forgotPasswordLink" > Forgot Password </Link>
            <button onClick = {handleLogIn} className = "logInButton"> Log In </button>
        </div>

        <p className = "no-account-par"> Don't have an account ? 
            <Link to = "/signup" className = "sigUpLink"> Sign up </Link>
        </p>
      
    </div>
  )
}

export default login
