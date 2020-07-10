import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { connect } from 'react-redux';
import ProfileLayout from '../../../../layouts/profile';
import CoachingForm from '../../../../components/coaching-form';
import css from './edit-coaching.module.sass';
import { createCoaching, updateCoaching, getCoaching } from '../../../../store/actions/profile';
import messages from './messages';

function EditCoachingPage({ categories, selectedCoaching }) {
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
        initialValues={selectedCoaching}
      />
    </ProfileLayout>
  );
}

EditCoachingPage.getInitialProps = async (ctx) => {
  const { coachingId } = ctx.query;
  if (coachingId === 'new') return;

  await getCoaching(ctx.query.coachingId);
};

const mapStateToProps = (state) => ({
  categories: state.general.categories,
  selectedCoaching: state.profile.coachings.selected,
});

export default connect(mapStateToProps)(EditCoachingPage);
