import { Field } from 'react-final-form';
import ReactSelect from 'react-select';
import CreatableSelect from 'react-select/creatable';
import cx from 'classnames';
import css from './select.module.sass';
import { validateRequired } from '../../utils/validators';

let instanceId = 1; // workaround for ssr id mismatch

const fieldValidator = (required) => (value) => {
  if (required && !validateRequired(value)) {
    return 'Обязательное поле';
  }
  if (required && value && value.length === 0) {
    return 'Обязательное поле';
  }

  return undefined;
};

const selectStyles = {
  control: (styles) => ({
    ...styles,
    borderColor: '#1fc2d9',
    borderRadius: 'none',
    boxShadow: 'none',
    outline: 'none',
    '&:hover': {
      borderColor: '#1fc2d9',
    },
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused ? '#e7e5e3' : '#fff',
    color: '#333',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    '&:hover': {
      backgroundColor: '#414141',
      svg: {
        fill: '#fff',
      },
    },
  }),
};

function Select({ name, label, className, options, required, isCreatable, ...other }) {
  const Component = isCreatable ? CreatableSelect : ReactSelect;
  return (
    <Field name={name} validate={fieldValidator(required)}>
      {({ input, meta }) => (
        <div className={cx(className, css.root)}>
          {label && <label htmlFor={name} className={css.label}>{label}</label>}
          <Component
            options={options}
            {...input}
            placeholder="- выбрать -"
            {...other}
            styles={selectStyles}
            // eslint-disable-next-line no-plusplus
            instanceId={instanceId++}
          />
          {meta.touched && meta.error && <span className={css.error}>{meta.error}</span>}
        </div>
      )}
    </Field>
  );
}

Select.defaultProps = {
  isMulti: false,
};

export default Select;
