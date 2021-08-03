import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'tachyons';

// redux
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions.js';

import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import './SignUp.css'

toast.configure();

const SignUp = ({ setCurrentUser, history }) => {

  const fetchAuthUser = async () => {
    const response = await axios('http://localhost:3001/auth/user', { withCredentials: true }).catch(err => {
      console.log(err);
      toast.warning('User not authenticated properly', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500
      });
    });

    if (response && response.data) {
      const data = {
        username: response.data.username,
        email: response.data.email
      }
      setCurrentUser(data);
      toast.success('Signed in Successfully.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500
      });
      setTimeout(() => {
        history.push('/');
      }, 1500);
    }
  }

  const signInWithGoogle = () => {
    let timer: NodeJS.Timeout | null = null;
    const googleRedirectURL = "http://localhost:3001/login/google";
    const newWindow = window.open(googleRedirectURL, "_blank", "width:500,height: 600");

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log('Yay');
          fetchAuthUser();
          if (timer)
            clearInterval(timer);
        }
      }, 500);
    }
  }



  const signup = () => {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let payload = { "username": username, "email": email, "password": pass };
    console.log(payload);
    fetch('http://localhost:3001/auth/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    .then(resp => resp.json())
    .then(response => {
      if(response["username"]) {
        const user = {
          username: response["username"],
          email: response["email"]
        }
        setCurrentUser(user);
        toast.success('Registration Successful.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500
        });
        setTimeout(() => {
          history.push('/');
        }, 1500);
      }
      else if(response === "user already exists") {
        toast.error('You may have already registered.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500
        });
        document.getElementById('username').value = "";
        document.getElementById('email').value ="";
        document.getElementById('password').value = "";
      }
      else if(response === "Error registering user.") {
        toast.error('Internal Server Error.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500
        });
      }
    })
  }

  return (

    <div className="form-container">
      <form id="signup-form">
        <h1> Sign Up </h1>

        <div className="input-container flex justify-center items-center"><BsFillPersonFill size="1.7rem" color="#9633FF" />
          <input type="text" placeholder="Name" id="username"/><br />
        </div>

        <div className="input-container flex justify-center items-center"><MdEmail size="1.7rem" color="#9633FF" />
          <input type="email" placeholder="E-mail" id="email"/><br />
        </div>

        <div className="input-container flex justify-center items-center"><RiLockPasswordFill size="1.7rem" color="#9633FF" />
          <input type="password" placeholder="Password" id="password" /><br />
        </div>

        <div className="checkbox1">
          <input type="checkbox" id="tnc" />
          <label> I read and agree to <a href="google.com">Terms & Conditions</a> </label> <br />
        </div>

        <input className="grow pointer" onClick={() => signup()} type = "submit" value="CREATE ACCOUNT" />

        <div onClick={() => signInWithGoogle()} className="normal flex justify-center items-center pointer"> <h2 className="mr2 normal">Sign up with</h2> <FcGoogle size="1.7rem" /> </div>

      </form>
      <ToastContainer closeOnClick />
    </div>

  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(withRouter(SignUp));