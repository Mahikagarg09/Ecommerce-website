import React  from 'react'
import FlashDeals from '../components/flashdeals/FlashDeals'
import Home from '../components/mainpage/Home';
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Wrapper from "../components/wrapper/Wrapper"
import Footer from '../components/footer/Footer';
import Annocument from '../components/announcements/Announcement';
export default function Pages({productItems,handleClickCart,handleClickWish,theme}) {



  return (

    <>
        <Home theme={theme}/>
        <FlashDeals productItems={productItems} handleClickCart={handleClickCart} handleClickWish={handleClickWish} theme={theme}/>
        <NewArrivals theme={theme}/> 
        <Discount theme={theme}/>
        <Annocument theme={theme}/>
        <Wrapper theme={theme}/>
        <Footer/>
    </>
  )
}
