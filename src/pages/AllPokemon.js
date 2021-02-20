import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Resource from '../api/Resource.js';
import Pokemon from '../api/Pokemon.js';

function AllPokemon (props) {
  const [ pokemons, setPokemons ] = useState(undefined);

  async function getPokemon() {
    const pokemons = await Pokemon.getAll('pokemon');
    setPokemons(pokemons);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  const pokemonList = pokemons?.results.map((pokemon) => {
    const path = Resource.getPath(pokemon.url);

    return (
      <li key={path}>
        <Link to={path}>
          {pokemon.name}
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
