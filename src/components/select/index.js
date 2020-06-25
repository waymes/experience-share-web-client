import { Field } from 'react-final-form';
import cx from 'classnames';
import css from './select.module.sass';
import { validateRequired } from '../../utils/validators';

const fieldValidator = (required) => (value) => {
  if (required && !validateRequired(value)) {
    return 'Обязательное поле';
  }

  return undefined;
};

function Select({ name, label, className, options, required }) {
  return (
    <Field name={name} validate={fieldValidator(required)}>
      {({ input,  meta }) => (
        <div className={cx(className, css.root)}>
          {label && <label htmlFor={name} className={css.label}>{label}</label>}
          <select {...input} className={css.select}>
            {options.map(option => (
              <option key={option.value} value={option.value}>{option.text || option.value}</option>
            ))}
          </select>
          {meta.touched && meta.error && <span className={css.error}>{meta.error}</span>}
        </div>
      )}
    </Field>
  );
}

export default Select;
