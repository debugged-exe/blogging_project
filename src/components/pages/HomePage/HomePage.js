import React from 'react';
import './HomePage.scss';
import HomeIntro from '../../HomeIntro/HomeIntro.js';
import AdminPanel from '../../AdminPanel/AdminPanel';

const HomePage = () => {

  return (
    <div className="pt6 homepage">
      <HomeIntro/>
      <AdminPanel/>
    </div>
  )

}

export default HomePage;
