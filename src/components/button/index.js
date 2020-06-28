import cx from 'classnames';
import css from './button.module.sass';

function Button({
  children, className, onClick, type, component,
  filled, small, large, ...other
}) {
  const buttonMods = {
    [css.small]: small,
    [css.large]: large,
    [css.filled]: filled,
  };
  const Element = component || 'button';
  return (
    <Element
      className={cx(css.button, className, buttonMods)}
      onClick={onClick}
      type={type}
      {...other}
    >
      {children}
    </Element>
  );
}

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
};

export default Button;
