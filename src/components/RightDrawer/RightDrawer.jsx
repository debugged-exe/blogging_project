import { height } from '@material-ui/system';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import './RightDrawer.css'

const RightDrawer = () => {
    return (
        <div className="container-right">
            <h5>NEWSLETTER</h5>
            <div className="line" ></div>
            <div className="flex">
                <input className="email-container" type="email" placeholder="Enter your email..." />
                <div className="arrow-button white flex items-center justify-center"><BsArrowRightShort size="1.5rem" /></div>
            </div>

            <h5>RECENT POSTS</h5>
            <div className="line" ></div>

            <div>
                <h2>Why is it essential to have a resolve a issue that is important or maybe not i have no idea.</h2>
            </div>
        </div>
    );
}

export default RightDrawer;