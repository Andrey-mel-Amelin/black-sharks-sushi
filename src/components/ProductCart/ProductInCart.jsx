import { useDispatch } from 'react-redux';
import { decrementProduct, deleteToCart, incrementProduct } from '../../redux/cart/cartSlice';

function ProductInCart({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-in-cart">
      <div className="product-in-cart__border">
        <img className="product-in-cart__image" alt={product.nameProduct} src={product.image.path} />
      </div>
      <p className="product-in-cart__name">{product.nameProduct}</p>
      <div className="product-in-cart__container-for-quantity">
        <button onClick={() => dispatch(incrementProduct(product))} className="product-in-cart__button" />
        <span className="product-in-cart__quantity">{product.cartQuantity}</span>
        <button
          onClick={() => dispatch(decrementProduct(product))}
          className="product-in-cart__button product-in-cart__button_type_minus"
        />
      </div>
      <span className="product-in-cart__total-price-product">{product.cartQuantity * product.price} руб.</span>
      <button
        onClick={() => dispatch(deleteToCart(product))}
        className="product-in-cart__button product-in-cart__button_type_delete"
      />
    </div>
  );
}

export default ProductInCart;
