import React, { useState } from 'react';
import './styles.css';
import edtBtn from '../../assets/images/botao-editar.png'


function VideoSlider() {
  const videos = [ 
    {
      id: "0",
      value:"https://wallpaperaccess.com/full/24332.jpg"
    },
    {
      id: "1",
      value:"https://wallpaperaccess.com/full/24306.jpg"
    },
    {
      id: "2",
      value:"https://wallpaperaccess.com/full/313686.jpg"
    },
    {
      id: "3",
      value:"https://wallpaperaccess.com/full/24312.jpg"
    },
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

  const [sliderData, setStliderData] = useState(videos[0]);

  const handleClick=(index)=>{
    console.log(index);
    const slider = videos[index];
    setStliderData(slider);
  }

  return (
    <div className='main-videos'>
      <div className='videos-header'>
        <div className='videos-header__bg'></div>  
        <h2>Vídeos</h2>   
      <div className='icon'>
          <img src={edtBtn} alt=''></img>
      </div> 
      </div> 

      <div className='container-videos'>
      <div className='flex_row'>{
          videos.map((data,i)=> 
          <div className='thumbnail-video' key={i}>
            <img className={sliderData.id===i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} alt='fotos' />
          </div>
        )}
      </div>
        <div className='video-principal'>
          <img src={sliderData.value} alt=''/>  
          <h2>Descrição do vídeo</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>  
        </div> 
      
      
      </div>
    </div>
    
  );
}

export default VideoSlider;