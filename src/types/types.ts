type NavigationButtonNames = string;

type ProductForApi = {
  image?: File | null;
  mainProduct: boolean;
  nameProduct: string;
  type: string;
  desc: string;
  price: number;
};

export type { NavigationButtonNames, ProductForApi };
