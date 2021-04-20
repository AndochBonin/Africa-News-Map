import React from 'react';
import './App.css';
import Geochart from './components/Geochart';


function App() {

  return (
    <div className="App">

      <div className='App-header'>
        <h4>News Map</h4>
      </div>
      <div className='lineH'></div>

      <div className='Geochart'>
        <Geochart />
      </div>
      
      
      <div className='SidePanel'> 
          <h2>Headlines</h2>
          <h3>some shit</h3>
      </div>
      <div className='lineV'></div>
    </div>
  );
}

export default App;
