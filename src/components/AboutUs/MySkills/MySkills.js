import React from 'react';
import './MySkills.css';
import myskills from "./myskills.svg";

function MySkills(){
    return(
        <div className=" my-skills flex justify-around w-100 pa3 tl " >
            <div className="skills-text pa2 ">
                <h2>My Skills</h2>
                <p>
                I focus on creating creative, original, and conceptual works for editorial illustrations, magazines, covers, <br />and brands as well as online visual organizations.<br/> Through constant learning and improving, my works excel in designing.
                </p>
                <div className={'pt3'}>
                    <div >
                        <div className="percent-bars flex inline justify-between ">
                            <p style={{textAlign:"left"}}>Cryptocurrency</p>
                            <p style={{textAlign:"right"}}>60%</p>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-per-ui" per="90"></div>
                        </div>
                    </div>
                    <div >
                        <div className="percent-bars flex inline justify-between">
                            <p style={{textAlign:"left"}}>Fund Managment</p>
                            <p style={{textAlign:"right"}}>85%</p>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-per-ideas" per="90"></div>
                        </div>
                    </div>
                    <div >
                        <div className="percent-bars flex inline justify-between">
                            <p style={{textAlign:"left"}}>Marketing</p>
                            <p style={{textAlign:"right"}}>75%</p>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-per-marketing" per="90"></div>
                        </div>
                    </div>
                    <div >
                        <div className="percent-bars flex inline justify-between">
                            <p style={{textAlign:"left"}}>Consultation</p>
                            <p style={{textAlign:"right"}}>85%</p>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-per-consultation" per="90"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center skills-img">
                <img src={myskills} className="skills-image" alt="skills"/>
            </div>
        </div>
    )
}

export default MySkills;