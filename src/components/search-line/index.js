import { useRouter } from 'next/router';
import { Form } from 'react-final-form';
import css from './search-line.module.sass';
import Input from '../input';
import Button from '../button';
import { routes } from '../../constants';

function SearchLine() {
  const router = useRouter();
  const initialValues = {
    title: router.query.title || null,
    city: router.query.city || null,
  };
  const onSubmit = ({ title, city }) => {
    let search = '';
    if (title) search += `title=${encodeURI(title)}`;
    if (city) search += `&city=${encodeURI(city)}`;
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
              <Button className={css.goButton} filled type="submit">Найти обьявления</Button>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
}

export default SearchLine;
