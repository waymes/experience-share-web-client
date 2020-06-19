import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from '../layouts/hocs/with-redux';
import { getCurrentUser } from '../store/actions/auth';
import { routes } from '../constants';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const protectedRoute = Object.values(routes.protected).includes(ctx.pathname);

    if (ctx.req) {
      const { cookie } = ctx.req.headers;
      if (cookie) {
        await getCurrentUser(cookie)
          .then((user) => {
            if (protectedRoute && !user) {
              this.authRedirect(ctx.res);
            }
          });
      } else if (protectedRoute) {
        this.authRedirect(ctx.res);
      }
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  static authRedirect(res) {
    res.writeHead(307, { Location: routes.login });
    res.end();
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(MyApp);
