import Head from 'next/head';
import { appTitle } from '../../constants';
import '../../styles/main.sass';

function GeneralLayout({ children, title, className, meta }) {
  return (
    <div className="generalLayout">
      <Head>
        <title>{title ? `${title} | ${appTitle}` : appTitle}</title>
        <meta name="description" content={meta} />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <div className={className}>
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
