import React from 'react';
import './BasicProfile.css';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import basicprofile from './BasicProfile.svg';

function BasicProfile(){
    return(
        <div className="basic-profile flex justify-around w-100 mt4 pa2">
            <div className="w-50">
                <img src={basicprofile} className="profile-image" alt="basicprofile"/>
            </div>

            <div className=" w-100-m w-50-ns w-100 tl">
                <h2 className="pl3-m">Basic Profile</h2>
                <div className="basic-profile-data  flex justify-space-around  w-100 " >
                    <div className="w-50-l w-50-m-ns pl3-m w-100 pl0-ns pl3" >
                        <h4 style={{color:'#0069FF'}}>Biography</h4>
                        <p style={{lineHeight:"1.5"}}>We work with clients from all over the world. We had worked with and serving over 2000 customers and 1000 global companies  across 13 countries with over 90% satisfaction rate achieved.</p>
                    </div>
                    <div className="w-50-l w-50-m-ns pl3-m w-100 pl0-ns pl3" >
                        <h4 className="pl3-ns" style={{color:'#0069FF'}}>Our focus</h4>
                        <p style={{lineHeight:"1.5"}} className="pl3-ns">We aim at providing prioritized services to our clients in the sectors of investment and finances.</p>
                    </div>
                </div>
                <div className="pt4">
                            <AiIcons.AiFillFacebook className={'pa2 grow-large hover-social-icons'} size={'1.8rem'}/>
                            <AiIcons.AiOutlineTwitter className={'pa2 grow-large hover-social-icons'} size={'1.8rem'}/>
                            <AiIcons.AiOutlineInstagram className={'pa2 grow-large hover-social-icons'} size={'1.8rem'}/>
                            <AiIcons.AiOutlineDribbble className={'pa2 grow-large hover-social-icons'} size={'1.8rem'}/>
                            <FaIcons.FaPinterest className={'pa2 grow-large hover-social-icons'} size={'1.8rem'}/>
                 </div>
            </div>
        </div>
    )
}

export default BasicProfile;
