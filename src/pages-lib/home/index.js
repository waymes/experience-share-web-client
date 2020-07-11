import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import GeneralLayout from '../../layouts/general';
import css from './home-page.module.sass';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Tabs from '../../components/tabs';
import Link from '../../components/link';
import Section from '../../components/section';
import { TabGetSkill, TabShareSkill, TabFaq } from './tabs';
import { routes, reviews } from '../../constants';
import messages from './messages';
import commonMessages from '../../messages';
import ReviewBlock from '../../components/review-block';

function HomePage({ categories }) {
  return (
    <GeneralLayout className={css.root}>
      <Header withSearch />
      <Section>
        <h2 className={css.title}><FormattedMessage {...messages.popularCategories} /></h2>
        <div className={css.categories}>
          {categories.map((category) => (
            <Link key={category.id} className={css.category} href={`${routes.search}?category_ids=${category.id}`}>
              <div className={css.iconHolder}>
                <i className={`icon-${category.name}`} />
              </div>
              <span className={css.categoryTitle}>
                {commonMessages[category.name] && (
                  <FormattedMessage {...commonMessages[category.name]} />
                )}
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <Section>
        <h2 className={css.title}><FormattedMessage {...messages.howItWorks} /></h2>
        <Tabs
          items={[
            { label: 'Приобрести навык' },
            { label: 'Поделиться навыком' },
            { label: 'FAQ' },
          ]}
          content={[
            <TabGetSkill />,
            <TabShareSkill />,
            <TabFaq />,
          ]}
        />
      </Section>
      <Section>
        <h2 className={css.title}>Отзывы пользователей</h2>
        {reviews.map((review) => <ReviewBlock review={review} key={review.name} />)}
      </Section>
      <Footer />
    </GeneralLayout>
  );
}

const mapStateToProps = (state) => ({
  categories: state.general.categories,
});

export default connect(mapStateToProps)(HomePage);
