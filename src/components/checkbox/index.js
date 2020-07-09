import { Field } from 'react-final-form';
import css from './checkbox.module.sass';

function Checkbox({ name, label, type }) {
  return (
    <Field name={name} type={type}>
      {({ input }) => (
        <div className={css.root}>
          <label className={css.labelContainer} htmlFor={name}>
            <input id={name} type={type} className={css.input} {...input} />
            <span className={css.label}>{label}</span>
          </label>
        </div>
      )}
    </Field>
  );
}

Checkbox.defaultProps = {
  type: 'checkbox',
};

export default Checkbox;
