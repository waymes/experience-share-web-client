import { FormattedMessage } from 'react-intl';
import Modal from '../modal';
import Button from '../button';
import css from './alert.module.sass';
import messages from './messages';

function Alert({ title, onSubmit, onClose, isOpen }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={css.root}>
        <h2 className={css.title}>{title}</h2>
        <div className={css.buttons}>
          <Button onClick={onSubmit} filled className={css.button}>
            <FormattedMessage {...messages.ok} />
          </Button>
          <Button onClick={onClose} className={css.button}>
            <FormattedMessage {...messages.cancel} />
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default Alert;
