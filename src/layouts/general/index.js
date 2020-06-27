import Head from 'next/head';
import cx from 'classnames';
import { appTitle, tempMeta } from '../../constants';
import css from './general.module.sass';
import '../../styles/main.sass';

function GeneralLayout({ children, title, className, meta }) {
  return (
    <div className={css.root}>
      <Head>
        <title>{title ? `${title} | ${appTitle}` : appTitle}</title>
        <meta name="description" content={meta || tempMeta} />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <div className={cx(className, css.content)}>
        {children}
      </div>
    </div>
  );
}

GeneralLayout.defaultProps = {
  className: '',
  title: '',
  meta: '',
};

export default GeneralLayout;
