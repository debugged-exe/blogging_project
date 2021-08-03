import React from 'react';
import 'tachyons';
import './TrendingBlogs.css';
import {AiOutlineAlignLeft} from 'react-icons/ai';

function TrendingBlogs(props){
  return(
    <div className=" grid-component ">

    <div className="mw6 center  br3 pa3">
    <div className=" mw6 center  br4  imageShadow cardStyle  tc  ">
      <img className="br3 center shadow-5" src={props.blog.img}/>
    <a class="f6 br2 link  ph3 pv2 mb4  black bg-white" href="#0"><AiOutlineAlignLeft className="pr1"  size="1rem"/>View Blogs</a>

      </div>
      <div  className="flex justify-between cardDetail mt2 ph4">
      <p className="f3">{props.blog.desp}</p>
    <span className="f5  gray ">{props.blog.date}</span>
      </div>
      <span className="f5 gray ph4 tl productSpan">{props.blog.products}</span>
    </div>

</div>

  )
}
export default TrendingBlogs;
