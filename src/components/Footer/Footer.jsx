import React, { useEffect, useState } from 'react';

function Footer({ setIsAdminPopupOpen, location }) {
  const [secret, setSecret] = useState('');

  useEffect(() => {
    if (secret === 'adminsecret') {
      setIsAdminPopupOpen(true);
    }
  }, [secret]);

  function handleSubmit(e) {
    e.preventDefault();
    setSecret(e.target[0].value);
  }

  return (
    <footer className="footer">
      {location.pathname === '/' && (
        <>
          <div className="footer__text">
            <span>Контакты</span>
            <p>Доставка суши, роллов, пицца в городе Северск.</p>
            <p>Прием заявок ПН-ЧТ: с 12:00 до 22:00, ПТ-СБ: с 12:00 до 23:00 ВС: 12:00 до 22:00</p>
            <p>Адрес: г. Северск ул.Лесная 1А.стр5 (2 этаж)</p>
          </div>
          <ul className="footer__info-list">
            <li className="footer__info-list-item footer__info-item_contact">
              <p>
                <span>Контакты</span>+7-961-888-65-69
                <br /> blacksharks70@bk.ru
              </p>
            </li>
            <li className="footer__info-list-item footer__info-item_adress">
              <p>
                <span>Адрес</span>г. Северск ул.Лесная 1А.стр5 (2 этаж) вход с торца
              </p>
            </li>
            <li className="footer__info-list-item footer__info-item_time-work">
              <p>
                <span>Время работы</span>Прием заявок: <br /> ПН-ЧТ: с 12:00 до 22:00 <br /> ПТ-СБ: с 12:00 до 23:00{' '}
                <br /> ВС: 12:00 до 22:00
              </p>
            </li>
          </ul>
        </>
      )}

      <div className="footer__box">
        <p>
          © Основано в 2019 BlackSharks{' '}
          <form onSubmit={handleSubmit}>
            <input className="footer__input" type="text" />
          </form>
        </p>
        <nav className="nav-links">
          <a rel="noreferrer" target="_blank" className="link link_source link_vk" href="https://vk.com/blacksharks70">
            {' '}
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className="link link_source link_inst"
            href="https://www.instagram.com/blacksharks70/"
          >
            {' '}
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className="link link_source link_youtube"
            href="https://www.youtube.com/channel/UCTqGJfH_DKhVtUAWHhpRDpw"
          >
            {' '}
          </a>
          <a rel="noreferrer" target="_blank" className="link link_source link_tg" href="https://t.me/blacksharks70">
            {' '}
          </a>
        </nav>
        <a className="link link_for_footer" href="#header">
          НАВЕРХ ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
