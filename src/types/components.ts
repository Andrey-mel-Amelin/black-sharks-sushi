import { Location } from "react-router-dom";
import { Product } from "./redux";

type MainComponent = {
  isLoadingProducts: boolean;
  products: undefined | Product[];
  activeButtonName: string;
  location: Location;
};

type ProductsRoutesComponent = {
  product: Product;
};

export type { MainComponent, ProductsRoutesComponent };