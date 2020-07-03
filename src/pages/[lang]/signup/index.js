import css from './signup.module.sass';
import GeneralLayout from '../../../layouts/general';
import Footer from '../../../components/footer';
import AuthForm from '../../../components/auth-form';
import Input from '../../../components/input';
import Button from '../../../components/button';
import Header from '../../../components/header';
import { signup } from '../../../store/actions/profile';

const privacyText = 'Нажимая кнопку "Зарегестрироваться", вы принимаете правила сайта и политику конфиденциальности';

function SignupPage() {
  return (
    <GeneralLayout title="Регистрация" className={css.container}>
      <Header />
      <h3 className={css.title}>Регистрация</h3>
      <AuthForm onSubmit={signup}>
        <Button className={css.googleSignup} filled>Регистрация через Google</Button>
        <div className={css.separator}>Или</div>
        <Input placeholder="Имя" name="firstName" className={css.input} required />
        <Input placeholder="Фамилия" name="lastName" className={css.input} />
        <Input placeholder="Эл. почта" name="email" type="email" className={css.input} required />
        <Input placeholder="Пароль" name="password" type="password" className={css.input} required />
        <p className={css.privacyText}>{privacyText}</p>
        <Button className={css.submit} filled type="submit">Зарегестрироваться</Button>
      </AuthForm>
      <Footer />
    </GeneralLayout>
  );
}

export default SignupPage;
