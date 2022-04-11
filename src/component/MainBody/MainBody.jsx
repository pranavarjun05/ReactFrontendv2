import React from 'react';
import './MainBody.css';
import print from '../../images/print.svg';
import edit from '../../images/edit.svg';
import Main from '../main_container/main.jsx';

function MainBody() {
  return (
    <div className='mainBody'>
      <div className="navtree">
        <div><span>Patient</span> &gt; <p>Daine Cooper</p></div>
      <div>
        <img src={print} className="svg" alt="print" />
        <div id='edit'><img src={edit} className="svg1" alt="edit" /> Edit Patient</div>
      </div>
      </div>
      <Main/>
    </div>
  )
}

export default MainBody