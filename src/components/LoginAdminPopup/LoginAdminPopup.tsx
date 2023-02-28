import { ChangeEvent, FormEvent, useState } from 'react';
import { LoginPopupComponent } from '../../types/components';

function LoginAdminPopup({ onClose, isOpen, onLogin }: LoginPopupComponent) {
  const [password, setPassword] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setPassword('');
    onLogin('admin', password!);
  }

  return (
    <div onMouseDown={onClose} className={`popup ${isOpen ? 'popup_active' : ''}`}>
      <div
        onMouseDown={(evt) => {
          evt.stopPropagation();
        }}
        className="popup__outer-container popup__outer-container_for_authorize"
      >
        <div className="popup__inner-container">
          <button className="popup__close-btn" onMouseDown={onClose} />
          <form className="form" onSubmit={handleSubmit}>
            <p className="form__title">Вход</p>
            <input
              className="form__input"
              required
              id="password"
              placeholder="Пароль"
              name="password"
              type="password"
              value={password}
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
export default LoginAdminPopup;
