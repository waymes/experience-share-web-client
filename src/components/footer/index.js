import Link from '../link';
import css from './footer.module.sass';
import { routes } from '../../constants';

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <ul className={css.links}>
          <li><Link href={routes.contact}>Контакты</Link></li>
          <li><Link href={routes.about}>О нас</Link></li>
          <li><Link href={routes.policy}>Условия использования</Link></li>
        </ul>
        <span className={css.copyright}>
          &copy; 2020 Experience-share.com. Сайт получения навыков и друзей.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
