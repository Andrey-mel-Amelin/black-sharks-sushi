import ProductsRoutes from '../ProductsRoutes/ProductsRoutes';
import Navigation from '../Navigation/Navigation';
import InfoRoutes from '../InfoRoutes/InfoRoutes';
import { MainComponent } from '../../types/components';
import { locationForAnnouncement, locationForProducts } from '../../constants';
import Preloader from '../Preloader/Preloader';

function Main({ isLoadingProducts, products, activeButtonName, location }: MainComponent) {
  return (
    <main className="content">
      <Navigation activeButtonName={activeButtonName} />
      {locationForAnnouncement.includes(location.pathname) && (
        <div className="content__announcement">
          <p>ДОРОГИЕ КЛИЕНТЫ !</p>
          <p>Соевый соус, васаби и имбирь не входит в наборы. Заказать дополнительно можно в разделе соуса.</p>
          <p>РЕКОМЕНДУЕМЫЕ ТОВАРЫ</p>
        </div>
      )}

      {locationForProducts.includes(location.pathname) &&
        (isLoadingProducts ? (
          <Preloader />
        ) : (
          <section className="product-list">
            {products!.map((product) => (
              <ProductsRoutes key={product._id} product={product} />
            ))}
          </section>
        ))}

      <InfoRoutes />
    </main>
  );
}

export default Main;
