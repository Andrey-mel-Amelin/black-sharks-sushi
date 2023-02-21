import { Location } from 'react-router-dom';
import { Product } from './redux';
import { ProductForApi } from './types';

type MainComponent = {
  adminLogged: boolean;
  addProductPopupOpen: () => void;
  isLoadingProducts: boolean;
  products: undefined | Product[];
  activeButtonName: string;
  location: Location;
};

type ProductsRoutesComponent = {
  product: Product;
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
  createProduct: (data: ProductForApi) => Promise<void>;
  onClose: () => void;
  isOpen: boolean;
};

export type {
  MainComponent,
  ProductsRoutesComponent,
  LoginPopupComponent,
  InfoPopupComponent,
  AddProductPopupComponent,
};
