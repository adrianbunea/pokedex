import { useContext, useEffect, useState } from 'react';
import CacheContext from './index';

function App() {
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
  }, []);

  const pokemonList = pokemons?.results.map((pokemon) => {
    return (
      <li key={pokemon.url}>{pokemon.name}</li>
    )
  });

  return (
    <ul>
      {pokemonList}
    </ul>
  );
}

export default App;
