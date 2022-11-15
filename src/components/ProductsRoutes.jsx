import React from 'react';
import { Route, useLocation, Routes } from 'react-router-dom';
import Product from './Product';

// main, roll, nabor, pizza, zakuska, souce, contacts, onas, dostavka, spec;
function ProductsRoutes({ product }) {
  const location = useLocation();
  const locationArr = location.pathname?.split('/') ?? [];

  return (
    <Routes location={location} key={locationArr[1]}>
      <Route
        path={product.mainProduct === true ? `/` : undefined}
        element={
          <Product
            product={product}
            name={product.name}
            about={product.about}
            price={product.price}
            type={product.type}
          />
        }
      />
      <Route
        path={`/${product.type}`}
        element={
          <Product
            product={product}
            name={product.name}
            about={product.about}
            price={product.price}
            type={product.type}
          />
        }
      />
    </Routes>
  );
}

export default ProductsRoutes;
