import { Field } from 'react-final-form';
import cx from 'classnames';
import css from './select.module.sass';

function Select({ name, label, className, options, ...other }) {
  return (
    <div className={cx(className, css.root)}>
      {label && <label htmlFor={name} className={css.label}>{label}</label>}
      <Field name={name} component="select" className={css.select}>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.value}</option>
        ))}
      </Field>
    </div>
  );
}

export default Select;
