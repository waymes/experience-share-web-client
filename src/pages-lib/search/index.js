import { connect } from 'react-redux';
import GeneralLayout from '../../layouts/general';
import css from './search.module.sass';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { searchCoachings } from '../../store/actions/general';
import CoachingsList from '../../components/coachings-list';
import SearchFilters from '../../components/search-filters';

function HomePage({ coachings }) {
  return (
    <GeneralLayout title="Поиск учений" className={css.root}>
      <Header withSearch />
      <div className={css.container}>
        <SearchFilters />
        <CoachingsList items={coachings} />
      </div>
      <Footer />
    </GeneralLayout>
  );
}

HomePage.getInitialProps = async (ctx) => {
  await searchCoachings(ctx.asPath);
};

const mapStateToProps = (state) => ({
  coachings: state.general.coachings.list,
});

export default connect(mapStateToProps)(HomePage);
