import { ChangeEvent, FormEvent, useState } from 'react';
import { AddProductPopupComponent } from '../../types/components';
import { ProductForApi } from '../../types/types';

function AddProductPopup({ onClose, isOpen, createProduct }: AddProductPopupComponent) {
  const initialProductData = { mainProduct: false, nameProduct: '', type: '', desc: '', price: 0 };
  const [productData, setProductData] = useState<ProductForApi>(initialProductData);

  function handleChange(
    e: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLSelectElement>) {
    const { name, value, checked, files } = e.target;

    setProductData((old) => ({
      ...old,
      [name]: name === 'mainProduct' ? checked : name === 'image' ? files?.item(0) : value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    createProduct(productData);
  }

  return (
    <div onClick={onClose} className={`popup ${isOpen ? 'popup_active' : ''}`}>
      <div
        onClick={(evt) => {
          evt.stopPropagation();
        }}
        className="popup__outer-container popup__outer-container_for_authorize"
      >
        <div className="popup__inner-container">
          <button className="popup__close-btn" onClick={onClose} />
          <form encType="multipart/form-data" className="form" onSubmit={handleSubmit}>
            <p className="form__title">Добавить товар</p>
            <input
              className="form__input form__input_for_add-product"
              required
              id="nameProduct"
              placeholder="Название продукта"
              name="nameProduct"
              type="text"
              value={productData.nameProduct}
              onChange={handleChange}
            />

            <label className="form__label" htmlFor="mainProduct">
              <span>Поместить на главную страницу?</span>
              <input
                className="form__input form__input_for_label"
                id="mainProduct"
                placeholder="Главный продукт"
                name="mainProduct"
                type="checkbox"
                checked={productData.mainProduct}
                onChange={handleChange}
              />
            </label>
            <select onChange={handleChange} name="type" id="type">
              <option value="">-Выберите тип продукта-</option>
              <option value="roll">Роллы</option>
              <option value="gorroll">Горячие роллы</option>
              <option value="meksroll">Мексиканские роллы</option>
              <option value="nabor">Набор</option>
              <option value="pizza">Пицца</option>
              <option value="zakuska">Закуска</option>
              <option value="souce">Соуса</option>
            </select>
            <input
              className="form__input form__input_for_add-product"
              required
              id="desc"
              placeholder="Описание товара"
              name="desc"
              type="text"
              value={productData.desc}
              onChange={handleChange}
            />
            <input
              className="form__input form__input_for_add-product"
              required
              id="price"
              placeholder="Цена товара"
              name="price"
              type="number"
              min="0"
              value={productData.price}
              onChange={handleChange}
            />
            <input
              className="form__input form__input_for_add-product form__input_type_file"
              required
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
            <button className="form__submit" type="submit">
              Добавить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProductPopup;
