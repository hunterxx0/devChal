import React from 'react';
import './horizCard.css';
import pfp from '../assets/pfp.jpg';


export default function horizCard() {
	return (
    <div className='horizCard'>
      <div className='userPic'>
        <img src={pfp} alt=''/>
      </div>
      <div className='cardContent'>
        <div className='usrDsb'>
          <div className='usr'>
            <p className='usrName'>Billy Pearson</p>
            <p className='dev'>Front-end developer</p>
          </div>
          <div className='usrContact'>
            <div id='contact'>
              <span class="material-icons">email</span>
              <p>billy@example.com</p>
            </div>
            <div id='contact'>
              <span class="material-icons">phone</span>
              <p>(+603) 546 624 342</p>
            </div>
          </div>
        </div>
        <div className='intro'>
          <p>Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
          <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
        </div>
      </div>
    </div>
  );
}