function Contacts() {
  return (
    <div className="contacts">
      <p className="contacts__text">
        <span className="contacts__text contacts__text_header">Контакты</span>+7-961-888-65-69
        <span>blacksharks70@bk.ru</span>
      </p>
      <p className="contacts__text">
        <span className="contacts__text contacts__text_header">Адрес</span> г.Северск ул.Лесная 1а.стр5
      </p>
      <div style={{ width: '560px', height: '800px', overflow: 'hidden', position: 'relative' }}>
        <iframe
          title="yandex-reviews"
          style={{
            width: '100%',
            height: '100%',
            border: '1px solid #e6e6e6',
            borderRadius: '8px',
            boxSizing: 'border-box',
          }}
          src="https://yandex.ru/maps-reviews-widget/43498029211?comments"
        ></iframe>
        <a
          href="https://yandex.ru/maps/org/chyornaya_akula/43498029211/"
          target="_blank"
          rel="noreferrer"
          style={{
            boxSizing: 'border-box',
            textDecoration: 'none',
            color: '#b3b3b3',
            fontSize: '10px',
            fontFamily: 'YS Text sansSerif',
            padding: '0 20px',
            position: 'absolute',
            bottom: '8px',
            width: '100%',
            textAlign: 'center',
            left: '0',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'block',
            maxHeight: '14px',
            whiteSpace: 'nowrap',
          }}
        >
          Чёрная акула на карте Северска — Яндекс Карты
        </a>
      </div>
      <div style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
        <a
          href="https://yandex.ru/maps/org/chyornaya_akula/43498029211/?utm_medium=mapframe&utm_source=maps"
          style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
        >
          Северск
        </a>
        <a
          href="https://yandex.ru/maps/11351/seversk/category/shop_of_sushi_and_asian_products/68190731095/?utm_medium=mapframe&utm_source=maps"
          style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
        >
          Лесная улица, 1Ас5 — Яндекс Карты
        </a>
        <iframe
          title="yandex-map"
          src="https://yandex.ru/map-widget/v1/-/CCUbm-c22C"
          style={{
            border: '1px solid #e6e6e6',
            borderRadius: '8px',
            boxSizing: 'border-box',
            position: 'relative',
            width: '100%',
            height: '400px',
            overflow: 'hidden',
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default Contacts;
