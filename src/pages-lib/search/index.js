import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import GeneralLayout from '../../layouts/general';
import css from './search.module.sass';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { searchCoachings } from '../../store/actions/general';
import CoachingsList from '../../components/coachings-list';

function HomePage({ coachings }) {
  const router = useRouter();
  React.useEffect(() => {
    searchCoachings(router.asPath);
  }, [router.asPath]);
  return (
    <GeneralLayout title="Поиск обьявлений" className={css.root}>
      <Header withSearch />
      <div className={css.searchList}>
        <CoachingsList items={coachings} />
      </div>
      <Footer />
    </GeneralLayout>
  );
}

const mapStateToProps = (state) => ({
  coachings: state.general.coachings,
});

export default connect(mapStateToProps)(HomePage);
