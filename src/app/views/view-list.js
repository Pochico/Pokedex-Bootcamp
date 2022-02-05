import { formatUrlName, formatUrlType } from "../utils/list-view-functions";
import { fetchPokemonList } from "./../api/call-to-api-list";
import { displayPokemonDetail } from "./view-detail";

let offset = 0;

document.querySelector(".shiny-switch").addEventListener("change", (e) => {
  if (e.target.value == "on") {
    e.target.value = "off";
  } else {
    e.target.value = "on";
  }

  displayPokemonList();
});

const displayPokemonList = async (event, offsetParam = 0) => {
  offset = offsetParam;
  const pokedexDetail = document.querySelector(".pokedex-detail");

  const pokedex = document.getElementById("pokedex");
  if (offsetParam === 0) {
    pokedex.innerHTML = "";
    pokedexDetail.innerHTML = "";
  }
  const pokemonList = await fetchPokemonList(offsetParam);

  pokemonList.forEach((pokemonItem) => {
    const li = document.createElement("li");
    li.addEventListener("click", () => displayPokemonDetail(li.id));
    li.id = pokemonItem.id;
    
    //  li.innerHTML =
    //    '<div id="favor' + pokemonItem.id + '" class="favor">❤</div>';

    li.classList.add("list-card");
    li.classList.add("card-size");
    const whiteBg = document.createElement("div");
    whiteBg.classList.add("white-bg");

    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("empty-div");
    whiteBg.appendChild(emptyDiv);

    // document
    // .querySelector("favor" + pokemonItem.id)
    // .addEventListener("click", (ev) => {
    //   ev.target.style.color = "rgb(255, 145, 224)";
    // });

    const pokeImg = document.createElement("img");
    pokeImg.src = `https://projectpokemon.org/images/${formatUrlType()}-sprite/${formatUrlName(
      pokemonItem.name
    )}.gif`;

    console.log(pokeImg.src);

    whiteBg.appendChild(pokeImg);

    const pokeId = document.createElement("p");
    pokeId.innerHTML = pokemonItem.id;

    const pokemonName = document.createElement("h3");
    pokemonName.innerHTML = pokemonItem.name;
    whiteBg.appendChild(pokemonName);

    li.appendChild(whiteBg);
    pokedex.appendChild(li);

  });
};

const handleScroll = (event) => {
  if (
    Math.ceil(window.scrollY) >=
    Math.ceil(document.querySelector("body").scrollHeight - window.innerHeight)
  ) {
    offset += 50;
    if (
      document.getElementById("pokedex").childElementCount > 1 &&
      offset < 450
    ) {
      displayPokemonList(event, offset);
    }
  }
};

export { displayPokemonList, handleScroll };
