import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Resource from '../api/Resource';
import Pokemon from '../api/Pokemon';
import RequestStatus from '../api/RequestStatus';

function AllPokemon (_) {
  const [ pokemons, setPokemons ] = useState(Resource.notAsked());

  useEffect(() => {
    setPokemons(Resource.loading());
    Pokemon.getAll()
      .then(setPokemons)
      .catch(setPokemons);
  }, []);

  switch (pokemons.status) {
    case RequestStatus.NOT_ASKED: return notAsked()
    case RequestStatus.LOADING: return loading()
    case RequestStatus.FAILURE: return failure(pokemons.data)
    case RequestStatus.SUCCESS: return success(pokemons.data)
  }
}

function notAsked() {
  return (
    <h1>Not asked for any pokemons!</h1>
  );
}

function loading() {
  return (
    <h1>Fetching your pokemon!</h1>
  );
}

function failure(error) {
  return (
    <h1>{error.status + " " + error.statusText}</h1>
  );
}

function success(pokemons) {
  const pokemonList = pokemons.results.map((pokemon) => {
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
