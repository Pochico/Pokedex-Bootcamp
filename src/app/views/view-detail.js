import { fetchPokemonDetail } from "../api/call-to-api-detail";
import { PokemonDetailClass } from "../models/pokemon";
import { typeColors } from "../utils/type_colors";

const displayPokemonDetail = async (id) => {
  const pokedex = document.querySelector("#pokedex");
  const pokedexDetail = document.querySelector(".pokedex-detail");
  pokedex.innerHTML = "";

  if (id != "") {
    const pokemon = await fetchPokemonDetail(id);

    const pokemonDetail = new PokemonDetailClass(
      pokemon.id,
      pokemon.name,
      pokemon.image,
      pokemon.type,
      pokemon.attack
    );

    const pokeAttacks = pokemonDetail.getPokemonAttacks();
    let attackStrings = "";

    for (let index = 0; index < pokeAttacks.length; index++) {
      attackStrings += `<div>${index + 1} - ${
        pokeAttacks[index].ability.name
      }</div>`;
    }

    var animatedGradient= pokemonDetail.type.length > 1
    ? `linear-gradient(
    311deg, 
    ${typeColors.get(pokemonDetail.type[0])}, 
    ${typeColors.get(pokemonDetail.type[1])}, 
    ${typeColors.get(pokemonDetail.type[0])}, 
    ${typeColors.get(pokemonDetail.type[1])})
    `
    :  `linear-gradient(
      311deg, 
      ${typeColors.get(pokemonDetail.type[0])}, 
      rgba(255,255,255,.2), 
      ${typeColors.get(pokemonDetail.type[0])}, 
      rgba(255,255,255,.2))
     ` ;

    const pokemonDetailHTML = `
      <div class="pokemon-frame">
        <div class="opac">
          <div class="detail-card animation-class" style="background: ${animatedGradient}; background-size: 800%
            ">
            <div class="white-bg">
              <img class="" src="${pokemonDetail.image}" style="animation-delay: ${id%6}s;"/>
            </div>
          </div>
        </div>
        <div class="pokeDatos">
          <h2>${pokemonDetail.name}</h2>
          <p>Type: ${pokemonDetail.type.join(", ")}</p>
          <h2>Attacks:</h2>
          <p>${attackStrings}</p>
          <p class="data-pokemon-id">${pokemonDetail.id}</p>
        </div>
      </div>`
      ;

    pokedexDetail.innerHTML += pokemonDetailHTML;

  } else {
    alert("Plorfi pon el number o el nombre del pokemon");
  }
};

export { displayPokemonDetail };
