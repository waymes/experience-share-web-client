import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { connect } from 'react-redux';
import ProfileLayout from '../../../../layouts/profile';
import CoachingForm from '../../../../components/coaching-form';
import css from './edit-coaching.module.sass';
import { createCoaching, updateCoaching } from '../../../../store/actions/profile';
import messages from './messages';

function EditCoachingPage({ categories, coachings }) {
  const router = useRouter();
  const { formatMessage } = useIntl();

  const isNew = router.query.coachingId === 'new';
  const title = formatMessage(isNew ? messages.newTitle : messages.editTitle);
  return (
    <ProfileLayout className={css.root} title={title}>
      <CoachingForm
        categories={categories}
        isNew={isNew}
        onSubmit={isNew ? createCoaching : updateCoaching}
        initialValues={!isNew && coachings.find((el) => el.id === +router.query.coachingId)}
      />
    </ProfileLayout>
  );
}

const mapStateToProps = (state) => ({
  categories: state.general.categories,
  coachings: state.profile.coachings,
});

export default connect(mapStateToProps)(EditCoachingPage);
