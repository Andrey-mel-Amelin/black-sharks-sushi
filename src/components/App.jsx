import React from 'react';
import { api } from '../utils/Api';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Cart from './Cart';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Phone from './Phone';
import CartPopup from './CartPopup';

function App() {
  const products = useSelector((state) => state.cart.itemsInCart);
  const [isPopupCartOpen, setIsPopupCartOpen] = useState(false);
  const [activeButtonName, setActiveButtonName] = useState('/');
  const [productsLit, setProductsList] = useState([]);
  const location = useLocation();


  useEffect(() => {
    api.getProducts().then((products) => {
      setProductsList(products);
    });
  }, []);

  useEffect(() => {
    if (products.length < 1) {
      setIsPopupCartOpen(false);
    }
  }, [products]);

  useEffect(() => {
    if (isPopupCartOpen) {
      disableBodyScroll(document);
    } else {
      enableBodyScroll(document);
    }
    setActiveButtonName(location.pathname);
  }, [location, isPopupCartOpen]);

  return (
    <div className="page">
      <Phone />
      <Cart onCartPopup={setIsPopupCartOpen} />
      <Header />
      <Main productsList={productsLit} location={location} activeButtonName={activeButtonName} />
      <Footer location={location} />
      <CartPopup
        products={products}
        onClose={() => setIsPopupCartOpen(false)}
        isOpen={isPopupCartOpen}
      />
    </div>
  );
}

export default App;
