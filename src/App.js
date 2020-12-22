import { useContext, useEffect, useState } from 'react';
import CacheContext from './index';

function App() {
  const cache = useContext(CacheContext);
  const [ pokemons, setPokemons ] = useState(undefined);

  useEffect(async () => {
    getPokemon(cache).then((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  const pokemonList = pokemons?.results.map((pokemon) => {
    return (
      <li>{pokemon.name}</li>
    )
  });

  return (
    <ul>
      {pokemonList}
    </ul>
  );
}

async function getPokemon(cache) {
  const endpointUrl = 'https://pokeapi.co/api/v2/pokemon/';
  await cache.add(endpointUrl);
  const pokemonResponse = await cache.match(endpointUrl);
  return pokemonResponse.json();
}

export default App;
