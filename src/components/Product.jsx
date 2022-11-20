import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../redux/cart/reducer';

function Product({ product, name, about, price, type }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.itemsInCart);
  const isProductsInCart = products.some((i) => i._id === product._id);

  function handleClick(e) {
    e.stopPropagation();
    if (isProductsInCart) {
      dispatch(deleteItemFromCart(product._id));
    } else {
      dispatch(setItemInCart(product));
    }
  }

  return (
    <article onClick={handleClick} className="product-list__item">
      <div className={type !== 'pizza' ? 'product-list__border' : 'product-list__border product-list__border_disable'}>
        <img className="product-list__image" src={product.image.path} alt={name} />
      </div>
      <h3 className="product-list__name">{name}</h3>
      <p className="product-list__about">{about}</p>
      <span className="product-list__price">{`${price} руб.`}</span>
      <button className={`product-list__button ${isProductsInCart && 'product-list__button_inactive'}`}>
        {isProductsInCart ? 'Убрать из корзины' : 'В корзину'}
      </button>
    </article>
  );
}

export default Product;
