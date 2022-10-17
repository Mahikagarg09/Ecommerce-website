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
export default function Pages({productItems,mode,handleClickCart,handleClickWish,shopItems}) {



  return (

    <>
        <Home  mode={mode}/>
        <FlashDeals productItems={productItems} handleClickCart={handleClickCart} handleClickWish={handleClickWish}/>
        {/* <Categories/> */}
        <NewArrivals mode={mode}/> 
        <Discount/>
        {/* <Shop shopItems={shopItems} handleClick={handleClick}/> */}
        <Annocument/>
        <Wrapper/>
        <Footer/>
    </>
  )
}
