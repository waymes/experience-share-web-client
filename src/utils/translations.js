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
  return categories.map(({ name }) => ({
    value: name,
    label: commonMessages[name] && formatMessage(commonMessages[name]),
  }));
}
