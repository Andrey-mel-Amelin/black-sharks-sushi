import React from 'react';
import ProductsRoutes from './ProductsRoutes';
import Navigation from './Navigation';
import InfoRoutes from './InfoRoutes';

function Main({ isLoadingProducts, products, activeButtonName, location }) {
  const locationForAnnouncement = ['/', '/roll', '/gorroll', '/meksroll', '/nabor'];
  const locationForProducts = ['/', '/roll', '/gorroll', '/meksroll', '/nabor', '/pizza', '/zakuska', '/souce'];

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
      {locationForProducts.includes(location.pathname) && (
        <section className="product-list">
          {isLoadingProducts ? (
            <></>
          ) : (
            products.map((product) => <ProductsRoutes key={product._id} product={product} />)
          )}
        </section>
      )}
      <InfoRoutes />
    </main>
  );
}

export default Main;
