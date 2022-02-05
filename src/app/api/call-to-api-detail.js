import { PokemonUtil } from "../utils/pokemon.util";

const fetchPokemonDetail = async (pokeNameId) => {
  PokemonUtil.tooglePokeLoader();
  const endPoint = `https://pokeapi.co/api/v2/pokemon/${pokeNameId}/`;
  const pokemonDetailRequest = await fetch(endPoint).catch((error) =>
    console.log(error)
  );

  if (pokemonDetailRequest.status !== 200) {
    PokemonUtil.handleError({ message: "Error" });
    PokemonUtil.tooglePokeLoader();
    return Promise.reject;
  }
  const pokemonDetailAnswer = await pokemonDetailRequest.json();
  console.log(pokemonDetailAnswer);

  let pokemonData = {
    name: pokemonDetailAnswer.name,
    image: pokemonDetailAnswer.sprites.other.dream_world.front_default,
    type: pokemonDetailAnswer.types.map((element) => element.type.name),
    id: pokemonDetailAnswer.id,
    attack: pokemonDetailAnswer.abilities,
    baseExperience: pokemonDetailAnswer.base_experience,
  };

  PokemonUtil.tooglePokeLoader();
  return pokemonData;
};

export { fetchPokemonDetail };
