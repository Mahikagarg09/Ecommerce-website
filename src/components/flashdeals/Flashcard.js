import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <i className='fa fa-long-arrow-alt-right'></i>
            </button>
        </div>
    )
}

const PrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i className='fa fa-long-arrow-alt-left'></i>
            </button>
        </div>
    )
}

export default function Flashcard({ productItems, handleClickCart, handleClickWish, theme,wish}) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }
    return (
        <>
            <Slider {...settings}>
            {productItems.map((item) => {
                return(
                <div className={` ${theme}`} key={item.id}>
                    <div className="product mtop">
                        <div className="img">
                            <span className="discount">{item.discount}% Off</span>
                            <img src={item.cover} alt='' />
                            <div className="product-like">
                                <buton> < i className={`fa-${wish.find(i => i.id === item.id) ? "solid" : "regular"} fa-heart`} onClick={() => handleClickWish(item)}></i></buton>
                            </div>
                        </div>
                        <div className="product-details">
                            <h3>{item.name}</h3>
                            <div className='rate'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>
                            
                            <div className="price">
                                <h4>${item.price}.00</h4>
                                <button onClick={() => handleClickCart(item,1)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                )
                })}
            </Slider>
        </>
    )
}
