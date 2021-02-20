import Cache from './Cache';

async function getAll() {
  const endpointUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const cache = await Cache.getInstance();
  // https://developer.mozilla.org/en-US/docs/Web/API/Cache#methods
  // First it gets the cache instance (at this point the cache has been created
  // so it should be instant
  await cache.add(endpointUrl);
  // 'add()' retrieves the result of the request, and saves it to the Cache, if
  // this is the first time the request is made, it gets sent to the API server.
  // If the request was cached already then this operation effectively does
  // nothing.
  const pokemonResponse = await cache.match(endpointUrl);
  // 'match()' looks for the response associated with the request made to this
  // url, if it doesn't find it it throws an error.
  const pokemonJson = await pokemonResponse.json();
  // The response contains a lot of things: the request headers it was sent, the
  // response headers it sent back, maybe the body it received, and its response
  // in the shape of a JSON. 'json()' retrieves the JSON body of the reponse.
  return pokemonJson.results;
  // The JSON contains the results (actual pokemons), how many pokemon there are,
  // how to retrieve the next batch of pokemons (they are paginated). Log the
  // JSON to the console to see what exactly it contains and what you might need.
}

const Pokemon = { getAll };

export default Pokemon;
