import { useSelector } from 'react-redux';
import ProductInCart from './ProductInCart';

function CartPopup({ isOpen, onClose }) {
  const products = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = products.reduce((acc, product) => (acc += product.price), 0);

  return (
    <div onClick={onClose} className={`popup ${isOpen ? 'popup_active' : ''}`}>
      <div
        onClick={(evt) => {
          evt.stopPropagation();
        }}
        className="popup__container"
      >
        <button className='popup__close-btn' onClick={onClose} />
        <span className="popup__text">Ваш заказ:</span>
        <div className="popup__products-list">{products.map(product => (
          <ProductInCart key={product._id} product={product} />
        ))}</div>
        <span>{totalPrice}</span>
      </div>
    </div>
  );
}

export default CartPopup;
