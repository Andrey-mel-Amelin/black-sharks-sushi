import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
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
  const [isPopupCartOpen, setIsPopupCartOpen] = useState(false);
  const [activeButtonName, setActiveButtonName] = useState('/');
  const location = useLocation();

  useEffect(() => {
    if (isPopupCartOpen) {
      disableBodyScroll(document);
    } else {
      enableBodyScroll(document);
    }
    setActiveButtonName(location.pathname);
  }, [location, isPopupCartOpen]);

  return (
    <Provider store={store}>
      <div className="page">
        <Phone />
        <Cart onCartPopup={setIsPopupCartOpen} />
        <Header />
        <Main location={location} activeButtonName={activeButtonName} />
        <Footer location={location} />
        <CartPopup onClose={() => setIsPopupCartOpen(false)} isOpen={isPopupCartOpen} />
      </div>
    </Provider>
  );
}

export default App;
