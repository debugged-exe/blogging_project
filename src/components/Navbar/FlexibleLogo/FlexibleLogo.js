import React from 'react';
import Logo from './Growthway-04.png';
import './FlexibleLogo.scss';

const FlexibleLogo = ({direction,height,width,color})=> {
  return(
    <div  className={`${direction}`}>
        <img src={Logo} alt="Logo" height={`${height}`} width={`${height}`}
         className="pa2"></img>
        <p className="f4 b" style={{color:`${color}`}}>Creative Tim</p>
   </div>

  )

}

export default FlexibleLogo;
//direction= direction of text
