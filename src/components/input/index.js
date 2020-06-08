import cx from 'classnames';
import { Field } from 'react-final-form';
import css from './input.module.sass';

function Input({ className, inputClassName, name, ...other }) {
  return (
    <Field name={name}>
      {({ input }) => (
        <div className={cx(css.container, className)}>
          <input
            className={cx(css.input, inputClassName)}
            {...input}
            {...other}
          />
        </div>
      )}
    </Field>
  );
}

export default Input;
