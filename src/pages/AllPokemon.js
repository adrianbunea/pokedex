import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Resource from '../api/Resource.js';
import Pokemon from '../api/Pokemon.js';

function AllPokemon (props) {
  const [ pokemons, setPokemons ] = useState([]);

  async function getPokemon() {
    const pokemons = await Pokemon.getAll();
    setPokemons(pokemons);
  }

  // Fetching from the API is an asynchronous operation, but useEffect expects
  // a synchronous function, people on the Internets recommended defining an
  // async function and using it inside useEffect as is to avoid this problem.

  useEffect(() => {
    getPokemon();
  }, []);
  // useEffect expects a function telling it what to do, and a list of variables
  // (aka Dependencies) that will trigger that action when they get changed.
  // Passing no dependencies is different from an empty array. No dependencies
  // means the effect will run when the state changes, an empty array means
  // the effect will run once when the component added on the page, otherwise
  // we would get stuck in an infinite loop: we fetch the pokemon -> the pokemon
  // list gets changed -> a new effect needs to run -> we fetch the pokemon ->
  // the pokemon list gets changed -> a new effect needs to run -> etc. 

  const pokemonList = pokemons.map((pokemon) => {
    const path = Resource.getPath(pokemon.url);

    // https://reactrouter.com/web/api/Link
    // 'to' represents what value the address bar will receive when this item
    // is clicked, you can make it whatever you like, I just chose to follow
    // the API scheme.
    return (
      <li key={path}>
        <Link to={path}>
          TODO
        </Link>
      </li>
    )
  });

  return (
    <ul>
      {pokemonList}
    </ul>
  );
}

export default AllPokemon;
