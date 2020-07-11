import ErrorPage from 'next/error';
import { connect } from 'react-redux';
import GeneralLayout from '../../layouts/general';
import Header from '../../components/header';
import { getCoaching } from '../../store/actions/general';
import CoachingDetails from '../../components/coaching-details';

function CoachingPage({ selectedCoaching, notFound }) {
  if (notFound) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <GeneralLayout>
      <Header />
      <CoachingDetails coaching={selectedCoaching} />
    </GeneralLayout>
  );
}

CoachingPage.getInitialProps = async (ctx) => {
  const returnObj = { notFound: false };

  const coaching = await getCoaching(ctx.query.coachingId);
  if (!coaching) {
    returnObj.notFound = true;
  }
  return returnObj;
};

const mapStateToProps = (state) => ({
  selectedCoaching: state.general.coachings.selected,
});

export default connect(mapStateToProps)(CoachingPage);
