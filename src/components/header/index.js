import { connect } from 'react-redux';
import css from './header.module.sass';
import Link from '../link';
import { routes } from '../../constants';
import Button from '../button';
import ElementButton from '../element-button';
import SearchLine from '../search-line';
import { logout } from '../../store/actions/auth';

function Header({ withSearch, user }) {
  return (
    <header className={css.container}>
      <div className={css.navLine}>
        <Link href={routes.index} className={css.logo}>Skillien.com</Link>
        <Link href={routes.search} className={css.link}>Найти обьявление</Link>
        <Link href={routes.protected.adBuilder} className={css.link}>Разместить навык</Link>
        {!user && <Link href={routes.login} className={css.button}>
          <Button large>Войти</Button>
        </Link>}
        {user && <Link href={routes.protected.profile} className={css.link}>Профиль</Link>}
        {user && <ElementButton className={css.link} onClick={logout}>Выйти</ElementButton>}
      </div>
      {withSearch && <SearchLine />}
    </header>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Header);
