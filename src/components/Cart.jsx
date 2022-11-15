import { useSelector } from 'react-redux';

function Cart({onCartPopup}) {
  const products = useSelector((state) => state.cart.itemsInCart);

  return (
    <div onClick={() => onCartPopup(true)} className={`cart ${products.length >= 1 ? 'cart_visible' : ''}`}>
      <span className="cart__count">{products.length}</span>
    </div>
  );
}

export default Cart;
