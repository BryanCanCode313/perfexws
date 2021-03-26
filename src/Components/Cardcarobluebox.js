import React, { Component } from "react";

import Slider from "react-slick";
import Cardcomp from '../Components/Cardcomp'


export default class Cardcarobluebox extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 3
    };
    return (
      <div>
        <Slider {...settings}>      
          <Cardcomp />
        </Slider>
      </div>
    );
  }
}

