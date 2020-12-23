import { Link } from 'react-router-dom';

function Home (props) {
  return (
    <h1>
      <Link to="/pokemon">
        See all Pokemon!
      </Link>
    </h1>
  );
}

export default Home
