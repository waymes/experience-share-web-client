import ErrorPage from 'next/error';
import NotFoundPage from '../pages-lib/not-found';

function Error({ statusCode }) {
  if (statusCode === 404) {
    return <NotFoundPage />;
  }
  return <ErrorPage statusCode={statusCode} />;
}

Error.getInitialProps = ({ res, err }) => {
  let statusCode = 404;

  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  }

  return { statusCode };
};

export default Error;
