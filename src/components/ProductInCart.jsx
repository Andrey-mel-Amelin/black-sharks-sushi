import { useDispatch } from "react-redux";
import { decrementProduct, deleteToCart, incrementProduct } from "../redux/cart/cartSlice";

function ProductInCart({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-cart">
      <div className="product-cart__border">
        <img className="product-cart__image" alt={product.nameProduct} src={product.image.path} />
      </div>
      <p className="product-cart__name">{product.nameProduct}</p>
      <button onClick={() => dispatch(incrementProduct(product))} className="button">
        <span className="button__sign" />
      </button>

      <span className="product-cart__quantity">{product.cartQuantity}</span>

      <button onClick={() => dispatch(decrementProduct(product))} className="button">
        <span className="button__sign button__sign_type_minus" />
      </button>
      <span className="product-cart__total-price-product">{product.cartQuantity * product.price} руб.</span>
      <button onClick={() => dispatch(deleteToCart(product))} className="button">
        <span className="button__sign button__sign_type_delete" />
      </button>
    </div>
  );
}

export default ProductInCart;
