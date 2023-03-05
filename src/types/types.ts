type NavigationButtonNames = string;

type ProductForApi = {
  image?: File | null;
  mainProduct: string;
  nameProduct: string;
  type: string;
  desc: string;
  price: string;
};

export type { NavigationButtonNames, ProductForApi };
