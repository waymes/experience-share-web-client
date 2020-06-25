import ProfileLayout from '../../../layouts/profile';
import css from './contacts.module.sass';

function ContactsPage() {
  return (
    <ProfileLayout title="Контакты" className={css.root}>
      контакты
    </ProfileLayout>
  );
}

export default ContactsPage;
