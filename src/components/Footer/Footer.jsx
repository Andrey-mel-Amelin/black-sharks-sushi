function Footer({ location, onLogin }) {
  return (
    <footer className="footer">
      {location.pathname === '/' && (
        <>
          <ul className="footer__info-list">
            <li className="footer__info-list-item footer__info-item_time-work">
              <p>
                <span>Время работы</span>Прием заявок: <br /> ПН-ЧТ: с 12:00 до 22:00 <br /> ПТ-СБ: с 12:00 до 23:00{' '}
                <br /> ВС: 12:00 до 22:00
              </p>
            </li>
            <li className="footer__info-list-item footer__info-item_contact">
              <p>
                <span>Контакты</span>+7-999-999-99-99
                <br /> MAIL@MAIL.ru
              </p>
            </li>
            <li className="footer__info-list-item footer__info-item_adress">
              <p>
                <span>Адрес</span>г. Москва ул.Кремль 1 (парадный вход)
              </p>
            </li>
          </ul>
        </>
      )}

      <div className="footer__box">
        <p>
          <button className="footer__button" onClick={onLogin}>
            ©
          </button>{' '}
          Основано в 2019 BlackSharks
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
