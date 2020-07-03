import { FormattedMessage, useIntl } from 'react-intl';
import css from './signup.module.sass';
import GeneralLayout from '../../../layouts/general';
import Footer from '../../../components/footer';
import AuthForm from '../../../components/auth-form';
import Input from '../../../components/input';
import Button from '../../../components/button';
import Header from '../../../components/header';
import { signup } from '../../../store/actions/profile';
import messages from './messages';

function SignupPage() {
  const { formatMessage } = useIntl();
  return (
    <GeneralLayout title={formatMessage(messages.signupTitle)} className={css.container}>
      <Header />
      <h3 className={css.title}><FormattedMessage {...messages.signupTitle} /></h3>
      <AuthForm onSubmit={signup}>
        <Button className={css.googleSignup} filled><FormattedMessage {...messages.signupWithGoogle} /></Button>
        <div className={css.separator}><FormattedMessage {...messages.or} /></div>
        <Input placeholder={formatMessage(messages.firstName)} name="firstName" className={css.input} required />
        <Input placeholder={formatMessage(messages.lastName)} name="lastName" className={css.input} />
        <Input placeholder={formatMessage(messages.email)} name="email" type="email" className={css.input} required />
        <Input placeholder={formatMessage(messages.password)} name="password" type="password" className={css.input} required />
        <p className={css.privacyText}><FormattedMessage {...messages.policyAndPrivacyText} /></p>
        <Button className={css.submit} filled type="submit"><FormattedMessage {...messages.signup} /></Button>
      </AuthForm>
      <Footer />
    </GeneralLayout>
  );
}

export default SignupPage;
