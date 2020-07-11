import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { useIntl } from 'react-intl';
import { connect } from 'react-redux';
import ProfileLayout from '../../../../layouts/profile';
import CoachingForm from '../../../../components/coaching-form';
import css from './edit-coaching.module.sass';
import { createCoaching, updateCoaching, getCoaching } from '../../../../store/actions/profile';
import messages from './messages';

function EditCoachingPage({ categories, selectedCoaching, notFound }) {
  if (notFound) {
    return <ErrorPage statusCode={404} />;
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
  let coaching = null;
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
