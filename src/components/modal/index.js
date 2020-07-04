/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { CSSTransition } from 'react-transition-group';

import css from './modal.module.sass';

function Modal({ children, isOpen, onClose }) {
  return (
    <CSSTransition in={isOpen} unmountOnExit timeout={400} classNames="modal-transition">
      <div className={css.modal} onClick={onClose}>
        <div className={css.content} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
