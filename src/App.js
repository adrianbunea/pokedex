import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import PokemonDetails from './pages/PokemonDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pokemon/:id/">
          <PokemonDetails />
        </Route>
        <Route path="/pokemon">
          <Pokemon />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
