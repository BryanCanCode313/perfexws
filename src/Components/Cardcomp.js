import React, {Component} from 'react'






export default class Cardcomp extends Component {
  
  
      render() {
    
            const cardss = [ 1, 2, 3, 4, 5 ];
  
            // const slicktrack = document.querySelectorAll("slick-track"); 
            // const navv = document.gete("")

            // if (slicktrack) { console.dir(slicktrack);} 
            

            const cardssdiv = cardss.map(() => <div><img src={cardss} alt="cardss" /></div>);

              console.log("this is really cardssdiv", cardssdiv)

            return(<div className="cardcomp" >{cardssdiv}</div>);

     }
}