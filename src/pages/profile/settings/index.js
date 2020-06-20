import ProfileLayout from '../../../layouts/profile';
import ProfileSection from '../../../components/profile-section';
import Select from '../../../components/select';
import Button from '../../../components/button';
import { languages } from '../../../constants';
import css from './settings.module.sass';

function ProfilePage() {
  return (
    <ProfileLayout title="Настройки" className={css.root}>
      <ProfileSection
        title="Подробности аккаунта"
        onSubmit={() => {}}
        className={css.section}
      >
        <Select options={languages} name="language" label="Язык интерфейса" className={css.select} />
        <Button type="submit" className={css.button}>Сохранить</Button>
      </ProfileSection>
    </ProfileLayout>
  );
}

export default ProfilePage;
