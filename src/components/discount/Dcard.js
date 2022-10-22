import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ddata"
import "../newarrivals/style.css"

const Dcard = ({ theme }) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <>
            <Slider {...settings}>
                {Ddata.map((value, index) => {
                    return (
                        <>
                            <div className={`card ${theme}`} key={index}>
                                <img src={value.cover} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{value.name}</h5>
                                        <p className="card-text">{value.price}</p>
                                    </div>
                            </div>
                        </>
                    )
                })}
            </Slider>
        </>
    )
}

export default Dcard
