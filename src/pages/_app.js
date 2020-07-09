import App from 'next/app';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import withRedux from '../layouts/hocs/with-redux';
import { getCurrentUser } from '../store/actions/profile';
import { routes } from '../constants';
import { getCookie } from '../utils/request';
import { getInitialLocale, isLocale } from '../utils/translations';
import ruLocale from '../translations/ru.json';
import { getCategories } from '../store/actions/general';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // TODO: problem with protectedRoute checking
    const protectedRoute = Object.values(routes.protected).includes(ctx.asPath);
    const locale = getInitialLocale();

    if (ctx.req) {
      const cookie = getCookie(ctx.req);
      const user = cookie && await getCurrentUser(cookie);
      if (protectedRoute && !user) {
        return this.authRedirect(ctx.res, locale);
      }
    }
    this.checkLocaleRedirect(ctx, locale);

    const [pageProps] = await this.getInitialPromises(Component.getInitialProps, ctx);

    return { pageProps, locale };
  }

  static authRedirect(res, locale) {
    res.writeHead(307, { Location: `/${locale}${routes.login}` });
    res.end();
  }

  static checkLocaleRedirect(ctx, locale) {
    const langRegex = /^\/[\S]*\/?/;
    const match = ctx.asPath.match(langRegex);
    const selectedLocale = match && match[0].split('/')[1];
    if (selectedLocale === locale || ctx.asPath === '/') {
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

  static getInitialPromises(pageGetInitialProps, ctx) {
    const promises = [pageGetInitialProps ? pageGetInitialProps(ctx) : Promise.resolve({})];
    const { categories } = ctx.reduxStore.getState().general;
    if (!categories.length) {
      promises.push(getCategories());
    }
    return Promise.all(promises);
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
