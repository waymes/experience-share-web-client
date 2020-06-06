import css from './home-header.module.sass';
import Link from '../link';
import { routes } from '../../constants';
import Button from '../button';
import SearchLine from '../search-line';

function HomeHeader() {
  return (
    <header className={css.container}>
      <div className={css.topLine}>
        <Link href="#">Русский</Link>
      </div>
      <div className={css.navLine}>
        <Link href={routes.index} className={css.logo}>Experience Share.com</Link>
        <Link href={routes.login}>Разместить навык</Link>
        <Link href={routes.login} className={css.loginButton}>
          <Button large>Войти</Button>
        </Link>
      </div>
      <SearchLine />
    </header>
  );
}

export default HomeHeader;
