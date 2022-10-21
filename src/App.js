import React, { useEffect, useState } from 'react';
// import ThemeButton from "./components/Theme/ThemeButton";
// import { ThemeContext } from "./components/Theme/ThemeContext";

import './App.css';
import Header from './components/header/Header';
import Pages from './pages/Pages';
import Data from './components/Data';
import Cart from './components/Cart/Cart';
import Wishlist from './components/wishlist/Wishlist'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const { productItems } = Data;

  //-----------THEME--------

  const [theme, setTheme] = useState('');
  const toggleTheme =() =>{
    theme=== '' ? setTheme('dark-theme') : setTheme('');
  }

  useEffect(() =>{
    document.body.className=theme
  },[theme]);


  const [show, setShow] = useState(true);
  // --------------ADD TO CART----------

  const [cart, setCart] = useState([]);
  const handleClickCart = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  //-------------ADD TO WISHLIST------------

  const [wish, setWish] = useState([]);
  const handleClickWish = (item) => {
    if (wish.indexOf(item) !== -1) return;
    setWish([...wish, item]);
    console.log(wish);
  };

  return (
    <>

      <Router>
        <Header setShow={setShow} size={cart.length} theme={theme} toggleTheme={toggleTheme}/>
        <Switch>
          {show ?
            <Route path="/" exact>
              <Pages productItems={productItems} handleClickCart={handleClickCart} handleClickWish={handleClickWish} theme={theme}/>
            </Route>
            :
            // <Route path="/cart">
            //   <Cart cart={cart} setCart={setCart} handleChange={handleChange} theme={theme} />
            // </Route>
            <Route path="/wishlist">
                <Wishlist wish={wish} setWish={setWish} handleClickCart={handleClickCart}  theme={theme}/>
            </Route>
          }
          {/* {
            show?
              <Route path="/" exact>
                <Pages productItems={productItems} handleClickWish={handleClickWish} />
              </Route>
              :
              <Route path="/wishlist">
                <Wishlist wish={wish} setWish={setWish} handleClick={handleClick}  />
              </Route>
          } */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
