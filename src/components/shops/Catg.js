import React from "react";
import slider from "../assets/slider.jpg"

const Catg = () => {
    const data = [
        {
            cateImg: slider,
            cateName: "Apple",
        },
        {
            cateImg: slider,
            cateName: "Samasung",
        },
        {
            cateImg: slider,
            cateName: "Oppo",
        },
        {
            cateImg: slider,
            cateName: "Vivo",
        },
        {
            cateImg: slider,
            cateName: "Redimi",
        },
        {
            cateImg: slider,
            cateName: "Sony",
        },
    ]
    return (
        <>
            <div className='category'>
                <div className='chead d_flex'>
                    <h1>Brands </h1>
                    <h1>Shops </h1>
                </div>
                {data.map((value, index) => {
                    return (
                        <div className='box f_flex' key={index}>
                            <img src={value.cateImg} alt='' />
                            <span>{value.cateName}</span>
                        </div>
                    )
                })}
                <div className='box box2'>
                    <button>View All Brands</button>
                </div>
            </div>
        </>
    )
}

export default Catg