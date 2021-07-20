import React, { useState } from 'react';
import 'tachyons';
import './NavBar.scss';
import { useLocation } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap'
import { BiMenu } from "react-icons/bi";
import { HashLink as Link } from 'react-router-hash-link';
import FlexibleLogo from './FlexibleLogo/FlexibleLogo.js';

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const location = useLocation();
  console.log(location, visible);
  return (
    <div>
      <Navbar style={{ overflow: 'hidden' }} fixed="top" variant="dark" className="Navbar-color shadow-5" expand="lg">
        <div className={`black show-ham ${visible ? 'ham-active' : ''}`} onClick={() => { setVisible(!visible) }} >
          <div className="small-div">
            <div className={`mr-auto nav ${visible ? '' : 'toggle'}`}>
              <FlexibleLogo color="black" direction="right" height='40px' width='30px' />
            </div>
            <BiMenu size='1.8rem' />
          </div>
        </div>
        <Nav className={`mr-auto nav ${visible ? ' toggle' : ''}`}>
          <Link to='/home' >
            <div className="flex flex-wrap justify-center items-center">
              <FlexibleLogo color="black" direction='right' height='60px' width='40px' />
            </div>
          </Link>

          <div className="w-80 navbar-right">
            <Link className="links" to='/home' ><span className={`  ${location.pathname === '/home' ? 'active' : ''} `} >Home</span></Link>
            <Link className="links" to='/blog' ><span className={`  ${location.pathname === '/blog' ? 'active' : ''} `} >Blogs</span></Link>
            <Link className="links" to='/category'><span className={`  ${location.pathname === '/category' ? 'active' : ''} `}>Category</span></Link>
            <Link className="links" to='/signup'><span className={`  ${location.pathname === '/signup' ? 'active' : ''} `}>Login</span></Link>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
