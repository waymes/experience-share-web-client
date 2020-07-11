export const appTitle = 'Skillien';
export const tempMeta = `Платформа обмена навыками и опытом, на которой можно
найти единомышленников`;
// export const defaultLocale = 'en';
export const defaultLocale = 'ru'; // TODO: change to en
export const locales = ['en', 'ru'];

export const routes = {
  index: '/',
  search: '/search',
  login: '/login',
  signup: '/signup',
  forgotPassword: '/forgot-password',
  contact: '/contact',
  about: '/about',
  policy: '/policy',
  coaching: (id) => ({
    to: `/coaching/${id}`,
    as: '/coaching/[coachingId]',
  }),
  protected: {
    profile: '/profile',
    coachings: '/profile/coachings',
    editCoaching: (id = 'new') => ({
      to: `/profile/coachings/${id}`,
      as: '/profile/coachings/[coachingId]',
    }),
    requests: '/profile/requests',
    contacts: '/profile/contacts',
  },
};

export const languages = [
  { value: 'en-US', label: 'en-US' },
  { value: 'ru-RU', label: 'ru-RU' },
];

export const reviews = [
  {
    name: 'Иван Дорн',
    review: `За 17 баксов - просто шикарный вариант. Полный фарш по зарядным технологиям,
      разве что беспроводной зарядки нет. На коробке в характеристиках прямо указана ёмкость
      в перерасчёте на 5V - 12000 mAh. Проверил, несколько раз зарядив телефон и планшет -
      соответствует.`,
  },
  {
    name: 'Дима Билан',
    review: `Брал для Запорожца на заднюю ось. ориентировался по цене - данная резина была вне
      конкуренции (как новая, б.у. не рассматривал). по эксплуатации сильных нареканий нет. резина
      мягкая, я бы сказал что износостойкость низкая. на передней оси были Белшина- она на порядок
      показалась лучше.`,
  },
  {
    name: 'Толик Анаболик',
    review: `Надёжный.Сразу после покупки больше сотни отверстий просверлил(монтаж конструктива
      для гипсокартона) - перфоратор слегка тёплый,но не гарячий. Сверлит хорошо, можно без
      фанатизма использовать для демонтажа плитки и старой штукатурки.За свою цену-отличный выбор.`,
  },
  {
    name: 'Чул Сун',
    review: `Шампунь мне понравился. Пользовалась им в дуэте с маской этого же производителя.
      По моим ощущениям, волосы стали плотнее. И именно после начала пользования шампунем (маску
      открыла немного раньше). Шампунь совсем не содержит сульфатов, даже coco sulfate, но при
      этом волосы промывает хорошо и подходит для крашеных волос. Кончики волос не сушит.`,
  },
];
