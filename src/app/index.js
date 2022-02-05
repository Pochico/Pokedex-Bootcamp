import { displayPokemonList, handleScroll } from "./views/view-list";
import { displayPokemonDetail } from "./views/view-detail";

import "./styles/styles.scss";
import "bootstrap";

const pokeName = document.querySelector("#pokeName");
const btnRandom = document.querySelector("#randomPokemon");
const btnTeam = document.querySelector("#randomTeam");
const btnFinder = document.querySelector("#pokeFinder");
const btnClear = document.querySelector("#clearPokedex");

const pokedexContainer = document.querySelector(".pokedex-detail");

const addListeners = () => {
  document
    .querySelector("#allPokemons")
    .addEventListener("click", displayPokemonList);
  btnFinder.addEventListener("click", () =>
    displayPokemonDetail(pokeName.value.toLowerCase())
  );
  document.querySelector("body").onscroll = handleScroll;
  btnRandom.addEventListener("click", () =>
    displayPokemonDetail(Math.ceil(Math.random() * (450 - 1) + 1))
  );
  btnTeam.addEventListener("click", () => {
    pokedexContainer.innerHTML = "";
    for (let i = 0; i < 6; i++) {
      displayPokemonDetail(Math.ceil(Math.random() * (450 - 1) + 1));
    }
  });

  btnClear.addEventListener("click", () => {
    pokedexContainer.innerHTML = "";
    document.querySelector("#pokedex").innerHTML = "";
  });

  btnRandom.addEventListener("mouseover", () => {
    document.querySelector(".pokeball-button--ultra").style.animationName =
      "shake, blink";
  });
  btnTeam.addEventListener("mouseover", () => {
    document.querySelector(".pokeball-button--great").style.animationName =
      "shake, blink";
  });
  btnClear.addEventListener("mouseover", () => {
    document.querySelector(".pokeball-button--normal").style.animationName =
      "shake, blink";
  });
  btnRandom.addEventListener("animationend", () => {
    document.querySelector(".pokeball-button--ultra").style.animationName = "";
  });
  btnTeam.addEventListener("animationend", () => {
    document.querySelector(".pokeball-button--great").style.animationName = "";
  });
  btnClear.addEventListener("animationend", () => {
    document.querySelector(".pokeball-button--normal").style.animationName = "";
  });

  btnFinder.addEventListener("click", () => {
    btnFinder.firstChild.style.animationName = "searchBall";
    pokeName.style.color = "white";
    setTimeout(() => {
      pokeName.value = "";
      pokeName.style.color = "black";
    }, 1500);
  });
  btnFinder.firstChild.addEventListener("animationend", () => {
    btnFinder.firstChild.style.animationName = "";
  });
};

window.onload = () => {
  addListeners();
};
