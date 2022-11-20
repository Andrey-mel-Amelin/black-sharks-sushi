export function totalPrice(products) {
  products.reduce((acc, product) => (acc += product.price), 0);
}
