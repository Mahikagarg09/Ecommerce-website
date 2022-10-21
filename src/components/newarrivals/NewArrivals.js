import React from "react"
import Cart from "./Cart"
import "./style.css"

const NewArrivals = ({theme}) => {
    return (
        <>
            <section className={`NewArrivals background ${theme}`}>
                <div className='container'>
                    <div className='heading d_flex'>
                        <div className='heading-left row  f_flex'>
                            <i class="fa-solid fa-truck-fast"></i>
                            <h1>New Arrivals </h1>
                        </div>
                    </div>

                    <Cart theme={theme}/>
                </div>
            </section>
        </>
    )
}

export default NewArrivals