import css from './search-result.module.sass';

function SearchResult({ result }) {
  const { title, author, description } = result;
  const authorName = `${author.firstName} ${author.lastName}`;
  return (
    <div className={css.container}>
      <h3 className={css.title}>{title}</h3>
      <div className={css.authorName}>{authorName}</div>
      <p className={css.description}>{description}</p>
    </div>
  );
}

export default SearchResult;
