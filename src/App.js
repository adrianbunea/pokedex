import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import AllPokemon from './pages/AllPokemon';
import PokemonDetails from './pages/PokemonDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemon/" component={AllPokemon} />
        <Route exact path="/pokemon/:id/" component={PokemonDetails} />
      </Switch>
    </Router>
  );
}

export default App;
