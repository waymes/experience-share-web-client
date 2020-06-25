export const appTitle = 'Skillien';
export const tempMeta = `Платформа обмена навыками и опытом, на которой можно
найти единомышленников`;

export const routes = {
  index: '/',
  search: '/search',
  login: '/login',
  signup: '/signup',
  forgotPassword: '/forgot-password',
  contact: '/contact',
  about: '/about',
  policy: '/policy',
  protected: {
    profile: '/profile',
    settings: '/profile/settings',
    posts: '/profile/posts',
    contacts: '/profile/contacts',
    adBuilder: '/profile/adBuilder'
  },
};

export const tempCategories = [
  { title: 'Разработка', name: 'development' },
  { title: 'Бизнес', name: 'business' },
  { title: 'Финансы и бухгалтерский учет', name: 'finance' },
  { title: 'Продуктивность', name: 'productivity' },
  { title: 'Игры', name: 'games' },
  { title: 'Личностный рост', name: 'personalDevelopment' },
  { title: 'Дизайн', name: 'design' },
  { title: 'Маркетинг', name: 'marketing' },
  { title: 'Стиль жизни', name: 'lifeStyle' },
  { title: 'Фото и видео сьемка', name: 'photo&video' },
  { title: 'Здоровье и фитнес', name: 'health' },
  { title: 'Музыка', name: 'music' },
];

export const tempAdvertisements = [
  {
    id: 1,
    title: 'Хочу изучить французкий',
    description: 'Ищу человека который поможет выучить французкий, буду очень благодарен!',
    author: { id: 1, firstName: 'Mark', lastName: 'Wahlberg' },
    currencies: ['free'],
    authorType: 'student',
  },
  {
    id: 2,
    title: 'Ищу преподавателя по рисованию',
    description: 'С детства хотел научиться рисовать, теперь появилась возможность, готов заплатить',
    author: { id: 2, firstName: 'Daryl', lastName: 'Dixon' },
    currencies: ['money'],
    authorType: 'student',
  },
  {
    id: 3,
    title: 'Обучу программированию с нуля',
    description: 'Готов взять студента для обучения программирования с нуля,',
    author: { id: 1, firstName: 'Rick', lastName: 'O\'brian' },
    currencies: ['free'],
    authorType: 'teacher',
  },
  {
    id: 4,
    title: 'Хочу научиться игре на пианино',
    description: 'Пару лет назад посмотрел фильм про пианино и с тех пор откладывал деньги на обучение, наконецто пришло время научиться))',
    author: { id: 1, firstName: 'Willy', lastName: 'Wonka' },
    currencies: ['free'],
    authorType: 'student',
  },
];

export const languages = [
  { value: 'en-US', text: 'en-US' },
  { value: 'es-US', text: 'es-US' },
  { value: 'fr-FR', text: 'fr-FR' },
  { value: 'uk-UA', text: 'uk-UA' },
  { value: 'ru-RU', text: 'ru-RU' },
];

export const levelsOfSkill = [
  { value: null, text: '- выбрать -' },
  { value: 'beginner', text: 'Начинающий' },
  { value: 'intermediate', text: 'Средний' },
  { value: 'upperIntermediate', text: 'Выше среднего' },
  { value: 'advanced', text: 'Продвинутый' },
  { value: 'professional', text: 'Профессионал' },
];

export const lastUsedOptions = [
  { value: null, text: '- выбрать -' },
  { value: 'notUsed', text: 'не использовался' },
  { value: 'currentlyUsing', text: 'использую в настоящее время' },
  { value: 'oneYearAgo', text: '1 год назад' },
  { value: 'twoYearsAgo', text: '2 года назад' },
  { value: 'threeYearsAgo', text: '3 года назад' },
  { value: 'moreThanFourYearsAgo', text: 'более 4-х лет назад' },
];

export const yearsOfExperience = [
  { value: null, text: '- выбрать -' },
  ...Array(9).fill(null).map((el, id) => ({ value: id + 1, text: id + 1 })),
  { value: 10, text: '10+' }
];
