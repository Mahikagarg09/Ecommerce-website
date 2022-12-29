import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Pages from './pages/Pages';
import Data from './components/Data';
import Cart from './components/Cart/Cart';
import Wishlist from './components/wishlist/Wishlist'
import Alert from './pages/Alert';
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
  const handleClickCart = (item, d) => {
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.amount += d;
      setCart([...cart]);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      const updatedItems = [...cart, item];
      setCart(updatedItems);
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      showAlert("This item has been added to cart")
    }
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cart');
    setCart(storedCartItems ? JSON.parse(storedCartItems) : []);
  }, []);


  //-------------ADD TO WISHLIST------------
  const [wish, setWish] = useState([]);
  const handleClickWish = (item) => {
    const existingItem = wish.find(i => i.id === item.id);
    if (existingItem) {
      const updatedWish = wish.filter(i => i.id !== item.id);
      setWish(updatedWish);
      localStorage.setItem('wish', JSON.stringify(updatedWish));
      showAlert("This item has been removed from wishlist")
    } else {
      const updatedItems = [...wish, item];
      setWish(updatedItems);
      localStorage.setItem('wish', JSON.stringify(updatedItems));
      showAlert("This item has been added to wishlist")
    }
  };

  useEffect(() => {
    const storedWishItems = localStorage.getItem('wish');
    setWish(storedWishItems ? JSON.parse(storedWishItems) : []);
  }, []);

  // ---------------ALERT MESSAGE------
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>

      <Router>
        <Header setShow={setShow} size={cart.length} theme={theme} toggleTheme={toggleTheme} />
        <Alert alert={alert} />
        <Switch>
          if(show ===1){
            <Route path="/" exact>
              <Pages productItems={productItems} handleClickCart={handleClickCart} handleClickWish={handleClickWish} theme={theme} />
            </Route>
          }else if(show===2){
            <Route path="/wishlist">
              <Wishlist wish={wish} setWish={setWish} handleClickCart={handleClickCart} theme={theme} />
            </Route>
          }else{
            <Route path="/cart">
              <Cart cart={cart} setCart={setCart} handleClickCart={handleClickCart} theme={theme} />
            </Route>
          }


        </Switch>
      </Router>
    </>
  );
}

export default App;

