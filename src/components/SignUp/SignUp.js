import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import './SignUp.css'

const SignUp = () => {

  const signInWithGoogle = () => {
   const googleRedirectURL = "http://localhost:3001/login/google";
   const newWindow = window.open(googleRedirectURL, "_blank", "width:500,height: 600");
  }

  return (

    <div className="form-container">
      <form id="signup-form">
        <h1> Sign Up </h1>

        <div className="container flex justify-center items-center"><BsFillPersonFill size="1.7rem" color="#9633FF" />
          <input type="text" placeholder="Name" /><br />
        </div>

        <div className="container flex justify-center items-center"><MdEmail size="1.7rem" color="#9633FF" />
          <input type="email" placeholder="E-mail" /><br />
        </div>

        <div className="container flex justify-center items-center"><RiLockPasswordFill size="1.7rem" color="#9633FF" />
          <input type="password" placeholder="Password" /><br />
        </div>

        <div className="checkbox1">
          <input type="checkbox" id="tnc" />
          <label> I read and agree to <a href="google.com">Terms & Conditions</a> </label> <br />
        </div>

        <input type="submit" value="CREATE ACCOUNT" />

        <div onClick={() => signInWithGoogle()} className="normal flex justify-center items-center pointer"> <h2 className="mr2 normal">Sign up with</h2> <FcGoogle size="1.7rem" /> </div>

      </form>
    </div>

  )
}

export default SignUp;
