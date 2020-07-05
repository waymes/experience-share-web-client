import { FormattedMessage, useIntl } from 'react-intl';
import css from './login.module.sass';
import GeneralLayout from '../../layouts/general';
import Footer from '../../components/footer';
import AuthForm from '../../components/auth-form';
import Input from '../../components/input';
import Button from '../../components/button';
import Link from '../../components/link';
import { routes } from '../../constants';
import Header from '../../components/header';
import { login } from '../../store/actions/profile';
import messages from './messages';

function LoginPage() {
  const { formatMessage } = useIntl();
  return (
    <GeneralLayout title={formatMessage(messages.loginTitle)} className={css.container}>
      <Header />
      <h3 className={css.title}><FormattedMessage {...messages.loginTitle} /></h3>
      <AuthForm onSubmit={login}>
        <Input placeholder={formatMessage(messages.email)} type="email" name="email" className={css.input} required />
        <Input placeholder={formatMessage(messages.password)} type="password" name="password" className={css.input} required />
        <Button className={css.submit} filled type="submit">
          <FormattedMessage {...messages.login} />
        </Button>
        <Link href={routes.forgotPassword} className={css.forgotPassword}>
          <FormattedMessage {...messages.forgotPassword} />
        </Link>
        <div className={css.separator}><FormattedMessage {...messages.or} /></div>
        <Button className={css.googleLogin} filled>
          <FormattedMessage {...messages.loginWithGoogle} />
        </Button>
      </AuthForm>
      <div className={css.signup}>
        <span>
          <FormattedMessage {...messages.notWithUs} />
          {' '}
          <Link href={routes.signup}>
            <FormattedMessage {...messages.join} />
          </Link>
        </span>
      </div>
      <Footer />
    </GeneralLayout>
  );
}

export default LoginPage;
