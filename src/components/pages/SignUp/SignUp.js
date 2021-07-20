import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import './SignUp.css'

const SignUp = () => {

  return (



    <div className="form-container pt6">
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

        <div className="normal flex justify-center items-center"> <h3 className="mr2 normal">Sign up with</h3> <FcGoogle size="1.7rem" color="#9633FF" /> </div>

      </form>
    </div>

  )
}

export default SignUp;
