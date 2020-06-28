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
    coachings: '/profile/coachings',
    requests: '/profile/requests',
    contacts: '/profile/contacts',
  },
};

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
  { value: 'en-US', label: 'en-US' },
  { value: 'es-US', label: 'es-US' },
  { value: 'fr-FR', label: 'fr-FR' },
  { value: 'uk-UA', label: 'uk-UA' },
  { value: 'ru-RU', label: 'ru-RU' },
];

export const levelsOfSkill = [
  { value: 'beginner', label: 'Начинающий' },
  { value: 'intermediate', label: 'Средний' },
  { value: 'upperIntermediate', label: 'Выше среднего' },
  { value: 'advanced', label: 'Продвинутый' },
  { value: 'professional', label: 'Профессионал' },
];

export const exchangeTypes = [
  { value: 'free', label: 'Бесплатно' },
  { value: 'paid', label: 'За деньги' },
  { value: 'exchange', label: 'Взамен на другой навык' }
];
