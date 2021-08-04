import React from 'react';
import './HomeIntro.scss';
import Carousel from 'react-elastic-carousel';
import Img1 from './img1.svg';
import Img3 from './img3.svg';
import Img4 from './img4.svg';
import Img5 from './img5.svg';
import SearchDiv from '../SearchDiv/SearchDiv';

const HomeIntro = () => {

 const imgarray=[Img1,Img3,Img4,Img5];

  return (
    <div className="home-main-div">
       <div className="tl white">
         <p className="f2 mb3">Fully Coded UI Tools to create web and mobile apps</p>
         <p style={{fontSize:'18px'}}>UI Kits, Templates and Dashboards built on top of Bootstrap, Vue.js, React, Angular, Node.js and Laravel.
            Join over 1,621,564 creatives to access all our products!</p>
          <SearchDiv placeholder="search tag" data={["General Talks", 
        "Web dev", 
        "Android Dev",
        "Ios dev",
        "React" ,
        "Kotlin",
        "Js",
        "Html",
        "CSS",
        "Java"]}/>
       </div>
       <div className=" carousel-div">
         <Carousel showArrows={false} itemsToShow={1} enableAutoPlay={true} autoPlaySpeed={2000}>
           {
             imgarray.map((item,index)=>{
               return(
                 <img alt="blog" className="pb0 mb0" style={{height:'auto',width:'70%'}} key={index} src={item}/>
               )
             })
           }
         </Carousel>
       </div>
    </div>
  )

}

export default HomeIntro;
