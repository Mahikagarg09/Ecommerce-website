import React,{useState} from 'react'
import FlashDeals from '../components/flashdeals/FlashDeals'
import Categories from '../components/mainpage/Categories'
import Home from '../components/mainpage/Home';
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shops/Shop";
import Wrapper from "../components/wrapper/Wrapper"
import Footer from '../components/footer/Footer';
import Annocument from '../components/announcements/Announcement';
export default function Pages({productItems,handleClickCart,handleClickWish,shopItems,theme}) {



  return (

    <>
        <Home theme={theme}/>
        <FlashDeals productItems={productItems} handleClickCart={handleClickCart} handleClickWish={handleClickWish} theme={theme}/>
        {/* <Categories/> */}
        <NewArrivals theme={theme}/> 
        <Discount theme={theme}/>
        {/* <Shop shopItems={shopItems} handleClick={handleClick}/> */}
        <Annocument theme={theme}/>
        <Wrapper theme={theme}/>
        <Footer/>
    </>
  )
}
