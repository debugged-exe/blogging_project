import React from 'react';
import TrendingBlogs from './TrendingBlogs.js';
import blogDetails from './blogDetails.js';
function TrendingBlogPage(){
  return(
    <div>
    <div className="mt6 grid-component ">
      <TrendingBlogs blog={blogDetails[0]} />
      <TrendingBlogs blog={blogDetails[1]}/>
      <TrendingBlogs blog={blogDetails[2]}/>
      </div>
      <div className="mt3 tc">
      <a className="f5 grow no-underline br-pill ph3 pv2  mb2 dib white viewBundleButton" href="#0">View all Blogs</a></div>
</div>
  )
}
export default TrendingBlogPage;
