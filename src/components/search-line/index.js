import css from './search-line.module.sass';
import Input from '../input';
import Button from '../button';

function SearchLine() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Каждый день - это новая возможность изучить что-то новое</h2>
      <div className={css.searchBar}>
        <Input className={css.skillInput} placeholder="Навык" />
        <Input className={css.locationInput} placeholder="Город" />
        <Button className={css.goButton} filled>Найти обьявления</Button>
      </div>
    </div>
  );
}

export default SearchLine;
