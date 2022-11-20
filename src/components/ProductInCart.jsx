import { useDispatch } from 'react-redux';
import { deleteItemFromCart, decrementProduct, incrementProduct } from '../redux/cart/reducer';

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

      <span className="product-cart__quantity">{product.quantity}</span>

      <button onClick={() => dispatch(decrementProduct(product))} className="button">
        <span className="button__sign button__sign_type_minus" />
      </button>
      <span className="product-cart__total-price-product">{product.quantity * product.price} руб.</span>
      <button onClick={() => dispatch(deleteItemFromCart(product._id))} className="button">
        <span className="button__sign button__sign_type_close" />
      </button>
    </div>
  );
}

export default ProductInCart;
