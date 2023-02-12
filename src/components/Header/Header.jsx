function Header() {
  return (
    <div className="header" id="header">
      <nav className="nav-links">
        <a
          rel="noreferrer"
          target="_blank"
          className="link link_source link_vk"
          href="https://vk.com/blacksharks70"
        >
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
        <a
          rel="noreferrer"
          target="_blank"
          className="link link_source link_tg"
          href="https://t.me/blacksharks70"
        >
          {' '}
        </a>
      </nav>
      <div className="header__logo"></div>
      <div className="header__info">
        <a className="header__info link" href="tel:+79618886569">
          +7-961-888-65-69
        </a>
        <a className="header__info link" href="mailto:BLACKSHARKS70@BK.RU">
          BLACKSHARKS70@BK.RU
        </a>
      </div>
    </div>
  );
}

export default Header;
