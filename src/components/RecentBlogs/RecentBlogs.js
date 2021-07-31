import React from "react";
import './RecentBlogs.css';
import RecentBlogCard from "./RecentBlogCard.js";



const RecentBlogs=()=>{
  
const blogdetails=[
  {
      imgUrl:"https://s3.amazonaws.com/creativetim_bucket/products/51/thumb/opt_mdp_thumbnail.jpg?1521134752",
      tagline:"Material Dashboard Pro React",
      date:"26th Jul,2021",
      subtagline:"Premium Material UI Admin",
  },
  {
      imgUrl:"https://s3.amazonaws.com/creativetim_bucket/products/80/thumb/opt_mdp_react_thumbnail.jpg?1522160852",
      tagline:"Material Kit Pro React",
      date:"26th Jul,2021",
      subtagline:"Premium Material UI Kit",
  },
  {
      imgUrl:"https://s3.amazonaws.com/creativetim_bucket/products/414/thumb/opt_sds_thumbnail.png?1612539858",
      tagline:"Soft UI Design System PRO",
      date:"26th Jul,2021",
      subtagline:"Premium Bootstrap 5 UI Kit",
  },
  {
      imgUrl:"https://s3.amazonaws.com/creativetim_bucket/products/487/thumb/opt_sdp_thumbnail.jpg?1622812208",
      tagline:"Soft UI Dashboard PRO",
      date:"26th Jul,2021",
      subtagline:"Premium Bootstrap 5 Dashboard",
  },

]
    return(
        <div className="recent-blogs cf mt4 mb4 ph4">
          <h1>Featured Products</h1>

            <div className="leftCard ma2 fl w-100 w-100-ns w-100-m mb4 ph2  ">

              <a className="pv2 pa4 db no-underline br2 ">
                <img className="db w-100 cover pa2" src="https://www.creative-tim.com/assets/pattern/pattern-featured-8230bdb19c30dacf87af956ee429e96f7ed7f50cfee4feab86dcf7626f549553.png" >
                </img>
                <div className="left-text white ">
                  <div className=" tl ph3 ba4 ">
                  <img className=" left-icon  dib bg-white" src="https://www.creative-tim.com/assets/icon-webpage-5b864af3cab5c4cd63cab6360191be0d7879f23af48ea1e2215332801f22f286.svg" />
                  </div>
                    
                  <h1>Browse this month's best selling themes </h1>
                  <p>The best web themes and templates have arrived</p>
                  <a className="f4 link dim br-pill ba ph3 pv2 mb2 dib mt2 bg-white " href="#0">See all Products</a>
              </div>
              </a>
              
              
            </div>



            <div className=" mr2 small-cards blog-cards mb3">
              <RecentBlogCard blogdetails={blogdetails[0]} imgFlag={false} />
              <RecentBlogCard blogdetails={blogdetails[1]} imgFlag={true} />
              <RecentBlogCard blogdetails={blogdetails[2]} imgFlag={true} />
              <RecentBlogCard blogdetails={blogdetails[3]} imgFlag={true} />
            </div>
             
            

        </div>
    );

}

export default RecentBlogs;