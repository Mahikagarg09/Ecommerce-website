import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './components/header/Header';
import Pages from './pages/Pages';
import Data from './components/Data';
import Cart from './components/Cart/Cart';
import Wishlist from './components/wishlist/Wishlist'
import Alert  from './pages/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const { productItems } = Data;

  //-----------THEME--------

  const [theme, setTheme] = useState('');
  const toggleTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
  }
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);
  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // ----------------PAGES SHOWN--------------------

  const [show, setShow] = useState(1);
  // 1-homepage
  // 2-Wishlist
  // 3-cart

  // --------------ADD TO CART----------

  const [cart, setCart] = useState([]);
  const handleClickCart = (item,d) => {
    if (cart.indexOf(item) !== -1){
      const ind = cart.indexOf(item);
    cart[ind].amount += d;
    }else{
      setCart([...cart, item]);
      showAlert("This item has been added to cart")
    }
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
    if (wish.indexOf(item) !== -1) {
      wish.splice(wish.indexOf(item),1);
      showAlert("This item has been removed from wishlist");

    } else {
      setWish([...wish, item]);
      showAlert("This item has been wishlisted");
    }

  };

  // ---------------ALERT MESSAGE------
  const [alert, setAlert] = useState(null);

  const showAlert = (message) =>{
    setAlert({
      msg: message,
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  return (
    <>

      <Router>
        <Header setShow={setShow} size={cart.length} theme={theme} toggleTheme={toggleTheme} />
        <Alert alert={alert}/>
        <Switch>
          if(show ===1){
            <Route path="/" exact>
              <Pages productItems={productItems} handleClickCart={handleClickCart} handleClickWish={handleClickWish} theme={theme}/>
            </Route>
          }else if(show===2){
            <Route path="/wishlist">
              <Wishlist wish={wish} setWish={setWish} handleClickCart={handleClickCart} theme={theme} />
            </Route>
          }else{
            <Route path="/cart">
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} theme={theme} />
            </Route>
          }


        </Switch>
      </Router>
    </>
  );
}

export default App;

