import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteToCart } from '../../redux/cart/cartSlice';

function Product({ product, name, desc, price, type, onDeleteProduct }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cartItems);
  const isProductsInCart = products.some((i) => i._id === product._id);

  function handleClick(e) {
    e.stopPropagation();
    if (isProductsInCart) {
      dispatch(deleteToCart(product));
    } else {
      dispatch(addToCart(product));
    }
  }

  function handleDeleteProduct(e) {
    e.stopPropagation();
    onDeleteProduct(product._id);
  }

  return (
    <article onClick={handleClick} className="product-list__item">
      <button className="product-list__delete-button" onClick={(e) => handleDeleteProduct(e)} />
      <span className="product-list__announcement">Удаление для администратора:</span>
      <div className={type !== 'pizza' ? 'product-list__border' : 'product-list__border product-list__border_disable'}>
        <img className="product-list__image" src={product.image.path} alt={name} />
      </div>
      <h3 className="product-list__name">{name}</h3>
      <p className="product-list__about">{desc}</p>
      <span className="product-list__price">{`${price} руб.`}</span>
      <button className={`product-list__button ${isProductsInCart && 'product-list__button_inactive'}`}>
        {isProductsInCart ? 'Убрать из корзины' : 'В корзину'}
      </button>
    </article>
  );
}

export default Product;
