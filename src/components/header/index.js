import { connect } from 'react-redux';
import cx from 'classnames';
import css from './header.module.sass';
import Link from '../link';
import { routes } from '../../constants';
import Button from '../button';
import ElementButton from '../element-button';
import SearchLine from '../search-line';
import { logout } from '../../store/actions/auth';

function Header({ withSearch, user }) {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  const onClickOutside = React.useCallback((event) => {
    const isClickOutside = dropdownRef.current && !dropdownRef.current.contains(event.target);
    if (isClickOutside && isMenuOpen) {
      setMenuOpen(false);
    }
  }, [isMenuOpen]);

  React.useEffect(() => {
    window.addEventListener('click', onClickOutside);
    return () => {
      window.removeEventListener('click', onClickOutside);
    }
  }, [onClickOutside]);

  return (
    <header className={css.container}>
      <div className={css.navLine}>
        <Link href={routes.index} className={css.logo}>Skillien.com</Link>
        <Link href={routes.search} className={css.link}>Найти обьявление</Link>
        <Link href={routes.protected.adBuilder} className={css.link}>Разместить навык</Link>
        {!user && <Link href={routes.login} className={css.button}>
          <Button large>Войти</Button>
        </Link>}
        {user && (
          <ElementButton className={css.profileMenu} onClick={() => setMenuOpen(!isMenuOpen)}>
            <div className={cx('icon-user', css.avatar)} />
            {isMenuOpen && (
              <div className={css.dropdownMenu} ref={dropdownRef}>
                <Link href={routes.protected.profile} className={css.link}>Профиль</Link>
                <ElementButton className={css.link} onClick={logout}>Выйти</ElementButton>
              </div>
            )}
          </ElementButton>
        )}
      </div>
      {withSearch && <SearchLine />}
    </header>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Header);
