import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CacheContext from "../index";

function Pokemon (props) {
  const cache = useContext(CacheContext);
  const [ pokemons, setPokemons ] = useState(undefined);

  useEffect(() => {
    async function getPokemon(cache) {
      const endpointUrl = 'https://pokeapi.co/api/v2/pokemon/';
      await cache.add(endpointUrl);
      const pokemonResponse = await cache.match(endpointUrl);
      const pokemons = await pokemonResponse.json();
      setPokemons(pokemons);
    }

    getPokemon(cache);
  }, [ cache ]);

  const pokemonList = pokemons?.results.map((pokemon) => {
    const path = pokemon.url.split('v2')[1];
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

export default Pokemon;
