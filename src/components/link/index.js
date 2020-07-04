import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { useIntl } from 'react-intl';
import cx from 'classnames';

function Link({ children, href, className, activeClassName }) {
  const router = useRouter();
  const intl = useIntl();

  const isActive = `/${intl.locale}${href}` === router.asPath;
  return (
    <NextLink href={`/[lang]${href}`} as={`/${intl.locale}${href}`}>
      <a className={cx(className, { [activeClassName]: isActive })}>
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
