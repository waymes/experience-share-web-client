import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import GeneralLayout from '../../layouts/general';
import css from './home-page.module.sass';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Tabs from '../../components/tabs';
import Link from '../../components/link';
import Section from '../../components/section';
import { routes } from '../../constants';
import messages from './messages';

const tabsContent = [
  'Вы размещаете или ищете подходящее обьявление, затем связываетесь с преподователем и начинаете обучение',
  'Вы размещаете или ищете подходящее обьявление, затем связываетесь со студентом и начинаете обучение',
  'Уроки платные? - не всегда, уроки могут быть платными, бесплатными или вы можете обменяться уроками по согласованию друг с другом',
];

function HomePage({ categories }) {
  return (
    <GeneralLayout className={css.root}>
      <Header withSearch />
      <Section>
        <h2 className={css.title}><FormattedMessage {...messages.popularCategories} /></h2>
        <div className={css.categories}>
          {categories.map((category) => (
            <Link key={category.id} className={css.category} href={`${routes.search}?category=${category.name}`}>
              <div className={css.iconHolder}>
                <i className={`icon-${category.name}`} />
              </div>
              <span className={css.categoryTitle}>
                {messages[category.name] && <FormattedMessage {...messages[category.name]} />}
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
          content={tabsContent}
        />
      </Section>
      <Footer />
    </GeneralLayout>
  );
}

const mapStateToProps = (state) => ({
  categories: state.general.categories,
});

export default connect(mapStateToProps)(HomePage);
