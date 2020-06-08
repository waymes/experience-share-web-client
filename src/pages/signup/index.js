import css from './signup.module.sass';
import GeneralLayout from '../../layouts/general';
import Footer from '../../components/footer';
import AuthForm from '../../components/auth-form';
import Input from '../../components/input';
import Button from '../../components/button';
import Header from '../../components/header';

const privacyText = 'Нажимая кнопку "Зарегестрироваться", вы принимаете правила сайта и политику конфиденциальности';

function SignupPage() {
  return (
    <GeneralLayout title="Регистрация" className={css.container}>
      <Header />
      <h3 className={css.title}>Зарегестрируйтесь</h3>
      <AuthForm onSubmit={() => {}}>
        <Button className={css.googleSignup}>Регистрация через Google</Button>
        <div className={css.separator}>Или</div>
        <Input placeholder="Имя" name="firstName" className={css.input} />
        <Input placeholder="Фамилия" name="lastName" className={css.input} />
        <Input placeholder="Эл. почта" name="email" type="email" className={css.input} />
        <Input placeholder="Пароль" name="password" type="password" className={css.input} />
        <p className={css.privacyText}>{privacyText}</p>
        <Button className={css.submit} type="submit">Зарегестрироваться</Button>
      </AuthForm>
      <Footer />
    </GeneralLayout>
  );
}

export default SignupPage;
