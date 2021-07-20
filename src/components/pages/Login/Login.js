import React from 'react';
import 'tachyons';
import google from './google.jpg'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'

const Login = ()=> {
  console.log("login");
  return(
    <div className='form-container' style={{width:'100%',height:'100%',backgroundColor:'#9633ff'}}> 
      <div className='inner br4' style={{backgroundColor:'white',position:'relative',width:'40%',height:'80%',margin:'auto',top:'15%',justifyContent:'center',alignItems:'center'}}>
         <h1 style={{paddingTop:'10%'}}>Sign In</h1>

                <div className='mv2 container flex justify-center items-center'>
                    <input className='bg-none ba shadow-2 h2'/>
                </div >

                <div className='mv2 br4 pa3 container flex justify-center items-center'>
                    <MdEmail size='1.5rem' color='#9633FF' />
                    <input className='bg-none ba br4 text-center shadow-2 h2' placeholder='E-mail'/>
                </div >

                <div className='mv2 container flex justify-center items-center'>
                    <RiLockPasswordFill size='1.5rem' color='#9633FF'/>
                    <input className='bg-none ba br4 shadow-2 h2' type='password' placeholder='Password'/>
                </div >

                <div>
                <input className='mr2 h6 ' type='checkbox' checked id='check' name='check'/>
                <span style={{fontSize:'0.7rem'}}>I have read and agree to <span className='purple'>Terms and Conditions</span></span>
                </div>

                <a className="mt4 br4 grow f5 link ph5 pv1 mb2 dib white but1" style={{backgroundImage:'linear-gradient(to bottom right,#9633FF,#3B00F2)'}} href="#0">Sign In</a>

                <div><br/> or </div>

                <div className='normal flex justify-center items-center'>
                Sign In with <img style={{width:'3vw',height:'4vh',display:'flex'}} alt="Google" src={google}/>
                </div>
      </div>
    </div>
  )
}

export default Login;
