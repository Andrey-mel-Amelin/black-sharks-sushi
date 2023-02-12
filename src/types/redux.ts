type Product = {
  about: string;
  createdAt: string;
  image: { path: string };
  mainProduct: boolean;
  nameProduct: string;
  price: number;
  quantity: number;
  totalPrice: number;
  type: string;
  _id: string;
};

type State = {
  products: {
    items: Product[];
    status: null | string;
    error: null | string;
  };
  cart: {
    cartItems: Product[];
    cartTotalQuantity: number;
    cartTotalAmount: number;
  };
};

export type { State, Product };
