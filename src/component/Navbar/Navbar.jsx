import React,{useState} from 'react';
import hamburger from '../../images/hamburger.svg';
import './Navbar.css';
import profile from '../../images/profile.svg';
import notification from '../../images/notification.svg';
import add from '../../images/add.svg';
 

function Navbar() {

  const toggleLeftPanel = ()=>{
    let leftPanel = document.querySelector('.leftPanel');
    let mainBody = document.querySelector('.mainBody');
    leftPanel.classList.toggle('showpanel');
    leftPanel.classList.toggle('hidepanel');
    mainBody.classList.toggle('mainBodyStrech');
    if( leftPanel.classList.contains('showpanel') )
      mainBody.style.marginLeft = '18vw';
    else 
      mainBody.style.marginLeft = '0vw';
  }

  return (
    <nav className='nav'>
      <div className="nav__control">
        <h1>Zendenta</h1>
        {/* <img className='hamburger' src={hamburger} alt="ham"  /> */}
        <i className="fa-solid fa-bars hamburger"onClick={toggleLeftPanel}></i>
      </div>
      <div className='nav__head'>
        <div className='nav__head_profile'>
          <img src={profile} alt="img" />
          <p>Daine Cooper</p>
        </div>

        <div className='nav__head_options'>
          <input type="text" placeholder='Search' />
          <img src={profile} alt="profile" />
          <img src={notification} alt="notification" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar