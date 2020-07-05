import GeneralLayout from '../../layouts/general';
import css from './search.module.sass';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SearchResult from '../../components/search-result';
import { tempAdvertisements } from '../../constants';

function HomePage() {
  return (
    <GeneralLayout title="Поиск обьявлений">
      <Header withSearch />
      <div className={css.container}>
        {tempAdvertisements.map((advertisement) => (
          <SearchResult key={advertisement.id} result={advertisement} />
        ))}
      </div>
      <Footer />
    </GeneralLayout>
  );
}

export default HomePage;
