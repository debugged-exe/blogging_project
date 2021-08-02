import React from 'react';
import "./RecentBlogCard.css";

const RecentBlogCard=({blogdetails,imgFlag})=>{
    console.log(blogdetails,imgFlag);

    return(
       <div>
            <div className=  "blog-template mb3 mh2">
                        <a  className=" pv2 pa2  db no-underline ">
                            <img className="db w-100 br4" alt="blog" src={imgFlag?blogdetails.imgUrl:""} /></a>
                    <span className="first-line w-100 flex inline-ns  pa2 ">
                        <p style={{width:"70%",textAlign:"left",fontSize:"1.2rem",fontWeight:"bold"}}>Material Dashboard Pro React</p>
                        <p style={{width:"30%",fontSize:"1rem"}}>21st June,2021</p>
                    </span>
                    <p className="pa2"style={{textAlign:"left",fontSize:"1rem"}}>Premium Material UI Admin</p>
                </div>
        </div>
    );
}

export default RecentBlogCard;