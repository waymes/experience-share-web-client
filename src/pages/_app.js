import App from 'next/app';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import withRedux from '../layouts/hocs/with-redux';
import { getCurrentUser } from '../store/actions/profile';
import { routes } from '../constants';
import { getCookie } from '../utils/request';
import { getInitialLocale, isLocale } from '../translations/getInitialLocale';
import ruLocale from '../translations/ru.json';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const protectedRoute = Object.values(routes.protected).includes(ctx.pathname);
    const locale = getInitialLocale();

    if (ctx.req) {
      const cookie = getCookie(ctx.req);
      if (cookie) {
        await getCurrentUser(cookie)
          .then((user) => {
            if (protectedRoute && !user) {
              this.authRedirect(ctx.res, locale);
            }
          });
      } else if (protectedRoute) {
        this.authRedirect(ctx.res, locale);
      }
    }
    this.checkLocaleRedirect(ctx, locale);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, locale };
  }

  static authRedirect(res, locale) {
    res.writeHead(307, { Location: `/${locale}${routes.login}` });
    res.end();
  }

  static checkLocaleRedirect(ctx, locale) {
    const langRegex = /^\/[\S]*\//;
    const match = ctx.asPath.match(langRegex);
    const selectedLocale = match && match[0].split('/')[1];
    if (selectedLocale === locale) {
      return;
    }
    if (isLocale(selectedLocale)) {
      const pathname = ctx.asPath.replace(langRegex, `/${locale}/`);
      ctx.res.writeHead(307, { Location: pathname });
      ctx.res.end();
    } else {
      ctx.res.writeHead(307, { Location: `/${locale}/not-found` });
      ctx.res.end();
    }
  }

  render() {
    const { Component, pageProps, reduxStore, locale } = this.props;

    return (
      <Provider store={reduxStore}>
        <IntlProvider locale={locale} defaultLocale={locale} messages={ruLocale} onError={() => {}}>
          <Component {...pageProps} />
        </IntlProvider>
      </Provider>
    );
  }
}

export default withRedux(MyApp);
