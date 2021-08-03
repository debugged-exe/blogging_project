import React from 'react';
import 'tachyons';
import { FcGoogle } from 'react-icons/fc'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { toast, ToastContainer } from "react-toastify";

//redux
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setCurrentUser } from '../../redux/user/user.actions.js';

toast.configure();

const Login = ({setCurrentUser, history}) => {

  const signin = () => {
      let email = document.getElementById('singin-email').value;
      let pass = document.getElementById('singin-password').value;
      let payload = {"email": email, "password": pass };
      fetch('http://localhost:3001/auth/signin', {
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
        toast.success('Successfully signed in.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500
        });
        setTimeout(() => {
          history.push('/');
        }, 1500);
      }
      else if(response === "fail") {
        toast.error('Invalid email or password', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500
        });
        document.getElementById("singin-email").value = "";
        document.getElementById("singin-password").value = "";
      }
      else if(response === "Error while signing in") {
        toast.error('Internal Server Error.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500
        });
      }
    })
    .catch(err => {
      console.log(err);
      toast.warning('Error while processing request', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500
      });
    })
  }
  return (
    <div className='form-container' >
      <form id="signin-form" >
        <h1> Sign In </h1>

        <div className="input-container flex justify-center items-center"><MdEmail size="1.7rem" color="#9633FF" />
          <input type="email" placeholder="E-mail" id="singin-email"/><br />
        </div>

        <div className="input-container flex justify-center items-center"><RiLockPasswordFill size="1.7rem" color="#9633FF" />
          <input type="password" placeholder="Password" id= "singin-password"/><br />
        </div>


        <div>
          <input className='mr2 h6 mt4' type='checkbox' id='check' name='check' />
          <span style={{ fontSize: 'small' }}>I have read and agree to <span className='purple'>Terms and Conditions</span></span>
        </div>

        <input className="grow pointer" onClick={() => signin()} type = "submit" value="SIGN IN" />

        <div className="mt2"> or </div>

        <div className='normal flex justify-center items-center'>
          <h2 className="mr2 normal ">Sign in with</h2> <FcGoogle size='1.7rem' />
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispatchToProps)(withRouter(Login));
