import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/" title="Main page">
        Main page
      </Link>
    </div>
  );
}

export default NotFound;
