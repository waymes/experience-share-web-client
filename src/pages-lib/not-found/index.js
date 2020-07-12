import GeneralLayout from '../../layouts/general';
import Header from '../../components/header';
import Footer from '../../components/footer';
import css from './not-found.module.sass';

function NotFoundPage() {
  return (
    <GeneralLayout>
      <Header />
      <div className={css.container}>
        <h2>404 Страница не найдена!</h2>
      </div>
      <Footer />
    </GeneralLayout>
  );
}

export default NotFoundPage;
