import { Route, Routes } from 'react-router-dom';
import { ProductsRoutesComponent } from '../../types/components';
import Product from '../Product/Product';

function ProductsRoutes({ product, onDeleteProduct }: ProductsRoutesComponent) {
  return (
    <Routes>
      <Route
        path={product!.mainProduct === true ? `/` : undefined}
        element={
          <Product
            onDeleteProduct={onDeleteProduct}
            product={product}
            name={product.nameProduct}
            desc={product.desc}
            price={product.price}
            type={product.type}
          />
        }
      />
      <Route
        path={`/${product.type}`}
        element={
          <Product
            onDeleteProduct={onDeleteProduct}
            product={product}
            name={product.nameProduct}
            desc={product.desc}
            price={product.price}
            type={product.type}
          />
        }
      />
    </Routes>
  );
}

export default ProductsRoutes;
