import { Form } from 'react-final-form';
import css from './auth-form.module.sass';

function AuthForm({ children, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form className={css.form} onSubmit={handleSubmit}>
          {children}
        </form>
      )}
    </Form>
  );
}

export default AuthForm;
