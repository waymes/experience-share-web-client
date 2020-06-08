import GeneralLayout from '../../layouts/general';
import css from './home-page.module.sass';
import { tempCategories } from '../../constants';
import Header from '../../components/header';
import Footer from '../../components/footer';
import TabSlider from '../../components/tab-slider';

const tabsContent = [
  'Вы размещаете или ищете подходящее обьявление, затем связываетесь с преподователем и начинаете обучение',
  'Вы размещаете или ищете подходящее обьявление, затем связываетесь со студентом и начинаете обучение',
  'Уроки платные? - не всегда, уроки могут быть платными, бесплатными или вы можете обменяться уроками по согласованию друг с другом',
];

function HomePage() {
  return (
    <GeneralLayout>
      <Header withSearch />
      <div className={css.container}>
        <section>
          <h2 className={css.title}>Популярные категории</h2>
          <div className={css.categories}>
            {tempCategories.map((category) => (
              <div key={category.name} className={css.category}>
                <div className={css.iconHolder}>
                  <i className="icon-star-full" />
                </div>
                <h4 className={css.categoryTitle}>{category.title}</h4>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className={css.title}>Как это работает?</h2>
          <TabSlider
            tabs={['Приобрести навык', 'Поделиться навыком', 'FAQ']}
            content={tabsContent}
          />
        </section>
      </div>
      <Footer />
    </GeneralLayout>
  );
}

export default HomePage;
