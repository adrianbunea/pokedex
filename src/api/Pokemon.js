import Cache from './Cache';

async function getAll() {
  const endpointUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const cache = await Cache.getInstance();
  await cache.add(endpointUrl);
  const pokemonResponse = await cache.match(endpointUrl);
  return await pokemonResponse.json();
}

const Pokemon = { getAll };

export default Pokemon;
