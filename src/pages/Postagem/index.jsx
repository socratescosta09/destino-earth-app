import React from 'react';
import './styles.css';

import Navbar from '../../components/Navbar';
import PostPerfil from '../../components/PostPerfil';
import ImageSlider from '../../components/ImageSlider';
import VideoSlider from '../../components/VideoSlider'
import Comments from '../../components/Comments/Comments';
import Toolbar from '../../components/Toolbar';

export default function Postagem() {
  return (
    <div className="container-postagem">      
      <Navbar />
      <PostPerfil />
      <ImageSlider />
      <VideoSlider />
      <Comments
          commentsUrl="http://localhost:3004/comments"
          currentUserId="1"
      />      
      <Toolbar />
    </div> 
    );
}