import { Location } from 'react-router-dom';
import { Product } from './redux';
import { ProductForApi } from './types';

type MainComponent = {
  menuActivity: boolean;
  onMenuToggle: () => void;
  location: Location;
  adminLogged: boolean;
  isLoadingProducts: boolean;
  activeButtonName: string;
  products: undefined | Product[];
  onDeleteProduct: (idPoduct: string) => Promise<void>;
  addProductPopupOpen: () => void;
};

type ProductsRoutesComponent = {
  product: Product;
  onDeleteProduct: (idPoduct: string) => Promise<void>;
};

type InfoPopupComponent = {
  isOpen: boolean;
  resStatus: boolean;
  resMessage: string;
  onClose: () => void;
};

type LoginPopupComponent = {
  onClose: () => void;
  isOpen: boolean;
  onLogin: (email: string, password: string) => Promise<void>;
};

type AddProductPopupComponent = {
  onCreateProduct: (data: ProductForApi) => Promise<void>;
  onClose: () => void;
  isOpen: boolean;
};

type CartComponent = {
  productsInCart: Product[];
  onCartPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

type CartPopupComponent = {
  productsInCart: {
    cartItems: Product[];
    cartTotalQuantity: number;
    cartTotalAmount: number;
  };
  isOpen: boolean;
  onClose: () => void;
};

type FooterComponent = {
  location: Location;
  onLogin: () => Promise<void>;
};

type NavigationComponent = {
  menuActivity: boolean;
  activeButtonName: string;
};

type ProductComponent = {
  product: Product;
  name: string;
  desc: string;
  price: number;
  type: string;
  onDeleteProduct: (idPoduct: string) => Promise<void>;
};

type ProductInCartComponent = {
  product: Product;
};

export type {
  MainComponent,
  ProductsRoutesComponent,
  LoginPopupComponent,
  InfoPopupComponent,
  AddProductPopupComponent,
  CartComponent,
  CartPopupComponent,
  FooterComponent,
  NavigationComponent,
  ProductComponent,
  ProductInCartComponent,
};
