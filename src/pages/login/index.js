import css from './login.module.sass';
import GeneralLayout from '../../layouts/general';
import Footer from '../../components/footer';
import AuthForm from '../../components/auth-form';
import Input from '../../components/input';
import Button from '../../components/button';
import Link from '../../components/link';
import { routes } from '../../constants';
import Header from '../../components/header';
import { login } from '../../store/actions/auth';

function LoginPage() {
  return (
    <GeneralLayout title="Вход" className={css.container}>
      <Header />
      <h3 className={css.title}>Вход</h3>
      <AuthForm onSubmit={login}>
        <Input placeholder="Эл. почта" type="email" name="email" className={css.input} required />
        <Input placeholder="Пароль" type="password" name="password" className={css.input} required />
        <Button className={css.submit} type="submit">Войти</Button>
        <Link href={routes.forgotPassword} className={css.forgotPassword}>Забыли пароль?</Link>
        <div className={css.separator}>Или</div>
        <Button className={css.googleLogin}>Войти через Google</Button>
      </AuthForm>
      <div className={css.signup}>
        <span>Еще не с нами? <Link href={routes.signup}>Зарегистрироваться</Link></span>
      </div>
      <Footer />
    </GeneralLayout>
  );
}

export default LoginPage;
