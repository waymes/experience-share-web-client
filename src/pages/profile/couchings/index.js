import ProfileLayout from '../../../layouts/profile';
import css from './couchings.module.sass';

function CouchingsPage() {
  return (
    <ProfileLayout title="Мои учения" className={css.root}>
      мои учения
    </ProfileLayout>
  );
}

export default CouchingsPage;
