import cx from 'classnames';
import { Field } from 'react-final-form';
import css from './input.module.sass';

const validateRequired = value => (value !== '' ? undefined : 'Обязательное поле');
const notRemoveWhenEmpty = value => (value);

function Input({ className, inputClassName, name, label, required, ...other }) {
  return (
    <Field name={name} validate={required && validateRequired} parse={notRemoveWhenEmpty}>
      {({ input, meta }) => (
        <div className={cx(css.container, className)}>
          {label && <label htmlFor={name}>{label}</label>}
          <input
            id={name}
            className={cx(css.input, inputClassName)}
            {...input}
            {...other}
          />
          {meta.touched && (meta.submitError || meta.error) &&
            <span className={css.error}>{meta.error || meta.submitError}</span>}
        </div>
      )}
    </Field>
  );
}

export default Input;
