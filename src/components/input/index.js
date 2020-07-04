import cx from 'classnames';
import { Field } from 'react-final-form';
import css from './input.module.sass';
import { validateRequired, validateEmail, validatePassword } from '../../utils/validators';

const notRemoveWhenEmpty = (type) => (value) => {
  if (type === 'number') {
    return parseInt(value, 10);
  }
  return value;
};
const fieldValidator = (type, required) => (value) => {
  if (required && !validateRequired(value)) {
    return 'Обязательное поле';
  }
  if (type === 'email' && !validateEmail(value)) {
    return 'Почта не валидная';
  }
  if (type === 'password' && !validatePassword(value)) {
    return 'Пароль не валиден';
  }

  return undefined;
};

function Input({ className, inputClassName, name, label, required, type, ...other }) {
  return (
    <Field name={name} validate={fieldValidator(type, required)} parse={notRemoveWhenEmpty(type)}>
      {({ input, meta }) => (
        <div className={cx(css.container, className)}>
          {label && <label htmlFor={name}>{label}</label>}
          <input
            id={name}
            className={cx(css.input, inputClassName)}
            type={type}
            {...input}
            {...other}
          />
          {meta.touched && (meta.submitError || meta.error)
            && (
            <span
              className={css.error}
              title={type === 'password' ? 'Пароль должен содержать цыфру, заглавную и строчную буквы и быть не менее 8 символов' : ''}
            >{meta.error || meta.submitError}</span>
            )}
        </div>
      )}
    </Field>
  );
}

export default Input;
