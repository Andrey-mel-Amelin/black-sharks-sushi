import { useSelector } from 'react-redux';

function ProductInCart({ product }) {
  const products = useSelector((state) => state.cart.itemsInCart);
  const totalPriceProduct = products.reduce((acc, product) => (acc += product.totalPrice), 0);

  return (
    <div className="product-cart">
      <img alt={product.name} src={product.img} />
      <p>{product.name}</p>
      {/* <span>{product.count}</span> */}
      <span>{totalPriceProduct}</span>
    </div>
  );
}

export default ProductInCart;
