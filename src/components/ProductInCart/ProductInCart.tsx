import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrementProduct, deleteToCart, incrementProduct } from '../../redux/cart/cartSlice';
import { ProductInCartComponent } from '../../types/components';

function ProductInCart({ product }: ProductInCartComponent) {
  const dispatch = useDispatch();

  const [count, setCount] = useState(5);
  const [toogleDeleteProduct, setToogleDeleteProduct] = useState(false);

  function handleToggleDeleteProduct() {
    setToogleDeleteProduct((active) => !active);
  }

  useEffect(() => {
    if (toogleDeleteProduct === true) {
      /* count > 0 && */
      const timer = setInterval(() => setCount((count) => count - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setCount(5);
    }
  }, [count, toogleDeleteProduct]);

  useEffect(() => {
    if (count === 0) {
      dispatch(deleteToCart(product));
    }
  }, [count, product, dispatch]);

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
      <span className="product-in-cart__total-price-product">{product.cartQuantity! * product.price} руб.</span>
      <button
        onClick={handleToggleDeleteProduct}
        className={`product-in-cart__button ${
          toogleDeleteProduct ? 'product-in-cart__button_type_count' : 'product-in-cart__button_type_delete'
        }`}
      >
        {toogleDeleteProduct && count}
      </button>
    </div>
  );
}

export default ProductInCart;
