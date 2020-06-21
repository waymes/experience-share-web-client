import { connect } from 'react-redux';
import ProfileLayout from '../../layouts/profile';
import ProfileSection from '../../components/profile-section';
import Input from '../../components/input';
import Button from '../../components/button';
import Skills from '../../components/skills';
import css from './profile.module.sass';
import { saveCurrentUser } from '../../store/actions/auth';

function ProfilePage({ user }) {
  return (
    <ProfileLayout title="Профиль" className={css.root}>
      <ProfileSection
        title="Личная информация"
        onSubmit={saveCurrentUser}
        className={css.section}
        initialValues={user}
      >
        <Input name="firstName" label="Имя" className={css.input} required />
        <Input name="lastName" label="Фамилия" className={css.input} />
        <Button type="submit" className={css.button}>Сохранить</Button>
      </ProfileSection>
      <ProfileSection
        title="Контактная информация"
        className={css.section}
        onSubmit={() => {}}
        initialValues={user}
      >
        <Input name="email" type="email" label="Эл. почта" className={css.input} required />
        <Button type="submit" className={css.button}>Изменить адресс эл. почты</Button>
      </ProfileSection>
      <ProfileSection
        title="Мои навыки"
        className={css.section}
      >
        <Skills />
      </ProfileSection>
    </ProfileLayout>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(ProfilePage);
