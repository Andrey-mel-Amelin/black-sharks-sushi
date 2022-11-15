function Delivery() {
  return (
    <div className="text-container">
      <h1 className="text-container__text text-container_header">BLACK SHARKS</h1>
      <p className="text-container__text">Заказ оплачивается при получении наличными или банковской картой.</p>
      <p className="text-container__text">
        Доставка производится бесплатно на сумму 450 рублей! Минимальная сумма заказа 400р, доставка по городу 70р.
      </p>
      <p className="text-container__text">
        После оформления заказа на сайте, в течение 10 минут вам перезвонит оператор. Пожалуйста, позвоните нам по
        телефону, если оператор вам не перезванивает.
      </p>
      <p className="text-container__text text-container__text_type_list">
        Режим работы в г.Северск:
        <ul>
          <li>ПН-12:00-22:00</li>
          <li>ВТ- 12:00-22:00</li>
          <li>СР-12:00-22:00</li>
          <li>ЧТ-12:00-22:00</li>
          <li>ПТ-12:00-23:00</li>
          <li>СБ-12:00-23:00</li>
          <li>ВС-12:00-22:00</li>
        </ul>
      </p>
    </div>
  );
}

export default Delivery;
