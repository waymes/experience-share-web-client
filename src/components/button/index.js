import cx from 'classnames';
import css from './button.module.sass';

function Button({
  children, className, onClick,
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
      {...other}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
