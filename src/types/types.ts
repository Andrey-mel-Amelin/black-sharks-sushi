type NavigationButtonNames = string;

type ProductForApi = {
  image?: File | null;
  mainProduct: boolean;
  nameProduct: string;
  type: string;
  desc: string;
  price: string;
};

export type { NavigationButtonNames, ProductForApi };
