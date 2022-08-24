import React, { useState } from 'react';
import './styles.css';

import edtBtn from '../../assets/images/botao-editar.png';


function ImageSlider() {
  const imgs = [ 
    {
      id: "0",
      value:"https://wallpaperaccess.com/full/24312.jpg"
    },
    {
      id: "1",
      value:"https://wallpaperaccess.com/full/24306.jpg"
    },
    {
      id: "2",
      value:"https://wallpaperaccess.com/full/313686.jpg"
    },
    // {
    //   id: "3",
    //   value:"https://wallpaperaccess.com/full/24332.jpg"
    // },
    // {
    //   id: "4",
    //   value:"https://wallpaperaccess.com/thumb/232806.jpg"
    // },
    // {
    //   id: "5",
    //   value:"https://source.unsplash.com/user/c_v_r/100x100"
    // },
    // {
    //   id: "6",
    //   value:"https://wallpaperaccess.com/full/313686.jpg"
    // },
  ];

  const [sliderData, setStliderData] = useState(imgs[0]);

  const handleClick=(index)=>{
    console.log(index);
    const slider = imgs[index];
    setStliderData(slider);
  }

  return (
    <div className='main'>
      <div className='header'>
        <h2>Fotos</h2>
        <div className='header-bg'></div>       
      
      <div className='icon'>
          <img src={edtBtn} alt=''></img>
      </div> 
      </div> 

      <div className='container-img'>
        <div className='img-principal'>
          <img src={sliderData.value} alt=''/>  
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim enim sit amet venenatis urna. Id ornare arcu odio ut sem. Interdum velit euismod in pellentesque massa placerat duis. Amet purus gravida quis blandit. Faucibus turpis in eu mi bibendum. Maecenas sed enim ut sem viverra aliquet. Fermentum dui faucibus in ornare quam. Euismod lacinia at quis risus sed vulputate odio.</p>  
        </div> 
      <div className='flex_row-img'>{
          imgs.map((data,i)=> 
          <div className='thumbnail-img' key={i}>
            <img className={sliderData.id===i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} alt='fotos' />
          </div>
        )}
      </div>
      
      </div>
    </div>
    
  );
}

export default ImageSlider;