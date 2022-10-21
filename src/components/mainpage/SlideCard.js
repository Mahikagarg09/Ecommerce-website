import React from 'react'
import Offerdata from './Offerdata'
import slider from "../assets/slider.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function SlideCard({theme}) {

  

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    appendDots : (dots) =>{
      return <ul style ={{margin:"0px"}}>{dots}</ul>
    }

  };
  return (
    <>
    <Slider {...settings}>
    {Offerdata.map((value,index) =>{
      return(
        <div className={`box d_flex top ${theme}`}>
          <div className="left">
            <h1>{value.title}</h1>
            <p>{value.desc}</p>
            <button className='btn-primary'>Visit Collections</button>
          </div>
          <div className="right">
            <img src={slider}/>
          </div>
        </div>
      )
    })}
    </Slider>
    </>
  )
}
