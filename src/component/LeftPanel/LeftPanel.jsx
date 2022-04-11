import React from 'react';
import './LeftPanel.css';
import profile from '../../images/profile.svg';
import overview from '../../images/overview.svg';
import calender from '../../images/calender.svg';
import messages from '../../images/messages.svg';
import payment from '../../images/payment.svg';
import settings from '../../images/settings.svg';
import Doctor from './Doctor';

function LeftPanel() {
  return (
    <div className='leftPanel showpanel'>
      <ul>
        <li>
          <img src={overview} alt="" />
          <a href="#">Overview</a>
        </li>
        <li>
          <img src={calender} alt="" />
          <a href="#">Calender</a>
        </li>
        <li className='activeLink'>
          <img src={profile} alt="" />
          <a href="#" >Patient List</a>
        </li>
        <li>
          <img src={messages} alt="" />
          <a href="#">Messages</a>
        </li>
        <li>
          <img src={payment} alt="" />
          <a href="#">Payment Information</a>
        </li>
        <li>
          <img src={settings} alt="" />
          <a href="#" >Settings</a>
        </li>
      </ul>

      <p><a href="#" className='help' ><i className="fa-solid fa-circle-question"></i> {`. `}{` Help ?`}</a></p>
      <div className='leftPanel__doctor'>
        
        <img src={profile} alt="img" />
        <Doctor/>

      </div>
    </div>
  )
}

export default LeftPanel