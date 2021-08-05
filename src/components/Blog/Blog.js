import React from 'react';
import './Blog.scss';
import {BlogData} from "./BlogData.js";


const Blog = ()=> {


    return(
      <div className="blog-main-div">
             {
               BlogData.map((item,index)=>{
                 var time=item.createdAt.split('T');
                 var parts=time[0].toString().split('-');
                 var mydate = new Date(parts[0],parts[1] - 1,parts[2]);
                 return(
                   <div key={item._id}>
                      <h1>{item.title}</h1>
                      <h5 className="gray">{mydate.toDateString().toUpperCase()} •  {item.read_time} MIN READ • <span style={{color:"#00bbff"}}> WEB DESIGN</span></h5>
                      <img className="br4 main-img" alt="blog" src={item.image_url} />
                      <div className="blog-para">
                        <p className="f5 description">
                        {item.content}
                        </p>
                        <div>
                           {
                             item.subsection.map((sub,i)=>{
                               return(
                                 <div>
                                   <h2>{sub.subheading}</h2>
                                   <img className="pv2 img-display" alt="blog" src={sub.img_link}/>
                                   <p className="f5 description">{sub.sub_description}</p>
                                 </div>
                               )
                             })
                           }
                        </div>
                      </div>
                   </div>
                 )
               })
             }
      </div>
    )
}

export default Blog;
