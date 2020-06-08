import cx from 'classnames';
import css from './button.module.sass';

function Button({
  children, className, onClick, type,
  filled, small, large, ...other
}) {
  const buttonMods = {
    [css.small]: small,
    [css.large]: large,
    [css.filled]: filled,
  };
  return (
    <button
      className={cx(css.button, className, buttonMods)}
      onClick={onClick}
      type={type}
      {...other}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
};

export default Button;
