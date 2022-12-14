import React from 'react'
import { Link } from 'react-router-dom';

export default function Search({ setShow, size ,theme}) {


    return (
        <>
            <section className={`search ${theme}`} >
                <container className="c_flex">
                    <div className="logo">
                        <Link to="/" href="" onClick={() => setShow(1)}><i className="fas fa-shopping-cart"></i> CART PLUS+</Link>
                    </div>

                    <div className="search-box f_flex">
                        <i className='fa fa-search'></i>
                        <input type="text" placeholder='Search'  />
                        <span>All Category</span>
                    </div>

                    <div className="icon f_flex width">
                        <Link to="/user">
                        <i className='fa fa-user icon-circle'></i>
                        </Link>
                        <div className="cart">
                            <Link to="/wishlist"  onClick={() => setShow(2) }>
                                <i className="fa-solid fa-heart icon-circle"></i>
                            </Link>
                            <Link to="/cart" onClick={() => setShow(3) }>
                                <i className="fa fa-shopping-bag icon-circle"></i>
                                <span>{size}</span>
                            </Link>

                        </div>
                    </div>
                </container>
            </section>
        </>
    )
}
