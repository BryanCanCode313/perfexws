
import React, { Component } from 'react';

import Carouseldiv from './Components/Carouseldiv';
import Navmed from '../src/Components/Navmed'; 
import PEbody from '../src/Components/PEbody';


import './CSS/PEbody.scss';
import './CSS/Cardcarobluebox.scss';
import './CSS/Cardcomp.scss';
import './CSS/Carouseldiv.scss';

import './App.scss';

class App extends Component {
  render() {

   

    return (
      <div className="App">
        <Navmed />
        <Carouseldiv />
        <PEbody />
        {/* <PEfooter /> */}
      </div>
    );
    
  }
  
}

export default App;
