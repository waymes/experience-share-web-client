import css from './auth-form.module.sass';

function AuthForm({ children }) {
  return (
    <form className={css.form}>
      {children}
    </form>
  );
}

export default AuthForm;
