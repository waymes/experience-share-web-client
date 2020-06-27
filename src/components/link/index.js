import { useRouter } from 'next/router';
import NextLink from 'next/link';
import cx from 'classnames';

function Link({ children, href, className, activeClassName }) {
  const router = useRouter();

  const isActive = href === router.pathname;
  return (
    <NextLink href={href}>
      <a className={cx(className, { [activeClassName]: isActive })}>
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
