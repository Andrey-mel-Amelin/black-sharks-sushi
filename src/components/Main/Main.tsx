import ProductsRoutes from '../ProductsRoutes/ProductsRoutes';
import Navigation from '../Navigation/Navigation';
import InfoRoutes from '../InfoRoutes/InfoRoutes';
import { MainComponent } from '../../types/components';
import { locationForProducts } from '../../constants';
import Preloader from '../Preloader/Preloader';

function Main({
  addProductPopupOpen,
  adminLogged,
  isLoadingProducts,
  products,
  activeButtonName,
  location,
  onDeleteProduct,
}: MainComponent) {
  return (
    <main className="content">
      <Navigation activeButtonName={activeButtonName} />
      {location.pathname === '/' && <h3 className="content__recommend">Рекомендуемые товары</h3>}
      <button className="content__popup-open-button" onClick={addProductPopupOpen} />
      {locationForProducts.includes(location.pathname) &&
        (isLoadingProducts ? (
          <Preloader />
        ) : (
          <section className="product-list">
            {products!.map((product) => (
              <ProductsRoutes key={product._id} product={product} onDeleteProduct={onDeleteProduct} />
            ))}
          </section>
        ))}

      <InfoRoutes />
    </main>
  );
}

export default Main;
