import cx from 'classnames';
import { connect } from 'react-redux';
import css from './profile-head.module.sass';
import Link from '../link';
import { routes } from '../../constants';

const tabList = [
  { text: 'Профиль', href: routes.protected.profile },
  { text: 'Настройки', href: routes.protected.settings },
  { text: 'Посты', href: routes.protected.posts },
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
          <Link key={tab.text} href={tab.href} className={css.tabItem} activeClassName={css.active}>{tab.text}</Link>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ProfileHead);
