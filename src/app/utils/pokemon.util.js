class PokemonUtil {
	constructor(){ }
	static handleError (error) {
		const pokemonHTMLStringError = 
		`<div class="">
			<p class=""> Error: Hubo un problema con la petición Fetch - ${error.message}</p>
		</div>`
		document.getElementById('pokedex').innerHTML = pokemonHTMLStringError;
	}
	static tooglePokeLoader() {
		document.getElementById('loader').classList.toggle('is-hidden');
	}
	// static randomizer ()
}

export {PokemonUtil};