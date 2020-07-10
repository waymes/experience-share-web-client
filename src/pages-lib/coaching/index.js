import { connect } from 'react-redux';
import GeneralLayout from '../../layouts/general';
import Header from '../../components/header';
import { getCoaching } from '../../store/actions/general';
import CoachingDetails from '../../components/coaching-details';

function CoachingPage({ selectedCoaching }) {
  return (
    <GeneralLayout>
      <Header />
      <CoachingDetails coaching={selectedCoaching} />
    </GeneralLayout>
  );
}

CoachingPage.getInitialProps = async (ctx) => {
  await getCoaching(ctx.query.coachingId);
};

const mapStateToProps = (state) => ({
  selectedCoaching: state.general.coachings.selected,
});

export default connect(mapStateToProps)(CoachingPage);
