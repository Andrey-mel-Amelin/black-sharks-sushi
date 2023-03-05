import { useSelector } from "react-redux";
import { CartComponent } from "../../types/components";
import { State } from "../../types/redux";

function Cart({ productsInCart, onCartPopup }: CartComponent) {
  const { cartTotalQuantity } = useSelector((state: State) => state.cart);
  
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
