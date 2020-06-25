import { CSSTransition } from 'react-transition-group';

import './modal.sass';

function Modal({ children, isOpen, onClose }) {
  return (
    <CSSTransition in={isOpen} unmountOnExit timeout={400} classNames="modal-transition">
      <div className="modal" onClick={onClose}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;