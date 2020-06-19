import { connect } from 'react-redux';
import GeneralLayout from '../../layouts/general';
import Header from '../../components/header';
import ProfileForm from '../../components/profile-form';
import css from './profile.module.sass';

function ProfilePage({ user }) {
  return (
    <GeneralLayout title="Мой профиль">
      <Header />
      <section className={css.profilePage}>
        <h2>Мой профиль</h2>
        <ProfileForm onSubmit={() => {}} initialValues={user} />
      </section>
    </GeneralLayout>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ProfilePage);
