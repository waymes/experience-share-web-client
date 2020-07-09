import commonMessages from '../messages';
import { defaultLocale, locales } from '../constants';

export function isLocale(tested) {
  return locales.some((locale) => locale === tested);
}

export function getInitialLocale() {
  // const localSetting = typeof localStorage !== undefined && localStorage.getItem('locale');
  // if (localSetting && isLocale(localSetting)) {
  //   return localSetting;
  // }

  // const [browserSetting] = navigator.language.split('-');
  // if (isLocale(browserSetting)) {
  //   return browserSetting;
  // }

  return defaultLocale;
}

export function getCategoriesOptions(categories = [], formatMessage) {
  return categories.map(({ name, id }) => ({
    value: id,
    label: commonMessages[name] && formatMessage(commonMessages[name]),
  }));
}

export function getLevelsOptions(formatMessage) {
  return [
    { value: 'beginner', label: formatMessage(commonMessages.beginner) },
    { value: 'intermediate', label: formatMessage(commonMessages.intermediate) },
    { value: 'upperIntermediate', label: formatMessage(commonMessages.upperIntermediate) },
    { value: 'advanced', label: formatMessage(commonMessages.advanced) },
    { value: 'professional', label: formatMessage(commonMessages.professional) },
  ];
}

export function getPaymentsOptions(formatMessage) {
  return [
    { value: 'free', label: formatMessage(commonMessages.free) },
    { value: 'paid', label: formatMessage(commonMessages.paid) },
    { value: 'exchange', label: formatMessage(commonMessages.exchange) },
  ];
}
