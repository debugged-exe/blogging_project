import { render } from '@testing-library/react';
import React from 'react';
import './ContactUs.css';
const ContactUs = ()=> {
    {
        return(
            <div>
                <iframe alt="location-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13425.808366924324!2d74.8207416968506!3d32.72718415917507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x53673d0d8afc078c!2sSharva%20Foundation!5e0!3m2!1sen!2sin!4v1621161103362!5m2!1sen!2sin" style={{ width:"100%" ,height:"50vh", border:0, allowfullscreen:"",loading:"lazy"}}></iframe>
              <section className="contact">

<div className="content">
  <h2>Contact Us</h2>
<p>Any help that goes undocumented can result in the failure of someone’s livelihood and survival. It is of utmost importance that this be prevented. There’s where we come in. And only by contacting us can you acquire a platform that helps to distribute this aid.</p>
    <div className="flex justify-center pt3"> 
    {/* < FaPhoneAlt color="#e88f0a" fontSize="1.2em"/> */}
    {/* <a  className=" no-underline black" href="tel:+91 9596156678">+91 95961 56678</a> */}
    </div>
</div>
<div className="container">
  <div className="contactInfo">
    <div className="box">
     {/* <div className="icon"><RiTeamFill /> </div> */}
   <div className="text">
     <h3>Team</h3>
   <p>team.sharvafoundation@gmail.com</p>
   </div>
    </div>
                <div className="box">
     {/* <div className="icon"><FaHandshake/></div> */}
   <div className="text">
     <h3>Manager</h3>
   <p>managersharvafoundation@gmail.com</p>
   </div>
    </div>
                <div className="box">
     {/* <div className="icon"><RiUserSearchFill/></div> */}
   <div className="text">
     <h3>HR</h3>
   <p>hr.foundationsharva@gmail.com</p>
   </div>
    </div>

  </div>

  <div className="contactForm">
    <form /*onSubmit={this.handleSubmit}*/>
      <h2>Send Message</h2>
    <div className="inputBox">
      <input type="text" name="name" required="required" /*value={this.state.name}*/
/*onChange={this.handleChange}*/></input>
        <span> Full Name</span>
    </div>
    <div className="inputBox">
      <input type="email" name="email" /*value={this.state.email}*/
  /*onChange={this.handleChange}*/ required="required"></input>
    <span> Email</span>
    </div>
    <div className="inputBox">
      <textarea required="required" name="message" /*value={this.state.message}*/
 /* onChange={this.handleChange}*/></textarea>
    <span> Type your Message...</span>
    </div>
    <div className="inputBox">
      <input type="submit" name="" value="Send" style={{backgroundColor:"#0a6ae8"}}/>
    </div>
    </form>
  </div>
</div>
</section>
            </div>
        );
    }
} 

export default ContactUs;