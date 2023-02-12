import { useSelector } from "react-redux";

function Cart({ productsInCart, onCartPopup }) {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  
  return (
    <div
      onClick={() => onCartPopup(true)}
      className={`cart ${productsInCart.length >= 1 ? 'cart_visible' : ''}`}
    >
      <span className="cart__count">{cartTotalQuantity}</span>
    </div>
  );
}

export default Cart;
