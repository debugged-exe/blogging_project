import React from 'react';
import './HomePage.scss';
import HomeIntro from '../../HomeIntro/HomeIntro.js';
import AdminPanel from '../../AdminPanel/AdminPanel';
import TrendingBlogPage from "./../../TrendingBlogPage/TrendingBlogPage.js";
import RecentBlogs from "./../../RecentBlogs/RecentBlogs.js";

const HomePage = () => {

  return (
    <div>
    <div className="pt6 homepage">
      <HomeIntro/>
    </div>
    <RecentBlogs />
    <TrendingBlogPage />
      <AdminPanel/>

    </div>
  )

}

export default HomePage;
