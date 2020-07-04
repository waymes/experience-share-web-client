import cx from 'classnames';
import { connect } from 'react-redux';
import css from './profile-head.module.sass';
import { routes } from '../../constants';
import Tabs from '../tabs';

const tabList = [
  { label: 'Профиль', href: routes.protected.profile },
  { label: 'Мои учения', href: routes.protected.coachings },
  { label: 'Мои заявки', href: routes.protected.requests },
  { label: 'Контакты', href: routes.protected.contacts },
];

function ProfileHead({ user }) {
  const fullname = `${user.firstName} ${user.lastName}`;
  return (
    <div className={css.root}>
      <div className={css.info}>
        <div className={cx(css.avatar, 'icon-user')} />
        <div>
          <div className={css.name}>{fullname}</div>
          <div className={css.email}>{user.email}</div>
        </div>
      </div>
      <Tabs items={tabList} isLinks />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.profile.user,
});

export default connect(mapStateToProps)(ProfileHead);
