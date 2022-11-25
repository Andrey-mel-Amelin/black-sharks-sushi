import { useState } from 'react';

function LoginPopup({onClose, isOpen,  onLogin }) {
  const cleanUserData = {
    password: '',
    name: '',
  };

  const [userData, setUserData] = useState(cleanUserData);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((old) => ({
      ...old,
      [name]: value,
    }));
  }

  /*   function handleSubmit(e) {
    e.preventDefault();

    const { name, password } = userData;

    if (!name || !password) return;

    onLogin(password, name).catch((err) => {
      console.log(err);
      setUserData((old) => ({
        ...old,
        message: 'Что-то пошло не так!',
      }));
    });
  } */

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
          <form className="form" /* onSubmit={} */>
            <p className="form__title">Вход</p>
            <input
              className="form__input"
              required
              id="name"
              placeholder="admin"
              name="name"
              type="text"
              value={userData.name}
              onChange={handleChange}
            />
            <input
              className="form__input"
              required
              id="password"
              placeholder="Пароль"
              name="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
            />
            <button className="form__submit" type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginPopup;
