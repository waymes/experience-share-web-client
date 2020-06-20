import cx from 'classnames';
import { connect } from 'react-redux';
import css from './profile-head.module.sass';
import Link from '../link';
import { routes } from '../../constants';

const tabList = [
  { text: 'Профиль', href: routes.protected.profile },
  { text: 'Настройки', href: routes.protected.settings },
  { text: 'Навыки', href: routes.protected.skills },
  { text: 'Контакты', href: routes.protected.contacts },
]

function ProfileHead({ user }) {
  const fullname = `${user.firstName} ${user.lastName}`;
  return (
    <div className={css.root}>
      <div className={css.info}>
        <div className={cx(css.avatar, 'icon-user')} />
        <div className={css.name}>{fullname}</div>
      </div>
      <div className={css.tabs}>
        {tabList.map(tab => (
          <div key={tab.text} className={css.tabItem}>
            <Link href={tab.href}>{tab.text}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ProfileHead);
