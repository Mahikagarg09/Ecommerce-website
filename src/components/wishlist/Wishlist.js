import React from 'react'

export default function Wishlist({ wish, setWish,handleClickCart,theme}) {

    const handleRemove = (id) => {
        const arr = wish.filter((item) => item.id !== id);
        setWish(arr);
    };

    return (
        <>

            <section className={`cart-items ${theme}`}>
                <div className='container d_flex'>
                    <div className='cart-details'>
                        <h1>{wish.length === 0 ? 'Your Wishlist is Empty' : 'The Wishlist'}</h1>

                        {wish.map((item) => {
                            return (
                                <div className='cart-list product d_flex' key={item.id}>
                                    <div className='img'>
                                        <img src={item.cover} alt={item.name} />
                                    </div>
                                    <div className='cart-details'>
                                        <h3>{item.name}</h3>
                                        <h4>
                                            ${item.price}
                                        </h4>

                                    </div>
                                    <div className='cart-items-function'>
                                        <div className='removeCart'>
                                            <button className='removeCart' onClick={() => handleRemove(item.id)}>
                                                <i className='fa-solid fa-xmark'></i>
                                            </button>
                                        </div>
                                        <div className='cartControl d_flex'>
                                            <button className='incCart'onClick={() => handleClickCart(item)}>
                                                <i className='fa-solid fa-plus'></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className='cart-item-price'></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
