import React from 'react';
import Left from '../../Left/Left';
import RightDrawer from '../../RightDrawer/RightDrawer';
import './Demo.css';

const Demo = () => {
    return (
        <div className="flex justify-around pa4 pt6 container" >
            <div className="left-container"><Left /></div>
            <div className="right-container"><RightDrawer /></div>
        </div>
    );
}

export default Demo;