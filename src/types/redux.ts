type Product = {
  _id: string;
  mainProduct: boolean;
  nameProduct: string;
  desc: string;
  type: string;
  price: number;
  image: { path: string; pathForLocal: string };
  createdAt: string;
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
