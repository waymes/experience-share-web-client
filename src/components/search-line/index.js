import { useRouter } from 'next/router';
import qs from 'query-string';
import { Form } from 'react-final-form';
import css from './search-line.module.sass';
import Input from '../input';
import Button from '../button';
import { routes } from '../../constants';

function SearchLine() {
  const router = useRouter();
  const { query } = qs.parseUrl(router.asPath);
  const initialValues = {
    title: query.title,
    city: query.city,
  };
  const onSubmit = ({ title, city }) => {
    const search = qs.stringify({ ...query, title, city });
    router.push(`/[lang]${routes.search}`, `/${router.query.lang}${routes.search}?${search}`);
  };
  return (
    <div className={css.root}>
      <div className={css.container}>
        <h2 className={css.title}>Каждый день - это новая возможность изучить что-то новое</h2>
        <Form onSubmit={onSubmit} initialValues={initialValues}>
          {({ handleSubmit }) => (
            <form className={css.searchForm} onSubmit={handleSubmit}>
              <Input name="title" className={css.skillInput} placeholder="Поиск" />
              <Input name="city" className={css.locationInput} placeholder="Город" />
              <Button className={css.goButton} filled type="submit">Найти учения</Button>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
}

export default SearchLine;
