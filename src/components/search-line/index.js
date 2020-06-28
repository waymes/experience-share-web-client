import { useRouter } from 'next/router';
import { Form } from 'react-final-form';
import css from './search-line.module.sass';
import Input from '../input';
import Button from '../button';
import { routes } from '../../constants';

function SearchLine() {
  const router = useRouter();
  const initialValues = {
    skill: router.query.skill || null,
    location: router.query.location || null,
  };
  const onSubmit = ({ skill, location }) => {
    let search = '';
    if (skill) search += `skill=${encodeURI(skill)}`;
    if (location) search += `&location=${encodeURI(location)}`;
    router.push(`${routes.search}?${search}`);
  };
  return (
    <div className={css.root}>
      <div className={css.container}>
        <h2 className={css.title}>Каждый день - это новая возможность изучить что-то новое</h2>
        <Form onSubmit={onSubmit} initialValues={initialValues}>
          {({ handleSubmit }) => (
            <form className={css.searchForm} onSubmit={handleSubmit}>
              <Input name="skill" className={css.skillInput} placeholder="Навык, который вы хотите приобрести" />
              <Input name="location" className={css.locationInput} placeholder="Город" />
              <Button className={css.goButton} filled type="submit">Найти обьявления</Button>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
}

export default SearchLine;
