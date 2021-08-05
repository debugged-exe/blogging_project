import React from 'react';

// redux
import { connect } from 'react-redux';

// reselect
import {createStructuredSelector} from 'reselect';
import {selectBlog} from '../../redux/blog/blog.selectors.js';


import './Blog.scss';
import {BlogData} from "./BlogData.js";


const Blog = ({blog})=> {

    console.log(blog);
    var time=blog.createdAt.split('T');
    var parts=time[0].toString().split('-');
    var mydate = new Date(parts[0],parts[1] - 1,parts[2]);

    return(
      <div className="blog-main-div" id='blog'>
         <div key={blog._id}>
            <h1>{blog.title}</h1>
            <h5 className="gray">{mydate.toDateString().toUpperCase()} •  {blog.read_time} MIN READ • <span style={{color:"#00bbff"}}>{blog.tags[0]}</span></h5>
            <img className="br4 main-img" alt="blog" src={blog.image_url} />
            <div className="blog-para">
              <p className="f5 description">
              {blog.preface}
              </p>
              <div>
                 {
                   blog.content.map((sub,i)=>{
                     return(
                       <div key={sub._id}>
                         <img className="pv2 img-display" alt="blog" src={sub.image}/>
                         <p className="f5 description">{sub.para}</p>
                       </div>
                     )
                   })
                 }
              </div>
            </div>
         </div>
      </div>
    )
}

const mapStateToProps = createStructuredSelector({
  blog: selectBlog
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps)(Blog);
