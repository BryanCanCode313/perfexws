import React, { Component } from 'react';
import '../CSS/BCarousel.css';

import asset2 from '../../public/headerimg/asset-2.png';
import asset3 from '../../public/headerimg/asset-3.png';
import hospbed from '../../public/headerimg/hospitalbeds-3.png';




class BCarousel extends Component {

        render() {
            const adimgs = [
                    {
                     adimg: asset2,
                     keyno: 1       
                    },
                    {
                     adimg: asset3,
                     keyno: 2   
                    },
                    {
                     adimg: hospbed,
                     keyno: 3   
                    }
            ]

            //display all the images in the carocell in a row 
            const carocell = adimgs.map((adimgs) =>
                             <img src={adimgs.adimg} alt="imagespt2" key={adimgs.keyno} style={{width: "770px", height: "260px", margin: "0px 15px"}} />
                             ); 

                             

                        return  <div className="carcontainer">{carocell}</div>                         
        }
}

export default BCarousel;

