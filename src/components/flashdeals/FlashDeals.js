import React from 'react'
import Flashcard from './Flashcard';


export default function FlashDeals({ productItems ,handleClickCart,handleClickWish,theme,wish}) {


    return (
        <>
            <section className='flash'>
                <div className='container'>
                    <div className='heading f_flex'>
                        <i className='fa fa-bolt'></i>
                        <h1>Flash Deals</h1>
                    </div>
                    <Flashcard productItems={productItems} handleClickCart={handleClickCart} handleClickWish={handleClickWish} theme={theme} wish={wish}/>
                </div>
            </section>
        </>
    )
}
