import Router from 'next/router';

// eslint-disable-next-line import/prefer-default-export
export function push(hrefObj = '', lang = Router.router.query.lang) {
  Router.push(`/[lang]${hrefObj.as || hrefObj}`, `/${lang}${hrefObj.to || hrefObj}`);
}
