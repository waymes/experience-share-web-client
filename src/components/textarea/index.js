import cx from 'classnames';
import { Field } from 'react-final-form';
import css from './textarea.module.sass';
import { validateRequired } from '../../utils/validators';

const notRemoveWhenEmpty = (value) => (value);
const fieldValidator = (required) => (value) => {
  if (required && !validateRequired(value)) {
    return 'Обязательное поле';
  }

  return undefined;
};

function Textarea({ className, inputClassName, name, label, required, ...other }) {
  return (
    <Field name={name} validate={fieldValidator(required)} parse={notRemoveWhenEmpty}>
      {({ input, meta }) => (
        <div className={cx(css.container, className)}>
          {label && <label htmlFor={name}>{label}</label>}
          <textarea
            id={name}
            className={cx(css.textarea, inputClassName)}
            {...input}
            {...other}
          />
          {meta.touched && (meta.submitError || meta.error)
            && <span className={css.error}>{meta.error || meta.submitError}</span>}
        </div>
      )}
    </Field>
  );
}

export default Textarea;
