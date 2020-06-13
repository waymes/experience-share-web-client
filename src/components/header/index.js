import css from './header.module.sass';
import Link from '../link';
import { routes } from '../../constants';
import Button from '../button';
import SearchLine from '../search-line';

function Header({ withSearch }) {
  return (
    <header className={css.container}>
      <div className={css.topLine}>
        <Link href="#">Русский</Link>
      </div>
      <div className={css.navLine}>
        <Link href={routes.index} className={css.logo}>Skillien.com</Link>
        <Link href={routes.login}>Разместить навык</Link>
        <Link href={routes.login} className={css.loginButton}>
          <Button large>Войти</Button>
        </Link>
      </div>
      {withSearch && <SearchLine />}
    </header>
  );
}

export default Header;
