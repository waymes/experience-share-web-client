import cx from 'classnames';
import GeneralLayout from '../general';
import Header from '../../components/header';
import css from './profile.module.sass';
import ProfileHead from '../../components/profile-head';
import authGuard from '../hocs/auth-guard';

function ProfileLayout({ children, title, className }) {
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

export default authGuard({ auth: true })(ProfileLayout);
