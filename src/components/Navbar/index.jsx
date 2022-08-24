import React from 'react';
import './styles.css';

import logo from '../../assets/images/user-icon.png'

function Navbar() {
  return (
    <div className='navbar'>
                   
        <img src={logo} alt="" />
        <input type="text" placeholder='Pesquisar' />
        <p className="drop">dropDpwn</p>
        
    </div>
  )
}

export default Navbar;