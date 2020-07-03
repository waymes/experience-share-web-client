import App from 'next/app';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import withRedux from '../layouts/hocs/with-redux';
import { getCurrentUser } from '../store/actions/profile';
import { routes } from '../constants';
import { getCookie } from '../utils/request';
import { getInitialLocale } from '../translations/getInitialLocale';
import ruLocale from '../translations/ru.json';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const protectedRoute = Object.values(routes.protected).includes(ctx.pathname);
    let locale = getInitialLocale();

    if (ctx.req) {
      const cookie = getCookie(ctx.req)
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
    if (ctx.query.lang && ctx.query.lang !== locale) {
      this.localeRedirect(ctx, locale);
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, locale };
  }

  static authRedirect(res, locale) {
    res.writeHead(307, { Location: `/${locale}${routes.login}` });
    res.end();
  }

  static localeRedirect(ctx, locale) {
    const langRegex = /^\/[a-zA-Z]*\//;
    let pathname = ctx.asPath.replace(langRegex, `/${locale}/`);
    console.log('redirecting')
    ctx.res.writeHead(307, { Location: pathname });
    ctx.res.end();
  }

  render() {
    const { Component, pageProps, reduxStore, locale } = this.props;

    return (
      <Provider store={reduxStore}>
        <IntlProvider locale={locale} messages={ruLocale}>
          <Component {...pageProps} />
        </IntlProvider>
      </Provider>
    );
  }
}

export default withRedux(MyApp);
