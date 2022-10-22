import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

export default function Search({ setShow, size ,theme}) {

    //------------SEARCH FILTER------------
    const [filter, setFilter] = useState('');
    // const searchText = (event) => {
    //     setFilter(event.target.value);
    // }
    // console.warn(filter);

    // let dataSearch=data.cardData.filter(item =>{
    //     return Object.keys(item).some(key =>
    //         item[key].toString.toLowerCase().includes(filter.toString.toLowerCase())
    //         )

    // })

    return (
        <>
            <section className={`search ${theme}`} >
                <container className="c_flex">
                    <div className="logo">
                        <Link to="/" href="" onClick={() => setShow(1)}><i class="fas fa-shopping-cart"></i> CART PLUS+</Link>
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
