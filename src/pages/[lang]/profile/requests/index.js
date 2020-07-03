import ProfileLayout from '../../../../layouts/profile';
import css from './requests.module.sass';

function RequestsPage() {
  return (
    <ProfileLayout title="Мои заявки" className={css.root}>
      мои заявки
    </ProfileLayout>
  );
}

export default RequestsPage;
