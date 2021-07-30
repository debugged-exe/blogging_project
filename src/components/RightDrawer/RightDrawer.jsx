import React from 'react';
import './RightDrawer.css'
import Newsletter from '../Newsletter/Newsletter';

const RightDrawer = () => {
    return (
        <div className="container-right">
            {/* <h5>NEWSLETTER</h5>
            <div className="line" ></div>
            <div className="flex">
                <input className="email-container" type="email" placeholder="Enter your email..." />
                <div className="arrow-button white flex items-center justify-center"><BsArrowRightShort size="1.5rem" /></div>
            </div> */}

            <Newsletter />


            <h5>RECENT POSTS</h5>
            <div className="line" ></div>

            <div>
                <h2><b>Why Is It Essential To Have A Resolve A Issue That Is Important Or Maybe Not I Have No Idea.</b></h2>
                <div className="f6 light-silver" style={{ textAlign: "left", fontWeight: "bold" }}> 2 DAYS AGO  •  5 MIN READ </div>
                <h2><b>Why Is It Essential To Have A Resolve A Issue That Is Important Or Maybe Not I Have No Idea.</b></h2>
                <div className="f6 light-silver" style={{ textAlign: "left", fontWeight: "bold" }}> 19 DAYS AGO  •  4 MIN READ </div>
                <h2><b>Why Is It Essential To Have A Resolve A Issue That Is Important Or Maybe Not I Have No Idea.</b></h2>
                <div className="f6 light-silver" style={{ textAlign: "left", fontWeight: "bold" }}> 19 DAYS AGO  •  7 MIN READ </div>
            </div>

            <br />

            <h5>TAGS</h5>
            <div className="line" ></div>

            <div>
                <div className="flex justify-between">
                    <b className="f4 h2 mb2"> Web Design </b> <div className='circle'>365</div>
                </div>
                <div className="flex justify-between">
                    <b className="f4 h2 mb2"> Web Design </b> <div className='circle'>365</div>
                </div>
                <div className="flex justify-between">
                    <b className="f4 h2 mb2"> Web Design </b> <div className='circle'>365</div>
                </div>
                <div className="flex justify-between">
                    <b className="f4 h2 mb2"> Web Design </b> <div className='circle'>365</div>
                </div>
                <div className="flex justify-between">
                    <b className="f4 h2 mb2"> Web Design </b> <div className='circle'>365</div>
                </div>
            </div>
            {/* <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left', height: '250px' }}>
                <div>
                    <b>Web Design <br /><br />
                        Web Development <br /><br />
                        Entrepreneurship <br /><br />
                        Education <br /><br />
                        Startups
                    </b>
                </div>

                <div>
                    <div className='circle'>365</div><br />
                    <div className='circle'>102</div><br />
                    <div className='circle'>41</div><br />
                    <div className='circle'>33</div><br />
                    <div className='circle'>29</div>
                </div>

            </div> */}


        </div>
    );
}

export default RightDrawer;