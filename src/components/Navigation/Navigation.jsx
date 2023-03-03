import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation({ location, activeButtonName }) {
  const [isVisibility, setIsVisibility] = useState('hidden');
  const [isOpacity, setIsOpacity] = useState(0);

  return (
    <nav className="navigation">
      <Link className={`link ${activeButtonName === '/' ? 'link_active' : ''}`} to="/">
        ГЛАВНАЯ
      </Link>
      <div
        onMouseDown={() => {
          setIsVisibility('visible');
          setIsOpacity(1);
        }}
        onMouseLeave={() => {
          setIsVisibility('hidden');
          setIsOpacity(0);
        }}
        className="navigation__roll"
      >
        <span>РОЛЛЫ</span>
        <ul style={{ visibility: isVisibility, opacity: isOpacity }} className="navigation__roll-list">
          <li className="navigation__roll-list-item">
            <div />
          </li>
          <li className="navigation__roll-list-item">
            <Link
              className={`link ${activeButtonName === '/roll' ? 'link_active link_active-for-list' : ''}`}
              to="/roll"
            >
              РОЛЛЫ
            </Link>
          </li>
          <li className="navigation__roll-list-item">
            <Link
              className={`link ${activeButtonName === '/gorroll' ? 'link_active link_active-for-list' : ''}`}
              to="/gorroll"
            >
              ГОРЯЧИЕ РОЛЛЫ
            </Link>
          </li>
          <li className="navigation__roll-list-item">
            <Link
              className={`link ${activeButtonName === '/meksroll' ? 'link_active link_active-for-list' : ''}`}
              to="/meksroll"
            >
              МЕКСИКАНСКИЕ РОЛЛЫ
            </Link>
          </li>
        </ul>
      </div>
      <Link className={`link ${activeButtonName === '/nabor' ? 'link_active' : ''}`} to="/nabor">
        НАБОРЫ
      </Link>
      <Link className={`link ${activeButtonName === '/pizza' ? 'link_active' : ''}`} to="/pizza">
        ПИЦЦА
      </Link>
      <Link className={`link ${activeButtonName === '/zakuska' ? 'link_active' : ''}`} to="/zakuska">
        ЗАКУСКИ
      </Link>
      <Link className={`link ${activeButtonName === '/souce' ? 'link_active' : ''}`} to="/souce">
        СОУСА
      </Link>
      <Link className={`link ${activeButtonName === '/contacts' ? 'link_active' : ''}`} to="/contacts">
        КОНТАКТЫ
      </Link>
      <Link className={`link ${activeButtonName === '/info' ? 'link_active' : ''}`} to="/info">
        О НАС
      </Link>
      <Link className={`link ${activeButtonName === '/delivery' ? 'link_active' : ''}`} to="/delivery">
        ДОСТАВКА
      </Link>
      <Link className={`link ${activeButtonName === '/spec' ? 'link_active' : ''}`} to="/spec">
        СПЕЦ ПРЕДЛОЖЕНИЯ
      </Link>
    </nav>
  );
}

export default Navigation;
