import React from 'react';
import './Left.css';

const Left = () => {
    return (
        <div className="ml4">
            <img className="br4" src="https://www.skrill.com/fileadmin/_processed_/1/7/csm_Online_poker_setup_header_7b6e83d4a6.jpg" width="100%" alt={"not visible"} />
            <div>
                <h1 style={{
                    textAlign: "left", marginBottom: "10px"
                }}> Why Is It Essential To Have Responsive Web Design </h1>
                < div className="f6 light-silver" style={{ textAlign: "left", fontWeight: "bold" }}> 2 DAYS AGO • 2 MIN AGO • <span className="blue"> WEB DESIGN </span> </div>
                <p className="f4 pt2" style={{
                    textAlign: "left"
                }}>Every website has a different purpose and thus requires specific characteristics. As the purpose of a website os different, the design requirement is also different. For example, a law firm's website will not</p>
            </div>
        </div >
    );
}

export default Left;