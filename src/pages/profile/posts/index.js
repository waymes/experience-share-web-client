import ProfileLayout from '../../../layouts/profile';
import css from './posts.module.sass';

function PostsPage() {
  return (
    <ProfileLayout title="Посты" className={css.root}>
      посты
    </ProfileLayout>
  );
}

export default PostsPage;
