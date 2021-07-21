import React from 'react';
import 'tachyons';
import { FcGoogle } from 'react-icons/fc'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'

const Login = () => {
  console.log("login");
  return (
    <div className='form-container' style={{ boxShadow: 'rgba(100, 100, 111, 1) 0px 7px 29px 0px', borderRadius: '25px' }}>
      <form className='inner br4' style={{ backgroundColor: 'white', position: 'relative', width: '500px', height: '520px', justifyContent: 'center', alignItems: 'center', padding: "15px" }}>
        <h1 style={{ paddingTop: '0%' }}>Sign In</h1>

        <div className="container flex justify-center items-center"><MdEmail size="1.7rem" color="#9633FF" />
          <input type="email" placeholder="E-mail" /><br />
        </div>

        <div className="container flex justify-center items-center"><RiLockPasswordFill size="1.7rem" color="#9633FF" />
          <input type="password" placeholder="Password" /><br />
        </div>


        <div>
          <input className='mr2 h6 mt4' type='checkbox' checked id='check' name='check' />
          <span style={{ fontSize: 'small' }}>I have read and agree to <span className='purple'>Terms and Conditions</span></span>
        </div>

        <a className="mt4 br4 grow link ph5 dib white but1" style={{ backgroundImage: 'linear-gradient(to bottom right,#9633FF,#3B00F2)', borderRadius: '25px', padding: '14px 40px' }} href="#0">SIGN IN</a>

        <div className="mt2"> or </div>

        <div className='normal flex justify-center items-center'>
        <h2 className="mr2 normal ">Sign in with</h2> <FcGoogle size='1.7rem' />
        </div>
      </form>
    </div>
  )
}

export default Login;