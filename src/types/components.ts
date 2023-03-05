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

export type {
  MainComponent,
  ProductsRoutesComponent,
  LoginPopupComponent,
  InfoPopupComponent,
  AddProductPopupComponent,
};
