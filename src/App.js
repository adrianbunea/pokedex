import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import AllPokemon from './pages/AllPokemon';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pokemon/:id/">
          <AllPokemon />
        </Route>
        <Route path="/pokemon">
          <AllPokemon />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
