import { compose } from 'redux';
import { connect } from 'react-redux';
import { routes } from '../../constants';
import { push } from '../../utils/router';

export default ({ auth } = {}) => (Component) => compose(
  connect((state) => ({ isLoggedIn: !!state.profile.user })),
)(
  ({ isLoggedIn, ...props }) => {
    if (typeof window === 'undefined') {
      return null;
    }
    let redirectRoute = null;

    if (auth && !isLoggedIn) {
      redirectRoute = routes.login;
    } else if (!auth && isLoggedIn) {
      redirectRoute = routes.protected.profile;
    }

    if (redirectRoute) {
      push(redirectRoute);
      return null;
    }
    return <Component {...props} />;
  },
);
