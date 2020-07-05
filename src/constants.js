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
  coaching: '/coaching',
  protected: {
    profile: '/profile',
    coachings: '/profile/coachings',
    createCoaching: {
      to: '/profile/coachings/new',
      as: '/profile/coachings/[coachingId]',
    },
    requests: '/profile/requests',
    contacts: '/profile/contacts',
  },
};

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
  { value: 'exchange', label: 'Взамен на другой навык' },
];
