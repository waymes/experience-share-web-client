import { connect } from 'react-redux';
import css from './coachings.module.sass';
import ProfileLayout from '../../../layouts/profile';
import CoachingsList from '../../../components/coachings-list';
import { fetchMyCoachings, createCoaching } from '../../../store/actions/profile';
import { getCookie } from '../../../utils/request';
import Button from '../../../components/button';
import CoachingForm from '../../../components/coaching-form';
import Modal from '../../../components/modal';

class CoachingsPage extends React.Component {
  static async getInitialProps({ req }) {
    const cookie = getCookie(req);
    return Promise.all([
      fetchMyCoachings(cookie),
      ProfileLayout.getInitialProps(),
    ]);
  }

  constructor(props) {
    super(props);

    this.state = { isCoachingModalOpen: false };
  }

  openModal = () => {
    this.setState({ isCoachingModalOpen: true });
  }

  closeModal = () => {
    this.setState({ isCoachingModalOpen: false });
  }

  handleSubmit = (values) => {
    createCoaching(values);
    this.closeModal();
  }

  render() {
    const { isCoachingModalOpen } = this.state;
    const { coachings, categories } = this.props;
    return (
      <ProfileLayout title="Мои учения" className={css.root}>
        <div className={css.nav}>
          <Button onClick={this.openModal}>Добавить учение</Button>
        </div>
        <CoachingsList items={coachings} editable />
        <Modal isOpen={isCoachingModalOpen} onClose={this.closeModal}>
          <CoachingForm onSubmit={this.handleSubmit} categories={categories} />
        </Modal>
      </ProfileLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  coachings: state.profile.coachings,
  categories: state.general.categories,
});

export default connect(mapStateToProps)(CoachingsPage);
