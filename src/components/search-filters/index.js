import { useIntl } from 'react-intl';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';
import css from './search-filters.module.sass';
import Select from '../select';
import { levelsOfSkill } from '../../constants';
import messages from './messages';
import Input from '../input';
import { getCategoriesOptions } from '../../utils/translations';

function SearchFilters({ categories }) {
  const { formatMessage } = useIntl();
  const categoriesOptions = getCategoriesOptions(categories, formatMessage);
  return (
    <Form onSubmit={() => {}}>
      {() => (
        <div className={css.root}>
          <Input name="skill" label={formatMessage(messages.skill)} className={css.field} />
          <Select name="categoryId" label={formatMessage(messages.category)} className={css.field} options={categoriesOptions} />
          <Select name="level" label={formatMessage(messages.level)} className={css.field} options={levelsOfSkill} />
        </div>
      )}
    </Form>
  );
}

const mapStateToProps = (state) => ({
  categories: state.general.categories,
});

export default connect(mapStateToProps)(SearchFilters);
