import { FieldArray } from 'react-final-form-arrays';
import { OnChange } from 'react-final-form-listeners';
import Checkbox from '../checkbox';
import css from './checkbox-array.module.sass';

function CheckboxArray({ name, title, options, onChange }) {
  return (
    <>
      <FieldArray name={name}>
        {({ fields }) => (
          <div className={css.root}>
            <h4 className={css.title}>{title}</h4>
            {fields.map((field, id) => <Checkbox key={field} name={`${field}.selected`} label={options[id].label} />)}
          </div>
        )}
      </FieldArray>
      <OnChange name={name}>
        {onChange}
      </OnChange>
    </>
  );
}

export default CheckboxArray;
