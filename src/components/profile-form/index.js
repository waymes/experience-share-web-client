import { Form } from 'react-final-form';
import Input from '../input';
import css from './profile-form.module.sass';

function ProfileForm({ onSubmit, initialValues }) {
  return (
    <Form onSubmit={onSubmit} initialValues={initialValues}>
      {({ handleSubmit }) => (
        <form className={css.form} onSubmit={handleSubmit}>
          <SubForm title="Личные данные">
            <Input name="firstName" placeholder="Имя" />
            <Input name="lastName" placeholder="Фамилия" />
          </SubForm>
          <SubForm title="Информация для авторизации">
            <Input name="email" placeholder="Email" type="email" />
            <Input name="password" placeholder="Password" />
          </SubForm>
          <SubForm title="Мои навыки">
            skills...
          </SubForm>
        </form>
      )}
    </Form>
  );
}

function SubForm({ title, children }) {
  return (
    <div className={css.subForm}>
      <h3 className={css.title}>{title}</h3>
      {children}
    </div>
  );
}

export default ProfileForm;
