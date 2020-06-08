import css from './login.module.sass';
import GeneralLayout from '../../layouts/general';
import Footer from '../../components/footer';
import AuthForm from '../../components/auth-form';
import Input from '../../components/input';
import Button from '../../components/button';
import Link from '../../components/link';
import { routes } from '../../constants';
import Header from '../../components/header';

function LoginPage() {
  return (
    <GeneralLayout title="Вход" className={css.container}>
      <Header />
      <h3 className={css.title}>Вход</h3>
      <AuthForm>
        <Input placeholder="Эл. почта" type="email" className={css.input} />
        <Input placeholder="Пароль" type="password" className={css.input} />
        <Button className={css.submit} type="submit">Войти</Button>
        <Link href={routes.forgotPassword} className={css.forgotPassword}>Забыли пароль?</Link>
        <div className={css.separator}>Или</div>
        <Button className={css.googleLogin}>Войти через Google</Button>
      </AuthForm>
      <div className={css.signup}>
        <span>Еще не с нами? <Link href={routes.signup}>Зарегестрироваться</Link></span>
      </div>
      <Footer />
    </GeneralLayout>
  );
}

export default LoginPage;
