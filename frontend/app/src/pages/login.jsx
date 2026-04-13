import React from 'react'

const login = () => {

  const handleGoogle = () => {

  };


  const handleApple = () => {

  };

  const handleForgotPassword = () => {

  };

  const handleLogIn = () => {

  };

  const handleSignUp = () => {

  }

  return (
    <div className = "logIn-container">
        <h2 className = "title"> Log in with</h2>

        <div className = "logIn-social">
            <button className = "social-button" onClick = {handleGoogle}>
                <img src = "frontend/app/src/assets/google-photo.webp" className = "social-icon" alt = "google"> </img>
                Google
            </button>

            <button className = "social-button" onClick = {handleApple}>
                <img src = "frontend/app/src/assets/apple-photo.webp" className = "social-icon" alt = "apple"></img>
                Apple
            </button>

        </div>

        <p className = "separator"> <span> or </span> </p>

        <form className = "log-in-form" action = "#">
            <div className = "inputWrapper">
                <span class="material-symbols-outlined"> alternate_email </span>
                <input className = "input-field" required placeholder = "Email adress" type = "email"></input>
            </div>
            <div className = "inputWrapper">
                <span class="material-symbols-outlined"> key </span>
                <input className = "input-field" required placeholder = "Password" type = "password"> </input>

            </div>
        </form>

        <a href = "#" className = "forgotPasswordLink" > Forgot Password </a>

        <button onClick = {handleLogIn} className = "logInButton"> Log In </button>

        <p className = "no-account-par"> Don't have an account ? 
            <a href = "#" className = "sigUpLink"> Sign up </a>
        </p>
      
    </div>
  )
}

export default login
