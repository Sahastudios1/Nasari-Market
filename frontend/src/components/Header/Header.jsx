import React from 'react';
import './Header.css';
import header_img from '../../assets/directly-1.png'; // Correct relative path


const Header = () => {
  return (
    <div className='header'>
       <img src={header_img} alt="Header" className="header-img" />
        <div>
           
            
            <button  className="header-contents">View Menu</button>
        </div>

    </div>
  )
}

export default Header