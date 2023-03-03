import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotals } from '../../redux/cart/cartSlice';
import ProductInCart from '../ProductInCart/ProductInCart';

function CartPopup({ productsInCart, isOpen, onClose }) {
  const dispatch = useDispatch();

  const { cartTotalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, productsInCart]);

  return (
    <div onMouseDown={onClose} className={`popup ${isOpen ? 'popup_active' : ''}`}>
      <div
        onMouseDown={(evt) => {
          evt.stopPropagation();
        }}
        className="popup__outer-container"
      >
        <div className="popup__inner-container">
          <button className="popup__close-btn" onMouseDown={onClose} />
          <div className="popup__announcement">
            <p>ДОРОГИЕ КЛИЕНТЫ !</p>
            <p>
              Соевый соус, васаби и имбирь не входит в наборы. Заказать дополнительно можно в разделе{' '}
              <Link to="/souce" onClick={onClose}>
                соуса
              </Link>
              .
            </p>
          </div>
          <span className="popup__text">Ваш заказ:</span>
          <div className="popup__products-list">
            {productsInCart.map((product) => (
              <ProductInCart key={product._id} product={product} />
            ))}
          </div>

          <span className="popup__total-sum">Итого: {cartTotalAmount} руб.</span>
        </div>
      </div>
    </div>
  );
}

export default CartPopup;
