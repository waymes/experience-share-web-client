import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { connect } from 'react-redux';
import qs from 'query-string';
import css from './search-filters.module.sass';
import { routes } from '../../constants';
import messages from './messages';
import { getCategoriesOptions, getLevelsOptions, getPaymentsOptions } from '../../utils/translations';
import CheckboxArray from '../checkbox-array';

const getInitialValues = ({ query, categoriesOptions, levelsOptions, paymentsOptions }) => {
  let urlCategoryIds = [parseInt(query.category_ids, 10)];
  let urlTeacherLevels = [query.teacher_levels];
  let urlStudentLevels = [query.student_levels];
  let urlPayments = [query.payments];
  if (Array.isArray(query.category_ids)) {
    urlCategoryIds = query.category_ids.map(Number);
  }
  if (Array.isArray(query.teacher_levels)) {
    urlTeacherLevels = query.teacher_levels;
  }
  if (Array.isArray(query.student_levels)) {
    urlStudentLevels = query.student_levels;
  }
  if (Array.isArray(query.payments)) {
    urlPayments = query.payments;
  }
  return {
    category_ids: categoriesOptions.map((el) => (
      urlCategoryIds.includes(el.value) ? ({ ...el, selected: true }) : el
    )),
    teacher_levels: levelsOptions.map((el) => (
      urlTeacherLevels.includes(el.value) ? ({ ...el, selected: true }) : el
    )),
    student_levels: levelsOptions.map((el) => (
      urlStudentLevels.includes(el.value) ? ({ ...el, selected: true }) : el
    )),
    payments: paymentsOptions.map((el) => (
      urlPayments.includes(el.value) ? ({ ...el, selected: true }) : el
    )),
  };
};

function SearchFilters({ categories }) {
  const { formatMessage } = useIntl();
  const router = useRouter();
  const categoriesOptions = getCategoriesOptions(categories, formatMessage);
  const levelsOptions = getLevelsOptions(formatMessage);
  const paymentsOptions = getPaymentsOptions(formatMessage);
  const { query } = qs.parseUrl(router.asPath);
  const initialValues = getInitialValues({
    query, categoriesOptions, levelsOptions, paymentsOptions,
  });
  const onSubmit = React.useCallback((values) => {
    const search = qs.stringify({
      ...query,
      category_ids: values.category_ids.filter((el) => el.selected).map((el) => el.value),
      teacher_levels: values.teacher_levels.filter((el) => el.selected).map((el) => el.value),
      student_levels: values.student_levels.filter((el) => el.selected).map((el) => el.value),
      payments: values.payments.filter((el) => el.selected).map((el) => el.value),
    });
    const newAsPath = `/${router.query.lang}${routes.search}?${search}`;

    if (newAsPath === router.asPath) return;
    router.push(`/[lang]${routes.search}`, newAsPath);
  });
  return (
    <Form
      onSubmit={onSubmit}
      mutators={arrayMutators}
      initialValues={initialValues}
    >
      {({ handleSubmit }) => (
        <div className={css.root}>
          <CheckboxArray
            name="category_ids"
            title={formatMessage(messages.categories)}
            options={categoriesOptions}
            onChange={handleSubmit}
          />
          <CheckboxArray
            name="teacher_levels"
            title={formatMessage(messages.teacherLevel)}
            options={levelsOptions}
            onChange={handleSubmit}
          />
          <CheckboxArray
            name="student_levels"
            title={formatMessage(messages.studentLevel)}
            options={levelsOptions}
            onChange={handleSubmit}
          />
          <CheckboxArray
            name="payments"
            title={formatMessage(messages.paymentType)}
            options={paymentsOptions}
            onChange={handleSubmit}
          />
        </div>
      )}
    </Form>
  );
}

const mapStateToProps = (state) => ({
  categories: state.general.categories,
});

export default connect(mapStateToProps)(SearchFilters);
