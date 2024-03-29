import { InfoPopupComponent } from '../../types/components';

function InfoPopup({ isOpen, resStatus, resMessage, onClose }: InfoPopupComponent) {
  return (
    <div className={`popup ${isOpen ? 'popup_visible' : ''}`} onMouseDown={onClose}>
      <div
        className="popup__container"
        onMouseDown={(evt) => {
          evt.stopPropagation();
        }}
      >
        <button className="popup__close-btn" onMouseDown={onClose} aria-label="Закрытие формы" type="button" />
        <div className={`popup__res-status ${resStatus && 'popup__res-status_type_res-ok'}`} />
        <p className="popup__message">{resMessage}</p>
      </div>
    </div>
  );
}

export default InfoPopup;
