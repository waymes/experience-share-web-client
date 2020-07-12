import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { connect } from 'react-redux';
import ProfileLayout from '../../../../layouts/profile';
import CoachingForm from '../../../../components/coaching-form';
import NotFoundPage from '../../../not-found';
import css from './edit-coaching.module.sass';
import { createCoaching, updateCoaching, getCoaching } from '../../../../store/actions/profile';
import messages from './messages';

function EditCoachingPage({ categories, selectedCoaching, notFound }) {
  if (notFound) {
    return <NotFoundPage />;
  }
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
  const returnObj = { notFound: false };
  const { coachingId } = ctx.query;
  let coaching = {};
  if (coachingId !== 'new') {
    coaching = await getCoaching(ctx.query.coachingId);
  }

  if (!coaching) {
    returnObj.notFound = true;
  }
  return returnObj;
};

const mapStateToProps = (state) => ({
  categories: state.general.categories,
  selectedCoaching: state.profile.coachings.selected,
});

export default connect(mapStateToProps)(EditCoachingPage);
