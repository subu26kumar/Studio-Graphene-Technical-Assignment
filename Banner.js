import React from 'react';
import './Banner.css';
import boyImg from '../pic/boy.png';

function Banner() {
  
  return ( 
    <>
    <div style={{position:'relative'}}>
 
    <div className='banner'>
      <h1>Fresh<br></br></h1> 
      <span style={{position:'absolute'}} className='span1'>2022</span>
      <br></br>
       <span style={{position:'absolute'}}  className='span2'>Look</span>
     
    </div>
     <div className='orange'>    
     <img className='img1' src={boyImg} alt='boy'/>
      </div>
    </div>
    </>
   );
}

export default Banner;