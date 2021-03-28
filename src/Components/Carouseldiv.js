import React, { Component } from 'react'

import Slider from "react-slick";

import asset_3 from "../../public/headerimg/asset-3.png";
import asset_2 from "../../public/headerimg/asset-2.png";
import hospitalbeds from "../../public/headerimg/hospitalbeds-3.png";

import "../CSS/Carouseldiv.css"


export default class Carouseldiv extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      pauseOnFocus: true,
      rtl: true
    };

    
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            <img className="imgslide" src={asset_3} alt='asset'/>
          </div>
          <div>
            <img className="imgslide" src={asset_2} alt='asset2'/>
          </div>
          <div>
            <img className="imgslide" src={hospitalbeds} alt='hospitalbed'/>
          </div>
        </Slider>
        
      </div>
    );
  }
}