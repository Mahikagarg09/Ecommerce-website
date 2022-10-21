import React from "react"
import Dcard from "./Dcard"

const Discount = ({theme}) => {
    return (
        <>
            <section className={`Discount background NewArrival ${theme}`}>
                <div className='container'>
                    <div className='heading d_flex'>
                        <div className='heading-left row  f_flex'>
                            <h1>Big Discounts</h1>
                        </div>
                    </div>
                    <Dcard theme={theme} />
                </div>
            </section>
        </>
    )
}

export default Discount

