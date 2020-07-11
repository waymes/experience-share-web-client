import Rating from '../rating';
import css from './review-block.module.sass';

function ReviewBlock({ review }) {
  return (
    <div className={css.root}>
      <h5 className={css.name}>{review.name}</h5>
      <Rating readonly initialRating={4} />
      <p className={css.text}>{review.review}</p>
    </div>
  );
}

export default ReviewBlock;
