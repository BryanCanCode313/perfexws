
import React, { Component } from 'react';

import Navmed from './Components/Navmed';
import BCarousel from './Components/BCarousel'; 
import PEbody from '../src/Components/PEbody';





import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Navmed />
        <BCarousel /> 
        <PEbody />
      </div>
    );
    
  }
  
}

export default App;
