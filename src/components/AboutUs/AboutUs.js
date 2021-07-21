import React from 'react';
// css
import './AboutUs.css';
import 'tachyons';

// components
import {BiUserCircle} from 'react-icons/bi';
import {GiReceiveMoney} from 'react-icons/gi';
import {FaHandHoldingUsd} from 'react-icons/fa';
import BasicProfile from "./BasicProfile/BasicProfile";
import MySkills from "./MySkills/MySkills";
import Faqs from './Faqs/faqfun';

const AboutUs = () => {
    return (
        <section>
            <div className="tc pt5">
                <div className="about-div pt4">
                    <p className="f1 fw6 white">Pathway towards Investment</p>
                    <div className="about-grid">
                        <div className="circle-div" style={{zIndex: '5'}}>
                            <div className="bg-white shadow-5" style={{
                                color: '#0069FF',
                                borderRadius: '50%',
                                height: '180px',
                                width: '180px',
                                paddingTop: '12%'
                            }}>
                                <BiUserCircle size="5rem"/>
                            </div>
                            <p className="f3 fw5">01 Select our Plan</p>
                        </div>
                        <div className=" circle-div" style={{zIndex: '5'}}>
                            <div className="bg-white shadow-5" style={{
                                color: '#0069FF',
                                borderRadius: '50%',
                                height: '180px',
                                width: '180px',
                                paddingTop: '11%'
                            }}>
                                <FaHandHoldingUsd size="5rem"/>
                            </div>
                            <p className="f3 fw5">02 Invest & Relax</p>
                        </div>
                        <div className=" circle-div" style={{zIndex: '5'}}>
                            <div className="bg-white shadow-5" style={{
                                color: '#0069FF',
                                borderRadius: '50%',
                                height: '180px',
                                width: '180px',
                                paddingTop: '11%'
                            }}>
                                <GiReceiveMoney size="5rem"/>
                            </div>
                            <p className="f3 fw5">03 Gain healthy profits</p>
                        </div>
                    </div>
                </div>
            </div>
            <BasicProfile/>
            <MySkills/>
            <Faqs/>
        </section>
    )
}

export default AboutUs;
