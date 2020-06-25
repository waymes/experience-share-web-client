import { Form } from 'react-final-form';
import Input from '../input';
import Select from '../select';
import Button from '../button';
import css from './skill-form.module.sass';
import { levelsOfSkill, lastUsedOptions, yearsOfExperience } from '../../constants';

function SkillForm({ onSubmit, onClose }) {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={css.form}>
          <h3 className={css.title}>Добавить навык</h3>
          <Input name="name" label="Навык" className={css.input} required />
          <Select
            name="level"
            label="Уровень"
            options={levelsOfSkill}
            className={css.select}
            required
          />
          <Select
            name="lastUsed"
            label="Последний раз использовался"
            options={lastUsedOptions}
            className={css.select}
            required
          />
          <Select
            name="yearsOfExperience"
            label="Лет опыта"
            options={yearsOfExperience}
            className={css.select}
            required
          />
          <div className={css.buttons}>
            <Button type="submit" className={css.button}>Сохранить</Button>
            <Button onClick={onClose} className={css.button}>Отмена</Button>
          </div>
        </form>
      )}
    </Form>
  );
}

export default SkillForm;
