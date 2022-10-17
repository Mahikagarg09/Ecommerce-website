import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

export default function Search({ setShow, size }) {

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
            <section className="search" >
                <container className="c_flex">
                    <div className="logo">
                        <Link to="/" href="" onClick={() => setShow(true)}><i class="fas fa-shopping-cart"></i> CART PLUS+</Link>
                    </div>

                    <div className="search-box f_flex">
                        <i className='fa fa-search'></i>
                        <input type="text" placeholder='Search' value={filter}  />
                        <span>All Category</span>
                    </div>

                    <div className="icon f_flex width">
                        <i className='fa fa-user icon-circle'></i>
                        <div className="cart">
                            <Link to="/wishlist"  onClick={() => setShow(false) }>
                                <i className="fa-solid fa-heart icon-circle"></i>
                                <span>0</span>
                            </Link>
                            <Link to="/cart" onClick={() => setShow(false) }>
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
