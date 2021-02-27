import Cache from './Cache';
import Resource from './Resource';

const endpointUrl = 'https://pokeapi.co/api/v2/pokemon/';

async function getAll() {
  let response = await Cache.match(endpointUrl);

  if (response) {
    return await handleResponse(response);
  } else {
    response = await fetch(endpointUrl);
    return await handleResponse(response);
  }
}

async function handleResponse(response) {
  if (response.ok) {
    Cache.put(endpointUrl, response.clone());
    const json = await response.json();
    return Resource.success(json);
  } else {
    return Resource.failure(response);
  }
}

const Pokemon = { getAll };

export default Pokemon;
