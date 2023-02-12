import { useEffect, useState } from 'react';
import { Location, useLocation } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContext';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Phone from '../Phone/Phone';
import CartPopup from '../CartPopup/CartPopup';
import LoginPopup from '../LoginPopup/LoginPopup';
import { useGetAllProductsQuery } from '../../utils/productsApi';
import { useSelector } from 'react-redux';
import { State } from '../../types/redux';

function App() {
  const { data, isLoading } = useGetAllProductsQuery();
  const location: Location = useLocation();
  const [isPopupCartOpen, setIsPopupCartOpen] = useState(false);
  const [isAdminPopupOpen, setIsAdminPopupOpen] = useState(false);
  const [activeButtonName, setActiveButtonName] = useState('');
  /*   const [loggedIn, setLoggedIn] = useState(false); */
  const [admin, setAdmin] = useState({});
  const productsInCart = useSelector((state: State) => state.cart.cartItems);

  useEffect(() => {
    if (productsInCart.length === 0) {
      setIsPopupCartOpen(false);
    }
  }, [productsInCart]);

  /*  function handleLogin(password, email) {
      return auth
        .login(password, email)
        .then(() => {
          setAuthMessage('Вы успешно вошли!');
          setIsStatePopupOpen(true);
          setResStatus(true);
          setUserEmail(email);
          setLoggedIn(true);
          history.push('/');
          if (history.location.pathname === '/') {
            setMenuActivity(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsStatePopupOpen(true);
          setResStatus(false);
          setAuthMessage(err);
        });
    } */

  return (
    <AdminContext.Provider value={admin}>
      <div className="app">
        <Phone />
        <Cart productsInCart={productsInCart} onCartPopup={setIsPopupCartOpen} />
        <Header />
        <Main isLoadingProducts={isLoading} products={data!} location={location} activeButtonName={activeButtonName} />
        <Footer setIsAdminPopupOpen={setIsAdminPopupOpen} location={location} />
        <CartPopup productsInCart={productsInCart} onClose={() => setIsPopupCartOpen(false)} isOpen={isPopupCartOpen} />
        <LoginPopup
          onLogin={() => {}}
          onClose={() => setIsAdminPopupOpen(false)}
          isOpen={isAdminPopupOpen} /* onLogin */
        />
      </div>
    </AdminContext.Provider>
  );
}

export default App;
