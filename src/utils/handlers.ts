import { Product } from "../types/redux";

export function totalPrice(products: Product[]) {
  products.reduce((acc, product) => (acc += product.price), 0);
}
