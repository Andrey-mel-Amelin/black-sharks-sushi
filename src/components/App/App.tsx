import { useEffect, useState } from 'react';
import { Location, Navigate, NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContext';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Phone from '../Phone/Phone';
import CartPopup from '../CartPopup/CartPopup';
import LoginAdminPopup from '../LoginAdminPopup/LoginAdminPopup';
import { useGetAllProductsQuery } from '../../utils/productsApi';
import { useSelector } from 'react-redux';
import { State } from '../../types/redux';
import { allowedUrlPathname } from '../../constants';
import { api } from '../../utils/Api';
import InfoPopup from '../InfoPopup/InfoPopup';
import AdminPanel from '../AdminPanel/AdminPanel';
import { ProductForApi } from '../../types/types';
import AddProductPopup from '../AddProductPopup/AddProductPopup';

function App() {
  const location: Location = useLocation(); // доступ к url
  const navigate: NavigateFunction = useNavigate(); // доступ к навигации по приложению

  const { data, isLoading } = useGetAllProductsQuery(); // массив товаров с бэкенда / статус загрузки
  const dataForReverse = data ? [...data] : []; // копия массива для реверса
  const productsInCart = useSelector((state: State) => state.cart.cartItems); // массив товаров в корзине

  const [isPopupCartOpen, setIsPopupCartOpen] = useState(false); // попап с корзиной товаров
  const [isAdminPopupOpen, setIsAdminPopupOpen] = useState(false); // попап с формой для админа
  const [isAddProductPopupOpen, setIsAddProductPopupOpen] = useState(false);

  const [adminLogged, setAdminLogged] = useState(false); // статус авторизации админа

  const [resStatus, setResStatus] = useState(false); // статус ответа на запрос
  const [resMessage, setResMessage] = useState(''); // сообщение при ответе на запросы
  const [activeButtonName, setActiveButtonName] = useState(''); // подсвечивание кнопок, в зависимости он url

  useEffect(() => {
    setActiveButtonName(location.pathname);
  }, [location.pathname]);

  /*   useEffect(() => {
    // проверка токена, подстановка данных администратора
    function getContent(): Promise<void> {
      return api
        .checkTokenAdmin()
        .then(() => {
          setAdminLogged(true);
          setResMessage('Администратор успешно авторизован.');
        })
        .catch((err) => {
          setAdminLogged(false);
          setResMessage('Вы вышли.');
          // при невалидном jwt происходит автоматический логаут
          if (err.message.status === 401) {
            handleLogout();
          }
        });
    }
    getContent();
  }, []); */

  // выход из аккаунта
  function handleLogout() {
    return api
      .logout()
      .then(() => {
        setAdminLogged(false);
        setResMessage('Вы вышли.');
      })
      .catch(() => {
        setAdminLogged(false);
        setResMessage('Произошла ошибка запроса.');
      });
  }

  // закрыть опустошенную корзину
  useEffect(() => {
    if (productsInCart.length === 0) {
      setIsPopupCartOpen(false);
    }
  }, [productsInCart]);

  function createProduct(data: ProductForApi): Promise<void> {
    return api
      .addProducts(data)
      .then(() => console.log('удачный запрос'))
      .catch(() => console.log('неудачный запрос'));
  }

  function getContent(): Promise<void> {
    return api
      .checkTokenAdmin()
      .then(() => {
        setAdminLogged(true);
        setResMessage('Администратор успешно авторизован.');
      })
      .catch((err) => {
        setIsAdminPopupOpen(true);
        setAdminLogged(false);
        // при невалидном jwt происходит автоматический логаут
        if (err.message.status === 401) {
          handleLogout();
        }
      });
  }

  function handleLoginAdmin(name: string, password: string) {
    return api
      .loginAdmin({ name, password })
      .then(() => {
        setResMessage('Вы успешно вошли!');
        setResStatus(true);
        setAdminLogged(true);
        setIsAdminPopupOpen(false);
        navigate('/');
      })
      .catch((err) => {
        setResMessage(err);
        setResStatus(false);
        setAdminLogged(false);
      });
  }

  function closeAllPopup() {
    setIsAdminPopupOpen(false);
    setIsPopupCartOpen(false);
    setIsAddProductPopupOpen(false);
  }

  return (
    <AdminContext.Provider value={adminLogged}>
      <div className="app">
        {allowedUrlPathname.includes(location.pathname) ? (
          <>
            {adminLogged && <AdminPanel />}
            <Phone />
            <Cart productsInCart={productsInCart} onCartPopup={setIsPopupCartOpen} />
            <Header />
            <Main
              adminLogged={adminLogged}
              addProductPopupOpen={() => setIsAddProductPopupOpen(true)}
              isLoadingProducts={isLoading}
              products={dataForReverse.reverse()}
              location={location}
              activeButtonName={activeButtonName}
            />
            <Footer location={location} onLogin={getContent} />
            <InfoPopup
              onClose={closeAllPopup}
              isOpen={isAdminPopupOpen}
              resStatus={resStatus}
              resMessage={resMessage}
            />
            <CartPopup productsInCart={productsInCart} onClose={closeAllPopup} isOpen={isPopupCartOpen} />
            <LoginAdminPopup onClose={closeAllPopup} isOpen={isAdminPopupOpen} onLogin={handleLoginAdmin} />
            <AddProductPopup onClose={closeAllPopup} isOpen={isAddProductPopupOpen} createProduct={createProduct} />
          </>
        ) : (
          <Navigate to="/" />
        )}
      </div>
    </AdminContext.Provider>
  );
}

export default App;
