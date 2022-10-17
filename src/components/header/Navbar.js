import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar({toggleMode,mode}) {

    return (
        <>
            <header className='header'>
                <nav className="navbar-expand-lg navbar navbar-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/track" className="nav-link" >Track my Order</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/account" className="nav-link" >My Account</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link" >Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cart" className="nav-link" >My Cart</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/wishlist" className="nav-link" >My Wishlist</Link>
                                </li>
                                <li>
                                    <button type="button" class="btn btn-success" onClick={() => toggleMode}>Theme</button>
                                </li>
                                {/* <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={() => toggleMode}/>
                                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                                </div> */}
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}
