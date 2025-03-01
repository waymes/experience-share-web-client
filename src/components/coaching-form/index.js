import { Form } from 'react-final-form';
import { FormattedMessage, useIntl } from 'react-intl';
import Input from '../input';
import Select from '../select';
import Button from '../button';
import Textarea from '../textarea';
import Alert from '../alert';
import css from './coaching-form.module.sass';
import { deleteCoaching } from '../../store/actions/profile';
import messages from './messages';
import { getCategoriesOptions, getLevelsOptions, getPaymentsOptions } from '../../utils/translations';

const newInitialValues = {
  categoryId: '',
  price: 0,
  skills: [],
  teacherLevel: '',
  studentLevel: '',
  payment: '',
};

function CoachingForm({ onSubmit, categories, isNew, initialValues }) {
  const [isDeleteAlertOpen, setDeleteAlert] = React.useState(false);
  const { formatMessage } = useIntl();
  const categoriesOptions = getCategoriesOptions(categories, formatMessage);
  const levelsOptions = getLevelsOptions(formatMessage);
  const paymentsOptions = getPaymentsOptions(formatMessage);

  const handleFormSubmit = React.useCallback((values) => {
    onSubmit({
      ...values,
      skills: values.skills.map((el) => el.value),
      teacherLevel: values.teacherLevel.value,
      studentLevel: values.studentLevel.value,
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
      teacherLevel: levelsOptions.find((el) => el.value === initialValues.teacherLevel),
      studentLevel: levelsOptions.find((el) => el.value === initialValues.studentLevel),
      categoryId: categoriesOptions.find((el) => el.value === initialValues.category.id),
      payment: paymentsOptions.find((el) => el.value === initialValues.payment),
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
          <Select name="teacherLevel" label={formatMessage(messages.teacherLevel)} className={css.field} options={levelsOptions} required />
          <Select name="studentLevel" label={formatMessage(messages.studentLevel)} className={css.field} options={levelsOptions} required />
          <Select name="skills" label={formatMessage(messages.skills)} className={css.field} options={[]} isMulti isCreatable required />
          <Input name="schedule" label={formatMessage(messages.timetable)} className={css.field} required />
          <Select name="payment" label={formatMessage(messages.paymentType)} className={css.field} options={paymentsOptions} required />
          {values.payment.value === 'paid' && (
            <Input name="price" label={formatMessage(messages.price)} type="number" min={1} className={css.field} required />
          )}
          <Textarea name="description" label={formatMessage(messages.description)} className={css.field} required />
          <div className={css.buttons}>
            {!isNew && (
              <Button type="button" onClick={() => setDeleteAlert(true)} className={css.button}>
                <FormattedMessage {...messages.delete} />
              </Button>
            )}
            <Button type="submit" className={css.button} filled>{submitButtonText}</Button>
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

export default CoachingForm;
