import React from 'react';
import './App.css';
import HorizCard from '../HorizUserCard/horizCard'
import VertCard from '../VertUserCard/vertCard'



function App() {
  return (
      <>
      <div className="App-body">
        <div className='horizantal'>
          < HorizCard />
        </div>
        <div className='vertical'>
          < VertCard />
        </div>
      </div>
      </>
  );
}

export default App;
