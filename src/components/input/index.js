import cx from 'classnames';
import css from './input.module.sass';

function Input({ className, inputClassName, ...other }) {
  return (
    <div className={cx(css.container, className)}>
      <input className={cx(css.input, inputClassName)} {...other} />
    </div>
  );
}

export default Input;
