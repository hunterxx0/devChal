import React from 'react';
import './vertCard.css';
import pfp from '../assets/pfp.jpg';


export default function vertCard() {
	return (
    <div className='vertCard'>
      <div className='VuserPic'>
        <img src={pfp} alt=''/>
      </div>
      <div className='VcardContent'>
        <p className='usrName'>Billy Pearson</p>
        <p>Front-end developer</p>
        <div id='Vcontact'>
          <span class="material-icons">email</span>
          <p>billy@example.com</p>
        </div>
        <div id='Vcontact'>
          <span class="material-icons">phone</span>
          <p>(+603) 546 624 342</p>
        </div>
        <p>Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
      </div>
    </div>
  );
}