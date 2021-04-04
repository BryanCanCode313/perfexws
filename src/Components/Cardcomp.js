import React, {Component} from 'react'

import '../CSS/Cardcomp.css';

import glov2 from '../../public/headerimg/glov-2.png';
import glov6 from '../../public/headerimg/glov6.png';
import glov3 from '../../public/headerimg/gloves1.png';



export default class Cardcomp extends Component {
  
  
      render() {
    
            const cardss = [ 
              { 
                cardpic: glov2,
                cardno: 1,
                descrip: "Ambitex Powdered, Semi-transparent White Exam Glove",
                price: "12.99"
              },
              {
                cardpic: glov6,
                cardno: 2, 
                descrip: "Ambitex Powder Free, Latex Free Exam Glove",
                price: "12.99"
              }, 
              {
                cardpic: glov3,
                cardno: 3,
                descrip: "Ambitex Nitrile Exam Glove",
                price: "12.99" 
              }
             ];
  
           
            

            const cardssdiv = cardss.map((cardss) => <div className="ccdiv"><img src={cardss.cardpic} alt="cardss"/> <p>{cardss.descrip}</p><p>{cardss.price}</p><button>Buy Now</button></div>);

              console.log("this is really cardssdiv", cardssdiv)

            return(<div className="cardcomp">{cardssdiv}</div>);

     }
}