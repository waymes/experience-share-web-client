import ReactRating from 'react-rating';

function Rating({ ...other }) {
  return (
    <ReactRating
      emptySymbol={<i className="icon-star-empty" />}
      fullSymbol={<i className="icon-star-full" />}
      {...other}
    />
  );
}

export default Rating;
