import React, { useState, useEffect } from 'react';
import "./style.css";

export default function Cart({ cart, setCart, handleClickCart, theme }) {

    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        // const arr = cart.filter((item) => item.id !== id);
        // setCart(arr);
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
    };

    useEffect(() => {
        handlePrice();
    });

    return (
        <section className={`cart-items ${theme}`}>
            <div className='container d_flex'>
                <div className='cart-details'>
                    <h1>{cart.length === 0 ? 'Your Cart is Empty' : 'The Cart'}</h1>
                    {cart.map((item) => {
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
                                    <h4>
                                        QTY-{item.amount}
                                    </h4>

                                </div>
                                <div className='cart-items-function'>
                                    <div className='removeCart'>
                                        <button className='removeCart' onClick={() => handleRemove(item.id)}>
                                            <i className='fa-solid fa-xmark'></i>
                                        </button>
                                    </div>
                                    <div className='cartControl d_flex'>
                                        <button className='incCart' onClick={() => handleClickCart(item, 1)}>
                                            <i className='fa-solid fa-plus'></i>
                                        </button>
                                        <button className='desCart' onClick={() => handleClickCart(item, -1)}>
                                            <i className='fa-solid fa-minus'></i>
                                        </button>
                                    </div>
                                </div>

                                <div className='cart-item-price'></div>
                            </div>
                        )
                    })}
                </div>

                <div className='cart-total product'>
                    <h2>Cart Summary</h2>
                    <div className=' d_flex'>
                        <h4>Total Price :</h4>
                        <h3>${price}.00</h3>
                    </div>
                </div>
            </div>
        </section>

    )
}

