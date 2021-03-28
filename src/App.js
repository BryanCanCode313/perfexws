
import React, { Component } from 'react';

import Navmed from './Components/Navmed';
import Carouseldiv from './Components/Carouseldiv'; 
import PEbody from '../src/Components/PEbody';

import './CSS/PEbody.scss';
import './CSS/Cardcarobluebox.scss';
import './CSS/Cardcomp.scss';

import './App.scss';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Navmed />
        <Carouseldiv />
        <PEbody />
      </div>
    );
    
  }
  
}

export default App;
