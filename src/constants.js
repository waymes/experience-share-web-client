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
  { value: 'es-US', label: 'es-US' },
  { value: 'fr-FR', label: 'fr-FR' },
  { value: 'uk-UA', label: 'uk-UA' },
  { value: 'ru-RU', label: 'ru-RU' },
];
