import { connect } from 'react-redux';
import css from './coachings.module.sass';
import ProfileLayout from '../../../layouts/profile';
import CoachingsList from '../../../components/coachings-list';
import { fetchMyCoachings, createCoaching } from '../../../store/actions/profile';
import { getCookie } from '../../../utils/request';
import Button from '../../../components/button';
import Link from '../../../components/link';
import { routes } from '../../../constants';

class CoachingsPage extends React.Component {
  static async getInitialProps({ req }) {
    const cookie = getCookie(req);
    await fetchMyCoachings(cookie);
  }

  handleSubmit = (values) => {
    createCoaching(values);
    this.closeModal();
  }

  render() {
    const { coachings } = this.props;
    return (
      <ProfileLayout title="Мои учения" className={css.root}>
        <div className={css.nav}>
          <Button href={routes.protected.createCoaching} component={Link}>Добавить учение</Button>
        </div>
        <CoachingsList items={coachings} isProfile />
      </ProfileLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  coachings: state.profile.coachings,
});

export default connect(mapStateToProps)(CoachingsPage);
