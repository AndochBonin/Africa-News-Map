import React from 'react';
import './App.css';
import Geochart from './components/Geochart';
import SidePanel from './components/SidePanel';

function App() {
  return (
    <div className="App">
      <div className='Geochart'>
        <Geochart />
      </div>
    
      <div className='SidePanel'>
        <SidePanel />
      </div>
    </div>
  );
}

export default App;
