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
import { useDeleteProductMutation, useGetAllProductsQuery, usePostProductMutation } from '../../utils/productsApi';
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

  const { data, isLoading } = useGetAllProductsQuery(); // получение массива товаров с бэкенда / статус загрузки
  const [postProduct] = usePostProductMutation(); // запрос добавления продукта / положительный ответ
  const [deleteProduct] = useDeleteProductMutation(); // запрос удлаления продукта /
  const productsInCart = useSelector((state: State) => state.cart.cartItems); // массив товаров в корзине

  const [isPopupCartOpen, setIsPopupCartOpen] = useState(false); // попап с корзиной товаров
  const [isAdminPopupOpen, setIsAdminPopupOpen] = useState(false); // попап с формой для админа
  const [isAddProductPopupOpen, setIsAddProductPopupOpen] = useState(false);

  const [adminLogged, setAdminLogged] = useState(false); // статус авторизации админа

  const [resStatus, setResStatus] = useState(false); // статус ответа на запрос
  const [resMessage, setResMessage] = useState(''); // сообщение при ответе на запросы
  const [activeButtonName, setActiveButtonName] = useState(''); // подсвечивание кнопок, в зависимости он url

  const [menuActivity, setMenuActivity] = useState(false); // меню

  // переключение подсветки кнопки навигации
  useEffect(() => {
    setActiveButtonName(location.pathname);
  }, [location.pathname]);

  // закрыть опустошенную корзину
  useEffect(() => {
    if (productsInCart.length === 0) {
      setIsPopupCartOpen(false);
    }
  }, [productsInCart]);

  useEffect(() => {
    window.innerWidth <= 1023 && setMenuActivity(false)
  }, [location.pathname])
  

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
  function handleLogoutAdmin() {
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

  function handleCreateProduct(data: ProductForApi): Promise<void> {
    const formData = new FormData();
    formData.append('image', data.image!);
    formData.append('mainProduct', String(data.mainProduct));
    formData.append('nameProduct', data.nameProduct);
    formData.append('type', data.type);
    formData.append('desc', data.desc);
    formData.append('price', String(data.price));

    return postProduct(formData)
      .unwrap()
      .then((product) => {
        closeAllPopup();
        console.log('Продукт успешно добавлен:', product);
      })
      .catch((err) => console.log('Неудачный запрос:', err));
  }

  function handleDeleteProduct(idPoduct: string): Promise<void> {
    return deleteProduct(idPoduct)
      .unwrap()
      .then((product) => {
        console.log('Продукт удален:', product);
      })
      .catch((err) => console.log('Неудачный запрос:', err));
  }

  // проверка токена админа / аутентификация админа
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
          handleLogoutAdmin();
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

  // закрытие всех всплывающих окон
  function closeAllPopup() {
    setIsAdminPopupOpen(false);
    setIsPopupCartOpen(false);
    setIsAddProductPopupOpen(false);
  }

  // переключение кнопки меню
  function handleMenuToggle() {
    setMenuActivity((active) => !active);
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
              menuActivity={menuActivity}
              onMenuToggle={handleMenuToggle}
              adminLogged={adminLogged}
              addProductPopupOpen={() => setIsAddProductPopupOpen(true)}
              onDeleteProduct={handleDeleteProduct}
              isLoadingProducts={isLoading}
              products={data ? data : []}
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
            <AddProductPopup
              onClose={closeAllPopup}
              isOpen={isAddProductPopupOpen}
              onCreateProduct={handleCreateProduct}
            />
          </>
        ) : (
          <Navigate to="/" />
        )}
      </div>
    </AdminContext.Provider>
  );
}

export default App;
