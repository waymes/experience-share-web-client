import { Form } from 'react-final-form';
import { FormattedMessage, useIntl } from 'react-intl';
import Input from '../input';
import Select from '../select';
import Button from '../button';
import Textarea from '../textarea';
import Alert from '../alert';
import { levelsOfSkill, exchangeTypes } from '../../constants';
import css from './coaching-form.module.sass';
import { deleteCoaching } from '../../store/actions/profile';
import messages from './messages';

const newInitialValues = {
  categoryId: '',
  price: 0,
  skills: [],
  level: '',
  payment: '',
};

function CoachingModal({ onSubmit, categories, isNew, initialValues }) {
  const [isDeleteAlertOpen, setDeleteAlert] = React.useState(false);
  const { formatMessage } = useIntl();
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
  const title = formatMessage(isNew ? messages.newTitle : messages.editTitle);
  const submitButtonText = formatMessage(isNew ? messages.add : messages.save);
  let formattedInitialValues = newInitialValues;
  if (initialValues) {
    formattedInitialValues = {
      ...initialValues,
      skills: initialValues.skills.map((el) => ({ value: el, label: el })),
      level: levelsOfSkill.find((el) => el.value === initialValues.level),
      categoryId: categoriesOptions.find((el) => el.value === initialValues.category.id),
      payment: exchangeTypes.find((el) => el.value === initialValues.payment),
    };
  }
  return (
    <Form onSubmit={handleFormSubmit} initialValues={formattedInitialValues}>
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} className={css.root}>
          <h3 className={css.title}>{title}</h3>
          <Input name="title" label={formatMessage(messages.name)} className={css.field} required />
          <Input name="city" label={formatMessage(messages.city)} className={css.field} required />
          <Select name="categoryId" label={formatMessage(messages.category)} className={css.field} options={categoriesOptions} required />
          <Select name="level" label={formatMessage(messages.level)} className={css.field} options={levelsOfSkill} required />
          <Select name="skills" label={formatMessage(messages.skills)} className={css.field} options={[]} isMulti isCreatable required />
          <Input name="schedule" label={formatMessage(messages.timetable)} className={css.field} required />
          <Select name="payment" label={formatMessage(messages.paymentType)} className={css.field} options={exchangeTypes} required />
          {values.payment.value === 'paid' && (
            <Input name="price" label={formatMessage(messages.price)} type="number" min={1} className={css.field} required />
          )}
          <Textarea name="description" label={formatMessage(messages.description)} className={css.field} required />
          <div className={css.buttons}>
            <Button type="submit" className={css.button} filled>{submitButtonText}</Button>
            {!isNew && (
              <Button type="button" onClick={() => setDeleteAlert(true)} className={css.button}>
                <FormattedMessage {...messages.delete} />
              </Button>
            )}
          </div>
          <Alert
            isOpen={isDeleteAlertOpen}
            onClose={() => setDeleteAlert(false)}
            onSubmit={() => deleteCoaching(initialValues.id)}
            title={formatMessage(messages.deleteModalTitle)}
          />
        </form>
      )}
    </Form>
  );
}

export default CoachingModal;
