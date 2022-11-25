import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../redux/cart/cartSlice';
import ProductInCart from './ProductInCart';

function CartPopup({ productsInCart, isOpen, onClose }) {
  const dispatch = useDispatch();

  const { cartTotalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, productsInCart]);

  return (
    <div onClick={onClose} className={`popup ${isOpen ? 'popup_active' : ''}`}>
      <div
        onClick={(evt) => {
          evt.stopPropagation();
        }}
        className="popup__outer-container"
      >
        <div className="popup__inner-container">
          <button className="popup__close-btn" onClick={onClose} />
          <span className="popup__text">Ваш заказ:</span>
          <div className="popup__products-list">
            {productsInCart.map((product) => (
              <ProductInCart key={product._id} product={product} />
            ))}
          </div>
          <span>Итого: {cartTotalAmount} руб.</span>
        </div>
      </div>
    </div>
  );
}

export default CartPopup;
