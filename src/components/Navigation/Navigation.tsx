import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationComponent } from '../../types/components';

function Navigation({ menuActivity, activeButtonName }: NavigationComponent) {
  const [isVisibility, setIsVisibility] = useState('hidden');

  return (
    <nav className={`navigation navigation_mobile ${menuActivity ? 'navigation_mobile_active' : ''}`}>
      <Link className={`link ${activeButtonName === '/' ? 'link_active' : ''}`} to="/">
        ГЛАВНАЯ
      </Link>
      {window.innerWidth <= 1023 ? (
        <>
          <Link className={`link ${activeButtonName === '/roll' ? 'link_active' : ''}`} to="/roll">
            РОЛЛЫ
          </Link>
          <Link className={`link ${activeButtonName === '/gorroll' ? 'link_active' : ''}`} to="/gorroll">
            ГОРЯЧИЕ РОЛЛЫ
          </Link>
          <Link className={`link ${activeButtonName === '/meksroll' ? 'link_active' : ''}`} to="/meksroll">
            МЕКСИКАНСКИЕ РОЛЛЫ
          </Link>
        </>
      ) : (
        <div
          onMouseDown={() => {
            setIsVisibility('visible');
          }}
          onMouseLeave={() => {
            setIsVisibility('hidden');
          }}
          className="navigation__roll"
        >
          <span>РОЛЛЫ</span>
          <ul className={`navigation__roll-list ${isVisibility === 'visible' ? 'navigation__roll-list_visible' : ''}`}>
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
      )}
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
