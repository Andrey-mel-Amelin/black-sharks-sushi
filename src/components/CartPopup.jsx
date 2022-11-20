import ProductInCart from './ProductInCart';

function CartPopup({ products, isOpen, onClose }) {
  return (
    <div onClick={onClose} className={`popup ${isOpen ? 'popup_active' : ''}`}>
      <div
        onClick={(evt) => {
          evt.stopPropagation();
        }}
        className="popup__outer-container"
      >
        <div className="popup__inner-container">
          {products.length !== 0 && (
            <>
              <button className="popup__close-btn" onClick={onClose} />
              <span className="popup__text">Ваш заказ:</span>
              <div className="popup__products-list">
                {products.map((product) => (
                  <ProductInCart key={product._id} product={product} />
                ))}
              </div>
              <span>Итого: {products.quantity * products.price} руб.</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPopup;
