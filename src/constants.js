export const appTitle = 'Experience share';

export const routes = {
  index: '/',
  search: '/search',
  login: '/login',
  signup: '/signup',
  forgotPassword: '/forgot-password',
  contact: '/contact',
  about: '/about',
  policy: '/policy',
  protected: {},
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
