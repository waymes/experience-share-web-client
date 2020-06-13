import Link from '../link';
import css from './footer.module.sass';
import { routes } from '../../constants';

const copyrightText = `© 2020 Skillien.com. Платформа обмена навыками и опытом, на которой можно
найти единомышленников :)`;

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <ul className={css.links}>
          <li><Link href={routes.contact}>Контакты</Link></li>
          <li><Link href={routes.about}>О нас</Link></li>
          <li><Link href={routes.policy}>Условия использования</Link></li>
        </ul>
        <span className={css.copyright}>{copyrightText}</span>
      </div>
    </footer>
  );
}

export default Footer;
