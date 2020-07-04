import { Form } from 'react-final-form';
import Input from '../input';
import Select from '../select';
import Button from '../button';
import Textarea from '../textarea';
import { levelsOfSkill, exchangeTypes } from '../../constants';
import css from './coaching-form.module.sass';

const initialValues = {
  categoryId: '',
  price: 0,
  skills: [],
  level: '',
  payment: '',
};

function CoachingModal({ onSubmit, categories }) {
  const categoriesOptions = categories.map((el) => ({ value: el.id, label: el.name }));

  const handleFormSubmit = React.useCallback((values) => {
    onSubmit({
      ...values,
      skills: values.skills.map((el) => el.value),
      level: values.level.value,
      categoryId: values.categoryId.value,
      payment: values.payment.value,
    });
  });
  return (
    <Form onSubmit={handleFormSubmit} initialValues={initialValues}>
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} className={css.root}>
          <h3 className={css.title}>Добавить учение</h3>
          <Input name="title" label="Название" className={css.field} required />
          <Input name="city" label="Город" className={css.field} required />
          <Select name="categoryId" label="Категория" className={css.field} options={categoriesOptions} required />
          <Select name="level" label="Уровень" className={css.field} options={levelsOfSkill} required />
          <Select name="skills" label="Навыки" className={css.field} options={[]} isMulti isCreatable required />
          <Input name="schedule" label="Расписание" className={css.field} required />
          <Select name="payment" label="Тип оплаты" className={css.field} options={exchangeTypes} required />
          {values.payment.value === 'paid' && (
            <Input name="price" label="Стоимость" type="number" min={1} className={css.field} required />
          )}
          <Textarea name="description" label="Описание" className={css.field} required />
          <Button type="submit">Добавить</Button>
        </form>
      )}
    </Form>
  );
}

export default CoachingModal;
