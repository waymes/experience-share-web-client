import { connect } from 'react-redux';
import cx from 'classnames';
import GeneralLayout from '../general';
import Header from '../../components/header';
import css from './profile.module.sass';
import ProfileHead from '../../components/profile-head';

function ProfileLayout({ children, title, user, className }) {
  if (!user) {
    return null;
  }
  return (
    <GeneralLayout title={title}>
      <Header />
      <div className={cx(css.profilePage, className)}>
        <ProfileHead />
        <div className={css.content}>
          {children}
        </div>
      </div>
    </GeneralLayout>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(ProfileLayout);
