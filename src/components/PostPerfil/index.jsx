import React from 'react';
import Perfil from '../../assets/images/user-icon.png';
import { GrLocation } from 'react-icons/gr';
import './styles.css';

import DataAtual from '../DataAtual/index'

function PostPerfil() {
  return (
    <div className="content-post">      
        <div className="post__perfil">
            <img src={Perfil} alt="imagem do perfil" />
            <h2 id='post-h2'>By Dev Strangers | <DataAtual /></h2>
            <h2 id='destino-h2'><GrLocation /> Destino</h2>
        </div>
            
      </div>
  )
}

export default PostPerfil;